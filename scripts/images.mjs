// Gera as versões otimizadas das fotos (AVIF + WebP em vários tamanhos),
// a imagem de compartilhamento (Open Graph) e os favicons.
// Rode com: npm run images  (só é preciso quando trocar alguma imagem em assets/)
import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const OUT = path.join(ROOT, 'public', 'img')
const PUB = path.join(ROOT, 'public')
const MANIFEST = path.join(ROOT, 'src', 'generated', 'images.json')

const PHOTO_WIDTHS = [320, 480, 680]
const LOGO_WIDTHS = [120, 240, 360, 480, 640, 848]
const NAVY = '#060d1a'

async function variants(file, key, widths) {
  const img = sharp(file)
  const { width, height } = await img.metadata()
  const ws = [...new Set(widths.filter((w) => w < width).concat(width))].sort((a, b) => a - b)
  const entry = { width, height, avif: [], webp: [] }
  for (const w of ws) {
    const base = `${key}-${w}`
    await sharp(file).resize({ width: w }).avif({ quality: 55, effort: 6 }).toFile(path.join(OUT, `${base}.avif`))
    await sharp(file).resize({ width: w }).webp({ quality: 78, effort: 6 }).toFile(path.join(OUT, `${base}.webp`))
    entry.avif.push({ w, src: `/img/${base}.avif` })
    entry.webp.push({ w, src: `/img/${base}.webp` })
  }
  return entry
}

// ICO com PNGs embutidos (formato aceito por todos os navegadores atuais)
function buildIco(pngs) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(pngs.length, 4)
  let offset = 6 + 16 * pngs.length
  const entries = pngs.map(({ size, buf }) => {
    const e = Buffer.alloc(16)
    e.writeUInt8(size >= 256 ? 0 : size, 0)
    e.writeUInt8(size >= 256 ? 0 : size, 1)
    e.writeUInt16LE(1, 4)
    e.writeUInt16LE(32, 6)
    e.writeUInt32LE(buf.length, 8)
    e.writeUInt32LE(offset, 12)
    offset += buf.length
    return e
  })
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.buf)])
}

// Logo inteira (sem recorte nem distorção) centralizada em um quadrado azul-marinho
async function squareIcon(logo, size, padRatio = 0.08) {
  const inner = Math.round(size * (1 - padRatio * 2))
  const logoBuf = await sharp(logo).resize({ width: inner, height: inner, fit: 'inside' }).png().toBuffer()
  return sharp({ create: { width: size, height: size, channels: 4, background: NAVY } })
    .composite([{ input: logoBuf, gravity: 'center' }])
    .png()
    .toBuffer()
}

async function main() {
  await fs.rm(OUT, { recursive: true, force: true })
  await fs.mkdir(OUT, { recursive: true })
  await fs.mkdir(path.dirname(MANIFEST), { recursive: true })

  const manifest = {}
  const photosDir = path.join(ROOT, 'assets', 'fotos')
  for (const f of (await fs.readdir(photosDir)).sort()) {
    const key = path.parse(f).name
    manifest[key] = await variants(path.join(photosDir, f), key, PHOTO_WIDTHS)
  }
  const logo = path.join(ROOT, 'assets', 'logo', 'logo-reino-da-borracha.png')
  manifest.logo = await variants(logo, 'logo', LOGO_WIDTHS)
  await fs.copyFile(logo, path.join(PUB, 'logo-reino-da-borracha.png'))
  await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n')

  // Open Graph 1200x630: fachada + degradê azul-marinho + logo
  const overlay = Buffer.from(
    `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#060d1a" stop-opacity=".55"/>
        <stop offset="1" stop-color="#060d1a" stop-opacity=".85"/>
      </linearGradient></defs>
      <rect width="1200" height="630" fill="url(#g)"/>
      <rect x="450" y="0" width="300" height="6" fill="#df3b39"/>
    </svg>`,
  )
  const ogLogo = await sharp(logo).resize({ width: 520 }).png().toBuffer()
  await sharp(path.join(photosDir, 'fachada-principal.webp'))
    .resize(1200, 630, { fit: 'cover' })
    .composite([{ input: overlay }, { input: ogLogo, gravity: 'center' }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(PUB, 'og-image.jpg'))

  // Favicons
  const icoPngs = []
  for (const size of [16, 32, 48]) icoPngs.push({ size, buf: await squareIcon(logo, size, 0.02) })
  await fs.writeFile(path.join(PUB, 'favicon.ico'), buildIco(icoPngs))
  await fs.writeFile(path.join(PUB, 'favicon-32.png'), await squareIcon(logo, 32, 0.02))
  await fs.writeFile(path.join(PUB, 'apple-touch-icon.png'), await squareIcon(logo, 180))
  await fs.writeFile(path.join(PUB, 'icon-192.png'), await squareIcon(logo, 192))
  await fs.writeFile(path.join(PUB, 'icon-512.png'), await squareIcon(logo, 512, 0.14))

  console.log(`OK: ${Object.keys(manifest).length} imagens, og-image.jpg e favicons gerados.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
