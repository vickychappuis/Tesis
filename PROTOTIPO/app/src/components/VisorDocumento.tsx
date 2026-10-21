"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VisorDocumento.module.css";

interface Props {
  ruta: string;
  // Fragmento citado a resaltar dentro del documento (si se abrio desde una cita).
  fragmento: string | null;
  onCerrar: () => void;
}

type Estado =
  | { fase: "cargando" }
  | { fase: "error"; mensaje: string }
  | { fase: "listo"; contenido: string };

// Partes del contenido: el fragmento citado se busca tolerando diferencias de
// espacios y saltos de linea (igual que la verificacion del servidor).
function partirPorFragmento(
  contenido: string,
  fragmento: string | null
): { antes: string; cita: string; despues: string } | null {
  if (!fragmento || fragmento.trim() === "") return null;
  const escapado = fragmento
    .trim()
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\s+/g, "\\s+");
  const match = contenido.match(new RegExp(escapado));
  if (!match || match.index === undefined) return null;
  return {
    antes: contenido.slice(0, match.index),
    cita: match[0],
    despues: contenido.slice(match.index + match[0].length),
  };
}

export default function VisorDocumento({ ruta, fragmento, onCerrar }: Props) {
  const [estado, setEstado] = useState<Estado>({ fase: "cargando" });
  const marcaRef = useRef<HTMLElement>(null);
  const ventanaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vigente = true;
    setEstado({ fase: "cargando" });
    fetch(`/api/documento?ruta=${encodeURIComponent(ruta)}`)
      .then(async (respuesta) => {
        if (!respuesta.ok) throw new Error("No se encontró ese documento.");
        const body = (await respuesta.json()) as { contenido: string };
        if (vigente) setEstado({ fase: "listo", contenido: body.contenido });
      })
      .catch((error: Error) => {
        if (vigente)
          setEstado({
            fase: "error",
            mensaje: error.message || "No se pudo abrir el documento.",
          });
      });
    return () => {
      vigente = false;
    };
  }, [ruta]);

  // Escape cierra; el foco arranca en la ventana; la cita queda a la vista.
  useEffect(() => {
    ventanaRef.current?.focus();
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar();
    };
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, [onCerrar]);

  useEffect(() => {
    if (estado.fase !== "listo") return;
    const frame = window.requestAnimationFrame(() => {
      marcaRef.current?.scrollIntoView({ block: "center" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [estado]);

  const partes =
    estado.fase === "listo"
      ? partirPorFragmento(estado.contenido, fragmento)
      : null;

  return (
    <div className={styles.capa} role="dialog" aria-modal="true" aria-label={ruta}>
      <div className={styles.fondo} onClick={onCerrar} />
      <div ref={ventanaRef} tabIndex={-1} className={styles.ventana}>
        <div className={styles.cabecera}>
          <span className={styles.rutaChip}>{ruta}</span>
          <span className={styles.aclaracion}>
            tal cual está escrito en la documentación del proyecto
          </span>
          <button
            type="button"
            className={styles.cerrar}
            onClick={onCerrar}
            aria-label="Cerrar el documento"
          >
            ×
          </button>
        </div>
        <div className={styles.cuerpo}>
          {estado.fase === "cargando" && (
            <div className={styles.cargando}>
              <span className={styles.spinner} />
              Abriendo el documento…
            </div>
          )}
          {estado.fase === "error" && (
            <div className={styles.error}>{estado.mensaje}</div>
          )}
          {estado.fase === "listo" &&
            (partes ? (
              <pre className={styles.texto}>
                {partes.antes}
                <mark ref={marcaRef} className={styles.marca}>
                  {partes.cita}
                </mark>
                {partes.despues}
              </pre>
            ) : (
              <pre className={styles.texto}>{estado.contenido}</pre>
            ))}
        </div>
      </div>
    </div>
  );
}
