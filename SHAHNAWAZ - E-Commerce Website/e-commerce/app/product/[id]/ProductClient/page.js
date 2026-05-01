"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '@/app/context/CartContext'
import { useRouter } from 'next/navigation'


const ProductClient = ({ productId }) => {

  const {addToCart , setBuyNow} = useContext(CartContext)
  const [product, setProduct] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/products")
      const data = await res.json()

      const found = data.find((item) => {
        return item._id === productId;
      })
      setProduct(found || null);
    }
    fetchData();
  }, [productId])

  if (!product) {
    return <p className='text-center font-bold text-xl h-10 '>Loading...</p>
  }

  return (
    <div className='min-h-screen p-6'>

      <div className='max-w-6xl mx-auto gap-8 grid md:grid-cols-2'>
        <div className='mainImage w-full border rounded-md'>
          <img className='w-full h-[350px] object-contain' src={product.image || no.png} />
        </div>

        <div className='specDetails '>
          <div className='font-bold text-2xl'>{product.name || "No-Name"}</div>
          <div className='flex gap-4 my-3 items-center'>

            <span className='font-bold text-xl  text-green-600'>₹{product.price || 0}</span>
            {product.originalPrice && <span className='text-sm  line-through text-gray-500'>₹{product.originalPrice}</span>}
            {product.discount && <span className=' text-green-600'>{product.discount}</span>}
          </div>
          <p className='text-yellow-600 my-4'>⭐{product.rating || 4} ({product.reviews || 100})</p>

          {product.color?.length > 0 && (
            <div className='my-3'>

              <div className='font-semibold'>Select Color</div>
              {product.color.map((c, i) => (
                <button key={i} className='border border-black mr-2 mt-2 mb-2 px-2 rounded-sm hover:bg-gray-200'>{c}</button>
              ))}
            </div>
          )
          }
          {product.storage?.length > 0 && (
            <div className='my-3'>

              <div className='font-semibold'>Select storage</div>
              {product.storage.map((c, i) => (
                <button key={i} className='border border-black mr-2 mt-2 mb-2 px-2 rounded-sm hover:bg-gray-200'>{c}</button>
              ))}
            </div>
          )
          }

          <div className='flex gap-4 my-5'>
            <button onClick={()=>addToCart(product)} className='rounded-sm py-2 px-4 bg-yellow-500 font-bold text-sm cursor-pointer'>Add to Cart</button>
            
            <button onClick={()=>{
              setBuyNow(product)
              setTimeout(() => {
                 router.push("/checkout")
              }, 50);
             }} href={"/"} className='rounded-sm py-2 px-4 text-white bg-orange-500 font-bold text-sm cursor-pointer'>Buy Now</button>

          </div>
          {product.delivery && <p className="mt-4 text-sm text-gray-600">🚚 {product.delivery}</p>}

        </div>
      </div>
      <div className='descSpecField max-w-6xl mx-auto' >
        {product.description &&
          <div className='mt-6'>
            <h2 className='font-bold text-xl'>Description</h2>
            <p className='text-gray-500 text-sm'>{product.description}</p>
          </div>
        }


        {product.specifications && typeof product.specifications === "object" && (<div className='mt-6'>
          <h2 className='font-bold text-xl'>Specifications</h2>
          <div className='grid mt-4 gap-4 md:grid-cols-2'>{Object.entries(product.specifications).map(([key, value]) => {
            return <div key={key} className='border rounded-md p-2 flex justify-between'><span className='font-semibold'>{key}</span> <span>{value}</span></div>
          })}</div>
        </div>)}




      </div>
    </div>
  )

}

export default ProductClient

