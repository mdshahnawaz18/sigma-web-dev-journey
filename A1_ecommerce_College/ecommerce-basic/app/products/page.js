"use client"
import { useState } from "react"
import { products } from "@/data/products"

export default function Products() {

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category ? p.category === category : true)
  )

  return (
    <div className="p-6">

      <input
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-3"
      />

      <select onChange={(e)=>setCategory(e.target.value)} className="border p-2 mb-3">
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
      </select>

      {filtered.map(item => (
        <div key={item.id} className="border p-4 mb-3">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>⭐ {item.rating}</p>
        </div>
      ))}

    </div>
  )
}