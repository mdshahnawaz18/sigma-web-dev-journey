"use client"

import Script from 'next/script';
import { fetchUser , fetchPayments, initiate } from '@/actions/useractions';
import { useRouter } from 'next/navigation';
import React , { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = ({username}) => {
  const [paymentForm, setpaymentForm] = useState({ name: "", message: "", amount: "" })
  const [payments, setPayments] = useState([])
  const [currentUser, setcurrentUser] = useState({})
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    getData()
  }, [])

useEffect(() => {
  if(searchParams.get("paymentDone") == true){
toast('Thanks For Your Donation', {
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
  router.push(`/${username}`)
}, [])


  const getData = async () => {
    const dbUser = await fetchUser(username)
    setcurrentUser(dbUser)

    const dbPayments = await fetchPayments(username)
    setPayments(dbPayments)

  }


  const handleChange = (e) => {
    setpaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
  }


  const pay = async (amount) => {
    let x = await initiate(amount, username, paymentForm)
    let orderid = x.id



    var options = {
      "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. 
      "currency": "INR",
      "name": "Donate Me Money", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderid, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Virat", //your customer's name
        "email": "virat18@gmail.com",
        "contact": "18182020" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();


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


    <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>




    <div className='coverImgDiv w-full relative'>
      <img className='object-cover w-full h-[350]' src={currentUser.coverpic} alt="" />
      <div className='absolute -bottom-16 right-[45%] border-2 border-white overflow-hidden size-36 rounded-full'>
        <img className='rounded-full size-36 object-contain' width={128} height={128} src={currentUser.profilepic} alt="" />
      </div>
    </div>

    <div className='infoDiv flex justify-center items-center flex-col gap-2 my-24'>
      <div className='font-bold text-lg'>
        @{username}
      </div>
      <div className='text-slate-400'>
        Lets Help {username} get a chai!
      </div>
      <div className='text-slate-400'>
        {payments.length} Payments .  ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
      </div>

      <div className='payment flex gap-3 w-[80%] mt-11'>
        <div className='supporters w-1/2 bg-slate-900 rounded-lg text-white p-10'><h2 className='text-2xl font-bold my-5'>Supporters</h2>
          <ul className='mx-5 text-lg '>
            {payments.length == 0 && <li>No Payments Yet</li>}
            {payments.map((p, i) => {
              return <li key={i} className='my-4 flex gap-2 items-center'>
                <img width={33} src='avatar.gif' alt='uses avatar' />
                <span>{p.name} gave <span className='font-bold'>₹{p.amount}</span> with a message : "{p.message}"
                </span>
              </li>
            })}


          </ul>
        </div>

        <div className='makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
          <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
          <div className='flex flex-col gap-2'>

            <div>
              <input onChange={handleChange} value={paymentForm.name} type='text' name='name' id="name" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
            </div>

            <input onChange={handleChange} value={paymentForm.message} type='text' name='message' id="message" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
            <input onChange={handleChange} value={paymentForm.amount} type='text' name='amount' id="amount" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />


            <button onClick={() => pay(Number.parseInt(paymentForm.amount) * 100)} type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 disabled:from-purple-300' disabled={paymentForm.name?.length < 3 || paymentForm.name?.message < 4 || paymentForm.name?.amount < 1} >Pay</button>

          </div>

          <div className='flex gap-2 mt-5'>
            <button onClick={() => pay(1000)} className='bg-slate-800 p-3 rounded-lg' >Pay ₹ 10</button>
            <button onClick={() => pay(2000)} className='bg-slate-800 p-3 rounded-lg' >Pay ₹ 20</button>
            <button onClick={() => pay(5000)} className='bg-slate-800 p-3 rounded-lg' >Pay ₹ 50</button>
          </div>
        </div>
      </div>
    </div>
  </>
)
  }

export default PaymentPage
