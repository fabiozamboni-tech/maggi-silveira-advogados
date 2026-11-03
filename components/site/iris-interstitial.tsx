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

        tl.to('.iris-title-a', { opacity: 0, filter: 'blur(14px)', letterSpacing: '0.18em', scale: 1.06, ease: 'power1.in', duration: 1 }, 0.2)
          .to('.iris-stage', { clipPath: 'circle(75% at 50% 50%)', ease: 'power2.inOut', duration: 1.4 }, 0.35)
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
      className="relative h-svh min-h-[560px] w-full overflow-hidden bg-secondary"
    >
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p className="iris-title-a max-w-5xl text-center font-serif text-4xl leading-tight font-medium tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl">
          Cada caso carrega a sua própria complexidade.
        </p>
      </div>

      <div className="iris-stage absolute inset-0 overflow-hidden bg-basalt text-primary-foreground">
        <div className="iris-image absolute inset-0">
          <Image
            src="/images/team-lawyers.jpg"
            alt="Equipe de cinco advogados associados em gabinete executivo de advocacia"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
        </div>
        <div className="absolute inset-0 bg-basalt/60" aria-hidden="true" />
        <div className="relative flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
          <p className="iris-title-b max-w-5xl font-serif text-4xl leading-tight font-medium tracking-tight text-balance md:text-6xl lg:text-7xl">
            Nós a transformamos em soluções <em className="text-brass">claras e eficientes.</em>
          </p>
        </div>
      </div>
    </section>
  )
}
