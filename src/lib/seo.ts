import { ADDRESS, COMPANY, GEO, GOOGLE, HOURS, PHONE_TEL, SITE_URL, SOCIAL } from '../config'

const DAY_SCHEMA = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const HOME_TITLE = 'Reino da Borracha | Correias, Mangueiras, Lonas e EPIs em Goiânia'
export const HOME_DESCRIPTION =
  'Correias, mangueiras, lonas e EPIs em Goiânia há mais de 25 anos. Distribuidora oficial Continental. Peça seu orçamento pelo WhatsApp.'

/** Dados estruturados (JSON-LD) do tipo Store para o Google */
export function storeJsonLd() {
  // Agrupa dias com o mesmo horário
  const groups = new Map<string, string[]>()
  HOURS.forEach((h, d) => {
    if (!h) return
    const key = `${h.open}-${h.close}`
    groups.set(key, [...(groups.get(key) ?? []), DAY_SCHEMA[d]])
  })
  const openingHoursSpecification = [...groups.entries()].map(([key, days]) => {
    const [opens, closes] = key.split('-')
    return { '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens, closes }
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    '@id': `${SITE_URL}/#loja`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    taxID: COMPANY.cnpj,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo-reino-da-borracha.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description: HOME_DESCRIPTION,
    telephone: PHONE_TEL.replace('tel:', ''),
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: 'BR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
    hasMap: GOOGLE.reviewsUrl,
    openingHoursSpecification,
    sameAs: Object.values(SOCIAL),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE.rating,
      reviewCount: GOOGLE.reviewCount,
      bestRating: 5,
    },
    areaServed: ['Goiânia', 'Região Metropolitana de Goiânia', 'Goiás', 'Centro-Oeste'],
  }
}
