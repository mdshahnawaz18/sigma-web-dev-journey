"use client"

import { useContext } from "react"
import { CartContext } from "@/app/context/CartContext"
import { useRouter } from "next/navigation"


const CartPage = () => {
  const router = useRouter()

    const {
        cart,
        addToCart,
        removeOneCart,
        setBuyNowItem,
        removeAll,
        totalPrice
    } = useContext(CartContext)
    console.log("cart",cart)

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 pb-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* 🟢 LEFT SIDE (ITEMS) */}
        <div className="md:col-span-2 flex flex-col gap-4">

          <h1 className="text-2xl font-bold mb-2">🛒 My Cart</h1>

          {cart.length === 0 && (
            <div className="bg-white p-6 rounded shadow text-center">
              <p className="text-gray-600 text-lg">Your cart is empty</p>
            </div>
          )}

          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex gap-4"
            >

              {/* IMAGE */}
              <div className="w-[120px] h-[120px] flex items-center justify-center border rounded">
                <img
                  src={item.image}
                  className="h-full object-contain"
                />
              </div>

              {/* DETAILS */}
              <div className="flex flex-col justify-between flex-1">

                <div>
                  <h2 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-green-600 font-bold text-lg mt-1">
                    ₹{item.price}
                  </p>

                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-2 mt-3">

                  <button
                    onClick={() => removeOneCart(item._id)}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="px-3">{item.quantity}</span>

                  <button
                    onClick={() => addToCart(item)}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeAll(item._id)}
                    className="ml-4 text-red-500 font-semibold hover:underline"
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* 🟡 RIGHT SIDE (SUMMARY) */}
        {cart.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow h-fit sticky top-24">

            <h2 className="text-xl font-bold mb-4">Price Details</h2>

            <div className="flex justify-between mb-2">
              <span>Price ({cart.length} items)</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between mb-2 text-green-600">
              <span>Discount</span>
              <span>- ₹100</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Delivery Charges</span>
              <span className="text-green-600">
{totalPrice > 200 ? "Free" : "+ ₹40"}</span>
            </div>

            <hr className="mb-4" />

            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total Amount</span>
              <span>₹{totalPrice > 200 ? totalPrice - 100 : totalPrice - 100 + 40}</span>
            </div>

            <button onClick={()=>{
              setBuyNowItem(null)
              localStorage.removeItem("buyNow")
              router.push("/checkout")}} className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition">
              Place Order
            </button>

          </div>
        )}

      </div>

    </div>
  )
}

export default CartPage