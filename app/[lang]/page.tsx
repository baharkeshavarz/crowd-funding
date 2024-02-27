import { Locale } from "@/i18n.config"
import Footer from "@/components/footer"
import { getDictionary } from "@/lib/locale"
import NavBar from "@/components/layout/navbar"
import HomeAbout from "@/components/home/about-us"
import CarouselWithContent from "@/components/layout/carousel"
import NavbarWithMegaMenu from "@/components/layout/navbar"

const Home = async({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {
  const { navigation } = await getDictionary(lang);

  return (
    <div className="mt-0 w-full max-h-screen overflow-scroll">
      <NavbarWithMegaMenu lang={lang} navigation={navigation}/>
      <CarouselWithContent />
      <HomeAbout/>
      <Footer />
    </div>
  )
}

export default Home;
