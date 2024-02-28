"use client"

import { usePathname } from "next/navigation"
import { humanReadableLanguage, supportedLanguages } from "@/i18n.config"
import { Select, Option } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LocaleSwitcherProps {
  classes?: string;
  t?: any;
}

const LocaleSwitcher = ({ classes, t }: LocaleSwitcherProps) => {
  const pathName = usePathname()
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState("");

  const redirectToLanguage = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    router.push( segments.join("/"));
  }

  const LangInfo = (locale: any) => {
    return (
      <>
        <Image src={`/assets/icons/flags/${locale}.svg`} width={21} height={21} alt={locale} className="rounded-md mx-1"/>
         {humanReadableLanguage(locale)}
      </>
    )
  }

  useEffect(() => {
    const segments = pathName.split("/")
    setSelectedLang(segments[1])
  }, [pathName])

  return (
     <div className={`mx-1 ${classes}`}>
         <Select 
            label={selectedLang ? LangInfo(selectedLang) : t.pages.general.language}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            labelProps={{
              className: "before:content-none after:content-none flex-center pt-4",
            }}
                    >
            {supportedLanguages.map(locale => 
             <Option
                key={locale} 
                value={selectedLang}
                onClick={() => redirectToLanguage(locale)}
                className="flex-start gap-x-2"
                >
               {LangInfo(locale)}
            </Option>)
          }
        </Select>
     </div>
  )
}

export default LocaleSwitcher;
