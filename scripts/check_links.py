#!/usr/bin/env python3
"""Проверка внутренних ссылок и якорей в Markdown-файлах (правила якорей GitHub).

Запуск из корня репозитория: python3 scripts/check_links.py
"""
import os, re, sys, unicodedata, glob

ROOT = sys.argv[1] if len(sys.argv) > 1 else '.'

def slugify(text):
    # strip markdown: links, code, emphasis, html tags
    text = re.sub(r'!\[([^\]]*)\]\([^)]*\)', r'\1', text)
    text = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = text.replace('`', '').replace('*', '').replace('~', '')
    text = text.strip().lower()
    out = []
    for ch in text:
        cat = unicodedata.category(ch)
        if ch in (' ', '-', '_'):
            out.append('-' if ch == ' ' else ch)
        elif cat[0] in ('L', 'N') or cat == 'Mn' or cat == 'Mc':
            out.append(ch)
        # everything else (punctuation, symbols, emoji) dropped
    return ''.join(out)

def anchors_of(path):
    anchors, counts = set(), {}
    in_code = False
    with open(path, encoding='utf-8') as f:
        for line in f:
            if line.lstrip().startswith('```'):
                in_code = not in_code
                continue
            if in_code:
                continue
            m = re.match(r'^(#{1,6})\s+(.*?)\s*#*\s*$', line)
            if m:
                s = slugify(m.group(2))
                n = counts.get(s, 0)
                anchors.add(s if n == 0 else f'{s}-{n}')
                counts[s] = n + 1
            for a in re.findall(r'<a\s+(?:name|id)="([^"]+)"', line):
                anchors.add(a)
    return anchors

files = sorted(
    f for f in glob.glob(os.path.join(ROOT, '**', '*.md'), recursive=True)
    if not {'.git', 'node_modules'} & set(f.replace(os.sep, '/').split('/'))
)
cache = {}
errors = 0
link_re = re.compile(r'(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)')
for path in files:
    in_code = False
    with open(path, encoding='utf-8') as f:
        for lineno, line in enumerate(f, 1):
            if line.lstrip().startswith('```'):
                in_code = not in_code
                continue
            if in_code:
                continue
            for target in link_re.findall(line):
                if re.match(r'^[a-z]+:', target):
                    continue
                file_part, _, anchor = target.partition('#')
                tgt = os.path.normpath(os.path.join(os.path.dirname(path), file_part)) if file_part else path
                if not os.path.exists(tgt):
                    print(f'{os.path.relpath(path, ROOT)}:{lineno}: missing file -> {target}')
                    errors += 1
                    continue
                if anchor and tgt.endswith('.md'):
                    if tgt not in cache:
                        cache[tgt] = anchors_of(tgt)
                    from urllib.parse import unquote
                    if unquote(anchor) not in cache[tgt]:
                        print(f'{os.path.relpath(path, ROOT)}:{lineno}: missing anchor -> {target}')
                        errors += 1
print(f'checked {len(files)} files, {errors} problems')
sys.exit(1 if errors else 0)
