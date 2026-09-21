#!/usr/bin/env python3
"""Check built output without dependencies, network calls, or writes."""
import collections
import html
import json
from html.parser import HTMLParser
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://nortonequipmentco.com'


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.links = []
        self.assets = []
        self.h1 = 0
        self.meta = {}
        self.canonical = []
        self.titles = []
        self.schemas = []
        self.visible = []
        self.in_title = False
        self.in_script = False
        self.json_script = False
        self.script = ''
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'):
            self.ids.append(a['id'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'title':
            self.in_title = True
            self.titles.append('')
        if tag == 'meta':
            self.meta[a.get('name', a.get('property', ''))] = a.get('content', '')
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical.append(a.get('href'))
        if tag == 'a' and a.get('href'):
            self.links.append(a['href'])
        if tag in ('img', 'script') and a.get('src'):
            self.assets.append(a['src'])
        if tag == 'img' and 'alt' not in a:
            raise AssertionError('Image missing alt attribute')
        if tag == 'script':
            self.in_script = True
            self.json_script = a.get('type') == 'application/ld+json'
            self.script = ''

    def handle_data(self, data):
        if self.in_title:
            self.titles[-1] += data
        elif self.in_script:
            self.script += data
        else:
            self.visible.append(data)

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag == 'script':
            if self.json_script:
                self.schemas.extend(json.loads(self.script)['@graph'])
            self.in_script = False
            self.json_script = False


def normalized(text):
    text = ' '.join(html.unescape(re.sub(r'<[^>]*>', '', text)).split())
    return re.sub(r'\s+([,.;:!?])', r'\1', text)


def main():
    sitemap = ET.parse(ROOT / 'sitemap.xml').getroot()
    urls = [n.find('{*}loc').text for n in sitemap]
    assert len(urls) == len(set(urls)), 'Duplicate sitemap URLs'
    redirects = {r['source']: r['destination'] for r in json.loads((ROOT / 'vercel.json').read_text())['redirects'] if ':' not in r['source']}
    pages = {}
    failures = []
    def check(condition, message):
        if not condition:
            failures.append(message)
    for url in urls:
        path = urlsplit(url).path
        file = ROOT / path.lstrip('/') / 'index.html'
        check(file.is_file(), 'Missing sitemap target: ' + path)
        if not file.is_file():
            continue
        try:
            page = Page(file.read_text())
        except (ValueError, AssertionError) as e:
            failures.append(path + ': ' + str(e))
            continue
        pages[path] = page
        check(page.canonical == [url], 'Canonical mismatch: ' + path)
        check(page.h1 == 1, 'Expected one H1: ' + path)
        check(len(page.titles) == 1 and bool(page.titles[0]), 'Missing title: ' + path)
        check(bool(page.meta.get('description')), 'Missing description: ' + path)
        check('noindex' not in page.meta.get('robots', ''), 'Production noindex: ' + path)
        check(page.meta.get('og:url') == url, 'Open Graph URL mismatch: ' + path)
        check(len(page.ids) == len(set(page.ids)), 'Duplicate IDs: ' + path)
        types = [n['@type'] for n in page.schemas]
        check('WebPage' in types and 'WebSite' in types and 'LocalBusiness' in types, 'Missing entity schema: ' + path)
        graph_ids = [n['@id'] for n in page.schemas if '@id' in n]
        check(len(graph_ids) == len(set(graph_ids)), 'Duplicate schema IDs: ' + path)
        visible = normalized(' '.join(page.visible))
        for node in page.schemas:
            if node['@type'] == 'FAQPage':
                for faq in node['mainEntity']:
                    check(normalized(faq['name']) in visible, 'Invisible FAQ question: ' + path + ' ' + faq['name'])
                    check(normalized(faq['acceptedAnswer']['text']) in visible, 'Invisible FAQ answer: ' + path + ' ' + faq['name'])
            if node['@type'] == 'BlogPosting':
                check(node.get('image') and node.get('author') and node.get('datePublished'), 'Missing article fields: ' + path)
                check(node.get('mainEntityOfPage') == {'@id': url + '#webpage'}, 'Article entity mismatch: ' + path)
    for field in ('titles', 'description'):
        groups = collections.defaultdict(list)
        for path, page in pages.items():
            groups[page.titles[0] if field == 'titles' else page.meta[field]].append(path)
        for value, paths in groups.items():
            check(len(paths) == 1, 'Duplicate ' + field + ': ' + ', '.join(paths))
    for path, page in pages.items():
        for href in page.links + page.assets:
            u = urlsplit(href)
            if u.scheme and not href.startswith(BASE + '/'):
                continue
            if u.netloc and u.netloc != 'nortonequipmentco.com':
                continue
            target = unquote(u.path) or path
            if not target.startswith('/'):
                continue
            redirected = redirects.get(target, target)
            file = ROOT / redirected.lstrip('/')
            if file.is_dir():
                file = file / 'index.html'
            check(file.is_file(), path + ' -> missing ' + href)
            if u.fragment and redirected in pages:
                check(unquote(u.fragment) in pages[redirected].ids, path + ' -> missing fragment ' + href)
    robots = (ROOT / 'robots.txt').read_text()
    check('Allow: /' in robots and 'Disallow: /\n' not in robots, 'Production crawlers blocked')
    check('noindex' in Page((ROOT / '404.html').read_text()).meta.get('robots', ''), '404 should be noindex')
    for slug in ['commercial-baler-troubleshooting', 'used-vs-refurbished-balers', 'commercial-compactor-installation-guide']:
        path = '/blog/' + slug + '/'
        check(path in pages, 'Missing approved article: ' + path)
        if path in pages:
            check(len(pages[path].meta.get('description', '')) >= 100, 'Approved article description was over-trimmed: ' + path)
        check(any(path in p.links for key, p in pages.items() if key.startswith('/services/') or key.startswith('/balers-recycling/') or key.startswith('/trash-compactors/')), 'Article has no commercial-page inbound link: ' + path)
        check(BASE + path in (ROOT / 'llms.txt').read_text(), 'Article missing from public text index: ' + path)
    if failures:
        print('\n'.join(failures))
        sys.exit(1)
    print(f'PASS: {len(pages)} pages; unique metadata, canonical URLs, sitemap, assets, links/fragments, visible FAQs, article/entity schema, and crawler access.')


if __name__ == '__main__':
    main()
