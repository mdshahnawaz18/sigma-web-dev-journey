"use client"

import { useParams, usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const dashboard = () => {
    const pathname = usePathname()
    const params = useParams()
    const searchParams = useSearchParams()

    return (
        <div>
            the blog is {searchParams.get("blog")} and the paymentDone = {searchParams.get("paymentDone")}
            {/* This is component and destination is {pathname} */}
        </div>
    )
}

export default dashboard
