import { NextResponse } from "next/server";
import { COOKIE_ACCESO, gateActivo, tokenEsperado } from "@/lib/acceso";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!gateActivo()) {
    return NextResponse.json(
      { error: { codigo: "config", mensaje: "El acceso no esta configurado en este entorno" } },
      { status: 500 }
    );
  }

  let clave = "";
  try {
    const body = await request.json();
    clave = typeof body?.clave === "string" ? body.clave : "";
  } catch {
    clave = "";
  }

  if (!clave || clave !== process.env.APP_PASSWORD) {
    return NextResponse.json(
      { error: { codigo: "auth", mensaje: "La clave no es correcta" } },
      { status: 401 }
    );
  }

  const token = await tokenEsperado();
  const respuesta = NextResponse.json({ ok: true });
  respuesta.cookies.set(COOKIE_ACCESO, token ?? "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 60,
  });
  return respuesta;
}
