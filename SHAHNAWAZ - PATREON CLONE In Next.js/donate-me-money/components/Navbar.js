"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setShowdropdown] = useState(false)

    return (
        <nav className='bg-gray-900 text-white flex justify-between items-center px-4 md:h-16'>

            <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"} >
                <img className='invertImg' src="/tea.gif" width={44} height={44} alt="" />
                <span className='text-xl md:text-base my-3 md:my-0'>Get Me a Chai!</span>
            </Link>

            <div className='relative flex justify-center items-center md:block gap-4'>

                {session && <><button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
                    setTimeout(() => {
                        setShowdropdown(false)
                    }, 100);
                }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" flex text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg px-4 py-2.5 gap-2 text-center cursor-pointer inline-flex items-center" type="button">
                    <span>Welcome {session.user.email}</span>
                    <svg className="w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                    <div className='p-2 absolute right-26 cursor-pointer mt-2 w-40 bg-gray-700 font-bold border border-default-medium text-gray-100 rounded-xl border-gray-100 z-50 transition-all duration-200'
                        style={{
                            top: "52px",
                            visibility: showdropdown ? "visible" : "hidden",
                            opacity: showdropdown ? 1 : 0,
                            transform: showdropdown ? "scale(1)" : "scale(0.95)"
                        }}
                    >
                        <ul>
                            <li>
                                <Link href={"/dashboard"} onClick={() => setShowdropdown(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-500">
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link href={`/${session.user.name}`} onClick={() => { setShowdropdown(false) }}
                                    className="block px-4 py-2 rounded-lg hover:bg-gray-500">
                                    Your Page
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => {
                                    setShowdropdown(false)
                                    signOut()
                                }} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-500">
                                    Sign out
                                </button>
                            </li>
                        </ul>
                    </div></>
                }

                {session && <button className='text-white w-fit bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ' onClick={() => signOut()} >Logout</button>}

                {!session && <Link href={"/login"}><button className='text-white w-fit bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ' >Login</button></Link>}
            </div>
        </nav>
    )
}

export default Navbar
