"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Tutorial.module.css";

const CLAVE_VISTO = "tutorial-visto-v1";

interface Paso {
  objetivo: string | null; // valor de data-tutorial, o null para el paso centrado
  titulo: string;
  texto: string;
}

const PASOS: Paso[] = [
  {
    objetivo: null,
    titulo: "Qué es esto",
    texto:
      "Este asistente acompaña la sesión de feedback: escucha lo que dice el cliente y lo confronta al instante contra la documentación del proyecto (requisitos, reglas, actas). La devolución vuelve en la misma reunión, no días después.",
  },
  {
    objetivo: "registro",
    titulo: "El registro de la sesión",
    texto:
      "Acá queda todo lo que se dijo: quién habló, qué dijo y en qué terminó cada punto (corregido, confirmado, ticket).",
  },
  {
    objetivo: "formulario",
    titulo: "Anotar lo que se dice",
    texto:
      "Escribís quién habla y el enunciado tal como se dijo, y lo enviás con el botón o con Cmd/Ctrl + Enter. Cada enunciado va directo al asistente.",
  },
  {
    objetivo: "mic",
    titulo: "…o dejarlo escuchar",
    texto:
      "Con Escuchar, el micrófono transcribe la reunión en vivo y el asistente corta la transcripción en enunciados por su cuenta. La charla que no es feedback se descarta.",
  },
  {
    objetivo: "asistente",
    titulo: "Los veredictos",
    texto:
      "Por cada enunciado, un sello: CHOCA (contradice lo acordado, con la cita exacta del documento), COINCIDE (lo confirma) o NO CONTEMPLADO (pedido nuevo, con prioridad sugerida). La línea “Consultó” muestra qué documentos abrió para decidir.",
  },
  {
    objetivo: "resumen",
    titulo: "El cierre",
    texto:
      "El resumen lleva la cuenta de la sesión y “Exportar registro” la descarga en un archivo, el insumo para actualizar la documentación después. Los tickets siempre los acepta una persona.",
  },
];

function buscarObjetivo(objetivo: string | null): HTMLElement | null {
  if (!objetivo) return null;
  return document.querySelector<HTMLElement>(`[data-tutorial="${objetivo}"]`);
}

export default function Tutorial() {
  // Pasos cuyo objetivo existe en la página (el micrófono puede no estar).
  const [pasos, setPasos] = useState<Paso[]>([]);
  const [indice, setIndice] = useState<number | null>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const tarjetaRef = useRef<HTMLDivElement>(null);

  const abrir = useCallback(() => {
    // En el proximo tick: el boton del microfono aparece recien despues del
    // primer render (soportado se resuelve en un efecto), y el filtro tiene
    // que verlo en el DOM.
    window.setTimeout(() => {
      const visibles = PASOS.filter(
        (paso) =>
          paso.objetivo === null || buscarObjetivo(paso.objetivo) !== null
      );
      setPasos(visibles);
      setIndice(0);
    }, 0);
  }, []);

  const cerrar = useCallback(() => {
    setIndice(null);
    try {
      window.localStorage.setItem(CLAVE_VISTO, "1");
    } catch {
      // sin storage: el tutorial volvera a abrirse la proxima vez
    }
  }, []);

  // Primera visita: se abre solo.
  useEffect(() => {
    let visto = null;
    try {
      visto = window.localStorage.getItem(CLAVE_VISTO);
    } catch {
      // sin storage disponible
    }
    // Apertura unica al montar: el cascadeo es acotado.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!visto) abrir();
  }, [abrir]);

  const paso = indice === null ? null : pasos[indice];

  // Seguir al objetivo del paso: scroll, medida inicial y re-medida en
  // resize/scroll para que el recuadro no quede desfasado.
  useEffect(() => {
    if (!paso) return;
    const elemento = buscarObjetivo(paso.objetivo);
    if (elemento) {
      elemento.scrollIntoView({ block: "center", behavior: "instant" });
    }
    const medir = () =>
      setRect(elemento ? elemento.getBoundingClientRect() : null);
    // La medida inicial va en un frame aparte (evita el setState síncrono
    // dentro del efecto y mide después del scroll).
    const frame = window.requestAnimationFrame(medir);
    window.addEventListener("resize", medir);
    window.addEventListener("scroll", medir, true);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", medir);
      window.removeEventListener("scroll", medir, true);
    };
  }, [paso]);

  // Escape cierra; el foco arranca en la tarjeta.
  useEffect(() => {
    if (indice === null) return;
    tarjetaRef.current?.focus();
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
    };
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, [indice, cerrar]);

  if (indice === null || !paso) {
    return (
      <button
        type="button"
        className={styles.ayuda}
        onClick={abrir}
        title="Ver el tutorial"
        aria-label="Ver el tutorial"
      >
        ?
      </button>
    );
  }

  const conObjetivo = paso.objetivo !== null && rect !== null;
  const ultimo = indice === pasos.length - 1;

  // Tarjeta cerca del recuadro: abajo si entra, arriba si no, acotada al
  // ancho de la ventana. Sin objetivo queda centrada.
  const ANCHO = 340;
  const ALTO_ESTIMADO = 240;
  let estiloTarjeta: React.CSSProperties = {};
  if (conObjetivo && rect) {
    const abajo = rect.bottom + 12 + ALTO_ESTIMADO <= window.innerHeight;
    const top = abajo
      ? rect.bottom + 12
      : Math.max(12, rect.top - ALTO_ESTIMADO - 12);
    const left = Math.min(
      Math.max(12, rect.left),
      Math.max(12, window.innerWidth - ANCHO - 12)
    );
    estiloTarjeta = { top, left, width: ANCHO };
  }

  return (
    <div className={styles.capa} role="dialog" aria-modal="true" aria-label="Tutorial">
      {conObjetivo && rect ? (
        <div
          className={styles.recuadro}
          style={{
            top: rect.top - 6,
            left: rect.left - 6,
            width: rect.width + 12,
            height: rect.height + 12,
          }}
        />
      ) : (
        <div className={styles.fondo} />
      )}
      <div
        ref={tarjetaRef}
        tabIndex={-1}
        className={`${styles.tarjeta} ${conObjetivo ? "" : styles.tarjetaCentrada}`}
        style={estiloTarjeta}
      >
        <div className={styles.cabecera}>
          <span className={styles.contador}>
            {indice + 1} / {pasos.length}
          </span>
          <span className={styles.titulo}>{paso.titulo}</span>
        </div>
        <p className={styles.texto}>{paso.texto}</p>
        <div className={styles.acciones}>
          <button type="button" className={styles.saltar} onClick={cerrar}>
            Saltar
          </button>
          <div className={styles.navegacion}>
            {indice > 0 && (
              <button
                type="button"
                className={styles.atras}
                onClick={() => setIndice(indice - 1)}
              >
                Atrás
              </button>
            )}
            <button
              type="button"
              className={styles.siguiente}
              onClick={() => (ultimo ? cerrar() : setIndice(indice + 1))}
            >
              {ultimo ? "Listo" : "Siguiente"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
