'use client'

import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

const AREAS = ['Direito Imobiliário', 'Direito Cível e Contratual', 'Direito Previdenciário', 'Outro assunto']

type Errors = Partial<Record<'name' | 'phone' | 'message' | 'consent', string>>

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function ContactForm() {
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const area = String(data.get('area') ?? '')
    const message = String(data.get('message') ?? '').trim()
    const consent = data.get('consent') === 'on'
    const digits = phone.replace(/\D/g, '')

    const next: Errors = {}
    if (name.length < 2) next.name = 'Informe seu nome.'
    if (digits.length < 10) next.phone = 'Informe um WhatsApp válido com DDD.'
    if (message.length < 10) next.message = 'Descreva brevemente sua necessidade.'
    if (!consent) next.consent = 'É necessário autorizar o contato.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const text = `Olá, meu nome é ${name.slice(0, 80)}.\nÁrea: ${area}\nWhatsApp: ${formatPhone(digits)}\n\n${message.slice(0, 800)}`
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
    setSent(true)
    event.currentTarget.reset()
    setPhone('')
  }

  const fieldClass =
    'w-full rounded-lg border border-input bg-background px-4 py-3.5 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brass focus:ring-2 focus:ring-brass/30'

  return (
    <form
      data-reveal
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border bg-card p-6 md:p-9"
      aria-describedby="form-note"
    >
      <h3 className="font-serif text-3xl font-medium">Conte-nos sobre o seu caso</h3>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nome
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            maxLength={80}
            className={cn(fieldClass, errors.name && 'border-destructive')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(51) 90000-0000"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className={cn(fieldClass, errors.phone && 'border-destructive')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-destructive">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="area" className="text-sm font-medium">
          Área de interesse
        </label>
        <select id="area" name="area" className={fieldClass} defaultValue={AREAS[0]}>
          {AREAS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={800}
          className={cn(fieldClass, 'resize-none', errors.message && 'border-destructive')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 size-4 shrink-0 accent-[var(--brass)]"
            aria-invalid={Boolean(errors.consent)}
          />
          Autorizo o contato do escritório para tratar da minha solicitação, conforme o aviso de privacidade (LGPD).
        </label>
        {errors.consent && <p className="text-sm text-destructive">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
      >
        <Send className="size-4" aria-hidden="true" />
        Enviar pelo WhatsApp
      </button>

      <p id="form-note" className="text-xs leading-relaxed text-muted-foreground" role="status" aria-live="polite">
        {sent
          ? 'Abrimos o WhatsApp com sua mensagem pronta. Basta tocar em enviar.'
          : 'Ao enviar, sua mensagem será aberta no WhatsApp do escritório.'}
      </p>
    </form>
  )
}
