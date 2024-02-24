import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/locale"
import Header from "../../components/layout/header"
import Sliders from "@/components/layout/sliders"
import Footer from "@/components/footer"
import  StickyNavbar from "@/components/layout/navbar"

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className="mt-0 w-ull max-h-screen overflow-scroll">
      {/* <Header lang={lang} /> */}
      {/* <NavBar lang={lang} /> */}
      <StickyNavbar/>
      <Sliders />
      <div className="container">
        <h1 className="text-3xl font-bold">{page.home.title}</h1>
        <p className="text-gray-500">{page.home.description}</p>
      </div>
      <Footer />
    </div>
  )
}
