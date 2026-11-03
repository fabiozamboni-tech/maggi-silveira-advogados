'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function IrisInterstitial() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set('.iris-stage', { clipPath: 'circle(0% at 50% 50%)' })
        gsap.set('.iris-title-b', { opacity: 0, scale: 0.82, filter: 'blur(14px)' })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=180%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        })

        tl.to('.iris-title-a', { opacity: 0, filter: 'blur(14px)', letterSpacing: '0.12em', scale: 1.05, ease: 'power1.in', duration: 0.9 }, 0.15)
          .to('.iris-bg-a', { scale: 1.15, filter: 'blur(4px)', ease: 'none', duration: 1.6 }, 0.15)
          .to('.iris-stage', { clipPath: 'circle(85% at 50% 50%)', ease: 'power2.inOut', duration: 1.4 }, 0.35)
          .fromTo('.iris-image', { scale: 1.35 }, { scale: 1, ease: 'none', duration: 2.2 }, 0.35)
          .to('.iris-title-b', { opacity: 1, scale: 1, filter: 'blur(0px)', ease: 'power2.out', duration: 1 }, 1.05)
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      aria-label="Nossa missão"
      className="relative h-svh min-h-[560px] w-full overflow-hidden bg-basalt text-primary-foreground"
    >
      {/* Estágio 1: Imagem da Complexidade dos Casos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="iris-bg-a absolute inset-0 will-change-transform">
          <Image
            src="/images/legal-complexity.jpg"
            alt="Biblioteca jurídica clássica com livros e dossiers de casos"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-basalt/65 backdrop-brightness-90" aria-hidden="true" />
        <div className="relative flex h-full items-center justify-center px-6">
          <p className="iris-title-a max-w-5xl text-center font-serif text-4xl leading-tight font-medium tracking-tight text-balance text-[#fbf9f5] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] md:text-6xl lg:text-7xl">
            Cada caso carrega a sua própria complexidade.
          </p>
        </div>
      </div>

      {/* Estágio 2: Expansão Circular revelando a Equipe de Advogados e a Solução */}
      <div className="iris-stage absolute inset-0 overflow-hidden bg-basalt text-primary-foreground will-change-[clip-path]">
        <div className="iris-image absolute inset-0 will-change-transform">
          <Image
            src="/images/team-lawyers.jpg"
            alt="Equipe de advogados associados em gabinete executivo de advocacia"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,28,34,0.76)_0%,rgba(15,28,34,0.92)_100%)]" aria-hidden="true" />
        <div className="relative flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
          <p className="iris-title-b max-w-5xl font-serif text-4xl leading-tight font-medium tracking-tight text-balance text-[#fbf9f5] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] md:text-6xl lg:text-7xl">
            Nós a transformamos em soluções <em className="text-brass-light not-italic font-normal">claras e eficientes.</em>
          </p>
        </div>
      </div>
    </section>
  )
}
