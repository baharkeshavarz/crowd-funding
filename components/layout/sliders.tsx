import Image from 'next/image'
import React from 'react'

const Sliders = () => {
  return (
    <div className=''>
     <Image 
       src="/assets/images/logo.png"
       alt="invest"
       width={100}
       height={100}
       className="object-cover"
    />
     <Image 
       src="/assets/images/team-4-500x550.jpg"
       alt="invest"
       width={100}
       height={100}
    />
   </div>
  )
}

export default Sliders
