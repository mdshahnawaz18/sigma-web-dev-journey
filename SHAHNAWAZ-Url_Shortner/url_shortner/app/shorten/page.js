"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'


const shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = async () => {

        const result = await fetch("/api/generate", {
            method: "POST",
            headers: { 
                "Content-Type" : "application/json" 
            },
            body: JSON.stringify({
                url: url,
                shorturl: shorturl
            })
        })

        const data = await result.json()

        if(data.success){
            setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            seturl("")
            setshorturl("")
        }

    }

    return (
        <div className='flex justify-center'>

            <div className='flex w-fit flex-col gap-4 items-center justify-center border-2 border-purple-500 rounded-lg p-5 mt-10'>
                <h1 className='font-bold text-2xl'>Url Shortener Generated</h1>
                <input className='border rounded-lg py-1 px-2 ' type='text' name='name' id='url' value={url} onChange={(e) => seturl(e.target.value)} placeholder='Enter Url' />
                <input className='border rounded-lg py-1 px-2 ' type='text' name='name' id='shorturl' value={shorturl} onChange={(e) => setshorturl(e.target.value)} placeholder='Enter Short Url' />
                <button type='submit' onClick={generate} className='border bg-purple-400 shadow-lg p-2 rounded-md px-8 font-bold'>
                    Submit
                </button>
                {generated && <Link href={generated} target="_blank" className='text-green-500 font-bold'>Generated Short Url: {generated}</Link>}
            </div>
        </div>
    )
}

export default shorten
