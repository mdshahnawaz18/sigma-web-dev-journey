import { getUser } from "@/lib/auth";

export async function GET() {
    const user = await getUser();

    if (!user) {
        return Response.json(
            { user: null },
            { status: 401 }
        )
    }

    return Response.json({
        user : {
            userId : user.userId,
            role : user.role
        }
    })
}