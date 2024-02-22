import Image from "next/image"
import React from "react"

const Sliders = () => {
  return (
    <div className="relative h-[40rem] w-full">
      <Image
        src="/assets/images/crowd-intro.jpg"
        alt="invest"
        fill={true}
        className="contain-cover"
      />
    </div>
  )
}

export default Sliders
