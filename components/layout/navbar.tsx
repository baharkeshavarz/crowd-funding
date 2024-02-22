import React from "react"
import Logo from "./logo"

const Navbar = () => {
  return (
    <div className="h-20 bg-white">
      <div className="flex-between mx-auto max-w-5xl">
        <Logo />
        <div>navbar</div>
      </div>
    </div>
  )
}

export default Navbar
