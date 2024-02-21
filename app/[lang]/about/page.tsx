import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/locale'

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24 '>
      <div className=''>
        <h1 className='background-test h2-bold'>{page.about.title}</h1>
        <p className='text-gray-500'>{page.about.description}</p>
      </div>
    </section>
  )
}
