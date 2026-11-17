import images from '../generated/images.json'

export type ImageKey = keyof typeof images

type Props = {
  name: ImageKey
  alt: string
  sizes?: string
  eager?: boolean
  className?: string
  imgClassName?: string
  /** Largura que o <img> declara (proporção vem da imagem original) */
  displayWidth?: number
}

export const imageData = (name: ImageKey) => images[name]

export default function Picture({
  name,
  alt,
  sizes = '(min-width: 1024px) 520px, 100vw',
  eager = false,
  className,
  imgClassName,
  displayWidth,
}: Props) {
  const data = images[name]
  const srcset = (list: { w: number; src: string }[]) => list.map((i) => `${i.src} ${i.w}w`).join(', ')
  const fallback = data.webp[data.webp.length - 1].src
  const w = displayWidth ?? data.width
  const h = Math.round((w * data.height) / data.width)
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={srcset(data.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={srcset(data.webp)} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={w}
        height={h}
        loading={eager ? 'eager' : 'lazy'}
        decoding={eager ? 'sync' : 'async'}
        fetchPriority={eager ? 'high' : undefined}
        className={imgClassName}
      />
    </picture>
  )
}
