import BreadcrumbsComponent from "@/components/layout/breadcrumbs"
import NavbarWithMegaMenu from "@/components/layout/navbar"
import { getDictionary } from "@/lib/locale"
import Footer from "@/components/footer"
import { ChildrenLocalProps } from "@/types"

export default async function MainLayout({
  children,
  params
}: ChildrenLocalProps) {

  const translation = await getDictionary(params.lang);
  return (
        <main>
           <NavbarWithMegaMenu lang={params.lang} t={translation}/>
           <BreadcrumbsComponent/>
           {children}
           <Footer/>
        </main>
  )
}
