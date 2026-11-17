import { ExternalLink } from 'lucide-react'
import { GOOGLE } from '../config'
import SectionHeading from '../components/SectionHeading'

const REVIEWS = [
  { text: 'A melhor loja de Goiânia, atendimento excelente, conta com ótimos funcionários.', name: 'Emerson Santus' },
  { text: 'Pontualidade na entrega, produtos de qualidade, vendedores qualificados!', name: 'Cleusmar Lima Cordeiro' },
  { text: 'Ótimo atendimento, tem café, chá e chocolate.', name: 'Thiago Hends' },
]

export default function Reviews() {
  return (
    <section id="avaliacoes" aria-labelledby="titulo-avaliacoes" className="bg-ink-2">
      <div className="frame section">
        <SectionHeading eyebrow="Quem compra, recomenda" title="Avaliações no Google" id="titulo-avaliacoes" />

        <div className="reveal mt-10 flex flex-col items-center text-center">
          <p className="font-serif text-7xl leading-none text-cream sm:text-8xl">{GOOGLE.ratingDisplay}</p>
          <p className="mt-3 text-2xl tracking-[0.2em] text-sky" aria-label="5 estrelas">
            ★★★★★
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            {GOOGLE.reviewCount} avaliações
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <li key={r.name} className="reveal card flex flex-col px-6 pb-7 pt-5" style={{ ['--delay' as string]: `${i * 120}ms` }}>
              <figure className="flex h-full flex-col">
                <span aria-hidden="true" className="font-serif text-6xl leading-none text-red">
                  “
                </span>
                <blockquote className="-mt-3 flex-1 font-serif text-xl leading-snug text-text">{r.text}</blockquote>
                <figcaption className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-sky">
                  {r.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="reveal mt-12 text-center">
          <a
            href={GOOGLE.reviewsUrl}
            target="_blank"
            rel="noopener"
            data-track="Avaliações Google"
            data-track-label="ver todas"
            className="btn btn-secondary"
          >
            Ver todas as avaliações no Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
