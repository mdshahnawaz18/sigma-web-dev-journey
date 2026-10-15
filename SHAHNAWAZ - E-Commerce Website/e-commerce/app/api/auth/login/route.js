import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";
import { cookies } from "next/headers"
import { createToken } from "@/lib/auth";

export async function POST(request) {
    try {
        const { email, password } = await request.json()

        if (typeof email !== "string" || typeof password !== "string" || !email.trim() || !password) {
            return Response.json(
                { error: "Email and Password are required" },
                { status: 400 }
            )
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not configured")
        }

        const db = (await clientPromise).db("ecommerce")

        const user = await db.collection("users").findOne({
            email: email.trim().toLowerCase()
        })

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return Response.json(
                { error: "Invalid Email or Password" },
                { status: 401 }
            )
        }

        const token = createToken(user);

        const cookieStore = await cookies();

        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7,

            path: "/"
        })

        return Response.json({
            message: "Login Successful",
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        console.error("Login Error : ", error);

        return Response.json(
            { error: "Something Went Wrong" },
            { status: 500 }
        )
    }
}