import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const user = await req.json();
    const res = NextResponse.json({ ok: true, role: user?.role ?? "USER" });

    if (user?.role) {
      res.cookies.set("melkism_role", String(user.role), {
        path: "/",
        maxAge: 86400,
        sameSite: "lax",
      });
    }

    return res;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}