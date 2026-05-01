"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const Navbar = () => {

    const [search, setSearch] = useState("")
    const [allProducts, setAllProducts] = useState([])
    const [filtered, setFiltered] = useState([])

    const router = useRouter()

    // 🔥 Fetch products
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/products")
            const data = await res.json()
            setAllProducts(data)
        }
        fetchData()
    }, [])

    // 🔥 Live search
    useEffect(() => {

        if (!search.trim()) {
            setFiltered([])
            return
        }

        const result = allProducts.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        )

        setFiltered(result.slice(0, 6))

    }, [search, allProducts])

    return (
        <nav className="sticky top-0 w-full bg-[#f1f5f9]/80 backdrop-blur-3xl border-b border-slate-200 z-50">

            <div className="flex items-center justify-between px-6 py-3">

                {/* 🔵 LOGO */}
                <h1
                    onClick={() => router.push("/")}
                    className="text-xl font-bold text-blue-600 cursor-pointer"
                >
                    Zenvyra
                </h1>

                {/* 🔍 SEARCH */}
                <div className="relative w-[40%]">

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for products..."
                        className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <div onClick={() => { setSearch("") }} className="cursor-pointer absolute right-3 top-2 text-blue-700 font-semibold">X</div>

                    {/* 🔥 DROPDOWN */}
                    {filtered.length > 0 && (
                        <div className="absolute top-12 left-0 w-full bg-white border rounded-md shadow-lg max-h-64 overflow-y-auto z-10">

                            {filtered.map((item) => (
                                <div
                                    key={item._id}
                                    onClick={() => {
                                        router.push(`/product/${item._id}`)
                                        setSearch("")
                                        setFiltered([])
                                    }}
                                    className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b last:border-none"
                                >

                                    <img
                                        src={item.image}
                                        className="w-10 h-10 object-contain"
                                    />

                                    <span className="text-sm">{item.name}</span>

                                </div>
                            ))}

                        </div>
                    )}

                </div>

                {/* 🟡 RIGHT ICONS */}
                <div className="flex items-center gap-6">

                    <Link href="/profile">
                        <div className="flex flex-col items-center cursor-pointer text-sm">
                            <span>👤</span>
                            <span>Profile</span>
                        </div>
                    </Link>

                    <Link href="/">
                        <div className="flex flex-col items-center cursor-pointer text-sm">
                            <span>❤️</span>
                            <span>Wishlist</span>
                        </div>
                    </Link>

                    <Link href="/cart">
                        <div className="flex flex-col items-center cursor-pointer text-sm">
                            <span>🛒</span>
                            <span>Cart</span>
                        </div>
                    </Link>

                </div>

            </div>

            {/* 🟢 CATEGORY BAR */}
            <div className="bg-[#e2e8f0] border-t border-yellow-100">


                <div className="flex w-full md:w-[70%] lg:w-[60%] mx-auto justify-center md:justify-between
       gap-10 py-2 text-md font-medium z-0 ">


                    <Link href="/category/mobile" className="hover:text-blue-600 cursor-pointer transition relative group"><span>Mobiles</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span></Link>

                    <Link href="/category/mens-footwear" className="hover:text-blue-600 cursor-pointer transition relative group"><span>Footwear</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span></Link>

                    <Link href="/category/mens-shirt" className="hover:text-blue-600 cursor-pointer transition relative group"><span>Fashion</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span></Link>

                    <Link href="/category/beauty" className="hover:text-blue-600 cursor-pointer transition relative group"><span>Beauty</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span></Link>

                    <Link href="/category/laptop" className="hover:text-blue-600 cursor-pointer transition relative group"><span>Electronics</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span></Link>

                    <Link href="/category/home-decor" className="hover:text-blue-600 cursor-pointer transition relative group"><span>Home</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span></Link>

                    <Link href="/category/kids-wear" className="hover:text-blue-600 cursor-pointer transition relative group"><span>Kids</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span></Link>

                    <Link href="/category/watch" className="hover:text-blue-600 cursor-pointer transition relative group"><span>Watches</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span></Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar