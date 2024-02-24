import Image from "next/image"
import React from "react"

interface LogoProps {
  name: string
  classes?: string
}

const Logo = ({ name = "logo.png", classes }: LogoProps) => {
  return (
    <div className={classes}>
      <Image
        src={`/assets/images/${name}`}
        alt="invest"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  )
}

export default Logo
