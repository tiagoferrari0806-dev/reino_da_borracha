import { useEffect, useState } from 'react'
import { Clock, MapPin, Navigation, Phone, Truck } from 'lucide-react'
import { ADDRESS, GOOGLE, HOURS, PHONE_DISPLAY, PHONE_TEL, SOCIAL, WHATSAPP_DISPLAY, waLink } from '../config'
import { nowInStore, WEEKDAYS_FULL } from '../lib/hours'
import Picture from '../components/Picture'
import SectionHeading from '../components/SectionHeading'
import LazyMap from '../components/LazyMap'
import { InstagramIcon, LinkedInIcon, TikTokIcon, WhatsAppIcon, YouTubeIcon } from '../components/BrandIcons'

// Ordem da tabela: segunda a domingo
const ORDER = [1, 2, 3, 4, 5, 6, 0]

const SOCIALS = [
  { href: SOCIAL.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: SOCIAL.youtube, label: 'YouTube', Icon: YouTubeIcon },
  { href: SOCIAL.tiktok, label: 'TikTok', Icon: TikTokIcon },
  { href: SOCIAL.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
]

export default function Contact() {
  const [today, setToday] = useState<number | null>(null)
  useEffect(() => setToday(nowInStore().day), [])

  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="relative isolate overflow-hidden bg-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(59,111,216,0.22),transparent_70%)]"
      />
      <div className="frame section">
        <Picture name="logo" alt="" sizes="96px" displayWidth={96} imgClassName="reveal mx-auto mb-10 h-auto w-24" />
        <SectionHeading eyebrow="Fale conosco" title="Entre em contato com o Reino da Borracha" id="titulo-contato" />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Dados */}
          <div className="reveal card p-6 sm:p-8">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
                <div>
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky">Endereço</span>
                  <address className="mt-1 not-italic">
                    {ADDRESS.street} – {ADDRESS.district}
                    <br />
                    {ADDRESS.city} – {ADDRESS.state}, {ADDRESS.zip}
                  </address>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
                <div>
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky">Telefone</span>
                  <a href={PHONE_TEL} className="link mt-1 inline-block text-lg" data-track="Telefone" data-track-label="contato">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                <div>
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky">WhatsApp</span>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener"
                    className="link mt-1 inline-block text-lg"
                    data-track="WhatsApp"
                    data-track-label="contato (número)"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
                <div>
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky">Entregas</span>
                  <p className="mt-1 text-[0.95rem] text-muted">
                    <strong className="font-semibold text-text">Goiânia e Região Metropolitana:</strong> entrega com
                    equipe própria ou motoboys parceiros, conforme o volume do pedido.
                  </p>
                  <p className="mt-2 text-[0.95rem] text-muted">
                    <strong className="font-semibold text-text">Interior de Goiás e outros estados:</strong> envio por
                    transportadoras parceiras, combinado de acordo com o pedido.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div className="reveal card p-6 sm:p-8" style={{ ['--delay' as string]: '120ms' }}>
            <h3 className="flex items-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-sky">
              <Clock className="h-5 w-5" aria-hidden="true" />
              Horário de funcionamento
            </h3>
            <table className="mt-5 w-full text-left">
              <caption className="sr-only">Horário de funcionamento da loja</caption>
              <tbody>
                {ORDER.map((d) => {
                  const h = HOURS[d]
                  const isToday = today === d
                  return (
                    <tr
                      key={d}
                      className={`border-b border-line-soft last:border-0 ${isToday ? 'bg-brand/35 text-cream' : ''}`}
                      aria-current={isToday ? 'date' : undefined}
                    >
                      <th scope="row" className="py-3 pl-3 font-medium">
                        {WEEKDAYS_FULL[d]}
                        {isToday && (
                          <span className="ml-2 rounded bg-sky/20 px-1.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-sky">
                            Hoje
                          </span>
                        )}
                      </th>
                      <td className={`py-3 pr-3 text-right tabular-nums ${h ? '' : 'text-muted'}`}>
                        {h ? `${h.open} – ${h.close}` : 'Fechado'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="reveal mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            data-track="WhatsApp"
            data-track-label="contato (botão)"
            className="btn btn-primary"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar pelo WhatsApp
          </a>
          <a
            href={GOOGLE.directionsUrl}
            target="_blank"
            rel="noopener"
            data-track="Como chegar"
            data-track-label="contato"
            className="btn btn-secondary"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Como chegar
          </a>
        </div>

        <ul className="reveal mt-10 flex justify-center gap-4" aria-label="Redes sociais">
          {SOCIALS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={`${label} da Reino da Borracha`}
                data-track="Rede social"
                data-track-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-sky transition-colors hover:border-red hover:text-[#ff6b69]"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>

        <div className="reveal mt-12">
          <LazyMap src={GOOGLE.mapEmbedUrl} title="Mapa com a localização da Reino da Borracha em Goiânia" />
        </div>
      </div>
    </section>
  )
}
