import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'

/** Mapa do Google que só carrega quando chega perto da tela. */
export default function LazyMap({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setShow(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin: '400px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="photo-frame">
      <div className="relative aspect-[4/3] overflow-hidden rounded bg-ink-3 sm:aspect-[16/9]">
        {show ? (
          <iframe
            src={src}
            title={title}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-dark absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted">
            <MapPin className="h-8 w-8" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  )
}
