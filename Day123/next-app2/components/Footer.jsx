import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-4 bg-slate-800 text-white '>
            <div className='text-center'>Copyright @ Facebook</div>
            <ul className='flex gap-2 text-sm'>
                <a href=""><li className='text-xs'>Home</li></a>
                <a href=""><li className='text-xs'>About</li></a>
                <a href=""><li className='text-xs'>Contact</li></a>
            </ul>
        </nav>
    )
}

export default Navbar
