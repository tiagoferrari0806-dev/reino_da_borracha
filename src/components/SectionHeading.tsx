import type { ReactNode } from 'react'

/** Linha ondulada vermelha e azul, lembrando as ondas da logo */
export function Wave({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 12"
      width="96"
      height="12"
      aria-hidden="true"
      className={className}
      fill="none"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      <path d="M2 5c7.5-4 15-4 22.5 0S39.5 9 47 5" stroke="#df3b39" />
      <path d="M49 7c7.5-4 15-4 22.5 0S86.5 11 94 7" stroke="#3b6fd8" />
    </svg>
  )
}

type Props = {
  eyebrow: string
  title: ReactNode
  id?: string
  children?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

export default function SectionHeading({ eyebrow, title, id, children, align = 'center', className = '' }: Props) {
  const center = align === 'center'
  return (
    <div className={`reveal ${center ? 'text-center mx-auto' : ''} ${className}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id} className="title mt-4">
        {title}
      </h2>
      <Wave className={`mt-5 ${center ? 'mx-auto' : ''}`} />
      {children && <div className={`lead mt-6 ${center ? 'mx-auto' : ''}`}>{children}</div>}
    </div>
  )
}
