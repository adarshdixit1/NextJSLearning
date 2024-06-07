import { NextResponse, type NextRequest } from "next/server";

// approach 1
//
// export function middleware(request:NextRequest){
//     return NextResponse.redirect(new URL("/", request.url));
// }

// export const config ={
//     matcher: "/profile",
// }

// approach 2
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/helloWorld", request.url));
//   }

//   if (request.nextUrl.pathname === "/time") {
//     return NextResponse.rewrite(new URL("/helloWorld", request.url));
//   }
// }

// for cookies
export function middleware(request:NextRequest){
    const response = NextResponse.next()

    const themPreference = request.cookies.get("theme");
    if(!themPreference){
        response.cookies.set("theme",'dark')
    }

    response.headers.set("custom-header","custom-value")

    return response
}
