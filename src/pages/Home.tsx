import { Head } from 'vite-react-ssg'
import { SITE_URL } from '../config'
import { HOME_DESCRIPTION, HOME_TITLE, storeJsonLd } from '../lib/seo'
import images from '../generated/images.json'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Continental from '../sections/Continental'
import HoseAssembly from '../sections/HoseAssembly'
import ProductTree from '../sections/ProductTree'
import Structure from '../sections/Structure'
import Solutions from '../sections/Solutions'
import Reviews from '../sections/Reviews'
import Contact from '../sections/Contact'

const logoAvif = images.logo.avif

export default function Home() {
  return (
    <>
      <Head>
        <title>{HOME_TITLE}</title>
        <meta name="description" content={HOME_DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Reino da Borracha" />
        <meta property="og:title" content={HOME_TITLE} />
        <meta property="og:description" content={HOME_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fachada da Reino da Borracha em Goiânia com a logo da loja" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={HOME_TITLE} />
        <meta name="twitter:description" content={HOME_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
        <link
          rel="preload"
          as="image"
          type="image/avif"
          imageSrcSet={logoAvif.map((i) => `${i.src} ${i.w}w`).join(', ')}
          imageSizes="(min-width: 640px) 320px, 240px"
          fetchPriority="high"
        />
        {/* "$" escapado como \u0024: o gerador de HTML trata "$$" como padrão especial */}
        <script type="application/ld+json">{JSON.stringify(storeJsonLd()).replace(/\$/g, '\\u0024')}</script>
      </Head>
      <Hero />
      <About />
      <Continental />
      <HoseAssembly />
      <ProductTree />
      <Structure />
      <Solutions />
      <Reviews />
      <Contact />
    </>
  )
}
