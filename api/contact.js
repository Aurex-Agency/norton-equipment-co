// Vercel serverless function: receives website form submissions and emails
// them to the address in FORM_TO. Returns 503 when RESEND_API_KEY is absent,
// which the client treats as a signal to fall back to the visitor's mail app
// rather than dead-ending, so a missing key never silently swallows a lead.
// Comma-separated list. Every website submission goes to all of these.
const TO = (process.env.FORM_TO || 'hillary@nortonequipmentco.com,service@nortonequipmentco.com')
  .split(',').map((s) => s.trim()).filter(Boolean);
// Must be on a domain verified in Resend. support.nortonequipmentco.com is the
// verified sender; the apex domain is not, and Resend rejects sends from it.
// Replies go to the submitter via reply_to, not to this address.
const FROM = process.env.FORM_FROM || 'Norton Equipment Website <website@support.nortonequipmentco.com>';

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

  // Send multipart. An HTML-only body is a mild spam signal, and plain text is
  // what shows in notification previews on a phone.
  const text =
    'New submission from the Norton Equipment website.\n\n' +
    Object.entries(body)
      .filter(([k, v]) => k !== 'bot-field' && k !== 'form-name' && k !== '_subject' && String(v).trim())
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        subject,
        html,
        text,
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
    // Resend returns 200 on acceptance, not on delivery. Echo the message id so
    // a specific send can be traced in the Resend dashboard when a recipient
    // says nothing arrived.
    const out = await r.json().catch(() => ({}));
    if (out && out.id) console.log('Resend accepted', out.id, '->', TO.join(', '));
    return res.status(200).json({ ok: true, id: out && out.id ? out.id : null });
  } catch (err) {
    console.error('Contact handler failed', err);
    return res.status(502).json({ error: 'Delivery failed' });
  }
}
