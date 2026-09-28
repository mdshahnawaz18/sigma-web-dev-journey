"use client"

import { useContext } from "react"
import { CartContext } from "@/app/context/CartContext"

const Checkout = () => {

  const {
    cart,
    buyNowItem,
    userAddress
  } = useContext(CartContext)

  const products = buyNowItem ? [buyNowItem] : cart

  const total = products.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  )

  return (
    <div className="min-h-screen pt-28 px-4 bg-[#f1f5f9]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* 🟢 LEFT - PRODUCTS */}
        <div className="md:col-span-2 space-y-4">

          <h2 className="text-xl font-bold text-slate-700">
            Order Items
          </h2>

          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-4 flex gap-4 items-center shadow-sm"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                className="w-20 h-20 object-contain rounded"
              />

              {/* DETAILS */}
              <div className="flex-1">
                <p className="font-semibold text-slate-700">
                  {item.name}
                </p>

                <p className="text-slate-500 text-sm">
                  Qty: {item.quantity || 1}
                </p>

                <p className="font-bold text-blue-600">
                  ₹{item.price}
                </p>
              </div>

              {/* TOTAL */}
              <div className="font-semibold text-slate-700">
                ₹{item.price * (item.quantity || 1)}
              </div>

            </div>
          ))}

        </div>

        {/* 🔵 RIGHT - SUMMARY */}
        <div className="space-y-4">

          {/* ADDRESS */}
          <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-4 shadow-sm">

            <h3 className="font-semibold mb-2 text-slate-700">
              Delivery Address
            </h3>

            {userAddress ? (
              <div className="text-sm text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">
                  {userAddress.name}
                </p>
                <p>{userAddress.address}</p>
                <p>{userAddress.phone}</p>
              </div>
            ) : (
              <p className="text-red-500 text-sm">
                Please add address in profile
              </p>
            )}

          </div>

          {/* PRICE BOX */}
          <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-4 shadow-sm">

            <h3 className="font-semibold mb-3 text-slate-700">
              Price Details
            </h3>

            <div className="flex justify-between text-sm mb-2">
              <span>Total Items</span>
              <span>{products.length}</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span>Total Price</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between text-sm mb-2 text-green-600">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout