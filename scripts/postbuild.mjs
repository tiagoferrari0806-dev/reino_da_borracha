// Ajustes finais no HTML gerado (rodam depois do vite-react-ssg build):
// 1. <meta charset> e viewport no início do <head> (charset nos primeiros 1024 bytes);
// 2. remove o pré-carregamento de fontes que o gerador adiciona (inclusive cirílico/
//    vietnamita): as fontes usam font-display: swap e não podem competir com a logo;
// 3. embute o CSS inteiro no HTML (~8 KB comprimido): uma única passada de estilo,
//    sem folha externa chegando depois e recalculando a página;
// 4. carrega o React só quando a pessoa interage (rolar, tocar, teclar) ou 1,2 s após
//    o carregamento. O HTML já vem completo: textos, links e botões de WhatsApp
//    funcionam sem JS, e a animação de entrada está em um script no index.html.
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

const loader = (src) =>
  `<script>(function(){var done=false,ev=['scroll','pointerdown','touchstart','keydown','mousemove'];` +
  `function go(){if(done)return;done=true;ev.forEach(function(n){removeEventListener(n,go,true)});` +
  `var s=document.createElement('script');s.type='module';s.src='${src}';document.head.appendChild(s)}` +
  `ev.forEach(function(n){addEventListener(n,go,{capture:true,passive:true,once:true})});` +
  `function later(){setTimeout(go,1200)}` +
  `if(document.readyState==='complete')later();else addEventListener('load',later)})()</script>`

for await (const file of htmlFiles(DIST)) {
  let html = await fs.readFile(file, 'utf8')

  for (const tag of FIRST) html = html.replace(tag, '')
  html = html.replace('<head>', `<head>${FIRST.join('')}`)

  html = html.replace(/<link rel="preload" as="font"[^>]*>\s*/g, '')
  html = html.replace(/<link rel="preload"[^>]*as="style"[^>]*>\s*/g, '')

  const cssLinks = [...html.matchAll(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/g)]
  if (!cssLinks.length) throw new Error(`postbuild: CSS não encontrado em ${file}`)
  for (const [tag, href] of cssLinks) {
    const css = await fs.readFile(path.join(DIST, href), 'utf8')
    html = html.replace(tag, () => `<style>${css}</style>`)
  }

  // Pré-carrega só as duas fontes latinas realmente usadas, para chegarem antes
  // da primeira montagem da página (evita recalcular o layout quando trocam).
  const fonts = [
    ...new Set(html.match(/\/assets\/(?:dm-serif-display-latin-400-normal|montserrat-latin-wght-normal)-[\w-]+\.woff2/g) ?? []),
  ]
  html = html.replace(
    FIRST.join(''),
    () => FIRST.join('') + fonts.map((f) => `<link rel="preload" as="font" type="font/woff2" href="${f}" crossorigin>`).join(''),
  )

  const script = html.match(/<script type="module"[^>]*src="(\/assets\/[^"]+\.js)"[^>]*><\/script>/)
  if (!script) throw new Error(`postbuild: script do app não encontrado em ${file}`)
  html = html.replace(script[0], () => loader(script[1]))

  await fs.writeFile(file, html)
  console.log('postbuild:', path.relative(DIST, file), `${(html.length / 1024).toFixed(0)} KB`)
}
