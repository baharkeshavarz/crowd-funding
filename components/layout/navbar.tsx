"use client"

import { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from "./logo";
import LocaleSwitcher from "./locale-switcher";
 
const StickyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-6 w-full">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );
 
  return (
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex-between items-center max-w-6xl mx-auto text-blue-gray-900">
          <Logo name="logo.png"/>
          <div className="mr-4 hidden lg:block lg:flex-start">
            {navList}
            <div className="flex-center gap-x-2 mr-1">
              <Button
                variant="filled"
                size="sm"
                className="hidden lg:inline-block w-24"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="filled"
                size="sm"
                className="hidden lg:inline-block w-24"
              >
                <span>Sign in</span>
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
        <MobileNav open={openNav}>     
        <div className="flex-start flex-col gap-1">
          <LocaleSwitcher classes="w-full mt-2"/>
          {navList}
          <div className="flex-center w-full gap-1">
             <Button fullWidth variant="filled" size="sm">
              <span>Log In</span>
             </Button>
             <Button fullWidth variant="outlined" size="sm">
               <span>Sign in</span>
             </Button>
          </div>
         </div>
        </MobileNav>
      </Navbar>
  );
}

export default StickyNavbar;