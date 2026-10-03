"use client";

import { useEffect, useState } from "react";
import styles from "./FormularioEnunciado.module.css";

const CLAVE_QUIEN = "sesion-feedback-quien";
const QUIEN_DEFAULT = "Silvia · Directora";

interface Props {
  onEnviar: (quien: string, enunciado: string) => void;
}

export default function FormularioEnunciado({ onEnviar }: Props) {
  const [quien, setQuien] = useState(QUIEN_DEFAULT);
  const [enunciado, setEnunciado] = useState("");

  useEffect(() => {
    try {
      const guardado = window.localStorage.getItem(CLAVE_QUIEN);
      if (guardado) setQuien(guardado);
    } catch {
      // sin storage disponible
    }
  }, []);

  const cambiarQuien = (valor: string) => {
    setQuien(valor);
    try {
      window.localStorage.setItem(CLAVE_QUIEN, valor);
    } catch {
      // sin storage disponible
    }
  };

  const puedeEnviar = quien.trim() !== "" && enunciado.trim() !== "";

  const enviar = () => {
    if (!puedeEnviar) return;
    onEnviar(quien.trim(), enunciado.trim());
    setEnunciado("");
  };

  return (
    <div className={styles.formulario}>
      <label className={styles.etiqueta} htmlFor="quien">
        Quién habla
      </label>
      <input
        id="quien"
        className={styles.quien}
        type="text"
        value={quien}
        onChange={(e) => cambiarQuien(e.target.value)}
        placeholder="Nombre · rol"
      />
      <label className={styles.etiqueta} htmlFor="enunciado">
        Qué dijo
      </label>
      <textarea
        id="enunciado"
        className={styles.enunciado}
        value={enunciado}
        onChange={(e) => setEnunciado(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            enviar();
          }
        }}
        placeholder="Escribí el enunciado tal como se dijo en la sesión"
        rows={3}
      />
      <div className={styles.pie}>
        <span className={styles.ayuda}>Cmd/Ctrl + Enter envía</span>
        <button
          type="button"
          className={styles.enviar}
          disabled={!puedeEnviar}
          onClick={enviar}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
