// Wedding date: November 15, 2025 at 12:00
const WEDDING_DATE = new Date('2025-11-15T12:00:00')
const WEDDING_END_DATE = new Date('2025-11-15T23:59:59')

export const generateICS = () => {
  const formatDate = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  }

  const now = formatDate(new Date())
  const start = formatDate(WEDDING_DATE)
  const end = formatDate(WEDDING_END_DATE)

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sandra y Pablo//Boda//ES
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
DTSTART:${start}
DTEND:${end}
DTSTAMP:${now}
UID:${now}-sandra-pablo-boda@example.com
SUMMARY:Sandra y Pablo - Nuestra Boda 💍
DESCRIPTION:¡Nos casamos! Te esperamos en nuestra celebración.\\n\\nCeremonia: Parroquia Santa Catalina\\nHora: 12:00
LOCATION:Parroquia Santa Catalina, España
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`

  return icsContent
}

export const downloadICS = () => {
  const icsContent = generateICS()
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'boda-sandra-pablo.ics'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
