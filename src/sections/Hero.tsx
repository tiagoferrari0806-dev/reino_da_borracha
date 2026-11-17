import { MessageCircle, ChevronDown } from 'lucide-react'
import { waLink } from '../config'
import Picture from '../components/Picture'
import OpenStatus from '../components/OpenStatus'

const STATS = [
  { value: '25+', label: 'anos de mercado' },
  { value: '4,9 ★', label: 'no Google' },
  { value: 'Continental', label: 'distribuidora oficial' },
]

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-principal" className="relative isolate overflow-hidden pt-16">
      {/* Fundo: fachada + overlay azul-marinho + névoas */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Picture
          name="fachada-principal"
          alt=""
          eager
          sizes="100vw"
          className="block h-full w-full"
          imgClassName="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,26,0.93)_0%,rgba(7,22,52,0.88)_45%,rgba(6,13,26,0.97)_85%,#060d1a_100%)]" />
        <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_at_top,rgba(223,59,57,0.22),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(59,111,216,0.28),transparent_70%)]" />
      </div>

      {/* Faixa vermelha fina no topo */}
      <div aria-hidden="true" className="mx-auto h-1 w-40 rounded-b bg-red sm:w-56" />

      <div className="frame !border-x-0 flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-14 text-center sm:py-20">
        <h1 className="sr-only">Reino da Borracha</h1>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-16 -z-10 bg-[radial-gradient(closest-side,rgba(59,111,216,0.45),transparent)]"
          />
          <Picture
            name="logo"
            alt="Logo da Reino da Borracha"
            eager
            sizes="(min-width: 640px) 320px, 240px"
            displayWidth={320}
            imgClassName="h-auto w-[240px] drop-shadow-[0_12px_32px_rgba(59,111,216,0.45)] sm:w-[320px]"
          />
        </div>

        <p className="eyebrow hero-in mt-9" style={{ ['--delay' as string]: '80ms' }}>
          Goiânia · Goiás · Há mais de 25 anos
        </p>

        <p
          className="hero-in mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-text sm:text-xl"
          style={{ ['--delay' as string]: '140ms' }}
        >
          Correias, mangueiras, polias, lonas e EPIs para indústria, construção, comércio e agronegócio.
          Distribuidora oficial Continental no Centro-Oeste.
        </p>

        <div
          className="hero-in mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          style={{ ['--delay' as string]: '200ms' }}
        >
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            data-track="WhatsApp"
            data-track-label="hero"
            className="btn btn-primary"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Solicitar orçamento
          </a>
          <a href="#produtos" className="btn btn-secondary">
            Ver produtos
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <OpenStatus className="mt-7" />

        <ul
          className="hero-in mt-12 grid w-full max-w-3xl grid-cols-1 border-y border-line sm:grid-cols-3"
          style={{ ['--delay' as string]: '320ms' }}
        >
          {STATS.map((s, i) => (
            <li
              key={s.label}
              className={`flex flex-col items-center gap-1 px-4 py-5 ${
                i > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''
              }`}
            >
              <span className="font-serif text-3xl text-cream">{s.value}</span>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-sky">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
