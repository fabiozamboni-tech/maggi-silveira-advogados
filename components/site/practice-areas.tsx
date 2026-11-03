import { ArrowUpRight, FileSignature, KeyRound, ShieldCheck, type LucideIcon } from 'lucide-react'
import { TextGenerate } from './text-generate'
import { whatsappLink } from '@/lib/site'

type Area = {
  title: string
  icon: LucideIcon
  description: string
  benefit: string
  topics: string[]
  link: string
  message: string
}

const AREAS: Area[] = [
  {
    title: 'Direito Imobiliário',
    icon: KeyRound,
    description:
      'Regularização de imóveis, análise de contratos de compra e venda, usucapião, ações de despejo e assessoria para incorporadoras e construtoras.',
    benefit: 'Compre, venda e regularize com a documentação em ordem e o patrimônio protegido.',
    topics: ['Regularização', 'Compra e venda', 'Usucapião', 'Despejo', 'Incorporadoras'],
    link: 'Saiba mais sobre Imobiliário',
    message: 'Olá, gostaria de falar sobre uma questão de Direito Imobiliário.',
  },
  {
    title: 'Direito Cível e Contratual',
    icon: FileSignature,
    description:
      'Recuperação de créditos, resolução de conflitos contratuais, responsabilidade civil e assessoria empresarial preventiva.',
    benefit: 'Contratos mais seguros e conflitos conduzidos com estratégia, antes que virem passivo.',
    topics: ['Recuperação de créditos', 'Conflitos contratuais', 'Responsabilidade civil', 'Assessoria preventiva'],
    link: 'Saiba mais sobre Cível',
    message: 'Olá, gostaria de falar sobre uma questão de Direito Cível.',
  },
  {
    title: 'Direito Previdenciário',
    icon: ShieldCheck,
    description:
      'Aposentadorias, revisões de benefícios, auxílios por incapacidade e planejamento previdenciário para garantir sua tranquilidade futura.',
    benefit: 'Entenda seus direitos junto ao INSS e planeje o futuro com clareza.',
    topics: ['Aposentadorias', 'Revisões', 'Auxílios por incapacidade', 'Planejamento'],
    link: 'Saiba mais sobre Previdenciário',
    message: 'Olá, gostaria de falar sobre uma questão de Direito Previdenciário.',
  },
]

export function PracticeAreas() {
  return (
    <section id="areas" aria-labelledby="areas-title" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <TextGenerate
            id="areas-title"
            text="Como Podemos Ajudar Você?"
            className="max-w-2xl font-serif text-4xl leading-[1.05] font-medium tracking-tight opacity-0 md:text-6xl"
          />
          <p data-reveal className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-lg">
            Soluções jurídicas sob medida para sua realidade.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
          {AREAS.map((area) => {
            const Icon = area.icon
            return (
              <li key={area.title} data-reveal className="h-full">
                <article className="group flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-7 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-brass/50 hover:shadow-[0_30px_60px_-30px_rgb(20_36_42/0.35)] md:p-8">
                  <span className="flex size-14 items-center justify-center rounded-full bg-primary text-brass transition-transform duration-500 group-hover:rotate-[-8deg]">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-3xl leading-tight font-medium">{area.title}</h3>
                  <p className="text-base leading-relaxed font-medium text-foreground">{area.benefit}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                  <a
                    href={whatsappLink(area.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 border-t pt-5 text-sm font-semibold transition-colors group-hover:text-brass"
                  >
                    {area.link}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
