import { NextResponse, type NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
    return NextResponse.redirect(new URL("/main", req.url));
}

export const config = {
    matcher: "/",
};
