"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function PaginaAcceso() {
  const [clave, setClave] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function entrar(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    setError(null);
    try {
      const res = await fetch("/api/acceso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clave }),
      });
      if (res.ok) {
        window.location.href = "/";
        return;
      }
      const body = await res.json().catch(() => null);
      setError(body?.error?.mensaje ?? "No se pudo validar la clave");
    } catch {
      setError("No se pudo conectar. Probá de nuevo.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className={styles.contenedor}>
      <form className={styles.caja} onSubmit={entrar}>
        <h1 className={styles.titulo}>Acceso al prototipo</h1>
        <p className={styles.sub}>
          Asistente de sesiones de feedback. Ingresá la clave compartida.
        </p>
        <input
          type="password"
          className={styles.input}
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          placeholder="Clave"
          autoFocus
        />
        {error && <p className={styles.error}>{error}</p>}
        <button className={styles.boton} disabled={!clave || enviando}>
          {enviando ? "Verificando…" : "Entrar"}
        </button>
      </form>
    </main>
  );
}
