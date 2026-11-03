'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowDown, MessageCircle } from 'lucide-react'
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
        gsap.fromTo(
          '[data-hero-fade]',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.14, delay: 0.9 },
        )
        gsap.fromTo('.hero-media', { scale: 1.12 }, { scale: 1, duration: 2.4, ease: 'power2.out' })

        gsap.to('.mist-a', { xPercent: 8, duration: 16, ease: 'sine.inOut', yoyo: true, repeat: -1 })
        gsap.to('.mist-b', { xPercent: -10, duration: 22, ease: 'sine.inOut', yoyo: true, repeat: -1 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=130%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        })

        tl.to('.hero-zoom', { scale: 2.5, ease: 'none', force3D: true }, 0)
          .to('.hero-content', { yPercent: -30, opacity: 0, filter: 'blur(8px)', ease: 'power1.in' }, 0)
          .to('.hero-outline', { xPercent: -18, ease: 'none' }, 0)
          .to('.hero-texture', { yPercent: 12, ease: 'none' }, 0)
          .to('.mist-layer-a', { yPercent: -25, opacity: 0.9, ease: 'none' }, 0)
          .to('.mist-layer-b', { yPercent: -55, opacity: 1, ease: 'none' }, 0)
          .to('.hero-veil', { opacity: 1, ease: 'power2.in' }, 0.55)
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
      className="relative h-svh min-h-[640px] w-full overflow-hidden bg-basalt text-primary-foreground"
    >
      <div className="hero-texture grain pointer-events-none absolute -inset-y-20 inset-x-0 z-0 opacity-[0.07]" aria-hidden="true" />

      <div className="hero-zoom absolute inset-0 z-[1] origin-[68%_46%] will-change-transform">
        <div className="hero-media absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Sala do escritório com mesa de madeira, livros jurídicos e janela voltada para as falésias de basalto do litoral de Torres"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
        </div>
      </div>

      <div
        className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgb(20_36_42/0.92)_0%,rgb(20_36_42/0.7)_42%,rgb(20_36_42/0.15)_100%)] max-md:bg-basalt/70"
        aria-hidden="true"
      />

      <Spotlight className="-left-10 -top-40 md:-left-32 md:-top-20" />

      <div className="mist-layer-a pointer-events-none absolute inset-x-[-10%] bottom-[-10%] z-[3] h-[70%] opacity-40 mix-blend-screen" aria-hidden="true">
        <div className="mist-a relative h-full w-full">
          <Image src="/images/mist.png" alt="" fill sizes="120vw" className="object-cover" />
        </div>
      </div>
      <div className="mist-layer-b pointer-events-none absolute inset-x-[-15%] bottom-[-35%] z-[4] h-[80%] opacity-25 mix-blend-screen" aria-hidden="true">
        <div className="mist-b relative h-full w-full">
          <Image src="/images/mist.png" alt="" fill sizes="130vw" className="scale-x-[-1] object-cover" />
        </div>
      </div>

      <p
        aria-hidden="true"
        className="hero-outline pointer-events-none absolute bottom-[6%] left-[4%] z-[5] whitespace-nowrap font-serif text-[22vw] leading-none italic text-primary-foreground/[0.06] md:text-[15vw]"
      >
        Litoral Norte
      </p>

      <div className="hero-content relative z-[6] mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-24 pb-16 md:px-8">
        <div className="flex max-w-3xl flex-col gap-7">
          <TextGenerate
            id="hero-title"
            as="h1"
            immediate
            delay={0.25}
            text="Segurança Jurídica com Agilidade e Proximidade no Litoral Norte."
            className="font-serif text-[2.6rem] leading-[1.05] font-medium tracking-tight opacity-0 sm:text-6xl lg:text-[5.2rem]"
          />
          <p data-hero-fade className="max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            Assessoria especializada em Direito Cível, Imobiliário e Previdenciário para pessoas e empresas em Torres e
            região.
          </p>
          <p data-hero-fade className="flex items-center gap-3 text-sm text-primary-foreground/70">
            <span className="h-px w-10 bg-brass" aria-hidden="true" />
            Atendimento humanizado e rigor técnico para proteger seus direitos e investimentos.
          </p>
          <div data-hero-fade className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brass px-7 py-4 text-sm font-semibold text-basalt transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Agendar Consulta via WhatsApp
            </a>
            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
            >
              Conhecer nossas áreas de atuação
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-veil pointer-events-none absolute inset-0 z-[7] bg-background opacity-0" aria-hidden="true" />
    </section>
  )
}
