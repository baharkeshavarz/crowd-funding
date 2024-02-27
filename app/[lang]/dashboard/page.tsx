"use client";

import React from 'react'
import { SidebarWithSearch } from './components/sidebar'
import { NavbarWithSearch } from './components/navbar'
import { Card } from '@material-tailwind/react'

const Page = () => {
  return (
    <section className="bg-light-800 min-h-screen">
       <div className="flex sm:flex-row flex-col p-2">
          <SidebarWithSearch/>
          <div className="flex-1 w-full px-5">
             <NavbarWithSearch/>
             <Card className="mt-6 w-full rounded-md h-[40rem]">
               page content
             </Card>
          </div>
       </div>

    </section>
  )
}

export default Page
