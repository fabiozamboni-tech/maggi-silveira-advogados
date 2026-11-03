import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { SITE } from '@/lib/site'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maggi & Silveira Advogados | Advogado em Torres RS | Imobiliário e Cível',
  description:
    'Escritório de advocacia em Torres/RS. Especialistas em Direito Imobiliário, Cível e Previdenciário. Atendimento próximo e rigor técnico. Fale conosco: (51) 99920-4815.',
  keywords: [
    'Advogado Torres RS',
    'Escritório de Advocacia Litoral Norte',
    'Advogado Imobiliário Torres',
    'Advogado Previdenciário Serra Gaúcha',
    'Consultoria Jurídica Torres',
    'Regularização de imóveis Torres',
    'Inventário Torres RS',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#14242a',
  colorScheme: 'light',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: SITE.fullName,
  telephone: '+55 51 99920-4815',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Nossa Sra. dos Navegantes, 130 - Lj 05 - Igra Sul',
    addressLocality: 'Torres',
    addressRegion: 'RS',
    postalCode: '95560-000',
    addressCountry: 'BR',
  },
  areaServed: ['Torres', 'Litoral Norte gaúcho', 'Serra Gaúcha'],
  knowsAbout: ['Direito Imobiliário', 'Direito Cível', 'Direito Previdenciário'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable} bg-background`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
