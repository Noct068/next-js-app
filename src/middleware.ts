import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  return NextResponse.redirect(new URL("/home", request.url));
};

export const config = {
  matcher: "/",
};
