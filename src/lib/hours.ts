import { HOURS, TIMEZONE } from '../config'

export const WEEKDAYS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
export const WEEKDAYS_FULL = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

// "07:00" -> "7h", "12:30" -> "12h30"
export const shortTime = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`
}

/** Dia da semana (0-6) e minutos desde 00:00 no fuso de Goiânia */
export function nowInStore(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) }
}

export type OpenStatus = { open: boolean; text: string }

export function getOpenStatus(date = new Date()): OpenStatus {
  const { day, minutes } = nowInStore(date)
  const today = HOURS[day]

  if (today && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    return { open: true, text: `Aberto agora · fecha às ${shortTime(today.close)}` }
  }
  if (today && minutes < toMinutes(today.open)) {
    return { open: false, text: `Fechado · abre hoje às ${shortTime(today.open)}` }
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7
    const h = HOURS[d]
    if (h) {
      const when = i === 1 ? 'amanhã' : WEEKDAYS[d]
      return { open: false, text: `Fechado · abre ${when} às ${shortTime(h.open)}` }
    }
  }
  return { open: false, text: 'Fechado' }
}
