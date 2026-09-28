"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'


const CategoryClient = ({ categoryname }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch("/api/products")
            const data = await res.json()

            const filtered = data.filter((item) => {
                return item.category === categoryname;
            })
            setProducts(filtered)
        }
        fetchData()
    }, [categoryname])

    return (
        <div className='min-h-screen pt-6 pb-16 bg-gray-100 '>

            <div className='w-[96%] mx-auto'>
                {products.map((item) => {
                    return (

                        <Link key={item._id} href={`/product/${item._id}`} className='shadow-sm hover:shadow-lg px-6 py-4 mx-8 my-6 flex rounded-md bg-white gap-12'>
                            <div className='productImage w-[200] h-[200] '>
                                <img src={item.image} className=' h-full object-contain hover:scale-105 transition ' />
                            </div>
                            <div className='detail flex flex-col gap-1'>
                                <span className='font-semibold text-xl'>{item.name}</span>
                                <div className='text-green-600'>⭐{item.rating || 4} ({item.reviews || 100})</div>

                                <ul className='list-disc list-inside text-gray-500 text-sm'>
                                    <li>{item.description?.slice(0, 80)}...</li>
                                    <li>Best Quality Product</li>
                                    <li>Trusted Product</li>
                                </ul>

                                <div className='price flex gap-4 my-4 items-center'>
                                    <span className='font-bold text-xl'>₹{item.price}</span>
                                    <span className='line-through text-sm text-gray-400  '>₹{item.originalPrice}</span>
                                    <span className='text-green-600 text-sm font-bold'>{item.discount}</span>
                                </div>
                                <p className='text-sm text-gray-500'>🚚 {item.delivery}</p>
                            </div>
                        </Link>
                    )
                })

                }
            </div>
        </div>
    )
}

export default CategoryClient


// "use client"

// import React, { useState, useEffect } from 'react'
// import Link from 'next/link'

// const CategoryClient = ({ categoryname }) => {

//   const [products, setProducts] = useState([])

//   useEffect(() => {

//     const fetchData = async () => {
//       const res = await fetch("/api/products")
//       const data = await res.json()

//       if (!data) return;

//       const filtered = data.filter((item) => {
//         return item.category === categoryname;
//       })

//       setProducts(filtered)
//     }

//     fetchData();

//   }, [categoryname])

//   return (
//     <div className="min-h-screen pt-24 pb-10 bg-gray-100">

//       <div className="w-[95%] mx-auto flex flex-col gap-4">

//         {products.map((item) => {

//           return (
//             <Link
//               href={`/product/${item._id}`}
//               key={item._id}
//               className="bg-white rounded-lg shadow-sm hover:shadow-lg transition flex p-4 gap-6"
//             >

//               {/* IMAGE */}
//               <div className="w-[200px] h-[200px] flex items-center justify-center">
//                 <img
//                   src={item.image}
//                   className="h-full object-contain hover:scale-105 transition"
//                 />
//               </div>

//               {/* DETAILS */}
//               <div className="flex flex-col justify-between flex-1">

//                 {/* TOP */}
//                 <div>

//                   <h2 className="text-lg font-semibold text-gray-800">
//                     {item.name}
//                   </h2>

//                   {/* ⭐ Rating */}
//                   <p className="text-green-600 text-sm mt-1">
//                     ⭐ {item.rating || 4} ({item.reviews || 100})
//                   </p>

//                   {/* SHORT INFO */}
//                   <ul className="text-gray-600 text-sm mt-2 list-disc ml-5">
//                     <li>{item.description?.slice(0, 0)}...</li>
//                     <li>Best Quality Product</li>
//                     <li>Trusted Brand</li>
//                   </ul>

//                 </div>

//                 {/* BOTTOM */}
//                 <div className="flex items-center gap-4 mt-4">

//                   <span className="text-xl font-bold text-black">
//                     ₹{item.price}
//                   </span>

//                   <span className="line-through text-gray-400">
//                     ₹{item.originalPrice}
//                   </span>

//                   <span className="text-green-600 font-semibold">
//                     {item.discount}
//                   </span>

//                 </div>

//                 {/* DELIVERY */}
//                 <p className="text-sm text-gray-500 mt-1">
//                   🚚 {item.delivery}
//                 </p>

//               </div>

//             </Link>
//           )
//         })}

//       </div>

//     </div>
//   )
// }

// export default CategoryClient