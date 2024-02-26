"use client"

import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse ,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from "../logo";
import LocaleSwitcher from "../locale-switcher";
import { Locale } from "@/i18n.config";
import NavList from "./navlist";
import Link from "next/link";
 
interface NavbarProps {
  lang: Locale;
  navigation: any;
}

const NavBar = ( {lang, navigation }: NavbarProps) => {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
 
  return (
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-light100_dark100">
        <div className="flex-between items-center max-w-6xl mx-auto text-blue-gray-900">
          <Logo/>
          <div className="mr-4 hidden lg:block lg:flex-start">
             <NavList lang={lang} navigation={navigation}/>
            <div className="flex-center gap-x-2 mr-1">
              <Button
                variant="filled"
                size="sm"
                className="hidden lg:inline-block min-w-[8rem] bg-dark-500"
              >
                <Link href={`/${lang}/login`}>{navigation.login}</Link>
              </Button>
            </div>
            <LocaleSwitcher/>
          </div>
          <IconButton
              variant="text"
              className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
          </IconButton>
        </div>
        <Collapse open={openNav}>     
        <div className="flex-start flex-col gap-1">
          <LocaleSwitcher classes="w-full mt-2"/>
          <NavList lang={lang} navigation={navigation}/>
          <div className="flex-center w-full gap-1">
             <Button fullWidth variant="filled" size="sm">
              <span>Log In</span>
             </Button>
             <Button fullWidth variant="outlined" size="sm">
               <span>Sign in</span>
             </Button>
          </div>
         </div>
        </Collapse >
      </Navbar>
  );
}

export default NavBar;