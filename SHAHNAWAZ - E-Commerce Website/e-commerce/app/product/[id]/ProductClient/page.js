"use client"

import React, { useState, useEffect, useContext } from "react"

import { CartContext } from "@/app/context/CartContext"

import { useRouter } from "next/navigation"


const ProductClient = ({ productId }) => {


  const { addToCart, setBuyNow } = useContext(CartContext)

  const [product, setProduct] = useState(null)

  const router = useRouter()


  useEffect(() => {

    const fetchData = async () => {

      const res = await fetch("/api/products")

      const data = await res.json()


      const found = data.find((item) => {

        return item._id === productId

      })


      setProduct(found || null)

    }


    fetchData()

  }, [productId])


  if (!product) {

    return (
      <p className="text-center font-bold text-xl h-10">
        Loading...
      </p>
    )

  }


  return (

    <div className="min-h-screen p-6">


      <div className="max-w-6xl mx-auto gap-8 grid md:grid-cols-2">


        {/* =================================================
            PRODUCT IMAGE

            🛠️ CHANGE:
            no.png hata diya.
            Pehle no.png undefined tha aur error aa sakta tha.
        ================================================= */}

        <div className="mainImage w-full border rounded-md">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[350px] object-contain"
          />

        </div>


        {/* PRODUCT DETAILS */}

        <div className="specDetails">


          {/* PRODUCT NAME */}

          <div className="font-bold text-2xl">

            {product.name || "No-Name"}

          </div>


          {/* =================================================
              PRICE

              Existing fields:
              price
              originalPrice
              discount
          ================================================= */}

          <div className="flex gap-4 my-3 items-center">

            <span className="font-bold text-xl text-green-600">
              ₹{product.price || 0}
            </span>


            {product.originalPrice && (

              <span className="text-sm line-through text-gray-500">
                ₹{product.originalPrice}
              </span>

            )}


            {product.discount && (

              <span className="text-green-600">
                {product.discount}
              </span>

            )}

          </div>


          {/* =================================================
              ⭐ RATING + REVIEWS

              🆕 reviews field database mein add hoga.
              Search page bhi is field ko use karega.
          ================================================= */}

          <p className="text-yellow-600 my-4">

            ⭐ {product.rating || 0}

            {product.reviews && (
              <> ({product.reviews} reviews)</>
            )}

          </p>


          {/* =================================================
              COLOR

              Database mein color ARRAY hoga.

              Example:
              color: ["Black", "Blue"]
          ================================================= */}

          {product.color?.length > 0 && (

            <div className="my-3">

              <div className="font-semibold">
                Select Color
              </div>


              {product.color.map((color, index) => (

                <button
                  key={index}
                  className="border border-black mr-2 mt-2 mb-2 px-2 rounded-sm hover:bg-gray-200"
                >
                  {color}
                </button>

              ))}

            </div>

          )}


          {/* =================================================
              STORAGE

              Database mein storage ARRAY hoga.

              Example:
              storage: ["128GB", "256GB"]
          ================================================= */}

          {product.storage?.length > 0 && (

            <div className="my-3">

              <div className="font-semibold">
                Select Storage
              </div>


              {product.storage.map((storage, index) => (

                <button
                  key={index}
                  className="border border-black mr-2 mt-2 mb-2 px-2 rounded-sm hover:bg-gray-200"
                >
                  {storage}
                </button>

              ))}

            </div>

          )}


          {/* =================================================
              CART + BUY NOW
          ================================================= */}

          <div className="flex gap-4 my-5">


            <button
              onClick={() => addToCart(product)}
              className="rounded-sm py-2 px-4 bg-yellow-500 font-bold text-sm cursor-pointer"
            >
              Add to Cart
            </button>


            <button
              onClick={() => {

                setBuyNow(product)

                setTimeout(() => {

                  router.push("/checkout")

                }, 50)

              }}
              className="rounded-sm py-2 px-4 text-white bg-orange-500 font-bold text-sm cursor-pointer"
            >
              Buy Now
            </button>


          </div>


          {/* DELIVERY */}

          {product.delivery && (

            <p className="mt-4 text-sm text-gray-600">
              🚚 {product.delivery}
            </p>

          )}

        </div>

      </div>


      {/* =================================================
          DESCRIPTION + SPECIFICATIONS

          Existing code already support karta tha.
          Database mein ye fields use karenge:

          description
          specifications

          ❌ Koi unnecessary extra product field nahi.
      ================================================= */}

      <div className="descSpecField max-w-6xl mx-auto">


        {product.description && (

          <div className="mt-6">

            <h2 className="font-bold text-xl">
              Description
            </h2>

            <p className="text-gray-500 text-sm">
              {product.description}
            </p>

          </div>

        )}


        {product.specifications &&
          typeof product.specifications === "object" && (

            <div className="mt-6">

              <h2 className="font-bold text-xl">
                Specifications
              </h2>


              <div className="grid mt-4 gap-4 md:grid-cols-2">

                {Object.entries(product.specifications).map(
                  ([key, value]) => (

                    <div
                      key={key}
                      className="border rounded-md p-2 flex justify-between"
                    >

                      <span className="font-semibold">
                        {key}
                      </span>

                      <span>
                        {value}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          )}

      </div>

    </div>

  )

}


export default ProductClient