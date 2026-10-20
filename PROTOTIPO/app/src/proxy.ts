import { NextRequest, NextResponse } from "next/server";
import { COOKIE_ACCESO, cookieValida, gateActivo } from "@/lib/acceso";

const RUTAS_LIBRES = ["/acceso", "/api/acceso"];

export default async function proxy(request: NextRequest) {
  if (!gateActivo()) return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (RUTAS_LIBRES.includes(pathname)) return NextResponse.next();

  const valor = request.cookies.get(COOKIE_ACCESO)?.value;
  if (await cookieValida(valor)) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json(
      { error: { codigo: "auth", mensaje: "Acceso no autorizado" } },
      { status: 401 }
    );
  }
  const destino = request.nextUrl.clone();
  destino.pathname = "/acceso";
  destino.search = "";
  return NextResponse.redirect(destino);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
