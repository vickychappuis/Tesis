"use client";

import type { Entrada } from "@/lib/tipos";
import styles from "./PanelSesion.module.css";

interface Props {
  entradas: Entrada[];
}

function chipDeEstado(entrada: Entrada): {
  texto: string;
  clase: string;
} | null {
  switch (entrada.estado) {
    case "verificando":
      return { texto: "Verificando…", clase: styles.chipGris };
    case "error":
      return { texto: "Error", clase: styles.chipRojo };
    case "corregida":
      return { texto: "Corregida", clase: styles.chipVioleta };
    case "ticket":
      return { texto: "Ticket", clase: styles.chipAzul };
    case "vista":
      return entrada.veredicto?.tipo === "coincide"
        ? { texto: "Coincide", clase: styles.chipVerde }
        : { texto: "Vista", clase: styles.chipGris };
    case "respondido":
      return entrada.veredicto?.tipo === "coincide"
        ? { texto: "Coincide", clase: styles.chipVerde }
        : null;
    default:
      return null;
  }
}

export default function PanelSesion({ entradas }: Props) {
  if (entradas.length === 0) {
    return (
      <div className={styles.vacio}>
        Todavía no hay intervenciones. Anotá quién habla y qué dijo.
      </div>
    );
  }

  return (
    <div className={styles.lista}>
      {entradas.map((entrada) => {
        const chip = chipDeEstado(entrada);
        const corregida = entrada.estado === "corregida";
        return (
          <div
            key={entrada.id}
            className={`${styles.entrada} ${corregida ? styles.entradaCorregida : ""}`}
          >
            <span className={styles.quien}>{entrada.quien}</span>
            {chip && (
              <span className={`${styles.chip} ${chip.clase}`}>
                {chip.texto}
              </span>
            )}
            <span
              className={`${styles.texto} ${corregida ? styles.tachado : ""}`}
            >
              {entrada.texto}
            </span>
            {corregida && entrada.textoCorregido && (
              <div className={styles.correccion}>
                <span className={styles.correccionEtiqueta}>
                  Corregido por el cliente en la sesión
                </span>
                {entrada.textoCorregido}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
