import Image from 'next/image'
import { Check } from 'lucide-react'
import { TextGenerate } from './text-generate'
import { whatsappLink } from '@/lib/site'

const DIFFERENTIALS = [
  'Atendimento personalizado e próximo.',
  'Rigor técnico e pontualidade nos prazos.',
  'Suporte qualificado para decisões estratégicas.',
]

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative overflow-hidden bg-background py-24 md:py-36">
      <div
        data-parallax="-12"
        className="grain pointer-events-none absolute -inset-y-32 inset-x-0 opacity-[0.05]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-6">
          <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-[5/6]">
            <div data-parallax="10" className="absolute -inset-y-[12%] inset-x-0">
              <Image
                src="/images/meeting.png"
                alt="Advogados do escritório explicando um documento a um casal de clientes em sala de reunião"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div
            data-reveal
            className="relative -mt-16 ml-auto mr-4 max-w-xs rounded-xl border border-primary-foreground/10 bg-primary p-6 text-primary-foreground shadow-2xl shadow-basalt/20 md:-mt-24 md:mr-[-2rem]"
          >
            <p className="font-serif text-xl leading-snug">
              No coração de Torres/RS, atendendo o Litoral Norte e a Serra Gaúcha.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 lg:col-span-5 lg:col-start-8">
          <TextGenerate
            id="sobre-title"
            text="Tradição e Inovação na Defesa dos Seus Interesses"
            className="font-serif text-4xl leading-[1.08] font-medium tracking-tight opacity-0 md:text-5xl lg:text-6xl"
          />
          <div data-reveal className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              O Maggi &amp; Silveira Advogados Associados nasceu da união de profissionais comprometidos com a
              excelência técnica e o atendimento próximo. Localizados no coração de Torres/RS, atendemos a comunidade
              local e empresas da região do Litoral Norte e Serra Gaúcha.
            </p>
            <p>
              Nossa missão é transformar a complexidade jurídica em soluções claras e eficientes. Entendemos que cada
              caso é único, por isso, dedicamos atenção individualizada a cada cliente, garantindo pontualidade nas
              entregas e transparência em todas as etapas do processo.
            </p>
          </div>
          <ul className="flex flex-col border-t">
            {DIFFERENTIALS.map((item) => (
              <li data-reveal key={item} className="flex items-center gap-4 border-b py-4 text-base font-medium">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div data-reveal>
            <a
              href={whatsappLink('Olá, gostaria de conversar com a equipe do escritório.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-brass pb-1 text-sm font-semibold transition-colors hover:text-brass"
            >
              Converse com nossa equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
