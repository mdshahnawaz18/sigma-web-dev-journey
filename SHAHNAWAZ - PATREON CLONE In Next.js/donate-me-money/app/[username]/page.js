import { notFound } from "next/navigation";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import PaymentPage from "@/components/PaymentPage";
import React from 'react'

const Username = async ({ params }) => {
    const paraName = await params
    const username = paraName.username

    await connectDB()

    const u = User.findOne({ username })
    if (!u) {
        notFound()
    }

    return <PaymentPage username={username} />

}

export default Username


export async function generateMetadata({ params }) {
    const paraName = await params
    const username = paraName.username
    return {
        title: `${username} - Donate Me Money`
    }
}
