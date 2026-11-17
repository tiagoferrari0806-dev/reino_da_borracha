import Picture from '../components/Picture'
import { Wave } from '../components/SectionHeading'

export default function About() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className="bg-ink-2">
      <div className="frame section grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="reveal photo-frame">
          <Picture
            name="fachada-esquina"
            alt="Prédio da Reino da Borracha visto da esquina, no Setor Campinas, em Goiânia"
            sizes="(min-width: 768px) 520px, 100vw"
            imgClassName="aspect-[680/467]"
          />
        </div>
        <div className="reveal text-center md:text-left" style={{ ['--delay' as string]: '120ms' }}>
          <span className="eyebrow">Reino da Borracha</span>
          <h2 id="titulo-sobre" className="title mt-4">
            Tradição no balcão. Compromisso com a qualidade.
          </h2>
          <Wave className="mx-auto mt-5 md:mx-0" />
          <p className="lead mx-auto mt-6 md:mx-0">
            Localizado no Setor Campinas, em Goiânia, o Reino da Borracha tem mais de 25 anos de experiência no
            fornecimento de produtos industriais, equipamentos de proteção individual e soluções para manutenção, com
            atendimento especializado para empresas, profissionais e consumidores.
          </p>
        </div>
      </div>
    </section>
  )
}
