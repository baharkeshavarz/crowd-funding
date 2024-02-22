import "./globals.css"
import type { Metadata } from "next"
import { supportedLanguages } from "@/i18n.config"
import { Locale } from "@/constants/languages"
import { Roboto } from "next/font/google"
import { Noto_Sans_Arabic } from "next/font/google"
import Image from "next/image"

// Handle the font family
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500"],
  variable: "--font-roboto"
})
const noto_arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-notoSansArabic"
})

export const metadata: Metadata = {
  title: "Crowd Funding App",
  description: "Crowd Funding App",
  icons: {
    icon: "/assets/images/site-logo.svg"
  }
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
      dir={params.lang.toString() === "ar" ? "rtl" : "ltr"}
    >
      <body
        className={
          params.lang.toString() === "ar"
            ? noto_arabic.className
            : roboto.className
        }
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
