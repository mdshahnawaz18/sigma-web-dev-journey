"use client"

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const Generate = () => {
  const searchParams = useSearchParams()

  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")
  const [handle, sethandle] = useState(searchParams.get("handle"))
  const [links, setlinks] = useState([{ link: "", linktext: "" }])

  const handleChange = (index, link, linktext) => {
    setlinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext }
        } else {
          return item
        }
      })
    })
  }

  const submitLinks = async () => {
    const r = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "links": links,
        "handle": handle,
        "pic": pic,
        "desc": desc,
      })
    })

    const result = await r.json()
    if (result.success) {
      toast.success(result.message)
    } else {
      toast.error(result.message)
    }
  }

  const addLink = () => {
    setlinks(links.concat([{ link: "", linktext: "" }]))
  }

  return (
    <div className='bg-[#E9C0E9] min-h-screen grid md:grid-cols-2'>

      {/* LEFT SIDE */}
      <div className="flex justify-center items-center flex-col text-gray-900 px-8 py-10">

        <div className='flex flex-col gap-6 w-full max-w-lg'>

          <h1 className='font-bold text-4xl text-center'>
            Create your CloneTree
          </h1>

          {/* STEP 1 */}
          <div className="item space-y-2">

            <h2 className='font-semibold text-xl'>
              Step 1: Claim your Handle
            </h2>

            <input
              value={handle || ""}
              onChange={e => sethandle(e.target.value)}
              placeholder='Choose a Handle'
              className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            />

          </div>

          {/* STEP 2 */}
          <div className="item space-y-3">

            <h2 className='font-semibold text-xl'>
              Step 2: Add Links
            </h2>

            {links && links.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">

                  <input
                    value={item.linktext || ""}
                    onChange={e => handleChange(index, item.link, e.target.value)}
                    placeholder='Enter link text'
                    className="px-4 py-2 rounded-lg border border-gray-400 focus:ring-2 focus:ring-black outline-none"
                  />

                  <input
                    value={item.link || ""}
                    onChange={e => handleChange(index, e.target.value, item.linktext)}
                    placeholder='Enter link'
                    className="px-4 py-2 rounded-lg border border-gray-400 focus:ring-2 focus:ring-black outline-none"
                  />

                </div>
              )
            })}

            <button
              onClick={addLink}
              className='bg-black text-white rounded-full px-5 py-2 w-fit hover:scale-105 transition'
            >
              + Add Link
            </button>

          </div>

          {/* STEP 3 */}
          <div className="item space-y-3">

            <h2 className='font-semibold text-xl'>
              Step 3: Add Picture and Description
            </h2>

            <div className='flex flex-col gap-2'>

              <input
                value={pic || ""}
                onChange={e => { setpic(e.target.value) }}
                placeholder='Enter link to your picture'
                className="px-4 py-2 rounded-full border border-gray-400 focus:ring-2 focus:ring-black outline-none"
              />

              <input
                value={desc || ""}
                onChange={e => { setdesc(e.target.value) }}
                placeholder='Enter description'
                className="px-4 py-2 rounded-full border border-gray-400 focus:ring-2 focus:ring-black outline-none"
              />

              <button
                disabled={pic == "" || handle == "" || links[0].linktext == ""}
                onClick={() => submitLinks()}
                className='rounded-full py-2 w-fit px-6 text-white bg-gray-800 hover:bg-black transition disabled:bg-gray-400'
              >
                Create your CloneTree
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-10">

        <img
          className='max-h-[500px] object-contain'
          src="/generate.png"
          alt="Generate your links"
        />

        <ToastContainer />

      </div>

    </div>
  )
}

export default Generate