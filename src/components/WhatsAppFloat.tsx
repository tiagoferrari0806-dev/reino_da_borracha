import { waLink } from '../config'
import { WhatsAppIcon } from './BrandIcons'

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Falar com a Reino da Borracha pelo WhatsApp"
      data-track="WhatsApp"
      data-track-label="botão flutuante"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-light to-brand text-white shadow-[0_10px_30px_-8px_rgba(59,111,216,0.9)] ring-1 ring-sky/40 transition-transform duration-200 hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
