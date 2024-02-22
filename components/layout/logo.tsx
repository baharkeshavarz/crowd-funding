import Image from "next/image"
import React from "react"

const logo = () => {
  return (
    <div className="flex-center relative h-24 w-32">
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
