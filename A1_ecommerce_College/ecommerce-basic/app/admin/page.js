"use client"
import { useState } from "react"

export default function Admin() {

  const [name, setName] = useState("")

  const handleAdd = () => {
    alert("Product Added: " + name)
  }

  return (
    <div className="p-6">
      <h2>Add Product</h2>

      <input
        placeholder="Product name"
        onChange={(e)=>setName(e.target.value)}
        className="border p-2"
      />

      <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 ml-2">
        Add
      </button>
    </div>
  )
}