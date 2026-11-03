'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let lenis: Lenis | null = null
    let tick: ((time: number) => void) | null = null

    if (!reduceMotion) {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true, autoRaf: false })
      lenis.on('scroll', ScrollTrigger.update)
      tick = (time: number) => lenis?.raf(time * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
    }

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return
      const target = document.querySelector(hash)
      if (!target) return
      event.preventDefault()
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.6 })
      } else {
        target.scrollIntoView()
      }
      history.replaceState(null, '', hash)
    }

    document.addEventListener('click', onClick)
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)

    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('load', refresh)
      if (tick) gsap.ticker.remove(tick)
      lenis?.destroy()
    }
  }, [])

  return null
}
