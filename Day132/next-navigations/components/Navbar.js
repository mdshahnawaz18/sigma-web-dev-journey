"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathname = usePathname()
  return (
    <div>
      This is Navbar component and destination is {pathname}
    </div>
  )
}

export default Navbar
