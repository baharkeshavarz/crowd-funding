import Image from "next/image"
import React from "react"

const Sliders = () => {
  return (
    <div className="relative h-[48rem] w-full">
      <Image
        src="/assets/images/image-10.jpg"
        alt="invest"
        fill={true}
        className="contain-cover"
      />
    </div>
  )
}

export default Sliders
