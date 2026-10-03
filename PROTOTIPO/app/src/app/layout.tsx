import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asistente de sesiones de feedback",
  description:
    "Prototipo exploratorio: la devolución vuelve al cliente en la sesión.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>
        <header className="encabezado">
          <div className="logo">SF</div>
          <h1>Asistente de sesiones de feedback</h1>
          <div className="subtitulo">
            Prototipo exploratorio · la devolución vuelve al cliente en la
            sesión
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
