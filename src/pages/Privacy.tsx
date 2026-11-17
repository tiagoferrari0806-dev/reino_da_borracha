import { Head } from 'vite-react-ssg'
import { ArrowLeft } from 'lucide-react'
import { ADDRESS, COMPANY, PHONE_DISPLAY, PHONE_TEL, SITE_URL, waLink, WHATSAPP_DISPLAY } from '../config'
import { Wave } from '../components/SectionHeading'

const TITLE = 'Política de Privacidade | Reino da Borracha'
const DESCRIPTION =
  'Saiba como o site da Reino da Borracha trata informações: sem formulários, sem cookies de rastreamento e com métricas anônimas.'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/privacidade`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/privacidade`} />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      </Head>

      <article className="bg-ink-2 pt-16">
        <div className="frame section">
          <div className="mx-auto max-w-3xl">
            <a href="/" className="link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-sky">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Voltar ao site
            </a>
            <span className="eyebrow mt-10">LGPD · Lei nº 13.709/2018</span>
            <h1 className="title mt-4">Política de Privacidade</h1>
            <Wave className="mt-5" />
            <p className="mt-4 text-sm text-muted">Última atualização: novembro de 2026.</p>

            <div className="mt-10 space-y-8 text-[1rem] leading-relaxed text-muted [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-text [&_strong]:text-text">
              <section>
                <h2>Quem somos</h2>
                <p className="mt-3">
                  Este site pertence à <strong>{COMPANY.legalName}</strong>, CNPJ {COMPANY.cnpj}, com sede na{' '}
                  {ADDRESS.full}. Somos os responsáveis pelas informações tratadas por meio deste site.
                </p>
              </section>

              <section>
                <h2>Dados que coletamos</h2>
                <p className="mt-3">
                  O site <strong>não coleta dados pessoais diretamente</strong>. Não há formulários, cadastro, área de
                  login nem cookies de rastreamento ou de publicidade.
                </p>
              </section>

              <section>
                <h2>Métricas de visitas</h2>
                <p className="mt-3">
                  Usamos o <strong>Vercel Web Analytics</strong> para saber quantas pessoas visitam o site e quais
                  botões são mais usados (por exemplo, cliques no WhatsApp ou no “Como chegar”). Essa ferramenta não usa
                  cookies e gera apenas estatísticas <strong>anônimas e agregadas</strong>: não identifica quem você é
                  nem acompanha sua navegação em outros sites.
                </p>
              </section>

              <section>
                <h2>Contato pelo WhatsApp e telefone</h2>
                <p className="mt-3">
                  Quando você clica em um botão de WhatsApp, é levado ao aplicativo WhatsApp, e a conversa acontece
                  fora deste site. As informações que você compartilhar ali (como nome, telefone e o pedido) são
                  usadas somente para responder ao seu contato, fazer orçamentos e concluir vendas. O uso do WhatsApp
                  também segue a política de privacidade do próprio WhatsApp.
                </p>
              </section>

              <section>
                <h2>Serviços de terceiros</h2>
                <p className="mt-3">
                  O mapa da seção de contato é fornecido pelo Google Maps, e o vídeo, pelo YouTube (em modo de
                  privacidade aprimorada, carregado só quando você clica para assistir). Ao usar esses recursos, o
                  Google pode tratar dados conforme as políticas dele. Os links para Instagram, YouTube, TikTok e
                  LinkedIn levam a sites externos, com regras próprias.
                </p>
              </section>

              <section>
                <h2>Seus direitos</h2>
                <p className="mt-3">
                  Pela LGPD, você pode pedir a confirmação, o acesso, a correção ou a exclusão dos dados pessoais que
                  tenha compartilhado conosco em atendimentos. Para isso, fale com a gente pelo WhatsApp{' '}
                  <a href={waLink()} target="_blank" rel="noopener" className="link underline decoration-line underline-offset-4">
                    {WHATSAPP_DISPLAY}
                  </a>
                  , pelo telefone{' '}
                  <a href={PHONE_TEL} className="link underline decoration-line underline-offset-4">
                    {PHONE_DISPLAY}
                  </a>{' '}
                  ou pessoalmente na loja.
                </p>
              </section>

              <section>
                <h2>Alterações</h2>
                <p className="mt-3">
                  Esta política pode ser atualizada a qualquer momento. A data da última atualização fica sempre no
                  topo da página.
                </p>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
