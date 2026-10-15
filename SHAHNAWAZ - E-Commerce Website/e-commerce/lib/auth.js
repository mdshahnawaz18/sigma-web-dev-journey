import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export function createToken(user) {
    return jwt.sign(
        {
            userid: user._id.toString(),
            role: user.role
        }, process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    )
}

export async function getUser() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    if (!token || !process.env.JWT_SECRET) {
        return null
    }

    try {
        return jwt.verify(
            token, process.env.JWT_SECRET
        )
    }
    catch {
        return null
    }

}