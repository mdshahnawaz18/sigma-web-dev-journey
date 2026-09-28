import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function Page({ params }) {

    const para = await params
    const handle = para.handle

    const client = await clientPromise
    const db = client.db("clonetree")
    const collection = db.collection("links")

    const item = await collection.findOne({ handle: handle })

    if (!item) {
        return notFound()
    }

    console.log("item", item)

    return <>
        {item &&
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">

                <div className="w-full max-w-sm">

                    <div className="text-center mb-8">

                        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                            <img
                                src={item.pic}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className="text-white text-2xl font-bold mt-4">
                            @{item.handle}
                        </p>

                    </div>

                    <div className="flex flex-col gap-4">

                        {item.links.map((a, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={a.link}
                                    className="bg-white text-black text-center py-3 rounded-xl font-semibold shadow-md hover:scale-105 hover:bg-gray-200 transition-all duration-200"
                                >
                                    {a.linktext}
                                </Link>
                            )
                        })}

                    </div>

                </div>

            </div>
        }
    </>
}