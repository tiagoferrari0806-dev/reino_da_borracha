import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Picture, { type ImageKey } from './Picture'

export type LightboxItem = { name: ImageKey; alt: string; caption: string }

type Props = {
  items: LightboxItem[]
  index: number | null
  onChange: (i: number | null) => void
}

/** Ampliação de fotos com <dialog> nativo: Esc fecha, setas navegam, foco preso dentro. */
export default function Lightbox({ items, index, onChange }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (index !== null && !d.open) {
      opener.current = document.activeElement as HTMLElement
      d.showModal()
    } else if (index === null && d.open) {
      d.close()
    }
  }, [index])

  const close = () => onChange(null)
  const go = (dir: number) => index !== null && onChange((index + dir + items.length) % items.length)
  const item = index !== null ? items[index] : null

  return (
    <dialog
      ref={ref}
      aria-label={item ? `Foto ampliada: ${item.caption}` : 'Foto ampliada'}
      onClose={() => {
        onChange(null)
        opener.current?.focus()
      }}
      onClick={(e) => e.target === ref.current && close()}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1)
        if (e.key === 'ArrowLeft') go(-1)
      }}
      className="m-auto w-[min(92vw,720px)] max-w-none overflow-visible bg-transparent p-0 text-text"
    >
      {item && (
        <figure className="relative">
          <div className="photo-frame bg-ink-2">
            <Picture name={item.name} alt={item.alt} sizes="(min-width: 760px) 700px, 92vw" eager imgClassName="max-h-[78vh]" />
          </div>
          <figcaption className="caption mt-4 text-center">
            {item.caption} <span className="text-muted">· {index! + 1}/{items.length}</span>
          </figcaption>
        </figure>
      )}
      <div className="mt-4 flex justify-center gap-3">
        <button type="button" onClick={() => go(-1)} aria-label="Foto anterior" className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink-2 hover:border-sky">
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button type="button" onClick={close} aria-label="Fechar foto ampliada" className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink-2 hover:border-sky">
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Próxima foto" className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink-2 hover:border-sky">
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </dialog>
  )
}
