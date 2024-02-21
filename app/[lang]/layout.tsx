import './globals.css'
import type { Metadata } from 'next'
import { supportedLanguages } from '@/i18n.config'
import Header from './components/header'

import { Inter } from 'next/font/google'
import { Locale } from '@/constants/languages'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crowd Funding App',
  description: 'Crowd Funding App'
}

export async function generateStaticParams() {
  return supportedLanguages.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html
      lang={params.lang.toString()}
      dir={params.lang.toString() === 'ar' ? 'rtl' : 'ltr'}
    >
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  )
}
