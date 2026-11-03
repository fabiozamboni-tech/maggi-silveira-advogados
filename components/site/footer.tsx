import { NAV_LINKS, SITE, whatsappLink } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="flex flex-col gap-4 md:col-span-5">
          <p className="font-serif text-3xl font-medium">
            Maggi <span className="text-brass">&amp;</span> Silveira
          </p>
          <p className="text-xs tracking-[0.28em] text-primary-foreground/60 uppercase">Advogados Associados</p>
          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Direito Cível, Imobiliário e Previdenciário em Torres/RS, para o Litoral Norte e a Serra Gaúcha.
          </p>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <ul className="flex flex-col gap-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-primary-foreground/75 transition-colors hover:text-brass">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 text-sm md:col-span-4">
          <address className="not-italic leading-relaxed text-primary-foreground/75">
            {SITE.address}
            <br />
            {SITE.city}, {SITE.zip}
          </address>
          <a href={SITE.phoneHref} className="font-serif text-2xl transition-colors hover:text-brass">
            {SITE.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-primary-foreground/75 underline decoration-brass underline-offset-4 hover:text-brass"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs leading-relaxed text-primary-foreground/60 md:px-8">
          <details id="privacidade" className="group">
            <summary className="w-fit cursor-pointer list-none underline underline-offset-4 hover:text-brass [&::-webkit-details-marker]:hidden">
              Aviso de privacidade (LGPD)
            </summary>
            <p className="mt-3 max-w-3xl">
              Os dados informados no formulário (nome, WhatsApp e mensagem) são usados exclusivamente para responder à sua
              solicitação e não são compartilhados com terceiros. O envio ocorre diretamente pelo WhatsApp. Você pode
              solicitar a exclusão dos seus dados a qualquer momento pelos nossos canais de contato.
            </p>
          </details>
          <p>
            &copy; {year} {SITE.fullName}. Conteúdo informativo, em conformidade com o Código de Ética e Disciplina da
            OAB. Não constitui promessa de resultado.
          </p>
        </div>
      </div>
    </footer>
  )
}
