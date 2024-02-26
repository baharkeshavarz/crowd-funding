import React from 'react'

interface LayoutWrapperProps {
  children: React.ReactNode
}

const LayoutWrapper = ({children}: LayoutWrapperProps) => {
  return (
    <div className="max-w-6xl flex-center my-5 mx-auto">
        {children}      
    </div>
  )
}

export default LayoutWrapper
