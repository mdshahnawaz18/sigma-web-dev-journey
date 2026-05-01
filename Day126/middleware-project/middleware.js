import { NextResponse } from "next/server";                              


export function middleware(request){
    if (request.nextUrl.pathname.startsWith('/house')){
    return NextResponse.rewrite(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')){
    return NextResponse.redirect(new URL('/', request.url))
    }
}










// import { NextResponse } from "next/server";

// export function middleware(request) {
//     return NextResponse.json({ message: "It is is default behaviour...." })
//     return NextResponse.redirect(new URL('/', request.url))
// }

// export const config = {
//     matcher: '/about/:path*',
// }
