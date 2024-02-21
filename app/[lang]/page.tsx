import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/locale'
import Header from '../../components/layout/header'
import Navbar from '@/components/layout/navbar'
import Sliders from '@/components/layout/sliders'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section>
      <Header lang={lang} />
      <Navbar/>
      <Sliders/>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{page.home.title}</h1>
        <p className='text-gray-500'>{page.home.description}</p>
      </div>
    </section>
  )
}
