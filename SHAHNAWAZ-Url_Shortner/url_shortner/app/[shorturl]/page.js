import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"

export default async function Page({params}) {
    const para = await params
    const shorturl = para.shorturl

    const client = await clientPromise
    const db = client.db("dbUrl")
    const collection = db.collection("urlLinks")

    const doc = await collection.findOne({shorturl : shorturl})
    if(doc){
redirect(doc.url)
    }
else{

    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
}
}