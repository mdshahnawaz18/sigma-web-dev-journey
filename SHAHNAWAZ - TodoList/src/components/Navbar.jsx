import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between h-12 p-2 bg-blue-800 text-white'>
        <div className="cursor-pointer font-bold text-[20px]">iTask</div>
        <ul className='flex gap-6'>
            <li className="cursor-pointer hover:font-bold">Home</li>
            <li className="cursor-pointer hover:font-bold">Your Tasks</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
