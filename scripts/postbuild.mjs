// Ajustes finais no HTML gerado: <meta charset> e viewport no início do <head>
// (o charset precisa estar nos primeiros 1024 bytes do arquivo).
import fs from 'node:fs/promises'
import path from 'node:path'

const DIST = path.resolve(import.meta.dirname, '..', 'dist')
const FIRST = ['<meta charset="UTF-8">', '<meta name="viewport" content="width=device-width, initial-scale=1">']

async function* htmlFiles(dir) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) yield* htmlFiles(p)
    else if (e.name.endsWith('.html')) yield p
  }
}

for await (const file of htmlFiles(DIST)) {
  let html = await fs.readFile(file, 'utf8')
  for (const tag of FIRST) html = html.replace(tag, '')
  html = html.replace('<head>', `<head>${FIRST.join('')}`)
  await fs.writeFile(file, html)
  console.log('postbuild:', path.relative(DIST, file))
}
