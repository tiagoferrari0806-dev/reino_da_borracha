// ============================================================
//  DADOS DA LOJA — altere aqui e o site inteiro é atualizado.
// ============================================================

export const SITE_URL = 'https://reinodaborracha.com.br'

// WhatsApp: só números, com 55 + DDD. É o único lugar onde o número fica.
export const WHATSAPP_NUMBER = '556232917200'
export const WHATSAPP_DISPLAY = '(62) 3291-7200'

export const PHONE_DISPLAY = '(62) 3291-7200'
export const PHONE_TEL = 'tel:+556232917200'

// Mensagens pré-preenchidas de cada botão de WhatsApp
export const WA_MESSAGES = {
  geral: 'Olá! Vim pelo site e gostaria de solicitar um orçamento.',
  montagem: 'Olá! Vim pelo site e gostaria de orçar a montagem de mangueira hidráulica.',
  varejo: 'Olá! Vim pelo site e gostaria de consultar um produto.',
  atacado: 'Olá! Represento uma empresa e gostaria de uma cotação no atacado.',
  agro: 'Olá! Gostaria de consultar produtos para o agro.',
} as const

export function waLink(message: string = WA_MESSAGES.geral) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const COMPANY = {
  name: 'Reino da Borracha',
  legalName: 'REINO DA BORRACHA LTDA',
  cnpj: '04.451.758/0001-05',
  slogan: 'O Senhor é meu pastor e nada me faltará!',
  years: 25,
}

export const ADDRESS = {
  street: 'Av. Castelo Branco, 2620',
  district: 'St. Campinas',
  city: 'Goiânia',
  state: 'GO',
  zip: '74513-050',
  full: 'Av. Castelo Branco, 2620 – St. Campinas, Goiânia – GO, 74513-050',
}

export const GEO = { lat: -16.6755408, lng: -49.2913934 }

// Horário de funcionamento. Índice = dia da semana (0 = domingo ... 6 = sábado).
// null = fechado.
export type DayHours = { open: string; close: string } | null
export const HOURS: DayHours[] = [
  null, // domingo
  { open: '07:00', close: '18:00' }, // segunda
  { open: '07:00', close: '18:00' }, // terça
  { open: '07:00', close: '18:00' }, // quarta
  { open: '07:00', close: '18:00' }, // quinta
  { open: '07:00', close: '18:00' }, // sexta
  { open: '08:00', close: '12:00' }, // sábado
]
export const TIMEZONE = 'America/Sao_Paulo'

export const SOCIAL = {
  instagram: 'https://www.instagram.com/reinodaborracha/',
  youtube: 'https://www.youtube.com/@ReinodaBorracha',
  tiktok: 'https://www.tiktok.com/@reinodaborracha',
  linkedin: 'https://www.linkedin.com/in/reino-da-borracha-mangueira-correias-e-epis-a64434427',
}

export const GOOGLE = {
  rating: 4.9,
  ratingDisplay: '4,9',
  reviewCount: 156,
  reviewsUrl: 'https://www.google.com/maps?cid=15316940650087831649',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Reino+da+Borracha+Av.+Castelo+Branco+2620+Goiania',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Reino+da+Borracha,+Av.+Castelo+Branco,+2620,+Goi%C3%A2nia&z=16&output=embed',
}

// Vídeo de apresentação no YouTube (o código depois de "watch?v=")
export const YOUTUBE_VIDEO_ID = 'AbW0OnyA-9Y'

export const NAV_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'continental', label: 'Continental' },
  { id: 'produtos', label: 'Produtos' },
  { id: 'estrutura', label: 'Estrutura' },
  { id: 'avaliacoes', label: 'Avaliações' },
  { id: 'contato', label: 'Contato' },
]
