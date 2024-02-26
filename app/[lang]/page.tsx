import { Locale } from "@/i18n.config"
import Footer from "@/components/footer"
import { getDictionary } from "@/lib/locale"
import NavBar from "@/components/layout/nav/navbar"
import HomeAbout from "@/components/home/about-us"
import CarouselWithContent from "@/components/layout/carousel"

const Home = async({
  params: { lang }
}: {
  params: { lang: Locale }
}) => {
 
  return (
    <div className="mt-0 w-full max-h-screen overflow-scroll">
      <CarouselWithContent />
      <HomeAbout/>
    </div>
  )
}

export default Home;
