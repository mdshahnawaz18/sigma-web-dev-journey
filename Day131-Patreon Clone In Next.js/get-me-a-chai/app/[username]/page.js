import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDB from '@/db/connectDB'
import User from '@/models/User'


export default async function Page({ params }) {
  const para = await params
  const username = para.username

  //If the username is not present in the databse, show a 404 error page
  await connectDB()

  const u = await User.findOne({ username })
  if (!u) {
    notFound()
  }


  return <PaymentPage username={username} />

}



export async function generateMetadata({ params }) {
  const para = await params
  const username = para.username
  return {
    title: `${username} - Get Me A Chai`,
  }
}

