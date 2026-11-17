import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { track } from '@vercel/analytics'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'

export default function Layout() {
  // A animação de entrada (.reveal) fica num script pequeno no index.html,
  // para funcionar antes mesmo de o React carregar.

  // Métricas: qualquer link com data-track gera um evento no Vercel Analytics
  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as Element | null)?.closest<HTMLElement>('[data-track]')
      if (!a) return
      track(a.dataset.track!, { origem: a.dataset.trackLabel ?? 'site' })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <a href="#conteudo" className="sr-only-focusable fixed left-4 top-4 z-[100] rounded bg-cream px-4 py-2 font-semibold text-ink">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Analytics />
    </>
  )
}
