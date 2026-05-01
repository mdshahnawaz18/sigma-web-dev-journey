import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import User from "@/models/User";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    console.log(body);
    body = Object.fromEntries(body)

    //Check if razorpay is present on server
    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({ success : false, message: "Order ID Not Found" })
    }

    //fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: p.to_user })
    const secret = user.razorpaysecret

    //Verify the payment
    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret)


    if (xx) {
        //Update the payment status
        const updatePayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: "true" })
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?paymentDone=true`)
    }
    else {
        return NextResponse.json("Payment Verification Failed")
    }


}