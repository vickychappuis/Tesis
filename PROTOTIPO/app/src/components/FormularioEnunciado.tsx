"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Extraccion, ExtraccionRequest, VeredictoErrorBody } from "@/lib/tipos";
import { useDictado } from "./useDictado";
import styles from "./FormularioEnunciado.module.css";

const CLAVE_QUIEN = "sesion-feedback-quien";
const QUIEN_DEFAULT = "Silvia · Directora";

// Reglas de la extraccion en vivo: cada EXTRAER_CADA_MS como maximo si el
// buffer cambio, o de inmediato si el buffer supera BUFFER_URGENTE caracteres.
const TICK_MS = 1000;
const EXTRAER_CADA_MS = 4000;
const BUFFER_URGENTE = 300;

interface Props {
  onEnviar: (quien: string, enunciado: string) => void;
}

async function pedirExtraccion(quien: string, buffer: string): Promise<Extraccion> {
  const cuerpo: ExtraccionRequest = { quien, buffer };
  const respuesta = await fetch("/api/extraer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cuerpo),
  });
  if (!respuesta.ok) {
    let mensaje = "El servidor respondió con un error inesperado.";
    try {
      const body = (await respuesta.json()) as VeredictoErrorBody;
      mensaje = body.error.mensaje;
    } catch {
      // cuerpo no parseable: se mantiene el mensaje genérico
    }
    throw new Error(mensaje);
  }
  return (await respuesta.json()) as Extraccion;
}

export default function FormularioEnunciado({ onEnviar }: Props) {
  const [quien, setQuien] = useState(QUIEN_DEFAULT);
  const [enunciado, setEnunciado] = useState("");
  const [avisoExtractor, setAvisoExtractor] = useState<string | null>(null);

  useEffect(() => {
    try {
      const guardado = window.localStorage.getItem(CLAVE_QUIEN);
      // Hidratacion desde storage: una sola vez al montar, el cascadeo es acotado.
      // eslint-disable-next-line react-hooks/set-state-in-effect
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

  const { soportado, escuchando, interim, buffer, error, alternar, consumirBuffer } =
    useDictado();

  // Refs para que la extraccion (asincrona, por intervalos) vea siempre los
  // valores vigentes sin reiniciar los efectos en cada render.
  const quienRef = useRef(quien);
  const bufferRef = useRef(buffer);
  const onEnviarRef = useRef(onEnviar);
  useEffect(() => {
    quienRef.current = quien;
    bufferRef.current = buffer;
    onEnviarRef.current = onEnviar;
  });

  // Estado de la extraccion en vivo. "procesado" es el contenido esperado del
  // buffer despues de la ultima extraccion exitosa: si el buffer actual es
  // igual, no hay nada nuevo que mandar (evita reenviar un resto sin cambios).
  const enVueloRef = useRef(false);
  const ultimaExtraccionRef = useRef(0);
  const procesadoRef = useRef<string | null>(null);
  const falloRef = useRef(false);

  const extraer = useCallback(async () => {
    const texto = bufferRef.current;
    const quienActual = quienRef.current.trim();
    if (enVueloRef.current) return;
    if (texto.trim() === "" || texto === procesadoRef.current) return;
    if (quienActual === "") return;

    enVueloRef.current = true;
    try {
      const extraccion = await pedirExtraccion(quienActual, texto);
      for (const unEnunciado of extraccion.enunciados) {
        onEnviarRef.current(quienActual, unEnunciado);
      }
      // Resolucion de la carrera: "texto" es el prefijo del buffer que se
      // mando; consumirBuffer lo reemplaza por el resto devuelto y preserva
      // la cola que se acumulo mientras la request estaba en vuelo.
      consumirBuffer(texto, extraccion.resto);
      const cola = bufferRef.current.startsWith(texto)
        ? bufferRef.current.slice(texto.length).trim()
        : "";
      procesadoRef.current = [extraccion.resto.trim(), cola]
        .filter((parte) => parte !== "")
        .join(" ");
      falloRef.current = false;
      setAvisoExtractor(null);
    } catch {
      // No se pierde nada: el buffer queda intacto y se reintenta en el
      // proximo tick.
      falloRef.current = true;
      setAvisoExtractor("No se pudo procesar lo escuchado. Se reintenta solo, no se pierde nada.");
    } finally {
      enVueloRef.current = false;
      ultimaExtraccionRef.current = Date.now();
    }
  }, [consumirBuffer]);

  // Tick periodico mientras se escucha o quede buffer sin procesar.
  const hayPendiente = escuchando || buffer.trim() !== "";
  useEffect(() => {
    if (!hayPendiente) return;
    const id = window.setInterval(() => {
      const b = bufferRef.current;
      if (enVueloRef.current || b.trim() === "" || b === procesadoRef.current) return;
      const urgente = b.length >= BUFFER_URGENTE || falloRef.current;
      if (!urgente && Date.now() - ultimaExtraccionRef.current < EXTRAER_CADA_MS) return;
      void extraer();
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [hayPendiente, extraer]);

  // Si el buffer se pasa de largo, se extrae de inmediato sin esperar el tick.
  useEffect(() => {
    if (buffer.length < BUFFER_URGENTE) return;
    const id = window.setTimeout(() => void extraer(), 0);
    return () => window.clearTimeout(id);
  }, [buffer, extraer]);

  // Al detener el dictado, una extraccion final del buffer remanente.
  const escuchandoPrevioRef = useRef(false);
  useEffect(() => {
    const veniaEscuchando = escuchandoPrevioRef.current;
    escuchandoPrevioRef.current = escuchando;
    if (!veniaEscuchando || escuchando) return;
    const id = window.setTimeout(() => void extraer(), 0);
    return () => window.clearTimeout(id);
  }, [escuchando, extraer]);

  const puedeEnviar = quien.trim() !== "" && enunciado.trim() !== "";

  const enviar = () => {
    if (!puedeEnviar) return;
    onEnviar(quien.trim(), enunciado.trim());
    setEnunciado("");
  };

  const mostrarBarra = escuchando || (buffer.trim() !== "" && avisoExtractor !== null);

  return (
    <div className={styles.formulario} data-tutorial="formulario">
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
      {mostrarBarra && (
        <div className={styles.escuchandoBarra}>
          {escuchando && <span className={styles.puntoRojo} />}
          {buffer === "" && interim === "" ? (
            <span className={styles.interimVacio}>
              Escuchando… la transcripción se va cortando en enunciados de{" "}
              {quien.trim() || "la sesión"}
            </span>
          ) : (
            <span className={styles.transcripcion}>
              {buffer}
              {interim !== "" && (
                <span className={styles.parcial}>{buffer !== "" ? " " : ""}{interim}</span>
              )}
            </span>
          )}
        </div>
      )}
      {avisoExtractor && <p className={styles.avisoExtractor}>{avisoExtractor}</p>}
      {error && <p className={styles.errorMic}>{error}</p>}
      <div className={styles.pie}>
        <span className={styles.ayuda}>Cmd/Ctrl + Enter envía</span>
        <div className={styles.acciones}>
          {soportado && (
            <button
              type="button"
              className={`${styles.mic} ${escuchando ? styles.micActivo : ""}`}
              data-tutorial="mic"
              onClick={alternar}
              disabled={quien.trim() === ""}
              title={
                escuchando
                  ? "Detener el dictado"
                  : "Escuchar la sesión por micrófono"
              }
            >
              {escuchando ? "■ Detener" : "● Escuchar"}
            </button>
          )}
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
    </div>
  );
}
