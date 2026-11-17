import Picture from '../components/Picture'
import SectionHeading from '../components/SectionHeading'

const LINES = [
  {
    title: 'Linha Industrial',
    accent: 'border-l-brand-light',
    items: [
      { kicker: 'Transmissão', text: 'Correias, Polias & Acoplamentos' },
      { kicker: 'Condução', text: 'Mangueiras, Mangotes & Conexões' },
    ],
  },
  {
    title: 'Linha Agro, Transporte & Segurança',
    accent: 'border-l-red',
    items: [
      { kicker: 'Agro & Transporte', text: 'Lonas, Piso Boiadeiro & Cintas de Amarração' },
      { kicker: 'Proteção', text: 'Botas, EPIs & Sinalização' },
    ],
  },
]

const TAGS = [
  'Correias',
  'Mangueiras',
  'Mangueiras hidráulicas',
  'Mangotes',
  'Polias de ferro',
  'Acoplamentos',
  'Rodas e rodízios',
  'Conexões e engates',
  'Lonas e plásticos',
  'Piso boiadeiro',
  'Cintas e catracas',
  'Borracha líquida',
  'Botas de segurança',
  'EPIs',
  'Cones e sinalização',
  'Ferramentas',
]

// Linhas de ligação da "árvore". Desktop: horizontal + vertical; celular: vertical.
const LINE = 'bg-sky/45'

export default function ProductTree() {
  return (
    <section id="produtos" aria-labelledby="titulo-produtos" className="bg-ink-2">
      <div className="frame section">
        <SectionHeading eyebrow="Linhas e soluções" title="Nossas linhas de produtos em Goiânia" id="titulo-produtos">
          <p className="text-sky">Indústria · Construção · Comércio · Agro · Transporte · Manutenção</p>
        </SectionHeading>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16">
          {/* Card principal */}
          <div className="reveal relative">
            <div className="card relative z-10 mx-auto flex max-w-[300px] flex-col items-center gap-4 border-sky/60 px-6 py-8 text-center shadow-[0_0_48px_-12px_rgba(59,111,216,0.6)]">
              <span className="eyebrow !text-[0.68rem]">Fornecedor</span>
              <Picture name="logo" alt="Reino da Borracha" sizes="180px" displayWidth={180} imgClassName="h-auto w-[180px]" />
              <span className="text-sm text-muted">Goiânia · GO</span>
            </div>
            {/* ligação: desce no celular, vai para a direita no desktop */}
            <span aria-hidden="true" className={`absolute left-1/2 top-full h-10 w-px ${LINE} lg:hidden`} />
            <span
              aria-hidden="true"
              className={`absolute left-full top-1/2 hidden h-px w-8 ${LINE} lg:block`}
            />
          </div>

          {/* Linhas */}
          <ul className="relative flex flex-col gap-10 lg:gap-8">
            {LINES.map((line, i) => (
              <li key={line.title} className="reveal relative" style={{ ['--delay' as string]: `${120 + i * 120}ms` }}>
                {/* conector horizontal + metade da vertical (desktop) */}
                <span aria-hidden="true" className={`absolute -left-8 top-1/2 hidden h-px w-8 ${LINE} lg:block`} />
                <span
                  aria-hidden="true"
                  className={`absolute -left-8 hidden w-px ${LINE} lg:block ${
                    i === 0 ? 'top-1/2 -bottom-4' : '-top-4 bottom-1/2'
                  }`}
                />
                {/* conector vertical entre os cards (celular) */}
                {i > 0 && <span aria-hidden="true" className={`absolute -top-10 left-1/2 h-10 w-px ${LINE} lg:hidden`} />}

                <div className="card p-5 sm:p-6">
                  <h3 className="text-center text-[0.8rem] font-bold uppercase tracking-[0.22em] text-cream lg:text-left">
                    {line.title}
                  </h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {line.items.map((it) => (
                      <li key={it.kicker} className={`rounded-md border border-line-soft border-l-[3px] ${line.accent} bg-ink-3/70 px-4 py-3`}>
                        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sky">
                          {it.kicker}
                        </span>
                        <span className="mt-1 block text-[0.95rem] text-text">{it.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ul className="reveal mt-14 flex flex-wrap justify-center gap-2.5" aria-label="Produtos">
          {TAGS.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
