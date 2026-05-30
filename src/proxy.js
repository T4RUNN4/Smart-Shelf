import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const pathName = request.nextUrl.pathname;

  if (!session && pathName.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/?not-logged-in", request.url));
  }
}

export const config = {
  matcher: ["/dashboard"],
};
