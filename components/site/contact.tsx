import { Clock, MapPin, Phone } from 'lucide-react'
import { TextGenerate } from './text-generate'
import { ContactForm } from './contact-form'
import { MAPS_EMBED, MAPS_LINK, SITE } from '@/lib/site'

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-secondary py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <TextGenerate
            id="contato-title"
            text="Fale com um Especialista"
            className="font-serif text-4xl leading-[1.05] font-medium tracking-tight opacity-0 md:text-6xl"
          />
          <p data-reveal className="text-lg leading-relaxed text-muted-foreground">
            Estamos prontos para analisar o seu caso e oferecer a melhor orientação jurídica.
          </p>

          <ul data-reveal className="flex flex-col border-t">
            <li className="flex gap-4 border-b py-5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Endereço</span>
                <address className="not-italic leading-relaxed">
                  {SITE.address}
                  <br />
                  {SITE.city}, {SITE.zip}
                </address>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-sm font-semibold underline decoration-brass underline-offset-4"
                >
                  Como chegar
                </a>
              </div>
            </li>
            <li className="flex gap-4 border-b py-5">
              <Phone className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Telefone / WhatsApp</span>
                <a href={SITE.phoneHref} className="font-serif text-2xl transition-colors hover:text-brass">
                  {SITE.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-4 border-b py-5">
              <Clock className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Atendimento</span>
                <p className="leading-relaxed">Presencial em Torres ou online para todo o Litoral Norte e Serra Gaúcha.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
          <ContactForm />
          <div data-reveal className="overflow-hidden rounded-2xl border bg-card">
            <iframe
              title={`Mapa: ${SITE.fullName}, ${SITE.address}, ${SITE.city}`}
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full grayscale-[0.6]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
