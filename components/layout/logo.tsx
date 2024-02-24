import Image from "next/image"
import React from "react"

interface LogoProps {
  name: string
  classes?: string
}

const Logo = ({ name = "logo.png", classes="w-24 h-12" }: LogoProps) => {
  return (
    <div className={`relative ${classes}`}>
      <Image
        src={`/assets/images/${name}`}
        alt=""
        fill={true}
        className="object-contain"
      />
    </div>
  )
}

export default Logo
