"use client";

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./VisorDocumento.module.css";

interface Props {
  ruta: string;
  // Fragmento citado a resaltar dentro del documento (si se abrio desde una cita).
  fragmento: string | null;
}

// El estado recuerda a qué ruta corresponde: si no coincide con la ruta
// actual, la vista muestra "cargando" sin necesidad de resetear nada.
type Estado =
  | { ruta: string; fase: "error"; mensaje: string }
  | { ruta: string; fase: "listo"; contenido: string };

interface Rango {
  inicio: number;
  fin: number;
}

// Busca el fragmento citado en el contenido crudo tolerando diferencias de
// espacios y saltos de linea (igual que la verificacion del servidor).
function buscarRango(contenido: string, fragmento: string | null): Rango | null {
  if (!fragmento || fragmento.trim() === "") return null;
  const escapado = fragmento
    .trim()
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\s+/g, "\\s+");
  const match = contenido.match(new RegExp(escapado));
  if (!match || match.index === undefined) return null;
  return { inicio: match.index, fin: match.index + match[0].length };
}

// Negritas de markdown dentro de un tramo de texto plano.
function connegritas(texto: string, clave: string): ReactNode {
  const partes = texto.split(/\*\*(.+?)\*\*/g);
  if (partes.length === 1) return texto;
  return (
    <Fragment key={clave}>
      {partes.map((parte, i) =>
        i % 2 === 1 ? <strong key={i}>{parte}</strong> : parte
      )}
    </Fragment>
  );
}

// Emite el texto visible de una linea partido por el rango del subrayado.
// `inicioLinea` es el offset de la linea dentro del contenido crudo y `desde`
// cuantos caracteres del prefijo markdown ("- ", "# ") no se muestran.
function tramosDeLinea(
  linea: string,
  inicioLinea: number,
  desde: number,
  rango: Rango | null,
  marcaRef: React.RefObject<HTMLElement | null>
): ReactNode {
  const visibleInicio = inicioLinea + desde;
  const visibleFin = inicioLinea + linea.length;
  const visible = linea.slice(desde);
  if (!rango || rango.fin <= visibleInicio || rango.inicio >= visibleFin) {
    return connegritas(visible, "t");
  }
  const corteA = Math.max(rango.inicio, visibleInicio) - visibleInicio;
  const corteB = Math.min(rango.fin, visibleFin) - visibleInicio;
  const esPrimera = rango.inicio >= visibleInicio;
  return (
    <>
      {corteA > 0 && connegritas(visible.slice(0, corteA), "a")}
      <mark
        className={styles.marca}
        ref={esPrimera ? (marcaRef as React.RefObject<HTMLElement>) : undefined}
      >
        {connegritas(visible.slice(corteA, corteB), "m")}
      </mark>
      {corteB < visible.length && connegritas(visible.slice(corteB), "b")}
    </>
  );
}

// Render minimo de los markdown del proyecto: #/## como titulos, "- " como
// listas, lineas en blanco como corte de parrafo. Suficiente para los 7 tipos
// de documento de la biblioteca; sin dependencias.
function renderizarDocumento(
  contenido: string,
  rango: Rango | null,
  marcaRef: React.RefObject<HTMLElement | null>
): ReactNode[] {
  const lineas = contenido.split("\n");
  const bloques: ReactNode[] = [];
  let lista: ReactNode[] = [];
  let parrafo: ReactNode[] = [];
  let offset = 0;
  let clave = 0;

  const cerrarLista = () => {
    if (lista.length > 0) {
      bloques.push(<ul key={`ul-${clave++}`}>{lista}</ul>);
      lista = [];
    }
  };
  const cerrarParrafo = () => {
    if (parrafo.length > 0) {
      bloques.push(<p key={`p-${clave++}`}>{parrafo}</p>);
      parrafo = [];
    }
  };

  for (const linea of lineas) {
    const inicioLinea = offset;
    offset += linea.length + 1;
    const recortada = linea.trimEnd();

    if (recortada.trim() === "") {
      cerrarLista();
      cerrarParrafo();
      continue;
    }
    const titulo = recortada.match(/^(#{1,4})\s+/);
    if (titulo) {
      cerrarLista();
      cerrarParrafo();
      const Tag = titulo[1].length === 1 ? "h2" : "h3";
      bloques.push(
        <Tag key={`h-${clave++}`}>
          {tramosDeLinea(recortada, inicioLinea, titulo[0].length, rango, marcaRef)}
        </Tag>
      );
      continue;
    }
    const item = recortada.match(/^(\s*[-*]\s+)/);
    if (item) {
      cerrarParrafo();
      lista.push(
        <li key={`li-${clave++}`}>
          {tramosDeLinea(recortada, inicioLinea, item[0].length, rango, marcaRef)}
        </li>
      );
      continue;
    }
    cerrarLista();
    if (parrafo.length > 0) parrafo.push(" ");
    parrafo.push(
      <Fragment key={`fl-${clave++}`}>
        {tramosDeLinea(recortada, inicioLinea, 0, rango, marcaRef)}
      </Fragment>
    );
  }
  cerrarLista();
  cerrarParrafo();
  return bloques;
}

export default function VisorDocumento({ ruta, fragmento }: Props) {
  const [estado, setEstado] = useState<Estado | null>(null);
  const marcaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let vigente = true;
    fetch(`/api/documento?ruta=${encodeURIComponent(ruta)}`)
      .then(async (respuesta) => {
        if (!respuesta.ok) throw new Error("No se encontró ese documento.");
        const body = (await respuesta.json()) as { contenido: string };
        if (vigente)
          setEstado({ ruta, fase: "listo", contenido: body.contenido });
      })
      .catch((error: Error) => {
        if (vigente)
          setEstado({
            ruta,
            fase: "error",
            mensaje: error.message || "No se pudo abrir el documento.",
          });
      });
    return () => {
      vigente = false;
    };
  }, [ruta]);

  const vigente = estado !== null && estado.ruta === ruta ? estado : null;

  useEffect(() => {
    if (!vigente || vigente.fase !== "listo") return;
    const frame = window.requestAnimationFrame(() => {
      marcaRef.current?.scrollIntoView({ block: "center" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [vigente, fragmento]);

  if (!vigente) {
    return (
      <div className={styles.cargando}>
        <span className={styles.spinner} />
        Abriendo el documento…
      </div>
    );
  }
  if (vigente.fase === "error") {
    return <div className={styles.error}>{vigente.mensaje}</div>;
  }

  const rango = buscarRango(vigente.contenido, fragmento);
  return (
    <div className={styles.hoja}>
      <div className={styles.rutaDoc}>{ruta}</div>
      {renderizarDocumento(vigente.contenido, rango, marcaRef)}
    </div>
  );
}
