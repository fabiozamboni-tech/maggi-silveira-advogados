import { SmoothScroll } from '@/components/site/smooth-scroll'
import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { IrisInterstitial } from '@/components/site/iris-interstitial'
import { PracticeAreas } from '@/components/site/practice-areas'
import { Differentials } from '@/components/site/differentials'
import { Process } from '@/components/site/process'
import { Trust } from '@/components/site/trust'
import { Faq } from '@/components/site/faq'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { FloatingWhatsapp } from '@/components/site/floating-whatsapp'
import { CookieNotice } from '@/components/site/cookie-notice'
import { ScrollEffects } from '@/components/site/scroll-effects'

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-brass focus:px-5 focus:py-3 focus:text-basalt"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <IrisInterstitial />
        <PracticeAreas />
        <Differentials />
        <Process />
        <Trust />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
      <CookieNotice />
      <ScrollEffects />
    </>
  )
}
