"use client"

import {useEffect} from "react"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(()=>{

      router.push("/dashboard")
    },2000)
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        hi this is main page.js
        
        </div>
        </main>
  );
}
