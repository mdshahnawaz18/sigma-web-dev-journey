import React from 'react'

const Navbar = () => {
    return (
        <div className=' flex justify-between bg-slate-800 h-14 items-center'>
            <div className="mx-16 font-bold text-2xl">
                <span className='text-green-500'>&lt;</span>
                <span className='text-white'>Pass</span>
                <span className='text-green-500'>OP/&gt;</span>
            </div>
            <div className="flex items-center gap-4 bg-green-700 text-white rounded-full ring-1 ring-white mx-24 p-1 pr-2">
                <img className='h-7 rounded-full' src="/icons/github2.png" alt="" />
                <span className='font-bold'>Github</span></div>
        </div>
    )
}

export default Navbar
