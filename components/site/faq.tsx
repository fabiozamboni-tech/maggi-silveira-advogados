import { Plus } from 'lucide-react'
import { TextGenerate } from './text-generate'

const QUESTIONS = [
  {
    q: 'Como funcionam os honorários e as formas de pagamento?',
    a: 'Os valores e as condições são apresentados de forma transparente na proposta, após a análise inicial do seu caso. Fale conosco pelo WhatsApp para entender como funciona no seu caso.',
  },
  {
    q: 'Atendem apenas em Torres?',
    a: 'Nosso escritório está em Torres, mas atendemos clientes de toda a região do Litoral Norte e Serra Gaúcha, inclusive com reuniões online.',
  },
  {
    q: 'Quanto tempo leva para resolver meu processo?',
    a: 'O prazo varia conforme a complexidade do caso e a movimentação do tribunal. Nosso compromisso é com a agilidade dentro do que a lei permite e manter você informado.',
  },
  {
    q: 'Preciso levar quais documentos para a primeira consulta?',
    a: 'Leve os documentos relacionados ao problema (contratos, notificações, documentos pessoais). Se não tiver tudo, não se preocupe, orientaremos sobre o que é essencial.',
  },
]

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-background pb-24 md:pb-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <TextGenerate
            id="faq-title"
            text="Dúvidas Frequentes"
            className="font-serif text-4xl leading-[1.05] font-medium tracking-tight opacity-0 md:text-6xl"
          />
        </div>
        <div className="flex flex-col border-t lg:col-span-7 lg:col-start-6">
          {QUESTIONS.map((item) => (
            <details key={item.q} data-reveal className="group border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-serif text-xl font-medium md:text-2xl [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-open:rotate-45 group-open:border-brass group-open:text-brass">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-base leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
