import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center absolute fixed bottom-0 w-full bg-slate-800 h-14 items-center'>
            <div className="mx-16 font-bold text-2xl">
                <span className='text-green-500'>&lt;</span>
                <span className='text-white'>Pass</span>
                <span className='text-green-500'>OP/&gt;</span>
            </div>
            <div className="flex flex-row gap-2 text-white">
                <span className="">Created With </span>
                <span><img className='h-7' src="/icons/love.jpg" alt="" /></span>
                <span className="">by Md Shahnawaz </span>
            </div>
        </div>
    )
}

export default Footer
