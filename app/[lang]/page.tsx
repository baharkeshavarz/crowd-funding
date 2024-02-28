import Footer from "@/components/footer"
import { getDictionary } from "@/lib/locale"
import HomeAbout from "@/components/home/about-us"
import CarouselWithContent from "@/components/layout/carousel"
import NavbarWithMegaMenu from "@/components/layout/navbar"
import { LocalProps } from "@/types"

const Home = async({
  params: { lang },
}: LocalProps) => {

  const translation = await getDictionary(lang);
  return (
    <div className="mt-0 w-full max-h-screen overflow-scroll">
        <NavbarWithMegaMenu lang={lang} t={translation}/>
        <CarouselWithContent />
        <HomeAbout/>
        <Footer />
    </div>
  )
}

export default Home;
