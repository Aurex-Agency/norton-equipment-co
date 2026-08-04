// Vercel serverless function: receives website form submissions and emails
// them to the address in FORM_TO. Runs only when RESEND_API_KEY is set; the
// build leaves the form on its mailto fallback until then, so a missing key
// can never silently swallow a lead.
const TO = process.env.FORM_TO || 'hillary@nortonequipmentco.com';
const FROM = process.env.FORM_FROM || 'Norton Equipment Website <website@nortonequipmentco.com>';

const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(503).json({ error: 'Form delivery is not configured' });

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { return res.status(400).json({ error: 'Bad payload' }); }
  }
  if (!body || typeof body !== 'object') return res.status(400).json({ error: 'Bad payload' });

  // Honeypot: bots fill hidden fields, humans do not.
  if (body['bot-field']) return res.status(200).json({ ok: true });

  const name = String(body.Name || '').trim();
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const subject = String(body._subject || 'Website Enquiry - Norton Equipment')
    .slice(0, 150);
  const replyTo = String(body.Email || '').trim();

  const rows = Object.entries(body)
    .filter(([k, v]) => k !== 'bot-field' && k !== 'form-name' && k !== '_subject' && String(v).trim())
    .map(([k, v]) =>
      `<tr><td style="padding:6px 14px 6px 0;color:#666;white-space:nowrap;vertical-align:top">${esc(k)}</td>` +
      `<td style="padding:6px 0"><strong>${esc(v).replace(/\n/g, '<br>')}</strong></td></tr>`)
    .join('');

  const html =
    `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:15px;color:#111">` +
    `<p style="margin:0 0 14px">New submission from the Norton Equipment website.</p>` +
    `<table style="border-collapse:collapse">${rows}</table></div>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        subject,
        html,
        ...(replyTo && /.+@.+\..+/.test(replyTo) ? { reply_to: replyTo } : {}),
      }),
    });
    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('Resend error', r.status, detail);
      // Surface the upstream status only. It is not sensitive and it is the
      // difference between "key is wrong" (401) and "domain not verified" (403).
      return res.status(502).json({ error: 'Delivery failed', upstream: r.status });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact handler failed', err);
    return res.status(502).json({ error: 'Delivery failed' });
  }
}
