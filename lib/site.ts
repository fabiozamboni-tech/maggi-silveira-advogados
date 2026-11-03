export const SITE = {
  name: 'Maggi & Silveira',
  fullName: 'Maggi & Silveira Advogados Associados',
  phoneDisplay: '(51) 99920-4815',
  phoneHref: 'tel:+5551999204815',
  whatsappNumber: '5551999204815',
  address: 'R. Nossa Sra. dos Navegantes, 130 - Lj 05 - Igra Sul',
  city: 'Torres - RS',
  zip: '95560-000',
  mapsQuery:
    'R. Nossa Sra. dos Navegantes, 130 - Lj 05 - Igra Sul, Torres - RS, 95560-000',
}

export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#como-atuamos', label: 'Como Atuamos' },
  { href: '#contato', label: 'Contato' },
]

export function whatsappLink(message = 'Olá, gostaria de agendar uma consulta.') {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`
