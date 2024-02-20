'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { humanReadableLanguage, i18n, supportedLanguages } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <>
      <ul className='flex gap-x-3'>
        {supportedLanguages.map(locale => {
          return (
            <li key={locale}>
              <Link
                href={redirectedPathName(locale)}
                className='rounded-md border bg-black px-3 py-2 text-white'
              >
                {locale} {humanReadableLanguage(locale)}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
