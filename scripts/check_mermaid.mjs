// Проверка всех блоков ```mermaid в *.md парсером mermaid.
// Установка: npm install --no-save mermaid@12 jsdom@25
// Запуск из корня репозитория: node scripts/check_mermaid.mjs .
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true })
globalThis.window = dom.window; globalThis.document = dom.window.document
const { default: mermaid } = await import('mermaid')
mermaid.initialize({ startOnLoad: false })
const root = process.argv[2] || '.'
function walk(d) { let out = []; for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (e.name === '.git' || e.name === 'node_modules') continue; const p = path.join(d, e.name); if (e.isDirectory()) out = out.concat(walk(p)); else if (p.endsWith('.md')) out.push(p) } return out }
let bad = 0, total = 0
const targets = fs.statSync(root).isFile() ? [root] : walk(root)
for (const f of targets) {
  const lines = fs.readFileSync(f, 'utf8').split('\n')
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '```mermaid') {
      const start = i + 1; const buf = []
      i++
      while (i < lines.length && lines[i].trim() !== '```') { buf.push(lines[i]); i++ }
      total++
      const src = buf.join('\n')
      try { await mermaid.parse(src) } catch (e) { bad++; console.log(`${path.relative(fs.statSync(root).isFile() ? path.dirname(root) : root, f)}:${start}: ${String(e.message).split('\n').slice(0, 3).join(' ')}`) }
      if (/\\n/.test(src)) { bad++; console.log(`${path.relative(fs.statSync(root).isFile() ? path.dirname(root) : root, f)}:${start}: literal \\n in mermaid label (use <br/>)`) }
    }
  }
}
console.log(`mermaid blocks: ${total}, problems: ${bad}`)
process.exit(bad ? 1 : 0)
