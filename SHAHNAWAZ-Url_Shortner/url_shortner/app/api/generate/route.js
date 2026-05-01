import clientPromise from "@/lib/mongodb"


export async function POST(req){
    const body = await req.json()
    const client = await clientPromise
    const db = client.db("dbUrl")
    const collection = db.collection("urlLinks")

    const doc = await collection.findOne({shorturl: body.shorturl})
    if(doc){
        return Response.json({success:false , error:true , message:"URL already exists"})
    }

   const result = await collection.insertOne({
        url : body.url,
        shorturl : body.shorturl
    })

    console.log(result)

    return Response.json({success:true , error:false ,  message:"URL Generated Successfully"})
}