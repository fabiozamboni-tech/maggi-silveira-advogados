import { MapPin, MessageCircle } from 'lucide-react'
import { TextGenerate } from './text-generate'
import { MAPS_LINK, whatsappLink } from '@/lib/site'

const COMMITMENTS = [
  {
    title: 'Transparência desde a primeira conversa',
    text: 'Você recebe um plano de ação claro, com custos e prazos estimados, antes de qualquer decisão.',
  },
  {
    title: 'Ética profissional acima de promessas',
    text: 'Seguimos o Código de Ética da OAB: em vez de garantir resultados, garantimos rigor técnico, defesa estratégica e compromisso com a agilidade.',
  },
  {
    title: 'Presença física em Torres',
    text: 'Um endereço real, na Igra Sul, onde você pode nos visitar, conversar e acompanhar seu caso de perto.',
  },
]

export function Trust() {
  return (
    <section aria-labelledby="confianca-title" className="relative overflow-hidden bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <TextGenerate
              id="confianca-title"
              text="A Confiança de Nossos Clientes"
              className="font-serif text-4xl leading-[1.05] font-medium tracking-tight opacity-0 md:text-6xl"
            />
            <p data-reveal className="text-lg leading-relaxed text-muted-foreground">
              Confiança se constrói com atitudes verificáveis. Estes são os compromissos que você pode cobrar de nós em
              cada atendimento.
            </p>
            <a
              data-reveal
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 border-b border-brass pb-1 text-sm font-semibold transition-colors hover:text-brass"
            >
              <MapPin className="size-4" aria-hidden="true" />
              Ver o escritório no Google Maps
            </a>
          </div>

          <ul className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
            {COMMITMENTS.map((item) => (
              <li
                key={item.title}
                data-reveal
                className="rounded-2xl border bg-card p-7 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_24px_50px_-30px_rgb(20_36_42/0.35)] md:p-8"
              >
                <h3 className="font-serif text-2xl font-medium md:text-3xl">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div
          data-reveal
          className="mt-20 flex flex-col items-start justify-between gap-8 rounded-2xl bg-primary p-8 text-primary-foreground md:mt-28 md:flex-row md:items-center md:p-12"
        >
          <div className="flex max-w-2xl flex-col gap-3">
            <h3 className="font-serif text-3xl leading-tight font-medium text-balance md:text-4xl">
              Tem um contrato, imóvel ou benefício para resolver?
            </h3>
            <p className="text-base leading-relaxed text-primary-foreground/75">
              Conte brevemente o seu caso. Um advogado do escritório retorna para orientar os próximos passos.
            </p>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-brass px-7 py-4 text-sm font-semibold text-basalt transition-transform duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  )
}
