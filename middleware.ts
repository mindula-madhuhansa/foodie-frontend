import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const publicRoutes = ["/sign-in", "/sign-up"];
  const url = request.nextUrl.clone();

  const token = request.cookies.get("user-token")?.value;

  if (!publicRoutes.includes(url.pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    url.pathname = "/sign-in";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\.jpg$).*)"],
};
