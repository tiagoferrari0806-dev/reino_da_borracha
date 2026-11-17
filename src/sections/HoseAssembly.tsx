import { Wrench } from 'lucide-react'
import { WA_MESSAGES, waLink } from '../config'
import Picture from '../components/Picture'
import { Wave } from '../components/SectionHeading'

export default function HoseAssembly() {
  return (
    <section id="montagem" aria-labelledby="titulo-montagem" className="bg-ink-3">
      <div className="frame section grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="reveal order-2 text-center md:order-1 md:text-left">
          <span className="eyebrow">Serviço</span>
          <h2 id="titulo-montagem" className="title mt-4">
            Montagem de mangueiras hidráulicas na hora
          </h2>
          <Wave className="mx-auto mt-5 md:mx-0" />
          <p className="lead mx-auto mt-6 md:mx-0">
            Contamos com prensas próprias para montar e prensar mangueiras hidráulicas sob medida, com terminais e
            conexões para máquinas agrícolas, industriais e da construção.
          </p>
          <a
            href={waLink(WA_MESSAGES.montagem)}
            target="_blank"
            rel="noopener"
            data-track="WhatsApp"
            data-track-label="montagem de mangueiras"
            className="btn btn-primary mt-8 w-full sm:w-auto"
          >
            <Wrench className="h-4 w-4" aria-hidden="true" />
            Orçar montagem pelo WhatsApp
          </a>
        </div>
        <div className="reveal order-1 md:order-2" style={{ ['--delay' as string]: '120ms' }}>
          <div className="photo-frame">
            <Picture
              name="maquinario-prensagem-mangueiras"
              alt="Prensas para montagem de mangueiras hidráulicas na oficina da Reino da Borracha"
              sizes="(min-width: 768px) 520px, 100vw"
              imgClassName="aspect-[680/502]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
