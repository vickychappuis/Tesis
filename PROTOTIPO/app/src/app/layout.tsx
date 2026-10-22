import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--fuente-ui",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--fuente-mono",
});

export const metadata: Metadata = {
  title: "Asistente de sesiones de feedback",
  description:
    "Prototipo exploratorio: la devolución vuelve al cliente en la sesión.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        <header className="encabezado">
          <h1>Asistente de sesiones de feedback</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
