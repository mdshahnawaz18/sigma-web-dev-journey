import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='text-white  bg-gray-700 h-72 flex flex-row justify-around items-center bottom-0 w-screen'>
      <div className=''>
        <h4 className=' pb-5 font-bold text-xl '>Company</h4>
        <ul className='text-gray-300 flex flex-col gap-2'>
          <li className=''><Link href={"/"}>About Us</Link></li>
          <li><Link href={"/"}>Our Services</Link></li>
          <li><Link href={"/"}>Privacy Policy</Link></li>
          <li><Link href={"/"}>Affiliate Program</Link></li>
        </ul>
      </div>

      <div className='flex flex-col '>
        <h4 className='font-bold text-xl pb-5'>Get Help</h4>
        <ul className='text-gray-300 flex flex-col gap-2'>
          <li><Link href={"/"}>FAQ</Link></li>
          <li><Link href={"/"}>Shipping</Link></li>
          <li><Link href={"/"}>Returns</Link></li>
          <li><Link href={"/"}>Order Status</Link></li>
          <li><Link href={"/"}>Payment Options</Link></li>

        </ul>
      </div>

      <div className='flex flex-col '>
        <h4 className='font-bold text-xl pb-5 '>Online Shop</h4>
        <ul className='text-gray-300 flex flex-col gap-2'>
          <li><Link href={"/"}>Mobile</Link></li>
          <li><Link href={"/"}>Laptop</Link></li>
          <li><Link href={"/"}>Clothes</Link></li>
          <li><Link href={"/"}>Watch</Link></li>

        </ul>
      </div>

      <div className='flex flex-col '>
        <h4 className='pb-5 font-bold text-xl '>Account</h4>
        <ul className='text-gray-300 flex flex-col gap-2'>
          <li><Link href={"/"}>New Delhi - 110041 , India</Link></li>
          <li><Link href={"/"}>mdshahnawaz1272@gmail.com</Link></li>
          <li><Link href={"/"}>+91 9212245664</Link></li>
          <li><Link href={"/"}>+91 9212245665</Link></li>

        </ul>
      </div>

    </footer>
  )
}

export default Footer
