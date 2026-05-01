"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { fetchUser , updateProfile } from '@/actions/useractions';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
  const [form, setForm] = useState({})
  const { data: session, update } = useSession()
  const router = useRouter()


  useEffect(() => {
    if (!session) {
      router.push("/login")
    }
    else {
      getData()
    }
  }, [])


  const getData = async () => {
    let user = await fetchUser(session.user.name)
    setForm(user)

  }


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)

    await updateProfile(formdata, session.user.name)

    toast('Profile Updated', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  }


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='container mx-auto py-5'>
        <h1 className='text-center my-5
         text-3xl font-bold'>Welcome to your Dashboard
        </h1>
        <form className='max-w-2xl mx-auto' onSubmit={handleSubmit}>

          <div className='my-2'>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input onChange={handleChange} type='text' value={form.name ? form.name : ""} name='name' id='name'
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          {/* input for email */}
          <div className="my-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input onChange={handleChange} type='email' value={form.email ? form.email : ""} name='email' id='email'
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          {/* input forusername */}
          <div className='my-2'>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input onChange={handleChange} type='text' value={form.username ? form.username : ""} name='username' id='username'
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          {/* input for profile picture of input type text */}
          <div className="my-2">
            <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
            <input onChange={handleChange} type='text' value={form.profilepic ? form.profilepic : ""} name='profilepic' id='profilepic'
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          {/* input for cover pic  */}
          <div className="my-2">
            <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
            <input onChange={handleChange} type='text' value={form.coverpic ? form.coverpic : ""} name='coverpic' id='coverpic'
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          {/* input razorpay id */}
          <div className="my-2">
            <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Id</label>
            <input onChange={handleChange} type='text' value={form.razorpayid ? form.razorpayid : ""} name='razorpayid' id='razorpayid'
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          {/* input razorpay secret */}
          <div className="my-2">
            <label htmlFor='razorpaysecret' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Secret</label>
            <input onChange={handleChange} type='text' value={form.razorpaysecret ? form.razorpaysecret : ""} id="razorpaysecret" name='razorpaysecret'
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          {/* Submit Button  */}
          <div className="my-6">
            <button type='submit' className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-blue-500 focus:ring-4 focus:outline-none   dark:focus:ring-blue-800 font-medium text-sm">Save</button>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default Dashboard
