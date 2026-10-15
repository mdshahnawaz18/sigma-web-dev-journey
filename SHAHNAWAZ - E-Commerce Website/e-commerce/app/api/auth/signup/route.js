import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        const { name, email, password } = await request.json()

        if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string" || !name.trim() || !email.trim() || !password) {
            return Response.json(
                { error: "All fields are required" },
                { status: 400 }
            )
        }

        if (name.trim().length > 100 || password.length < 8 || password.length > 128) {
            return Response.json(
                { error: " Name must be less than 100 characters and password must be between 8 and 128 characters long" },
                { status: 400 }
            )
        }

        const normalizedEmail = email.trim().toLowerCase()

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
            return Response.json(
                { error: "Invalid email format" },
                { status: 400 }
            )
        }

        const db = (await clientPromise).db("ecommerce")
        const users = db.collection("users")

        const existingUser = await users.findOne({
            email: normalizedEmail
        })

        if (existingUser) {
            return Response.json(
                { error: "Email already registered" },
                { status: 409 }
            )
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        await users.insertOne({
            name: name.trim(),
            email: normalizedEmail,
            password: hashedPassword,
            role: "user",
            wishlist: [],
            createdAt: new Date()
        })

        return Response.json(
            { message: "Account Created Successfully" },
            { status: 201 }
        )
    } catch (error) {
        if (error.code === 11000) {
            return Response.json(
                { message: "Email already registered. Please Try Different Email" },
                { status: 409 }
            )
        }

        console.error("Signup error : ", error)

        return Response.json(
            { error: "Something went wrong" },
            { status: 500 }
        )
    }

}