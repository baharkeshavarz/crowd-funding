import { Locale } from "@/i18n.config"
import Sliders from "@/components/layout/sliders"
import Footer from "@/components/footer"
import StickyNavbar from "@/components/layout/nav/sticky-navbar"

export default function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  return (
    <div className="mt-0 w-full max-h-screen overflow-scroll">
      <StickyNavbar lang={lang}/>
      <Sliders />
      <div className="h-96">
         data
      </div>
      <Footer />
    </div>
  )
}
