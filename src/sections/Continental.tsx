import Picture from '../components/Picture'
import SectionHeading from '../components/SectionHeading'

const GALLERY = [
  {
    name: 'estoque-correias-mangotes' as const,
    caption: 'Correias e mangotes',
    alt: 'Corredores do estoque com correias industriais, mangotes e mangueiras de grande porte da Reino da Borracha',
  },
  {
    name: 'estoque-mangueiras-prateleiras' as const,
    caption: 'Mangueiras',
    alt: 'Prateleiras azuis cheias de rolos de mangueira no estoque da Reino da Borracha em Goiânia',
  },
]

export default function Continental() {
  return (
    <section id="continental" aria-labelledby="titulo-continental" className="bg-ink">
      <div className="frame section">
        <SectionHeading eyebrow="Nosso destaque" title="Distribuidora oficial Continental" id="titulo-continental">
          <p>
            Correias e soluções de transmissão de potência com a procedência de uma das marcas mais reconhecidas do
            mundo, com estoque e pronta entrega em Goiânia.
          </p>
          <p className="mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-sky">
            Linha industrial e correias
          </p>
        </SectionHeading>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {GALLERY.map((g, i) => (
            <figure key={g.name} className="reveal" style={{ ['--delay' as string]: `${i * 120}ms` }}>
              <div className="photo-frame">
                <Picture name={g.name} alt={g.alt} sizes="(min-width: 640px) 520px, 100vw" imgClassName="aspect-[4/3]" />
              </div>
              <figcaption className="caption mt-4 text-center">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
