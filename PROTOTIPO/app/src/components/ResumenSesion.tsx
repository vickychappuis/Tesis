"use client";

import type { SesionData } from "@/lib/tipos";
import { exportarRegistro } from "@/lib/exportar";
import styles from "./ResumenSesion.module.css";

interface Props {
  data: SesionData;
  onNuevaSesion: () => void;
}

export default function ResumenSesion({ data, onNuevaSesion }: Props) {
  const total = data.entradas.length;
  const corregidas = data.entradas.filter(
    (e) => e.estado === "corregida"
  ).length;
  const confirmadas = data.entradas.filter(
    (e) => e.veredicto?.tipo === "coincide" && e.estado !== "error"
  ).length;
  const tickets = data.entradas.filter((e) => e.estado === "ticket").length;
  const vistas = data.entradas.filter(
    (e) => e.estado === "vista" && e.veredicto?.tipo !== "coincide"
  ).length;

  return (
    <div className={styles.resumen}>
      <b>
        {total} {total === 1 ? "intervención" : "intervenciones"} en la sesión.
      </b>
      <br />
      {corregidas} corregidas · {confirmadas} confirmadas · {tickets} tickets ·{" "}
      {vistas} vistas
      <div className={styles.acciones}>
        <button
          type="button"
          className={styles.exportar}
          disabled={total === 0}
          onClick={() => exportarRegistro(data)}
        >
          Exportar registro (.md)
        </button>
        <button
          type="button"
          className={styles.nueva}
          onClick={onNuevaSesion}
        >
          Nueva sesión
        </button>
      </div>
    </div>
  );
}
