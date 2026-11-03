'use client'

import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { NAV_LINKS, SITE, whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isSolid = solid || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500',
        isSolid
          ? 'bg-background/90 text-foreground shadow-[0_1px_0_0_var(--border)] backdrop-blur-md'
          : 'bg-transparent text-primary-foreground',
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <a href="#inicio" className="flex flex-col leading-none" aria-label={`${SITE.fullName} — voltar ao início`}>
          <span className="font-serif text-2xl font-medium tracking-tight md:text-[1.7rem]">
            Maggi <span className="text-brass">&amp;</span> Silveira
          </span>
          <span className="mt-1 text-[0.68rem] uppercase tracking-[0.28em] opacity-75">Advogados Associados</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-2 opacity-85 transition-opacity after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-brass after:transition-transform hover:opacity-100 hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:inline-flex',
              isSolid
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-primary-foreground text-primary hover:bg-primary-foreground/90',
            )}
          >
            Falar com um Advogado
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex size-11 items-center justify-center rounded-full border border-current/25 sm:hidden"
            aria-label={`Ligar para ${SITE.phoneDisplay}`}
          >
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-current/25 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navegação móvel"
        className={cn(
          'overflow-hidden bg-background transition-[max-height] duration-500 lg:hidden',
          open ? 'max-h-[28rem]' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-5 pb-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b py-4 font-serif text-2xl"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              Falar com um Advogado
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
