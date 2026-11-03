import { whatsappLink } from '@/lib/site'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 6.99C9.36 6.99 9.09 7.05 8.87 7.29C8.65 7.53 8.02 8.12 8.02 9.33C8.02 10.54 8.9 11.7 9.02 11.86C9.14 12.02 10.74 14.5 13.21 15.57C13.8 15.83 14.25 15.98 14.61 16.1C15.21 16.29 15.75 16.26 16.18 16.2C16.66 16.13 17.65 15.6 17.86 15.01C18.06 14.43 18.06 13.93 18 13.83C17.94 13.73 17.78 13.67 17.53 13.55C17.29 13.43 16.08 12.83 15.86 12.75C15.63 12.67 15.47 12.63 15.3 12.87C15.14 13.12 14.67 13.67 14.53 13.83C14.39 14 14.25 14.02 14 13.9C13.76 13.78 12.98 13.52 12.06 12.7C11.34 12.06 10.86 11.27 10.72 11.03C10.58 10.79 10.7 10.66 10.83 10.54C10.94 10.43 11.08 10.25 11.2 10.11C11.32 9.97 11.36 9.87 11.44 9.71C11.52 9.55 11.48 9.41 11.42 9.29C11.36 9.17 10.89 8.02 10.69 7.55C10.5 7.08 10.3 7.15 10.15 7.14C10 7.14 9.84 7.13 9.68 7.13L9.53 6.99Z" />
    </svg>
  )
}

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o escritório pelo WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-brass text-basalt shadow-2xl shadow-basalt/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-brass-light hover:shadow-brass/35 md:right-8 md:bottom-8"
    >
      <WhatsAppIcon className="size-7 transition-transform duration-300 group-hover:scale-110" />
    </a>
  )
}
