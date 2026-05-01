"use client"

import { useState, useContext } from "react"
import { CartContext } from "@/app/context/CartContext"

const Profile = () => {

  const { saveAddress, userAddress } = useContext(CartContext)

  const [name, setName] = useState(userAddress?.name || "")
  const [phone, setPhone] = useState(userAddress?.phone || "")
  const [address, setAddress] = useState(userAddress?.address || "")

  const handleSave = () => {

    if (!name || !phone || !address) {
      alert("Please fill all details")
      return
    }

    const data = { name, phone, address }

    saveAddress(data)

    alert("Saved Successfully ✅")
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4">

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">

        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-6">My Profile</h2>

        {/* FORM */}
        <div className="grid gap-4">

          {/* NAME */}
          <div>
            <label className="text-sm font-semibold">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full rounded mt-1"
              placeholder="Enter your name"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-2 w-full rounded mt-1"
              placeholder="Enter phone number"
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="text-sm font-semibold">Delivery Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border p-2 w-full rounded mt-1 h-24"
              placeholder="Enter full address"
            />
          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={handleSave}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Save Details
        </button>

      </div>

      {/* 🟢 SAVED ADDRESS PREVIEW */}
      {userAddress && (
        <div className="max-w-3xl mx-auto mt-6 bg-white p-4 rounded-xl shadow">

          <h3 className="font-semibold mb-2">Saved Details</h3>

          <p className="font-bold">{userAddress.name}</p>
          <p>{userAddress.address}</p>
          <p className="text-gray-600">{userAddress.phone}</p>

        </div>
      )}

    </div>
  )
}

export default Profile