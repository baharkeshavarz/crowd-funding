import Image from "next/image"
import React from "react"

interface LogoProps {
  classes: string
}

const logo = ({ classes }: LogoProps) => {
  return (
    <div className={classes}>
      <Image
        src="/assets/images/logo.png"
        alt="invest"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  )
}

export default logo
