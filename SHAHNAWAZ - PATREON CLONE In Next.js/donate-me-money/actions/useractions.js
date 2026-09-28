"use server"

import connectDB from "@/db/connectDB"
import Payment from "@/models/Payment"
import User from "@/models/User"
import Razorpay from "razorpay"



export const initiate = async (amount, to_username, paymentForm) => {

    await connectDB()

    let user = await User.findOne({ username: to_username })

    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: user.razorpaysecret })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    await Payment.create({ oid: x.id, to_user: to_username, name: paymentForm.name, message: paymentForm.message, amount: amount / 100 })

    return x

}

export const fetchUser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}


export const fetchPayments = async (username) => {
    await connectDB()
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    return JSON.parse(JSON.stringify(p))

}


export const updateProfile = async (formData, oldusername) => {
    await connectDB()
    const nData = {
        name: formData.get("name"),
        email: formData.get("email"),
        username: formData.get("username"),
        profilepic: formData.get("profilepic"),
        coverpic: formData.get("coverpic"),
        razorpayid: formData.get("razorpayid"),
        razorpaysecret: formData.get("razorpaysecret"),
    }

    if (oldusername !== nData.username) {
        let u = await User.findOne({ username: nData.username })
if(u){
    return {error : "This Username Is Already Exist"}
}

        await User.updateOne({ email: nData.email }, nData)
        await Payment.updateMany({ to_user: oldusername }, { to_user: nData.username })
    }
    else {
        await User.updateOne({ email: nData.email }, nData)
    }
}




