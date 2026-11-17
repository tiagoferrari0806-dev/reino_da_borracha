import { useEffect, useState } from 'react'
import { getOpenStatus, type OpenStatus as Status } from '../lib/hours'

/**
 * "● Aberto agora · fecha às 18h" / "● Fechado · abre segunda às 7h".
 * Depende da hora de quem visita, então só aparece no navegador
 * (o HTML pré-renderizado reserva o espaço para não "pular" o layout).
 */
export default function OpenStatus({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null)

  useEffect(() => {
    const update = () => setStatus(getOpenStatus())
    update()
    const t = window.setInterval(update, 60_000)
    return () => window.clearInterval(t)
  }, [])

  return (
    <p
      className={`inline-flex min-h-8 items-center gap-2 rounded-full border px-4 py-1.5 text-[0.8rem] font-semibold transition-opacity duration-500 ${
        status ? 'opacity-100' : 'opacity-0'
      } ${status?.open ? 'border-open/40 bg-open/10 text-open' : 'border-line bg-white/5 text-muted'} ${className}`}
      aria-live="polite"
    >
      <span aria-hidden="true" className={`h-2 w-2 rounded-full ${status?.open ? 'bg-open' : 'bg-muted'}`} />
      {status?.text ?? 'Verificando horário'}
    </p>
  )
}
