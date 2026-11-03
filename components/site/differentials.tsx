import Image from 'next/image'
import { CalendarCheck, Handshake, Scale, type LucideIcon } from 'lucide-react'
import { TextGenerate } from './text-generate'
import { whatsappLink } from '@/lib/site'

const ITEMS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Pontualidade Rigorosa',
    text: 'Respeitamos os prazos processuais e de entrega de pareceres. Você sabe exatamente o que esperar e quando.',
    icon: CalendarCheck,
  },
  {
    title: 'Suporte Técnico Qualificado',
    text: 'Nossa equipe mantém-se atualizada com as mudanças legislativas, garantindo que sua estratégia seja sempre a mais vantajosa.',
    icon: Scale,
  },
  {
    title: 'Atendimento Próximo',
    text: 'Não somos apenas um escritório. Estamos aqui para ouvir, explicar e caminhar junto com você na defesa dos seus direitos.',
    icon: Handshake,
  },
]

export function Differentials() {
  return (
    <section
      aria-labelledby="diferenciais-title"
      className="relative overflow-hidden bg-warm-beige py-24 text-warm-beige-foreground md:py-36"
    >
      <div data-parallax="-18" className="grain pointer-events-none absolute -inset-y-40 inset-x-0 opacity-[0.04]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <TextGenerate
            id="diferenciais-title"
            text="Segurança e Clareza em Cada Etapa"
            className="font-serif text-4xl leading-[1.05] font-medium tracking-tight opacity-0 md:text-6xl text-warm-beige-foreground"
          />
          <p data-reveal className="max-w-md text-lg leading-relaxed text-warm-beige-foreground/80">
            Sabemos que buscar ajuda jurídica pode gerar dúvidas. Por isso, nosso compromisso é com a transparência e a
            eficiência.
          </p>
          <div data-reveal className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-warm-beige-foreground/10 shadow-2xl lg:block">
            <div data-parallax="14" className="absolute -inset-y-[15%] inset-x-0">
              <Image
                src="/images/contract.png"
                alt="Assinatura de contrato de compra e venda de imóvel com chaves sobre o documento"
                fill
                loading="lazy"
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:col-span-6 lg:col-start-7">
          <ul className="flex flex-col">
            {ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <li
                  key={item.title}
                  data-reveal
                  className="flex gap-6 border-t border-warm-beige-foreground/15 py-10 last:border-b"
                >
                  <Icon className="mt-1 size-6 shrink-0 text-[#9c783e]" aria-hidden="true" />
                  <div className="flex flex-col gap-3">
                    <h3 className="font-serif text-3xl font-medium text-warm-beige-foreground">{item.title}</h3>
                    <p className="text-base leading-relaxed text-warm-beige-foreground/80">{item.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
          <div data-reveal className="pt-10">
            <a
              href={whatsappLink('Olá, tenho algumas dúvidas e gostaria de conversar com um advogado.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-warm-beige-foreground px-7 py-4 text-sm font-semibold text-warm-beige shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:bg-warm-beige-foreground/90"
            >
              Tire suas dúvidas agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
