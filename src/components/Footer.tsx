import { COMPANY, NAV_LINKS } from '../config'
import Picture from './Picture'

export default function Footer() {
  return (
    <footer className="relative bg-[#03070f]">
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-red via-brand-light to-brand" />
      <div className="frame py-14 text-center">
        <Picture name="logo" alt="Reino da Borracha" sizes="96px" displayWidth={96} imgClassName="mx-auto h-auto w-24" />
        <p className="mt-6 font-serif text-lg italic text-muted">“{COMPANY.slogan}”</p>

        <nav aria-label="Links do rodapé" className="mt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em]">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`/#${l.id}`} className="link text-muted">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/privacidade" className="link text-muted">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-10 space-y-1.5 text-xs text-muted">
          <p>© 2026 {COMPANY.name}. Todos os direitos reservados.</p>
          <p className="tracking-wide">
            {COMPANY.legalName} · CNPJ {COMPANY.cnpj}
          </p>
        </div>
      </div>
    </footer>
  )
}
