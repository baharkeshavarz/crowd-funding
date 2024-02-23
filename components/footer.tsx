import React from "react"
import Logo from "./layout/logo"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-footer-back m-0 bg-[#1b1f2e] bg-right bg-no-repeat p-0 text-gray-400 sm:bg-[length:500px_600px] lg:bg-[length:880px_600px]">
      <div className=" mx-auto grid h-96 max-w-5xl grid-cols-4 gap-4 py-10">
        <div className="flex flex-col">
          <Logo name="logo-footer.png" />
          <span className="py-8">
            Lorem quas utamur delicata qui, vix ei prima mentitum omnesque. Duo
            corrumpit cotidieque ne.
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="h3-bold text-white">Company</h3>
          <Link href="">About us</Link>
          <Link href="">Latest Events</Link>
          <Link href="">How it Works</Link>
          <Link href="">News && Articles</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="h3-bold text-white">Fundraising</h3>
          <Link href="">Education</Link>
          <Link href="">Design</Link>
          <Link href="">Games</Link>
          <Link href="">Technologies</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="h3-bold text-white">Contact</h3>
          <Link href="">Education</Link>
          <Link href="">Design</Link>
          <Link href="">Games</Link>
          <Link href="">Technologies</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
