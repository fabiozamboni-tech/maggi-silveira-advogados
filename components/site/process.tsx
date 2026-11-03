import { TextGenerate } from './text-generate'

const STEPS = [
  {
    title: 'Contato Inicial',
    text: 'Você entra em contato via WhatsApp ou formulário para descrever brevemente sua necessidade.',
  },
  {
    title: 'Análise do Caso',
    text: 'Nossa equipe analisa os documentos e define a melhor estratégia jurídica.',
  },
  {
    title: 'Proposta e Início',
    text: 'Apresentamos um plano de ação claro, com custos e prazos estimados.',
  },
  {
    title: 'Acompanhamento',
    text: 'Monitoramos o processo e mantemos você informado sobre cada desenvolvimento.',
  },
]

export function Process() {
  return (
    <section id="como-atuamos" aria-labelledby="processo-title" className="bg-secondary py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex max-w-2xl flex-col gap-5">
          <TextGenerate
            id="processo-title"
            text="Simples, Claro e Seguro"
            className="font-serif text-4xl leading-[1.05] font-medium tracking-tight opacity-0 md:text-6xl"
          />
          <p data-reveal className="text-lg leading-relaxed text-muted-foreground">
            Do primeiro contato ao acompanhamento do processo, você sabe em que etapa está e o que vem a seguir.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 md:mt-24 md:grid-cols-4 md:gap-6">
          <span
            className="absolute top-6 right-0 left-0 hidden h-px bg-foreground/15 md:block"
            aria-hidden="true"
          />
          {STEPS.map((step, index) => (
            <li key={step.title} data-reveal className="relative flex gap-5 md:flex-col md:gap-6">
              <span className="relative z-[1] flex size-12 shrink-0 items-center justify-center rounded-full border border-foreground/20 bg-secondary font-serif text-xl">
                <span className="sr-only">Etapa </span>
                {index + 1}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-2xl font-medium md:text-3xl">{step.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
