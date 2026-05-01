"use client"

import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const dashboard = () => {
    const pathname = usePathname()
    const params = useParams()

    return (
        <div>
            i am {params.slug}
            {/* This is component and destination is {pathname} */}
        </div>
    )
}

export default dashboard
