'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowDown, MessageCircle, ShieldCheck, Scale, Award } from 'lucide-react'
import { TextGenerate } from './text-generate'
import { Spotlight } from './spotlight'
import { whatsappLink } from '@/lib/site'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Entrance animation
        gsap.fromTo(
          '[data-hero-fade]',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.8 },
        )
        gsap.fromTo('.hero-media', { scale: 1.08 }, { scale: 1, duration: 2.4, ease: 'power2.out' })

        // Scroll timeline: cinematic depth & smooth elevation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        })

        tl.to(
          '.hero-media',
          {
            scale: 1.15,
            yPercent: 6,
            ease: 'none',
            force3D: true,
          },
          0,
        )
          .to(
            '.hero-content',
            {
              yPercent: -22,
              opacity: 0,
              ease: 'power2.in',
            },
            0,
          )
          .to(
            '.hero-outline',
            {
              xPercent: -12,
              opacity: 0,
              ease: 'none',
            },
            0,
          )
          .to(
            '.hero-trust-bar',
            {
              yPercent: 30,
              opacity: 0,
              ease: 'power2.in',
            },
            0,
          )
          .to(
            '.hero-overlay',
            {
              backgroundColor: 'rgba(20, 36, 42, 0.85)',
              ease: 'none',
            },
            0,
          )
          .to(
            '.hero-veil',
            {
              opacity: 1,
              ease: 'power1.inOut',
            },
            0.5,
          )
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section
      id="inicio"
      ref={root}
      aria-labelledby="hero-title"
      className="relative h-svh min-h-[680px] w-full overflow-hidden bg-basalt text-primary-foreground"
    >
      <div className="hero-texture grain pointer-events-none absolute -inset-y-20 inset-x-0 z-0 opacity-[0.06]" aria-hidden="true" />

      {/* Background Law Firm Image with smooth Parallax Depth */}
      <div className="absolute inset-0 z-[1] will-change-transform">
        <div className="hero-media relative h-full w-full">
          <Image
            src="/images/hero-law-firm.jpg"
            alt="Gabinete executivo de advocacia com mesa em madeira nobre, livros jurídicos, detalhes em latão e iluminação refinada"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
        </div>
      </div>

      {/* Refined gradient overlay for legal authority & crystal text contrast */}
      <div
        className="hero-overlay absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgb(20_36_42/0.95)_0%,rgb(20_36_42/0.82)_45%,rgb(20_36_42/0.3)_100%)] transition-colors duration-500 max-md:bg-basalt/85"
        aria-hidden="true"
      />

      <Spotlight className="-left-10 -top-40 md:-left-32 md:-top-20" />

      {/* Architectural typographic watermark */}
      <p
        aria-hidden="true"
        className="hero-outline pointer-events-none absolute bottom-[8%] left-[3%] z-[3] select-none whitespace-nowrap font-serif text-[18vw] leading-none italic text-primary-foreground/[0.04] transition-opacity md:text-[13vw]"
      >
        Maggi &amp; Silveira
      </p>

      {/* Hero Central Content */}
      <div className="hero-content relative z-[5] mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-20 pb-20 md:px-8">
        <div className="flex max-w-3xl flex-col gap-7">
          <div data-hero-fade className="inline-flex items-center gap-2 self-start rounded-full border border-brass/40 bg-basalt/60 px-4 py-1.5 text-xs font-medium tracking-wide text-brass backdrop-blur-md">
            <Scale className="size-3.5" aria-hidden="true" />
            <span>Advocacia Estratégica &amp; Consultoria Jurídica</span>
          </div>

          <TextGenerate
            id="hero-title"
            as="h1"
            immediate
            delay={0.2}
            text="Segurança Jurídica com Agilidade e Proximidade no Litoral Norte."
            className="font-serif text-[2.6rem] leading-[1.05] font-medium tracking-tight opacity-0 sm:text-6xl lg:text-[5.1rem]"
          />

          <p data-hero-fade className="max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            Assessoria especializada em Direito Cível, Imobiliário e Previdenciário para pessoas e empresas em Torres e
            região.
          </p>

          <p data-hero-fade className="flex items-center gap-3 text-sm text-primary-foreground/75">
            <span className="h-px w-10 bg-brass" aria-hidden="true" />
            Atendimento humanizado e rigor técnico para proteger seus direitos e investimentos.
          </p>

          <div data-hero-fade className="flex flex-col gap-3.5 pt-2 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brass px-7 py-4 text-sm font-semibold text-basalt shadow-lg shadow-brass/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass/90 hover:shadow-xl hover:shadow-brass/30"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Agendar Consulta via WhatsApp
            </a>
            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/25 bg-basalt/30 px-7 py-4 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/50 hover:bg-primary-foreground/10"
            >
              Conhecer nossas áreas de atuação
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Institutional Trust Indicators */}
      <div className="hero-trust-bar absolute bottom-6 inset-x-0 z-[5] hidden md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 text-xs text-primary-foreground/60">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-brass" aria-hidden="true" />
              Sigilo Absoluto &amp; Rigor Ético
            </span>
            <span className="h-3 w-px bg-primary-foreground/20" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <Award className="size-4 text-brass" aria-hidden="true" />
              Atuação em Torres, Litoral Norte e Serra Gaúcha
            </span>
          </div>

          <a
            href="#sobre"
            className="group flex items-center gap-2 text-primary-foreground/50 transition-colors hover:text-brass"
          >
            <span>Role para conhecer</span>
            <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Smooth transition veil into next section */}
      <div className="hero-veil pointer-events-none absolute inset-0 z-[7] bg-background opacity-0" aria-hidden="true" />
    </section>
  )
}
