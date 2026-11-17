import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, waLink } from '../config'
import Picture from './Picture'
import { WhatsAppIcon } from './BrandIcons'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-soft bg-ink/80 backdrop-blur-md">
      <div className="frame flex h-16 items-center justify-between gap-4 !border-x-0">
        <a href="/" className="flex shrink-0 items-center" aria-label="Reino da Borracha – início">
          <Picture
            name="logo"
            alt=""
            sizes="60px"
            displayWidth={60}
            eager
            imgClassName="h-10 w-auto"
          />
        </a>

        <nav aria-label="Seções" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.78rem] font-semibold uppercase tracking-[0.16em]">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`/#${l.id}`} className="link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            data-track="WhatsApp"
            data-track-label="barra superior"
            className="btn btn-primary !min-h-10 !px-4 !py-2 !text-[0.72rem]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-text lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-celular"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="menu-celular"
        aria-label="Seções"
        hidden={!open}
        className="border-t border-line-soft bg-ink/95 lg:hidden"
      >
        <ul className="frame flex flex-col py-2">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`/#${l.id}`}
                onClick={() => setOpen(false)}
                className="link block border-b border-line-soft py-3.5 text-sm font-semibold uppercase tracking-[0.18em] last:border-0"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
