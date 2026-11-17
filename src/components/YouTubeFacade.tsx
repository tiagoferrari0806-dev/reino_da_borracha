import { useState } from 'react'
import { Play } from 'lucide-react'

/** Mostra só a miniatura; o player do YouTube carrega quando a pessoa clica. */
export default function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false)
  return (
    <div className="photo-frame">
      <div className="relative aspect-video overflow-hidden rounded bg-ink-3">
        {play ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlay(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Reproduzir vídeo: ${title}`}
            data-track="Vídeo"
            data-track-label="play"
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              width={480}
              height={360}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-light to-brand text-white shadow-[0_8px_30px_-6px_rgba(59,111,216,0.9)] ring-1 ring-sky/50 transition-transform group-hover:scale-110">
              <Play className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
