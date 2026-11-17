import { useState } from 'react'
import { Maximize2 } from 'lucide-react'
import { SOCIAL, YOUTUBE_VIDEO_ID } from '../config'
import Picture from '../components/Picture'
import SectionHeading from '../components/SectionHeading'
import Lightbox, { type LightboxItem } from '../components/Lightbox'
import YouTubeFacade from '../components/YouTubeFacade'
import { YouTubeIcon } from '../components/BrandIcons'

const PHOTOS: LightboxItem[] = [
  { name: 'estoque-geral-rolos', caption: 'Galpão de estoque', alt: 'Galpão de estoque da Reino da Borracha com rolos de mangueiras, plásticos e caixas' },
  { name: 'estoque-lonas', caption: 'Lonas', alt: 'Estoque de lonas azuis da Reino da Borracha em Goiânia' },
  { name: 'estoque-cintas-catracas', caption: 'Cintas e catracas', alt: 'Prateleiras com cintas de amarração e catracas coloridas' },
  { name: 'estoque-conexoes-engates', caption: 'Conexões e engates', alt: 'Prateleiras com conexões e engates metálicos no estoque da loja' },
  { name: 'estoque-cones-sinalizacao', caption: 'Cones e sinalização', alt: 'Cones de sinalização laranja e branco empilhados em pallets' },
  { name: 'estoque-mangueiras-prateleiras', caption: 'Mangueiras', alt: 'Rolos de mangueira organizados em prateleiras azuis' },
]

export default function Structure() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="estrutura" aria-labelledby="titulo-estrutura" className="bg-ink">
      <div className="frame section">
        <SectionHeading eyebrow="Estoque e estrutura" title="Estoque para pronta entrega em Goiânia" id="titulo-estrutura">
          <p>Galpões organizados e estoque amplo para atender da reposição do dia a dia às compras de grande volume.</p>
        </SectionHeading>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <li key={p.name} className="reveal" style={{ ['--delay' as string]: `${(i % 3) * 100}ms` }}>
              <figure>
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group photo-frame block w-full text-left transition-colors hover:border-sky/70"
                  aria-label={`Ampliar foto: ${p.caption}`}
                >
                  <span className="relative block overflow-hidden rounded">
                    <Picture
                      name={p.name}
                      alt={p.alt}
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                      imgClassName={`aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03] ${
                        p.name === 'estoque-conexoes-engates' ? 'object-[50%_35%]' : ''
                      }`}
                    />
                    <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-sky opacity-80 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                </button>
                <figcaption className="caption mt-3 text-center">{p.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="reveal mx-auto mt-20 max-w-3xl text-center">
          <h3 className="font-serif text-2xl text-text sm:text-3xl">Vídeo Reino da Borracha</h3>
          <div className="mt-6">
            <YouTubeFacade id={YOUTUBE_VIDEO_ID} title="Vídeo de apresentação da Reino da Borracha" />
          </div>
          <a
            href={SOCIAL.youtube}
            target="_blank"
            rel="noopener"
            data-track="Rede social"
            data-track-label="YouTube (estrutura)"
            className="btn btn-secondary mt-6"
          >
            <YouTubeIcon className="h-4 w-4" />
            Assista no YouTube
          </a>
        </div>
      </div>

      <Lightbox items={PHOTOS} index={open} onChange={setOpen} />
    </section>
  )
}
