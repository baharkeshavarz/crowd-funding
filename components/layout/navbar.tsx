"use client"

import { useState } from "react"
import styles from "../../styles/animations.module.css"
import Link from "next/link"
import { HiChevronDown } from "react-icons/hi"
import Logo from "./logo"
import { NavbarData } from "@/constants/navbar"
import { Locale } from "@/i18n.config"

interface NavBarProps {
  lang: Locale
}

const NavBar = ({ lang }: NavBarProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isOpen, setIsOpen] = useState("")

  const handleSelectItem = (item: string) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setIsOpenMenu(!isOpenMenu)
      setIsAnimating(false)
      setIsOpen("")
    }, 400)
  }

  const resetSelectItem = () => {
    if (isAnimating) return
    if (isOpenMenu) {
      setTimeout(() => {
        setIsOpenMenu(!isOpenMenu)
        setIsAnimating(false)
        setIsOpen("")
      }, 400)
    }
  }

  const handleMobileDropDownShow = (menu: string) => {
    isOpen === menu ? setIsOpen("") : setIsOpen(menu)
  }

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`
  return (
    <div className="flex items-center justify-between bg-primary-500 px-4 py-2 sm:bg-white sm:px-12">
      <nav className="flex w-full items-center justify-between md:flex">
        {isOpenMenu && (
          <div
            className={`fixed left-0 top-0 z-10 mt-16 flex h-screen w-full flex-col items-center bg-white text-black transition-all duration-500 ease-in sm:hidden ${
              isOpenMenu ? styles.menuContainer : ""
            } ${isOpenMenu && styles.slideDown} ${
              isAnimating && styles.slideUp
            }`}
          >
            <div
              className={`mt-10 flex flex-col items-center ${styles.menuItem}`}
            >
              {NavbarData.map((link, index) =>
                link.submenu ? (
                  <>
                    <div
                      key={index}
                      className="mx-4 my-6 flex items-center text-2xl font-[200] text-black hover:text-primary-500"
                    >
                      {link.name}
                      <HiChevronDown
                        onClick={() => handleMobileDropDownShow(link.name)}
                        className="transition duration-1000 ease-in hover:cursor-pointer"
                      />
                    </div>
                    <div>
                      {link.name === isOpen && (
                        <div className="flex flex-col">
                          {link.submenu.map(menu => (
                            <div
                              key={menu.name}
                              className="pt-3 text-base text-black hover:cursor-pointer hover:text-primary-500"
                            >
                              <Link
                                href={menu.href}
                                onClick={() => handleSelectItem(menu.name)}
                              >
                                {menu.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div
                    key={index}
                    className="hover:text-gpgp-blue mx-4 my-6 flex items-center text-2xl font-[200] text-black"
                  >
                    <Link
                      href={link.href}
                      onClick={() => handleSelectItem(link.name)}
                    >
                      {link.name}
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        )}
        <Link
          href="/"
          className="flex items-center pl-4"
          onClick={() => resetSelectItem()}
        >
          <Logo classes="flex-center relative h-24 w-32" />
        </Link>

        <div className="hidden text-xl font-semibold sm:flex">
          {NavbarData.map((link, index) =>
            link.submenu ? (
              <div
                key={index}
                className="group relative my-0 rounded-md text-black hover:cursor-pointer hover:bg-primary-500 hover:text-white hover:shadow-sm"
              >
                <div className="flex w-full items-center gap-1 px-3 py-2 text-base">
                  <Link href={link.href} onClick={() => resetSelectItem()}>
                    {link.name}
                  </Link>
                </div>

                <div
                  className="invisible absolute right-0 top-6 z-10 mt-1 w-full min-w-max rounded-md 
                                   bg-primary-500 px-1 pt-1 text-center text-white opacity-0
                                  transition-all duration-300 group-hover:visible group-hover:opacity-100"
                >
                  {link.submenu.map(menu => (
                    <div key={menu.name} className="py-3 text-sm">
                      <Link href={menu.href} onClick={() => resetSelectItem()}>
                        {menu.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="hover:text-gpgp-blue group relative my-0 text-black hover:cursor-pointer"
              >
                <div className="flex-center w-full gap-1 px-3 py-2 text-base">
                  <Link href={link.href}>{link.name}</Link>
                </div>
              </div>
            )
          )}
        </div>

        {/* hamburger menu */}
        <div className="inline-block h-auto px-3 py-1 text-white sm:hidden">
          <button
            className="group flex h-auto w-12 flex-col items-center justify-center rounded"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpenMenu
                  ? "translate-y-3 rotate-45 opacity-100 group-hover:opacity-50"
                  : "opacity-100 group-hover:opacity-50"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${isOpenMenu ? "opacity-0" : "opacity-100 group-hover:opacity-50"}`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpenMenu
                  ? "-translate-y-3 -rotate-45 opacity-100 group-hover:opacity-50"
                  : "opacity-100 group-hover:opacity-50"
              }`}
            />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
