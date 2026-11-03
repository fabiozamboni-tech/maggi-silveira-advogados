import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o escritório pelo WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-brass py-3.5 pr-5 pl-4 text-sm font-semibold text-basalt shadow-xl shadow-basalt/25 transition-transform duration-300 hover:-translate-y-1 md:right-8 md:bottom-8"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
