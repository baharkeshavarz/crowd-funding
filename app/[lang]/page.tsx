import { Locale } from "@/i18n.config"
import Sliders from "@/components/layout/sliders"
import Footer from "@/components/footer"
import { getDictionary } from "@/lib/locale"
import NavBar from "@/components/layout/nav/navbar"

const Home = async({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
 
  const { navigation } = await getDictionary(lang);

  return (
    <div className="mt-0 w-full max-h-screen overflow-scroll">
      <NavBar lang={lang} navigation={navigation}/>
      <Sliders />
      <div className="h-96">
         data
      </div>
      <Footer />
    </div>
  )
}

export default Home;
