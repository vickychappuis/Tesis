import { NextRequest, NextResponse } from "next/server";
import { esLecturaFallida, leerDocumento } from "@/lib/documentacion";

export const runtime = "nodejs";

// Devuelve un documento de la biblioteca tal cual esta escrito, para el visor
// de la UI. Mismo saneo de rutas que usa el bibliotecario.
export async function GET(request: NextRequest) {
  const ruta = request.nextUrl.searchParams.get("ruta") ?? "";
  const contenido = await leerDocumento(ruta);
  if (esLecturaFallida(contenido)) {
    return NextResponse.json(
      { error: { codigo: "inexistente", mensaje: "No se encontró ese documento." } },
      { status: 404 }
    );
  }
  return NextResponse.json({ ruta, contenido });
}
