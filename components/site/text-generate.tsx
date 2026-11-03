'use client'

import { useRef, type ElementType } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type TextGenerateProps = {
  id?: string
  text: string
  as?: ElementType
  className?: string
  delay?: number
  /** Animate on mount instead of when scrolled into view */
  immediate?: boolean
}

/**
 * Aceternity-style TextGenerateEffect driven by SplitType:
 * each word emerges from blur with a soft stagger.
 */
export function TextGenerate({ id, text, as: Tag = 'h2', className, delay = 0, immediate = false }: TextGenerateProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = new SplitType(el, { types: 'words', wordClass: 'split-word' })
        gsap.set(el, { opacity: 1 })
        gsap.fromTo(
          split.words,
          { opacity: 0, filter: 'blur(12px)', yPercent: 35 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            yPercent: 0,
            duration: 1.1,
            ease: 'power3.out',
            stagger: 0.07,
            delay,
            scrollTrigger: immediate ? undefined : { trigger: el, start: 'top 85%', once: true },
          },
        )
        return () => split.revert()
      })
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(el, { opacity: 1 })
      })
      return () => mm.revert()
    },
    { scope: ref, dependencies: [text] },
  )

  return (
    <Tag id={id} ref={ref} className={cn('text-balance', className)}>
      {text}
    </Tag>
  )
}
