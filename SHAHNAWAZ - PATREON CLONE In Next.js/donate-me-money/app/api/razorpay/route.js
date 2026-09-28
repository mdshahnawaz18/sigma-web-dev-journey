import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { NextResponse } from "next/server";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import Payment from "@/models/Payment";

export const POST = async (req) => {

    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)

    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({ success: false, message: "Order ID Not Found" })
    }

    let user = await User.findOne({ username: p.to_user })
    const secret = user.razorpaysecret

    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret)

    if (xx) {
        const updatePayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: "true" })
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?paymentDone=true`)
    }
    else {
        return NextResponse.json("Payment Verification Failed")

    }

}