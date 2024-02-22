import Link from "next/link"
import { getDictionary } from "@/lib/locale"
import LocaleSwitcher from "./locale-switcher"
import { Locale } from "@/constants/languages"

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className="flex-center h-12 bg-primary-500">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}
