import Link from "next/link"
import { Locale } from "@/constants/languages"
import { Typography } from "@material-tailwind/react"

export default function NavList({ lang, navigation }: { lang: Locale, navigation: any }) {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-6 lg:mx-3 w-full">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href={`/${lang}`}>{navigation.home}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href={`/${lang}/events`}>{navigation.events}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href={`/${lang}/about`}>{navigation.about}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
       <Link href={`/${lang}/contact`}>{navigation.contact}</Link>
      </Typography>
    </ul>




    // <header className="flex-center h-12 bg-primary-500">
    //   <nav className="container flex items-center justify-between">
    //     <ul className="flex gap-x-8">
    //       <li>
    //         <Link href={`/${lang}`}>{navigation.home}</Link>
    //       </li>
    //       <li>
    //         <Link href={`/${lang}/about`}>{navigation.about}</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  )
}
