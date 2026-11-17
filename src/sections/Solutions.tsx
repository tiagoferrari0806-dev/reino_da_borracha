import { WA_MESSAGES, waLink } from '../config'
import SectionHeading from '../components/SectionHeading'
import { WhatsAppIcon } from '../components/BrandIcons'

const PLANS = [
  {
    name: 'Balcão',
    tag: 'Varejo',
    audience: 'Para profissionais e consumidores',
    items: ['Pronta entrega no Setor Campinas', 'Orientação para a peça certa', 'Café, chá e chocolate na loja'],
    message: WA_MESSAGES.varejo,
    featured: false,
  },
  {
    name: 'Empresas',
    tag: 'Atacado',
    audience: 'Indústria, construção e comércio',
    items: ['Estoque para reposição contínua', 'Vendedores especializados', 'Pontualidade na entrega'],
    message: WA_MESSAGES.atacado,
    featured: true,
  },
  {
    name: 'Agronegócio',
    tag: 'Agro',
    audience: 'Fazendas, currais e ordenha',
    items: ['Piso boiadeiro e lonas', 'Mangueiras e correias para máquinas', 'EPIs para o campo'],
    message: WA_MESSAGES.agro,
    featured: false,
  },
]

export default function Solutions() {
  return (
    <section id="solucoes" aria-labelledby="titulo-solucoes" className="bg-ink-3">
      <div className="frame section">
        <SectionHeading eyebrow="Como atendemos" title="Soluções para cada cliente" id="titulo-solucoes">
          <p>Escolha o seu perfil e fale direto com um vendedor.</p>
        </SectionHeading>

        <ul className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <li
              key={p.name}
              className={`reveal card relative flex flex-col px-6 pb-7 pt-9 text-center ${
                p.featured ? 'border-sky/70 bg-[#13264a] shadow-[0_0_50px_-14px_rgba(59,111,216,0.7)] md:-translate-y-3' : ''
              }`}
              style={{ ['--delay' as string]: `${i * 120}ms` }}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-red-strong px-4 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-white">
                  Mais procurado
                </span>
              )}
              <span className="eyebrow !text-[0.68rem]">“{p.tag}”</span>
              <h3 className="mt-3 font-serif text-3xl text-cream">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">{p.audience}</p>
              <div aria-hidden="true" className="mx-auto my-6 h-px w-16 bg-line" />
              <ul className="flex-1 space-y-3.5 text-left text-[0.95rem]">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-3">
                    <span className="diamond" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(p.message)}
                target="_blank"
                rel="noopener"
                data-track="WhatsApp"
                data-track-label={`perfil ${p.tag}`}
                className={`btn mt-8 w-full ${p.featured ? 'btn-primary' : 'btn-secondary'}`}
                aria-label={`Consultar pelo WhatsApp – ${p.name} (${p.tag})`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Consultar pelo WhatsApp
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
