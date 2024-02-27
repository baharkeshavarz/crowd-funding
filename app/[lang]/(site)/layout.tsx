import BreadcrumbsComponent from "@/components/layout/breadcrumbs"
import NavbarWithMegaMenu from "@/components/layout/navbar"
import { getDictionary } from "@/lib/locale"
import { Locale } from "@/i18n.config"
import Footer from "@/components/footer"

export default async function MainLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: Locale }
 }) {
 const { navigation } = await getDictionary(params.lang);
 return (
        <main>
           <NavbarWithMegaMenu lang={params.lang} navigation={navigation}/>
           <BreadcrumbsComponent/>
           {children}
           <Footer/>
        </main>
  )
}
