import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0]

  if (process.env.NODE_ENV === "production" && hostname === "dreampixel.co.uk") {
    const url = request.nextUrl.clone()
    url.hostname = "www.dreampixel.co.uk"
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}

export default proxy
