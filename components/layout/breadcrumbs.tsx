"use client"

import React from 'react'
import { Breadcrumbs } from "@material-tailwind/react";
import Link from 'next/link';


const BreadcrumbsComponent = () => {
  return (
    <div className="bg-light-850 h-16">
        <div className="max-w-6xl flex-between mx-auto h-full">
            <div className="flex-start divide-x divide-black space-x-2">
              <h1 className="text-dark400_light800 paragraph-regular">Log In</h1>
              <span className="px-5 text-light400_light500 small-regular">
                  Short tagline goes here
              </span>
            </div>
            <Breadcrumbs
                 separator="." 
                  className="bg-gradient-to-tr from-gray-900 to-gray-800 p-5"
              >
                    <Link href="#" className="opacity-60">
                       Home
                    </Link>
                    <Link href="#" className="opacity-60">
                        Pages
                    </Link>
                    <Link href="#">Login</Link>
            </Breadcrumbs>
        </div>
     </div>
  )
}

export default BreadcrumbsComponent;
