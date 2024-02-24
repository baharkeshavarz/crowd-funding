"use client"

import { usePathname } from "next/navigation"
import { humanReadableLanguage, supportedLanguages } from "@/i18n.config"
import { Select, Option } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

interface LocaleSwitcherProps {
  classes?: string;
}

const LocaleSwitcher = ({ classes }: LocaleSwitcherProps) => {
  const pathName = usePathname()
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    router.push( segments.join("/"));
  }

  return (
     <div className={classes}>
         <Select label="Language">
            {supportedLanguages.map(locale => 
             <Option
                key={locale} 
                onClick={() => redirectedPathName(locale)}
                >
              {locale} - {humanReadableLanguage(locale)}
            </Option>)
          }
        </Select>
     </div>
  )
}

export default LocaleSwitcher;
