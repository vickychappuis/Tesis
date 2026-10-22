"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import type {
  CodigoError,
  Entrada,
  SesionData,
  Veredicto,
  VeredictoErrorBody,
  VeredictoRequest,
} from "@/lib/tipos";
import FormularioEnunciado from "./FormularioEnunciado";
import ResumenSesion from "./ResumenSesion";
import TarjetaVeredicto from "./TarjetaVeredicto";
import Tutorial from "./Tutorial";
import VisorDocumento from "./VisorDocumento";
import styles from "./Sesion.module.css";

const CLAVE_STORAGE = "sesion-feedback-v1";

type Accion =
  | { tipo: "rehidratar"; data: SesionData }
  | { tipo: "agregar"; id: string; quien: string; texto: string }
  | { tipo: "veredicto_ok"; id: string; veredicto: Veredicto }
  | {
      tipo: "veredicto_error";
      id: string;
      mensaje: string;
      codigo: CodigoError;
    }
  | { tipo: "reintentar"; id: string }
  | { tipo: "corregir"; id: string; texto: string }
  | { tipo: "aceptar_ticket"; id: string }
  | { tipo: "marcar_vista"; id: string }
  | { tipo: "nueva_sesion" };

const estadoInicial: SesionData = { iniciadaEn: "", entradas: [] };

function actualizarEntrada(
  data: SesionData,
  id: string,
  cambio: (entrada: Entrada) => Entrada
): SesionData {
  return {
    ...data,
    entradas: data.entradas.map((entrada) =>
      entrada.id === id ? cambio(entrada) : entrada
    ),
  };
}

function reducer(data: SesionData, accion: Accion): SesionData {
  switch (accion.tipo) {
    case "rehidratar":
      return accion.data;
    case "agregar":
      return {
        iniciadaEn: data.iniciadaEn || new Date().toISOString(),
        entradas: [
          ...data.entradas,
          {
            id: accion.id,
            quien: accion.quien,
            texto: accion.texto,
            estado: "verificando",
          },
        ],
      };
    case "veredicto_ok":
      return actualizarEntrada(data, accion.id, (entrada) => ({
        ...entrada,
        veredicto: accion.veredicto,
        estado: "respondido",
        mensajeError: undefined,
        codigoError: undefined,
      }));
    case "veredicto_error":
      return actualizarEntrada(data, accion.id, (entrada) => ({
        ...entrada,
        estado: "error",
        mensajeError: accion.mensaje,
        codigoError: accion.codigo,
      }));
    case "reintentar":
      return actualizarEntrada(data, accion.id, (entrada) => ({
        ...entrada,
        estado: "verificando",
        mensajeError: undefined,
        codigoError: undefined,
      }));
    case "corregir":
      return actualizarEntrada(data, accion.id, (entrada) =>
        entrada.veredicto?.tipo === "choca"
          ? { ...entrada, textoCorregido: accion.texto, estado: "corregida" }
          : entrada
      );
    case "aceptar_ticket":
      return actualizarEntrada(data, accion.id, (entrada) =>
        entrada.veredicto?.tipo === "no_contemplado"
          ? { ...entrada, estado: "ticket" }
          : entrada
      );
    case "marcar_vista":
      return actualizarEntrada(data, accion.id, (entrada) =>
        entrada.estado === "respondido"
          ? { ...entrada, estado: "vista" }
          : entrada
      );
    case "nueva_sesion":
      return { iniciadaEn: new Date().toISOString(), entradas: [] };
    default:
      return data;
  }
}

async function pedirVeredicto(
  quien: string,
  enunciado: string
): Promise<Veredicto> {
  const cuerpo: VeredictoRequest = { quien, enunciado };
  const respuesta = await fetch("/api/veredicto", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cuerpo),
  });
  if (!respuesta.ok) {
    let codigo: CodigoError = "desconocido";
    let mensaje = "El servidor respondió con un error inesperado.";
    try {
      const body = (await respuesta.json()) as VeredictoErrorBody;
      codigo = body.error.codigo;
      mensaje = body.error.mensaje;
    } catch {
      // cuerpo no parseable: se mantiene el mensaje genérico
    }
    const error = new Error(mensaje) as Error & { codigo: CodigoError };
    error.codigo = codigo;
    throw error;
  }
  return (await respuesta.json()) as Veredicto;
}

interface DocAbierto {
  ruta: string;
  fragmento: string | null;
}

export default function Sesion() {
  const [data, dispatch] = useReducer(reducer, estadoInicial);
  const hidratado = useRef(false);
  const finStreamRef = useRef<HTMLDivElement>(null);

  // La sesión en vivo crece hacia abajo: cada entrada nueva queda a la vista.
  useEffect(() => {
    finStreamRef.current?.scrollIntoView({ block: "end" });
  }, [data.entradas.length]);

  // Documentos abiertos en el panel derecho (pestañas) y cuál se está viendo.
  const [docs, setDocs] = useState<DocAbierto[]>([]);
  const [docActivo, setDocActivo] = useState<string | null>(null);

  const abrirDoc = (ruta: string, fragmento: string | null) => {
    setDocs((previos) => {
      const existe = previos.some((d) => d.ruta === ruta);
      if (existe)
        return previos.map((d) => (d.ruta === ruta ? { ...d, fragmento } : d));
      return [...previos, { ruta, fragmento }];
    });
    setDocActivo(ruta);
  };

  const cerrarDoc = (ruta: string) => {
    const quedan = docs.filter((d) => d.ruta !== ruta);
    setDocs(quedan);
    if (docActivo === ruta) {
      setDocActivo(quedan.length > 0 ? quedan[quedan.length - 1].ruta : null);
    }
  };

  // Rehidratar desde localStorage al montar.
  useEffect(() => {
    try {
      const guardado = window.localStorage.getItem(CLAVE_STORAGE);
      if (guardado) {
        const parseado = JSON.parse(guardado) as SesionData;
        // Las entradas que quedaron "verificando" al cerrar no tienen
        // una llamada en vuelo: se marcan como error reintentable.
        const entradas = parseado.entradas.map((entrada): Entrada =>
          entrada.estado === "verificando"
            ? {
                ...entrada,
                estado: "error",
                mensajeError:
                  "La verificación se interrumpió al recargar la página.",
                codigoError: "desconocido",
              }
            : entrada
        );
        dispatch({ tipo: "rehidratar", data: { ...parseado, entradas } });
      }
    } catch {
      // storage corrupto: se arranca de cero
    }
    hidratado.current = true;
  }, []);

  // Persistir en cada cambio (después de la rehidratación inicial).
  useEffect(() => {
    if (!hidratado.current) return;
    // El estado inicial nunca se persiste: en el primer render posterior al
    // montaje todavía no corrió el dispatch de rehidratación, y guardarlo
    // pisaría la sesión almacenada (con StrictMode la borra de verdad).
    if (data === estadoInicial) return;
    try {
      window.localStorage.setItem(CLAVE_STORAGE, JSON.stringify(data));
    } catch {
      // sin storage disponible: la sesión sigue en memoria
    }
  }, [data]);

  const verificar = (id: string, quien: string, enunciado: string) => {
    pedirVeredicto(quien, enunciado)
      .then((veredicto) => dispatch({ tipo: "veredicto_ok", id, veredicto }))
      .catch((error: Error & { codigo?: CodigoError }) => {
        dispatch({
          tipo: "veredicto_error",
          id,
          mensaje:
            error.message || "No se pudo contactar al asistente.",
          codigo: error.codigo ?? "desconocido",
        });
      });
  };

  const agregar = (quien: string, enunciado: string) => {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    dispatch({ tipo: "agregar", id, quien, texto: enunciado });
    verificar(id, quien, enunciado);
  };

  const reintentar = (id: string) => {
    const entrada = data.entradas.find((e) => e.id === id);
    if (!entrada) return;
    dispatch({ tipo: "reintentar", id });
    verificar(id, entrada.quien, entrada.texto);
  };

  const nuevaSesion = () => {
    const confirmado = window.confirm(
      "¿Empezar una sesión nueva? Se borra todo el registro actual."
    );
    if (!confirmado) return;
    dispatch({ tipo: "nueva_sesion" });
    try {
      window.localStorage.removeItem(CLAVE_STORAGE);
    } catch {
      // sin storage disponible
    }
  };

  return (
    <main className={styles.principal}>
      <section className={styles.sesion}>
        <div className={styles.stream} data-tutorial="sesion">
          {data.entradas.length === 0 ? (
            <div className={styles.vacio}>
              El asistente espera la sesión.
              <br />
              Tiene cargada la documentación del proyecto: cada cosa que se
              diga se confronta contra ella.
            </div>
          ) : (
            data.entradas.map((entrada) => (
              <TarjetaVeredicto
                key={entrada.id}
                entrada={entrada}
                onCorregir={(id, texto) =>
                  dispatch({ tipo: "corregir", id, texto })
                }
                onAceptarTicket={(id) =>
                  dispatch({ tipo: "aceptar_ticket", id })
                }
                onMarcarVista={(id) => dispatch({ tipo: "marcar_vista", id })}
                onReintentar={reintentar}
                onAbrirDoc={abrirDoc}
              />
            ))
          )}
          <div ref={finStreamRef} />
        </div>
        <div className={styles.pie}>
          <ResumenSesion data={data} onNuevaSesion={nuevaSesion} />
          <FormularioEnunciado onEnviar={agregar} />
        </div>
      </section>

      <aside className={styles.documentos} data-tutorial="documentos">
        {docs.length > 0 && (
          <div className={styles.tabs}>
            {docs.map((doc) => (
              <span
                key={doc.ruta}
                className={`${styles.tab} ${doc.ruta === docActivo ? styles.tabActiva : ""}`}
              >
                <button
                  type="button"
                  className={styles.tabNombre}
                  onClick={() => setDocActivo(doc.ruta)}
                >
                  {doc.ruta}
                </button>
                <button
                  type="button"
                  className={styles.tabCerrar}
                  aria-label={`Cerrar ${doc.ruta}`}
                  onClick={() => cerrarDoc(doc.ruta)}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
        <div className={styles.docCuerpo}>
          {docActivo ? (
            <VisorDocumento
              ruta={docActivo}
              fragmento={docs.find((d) => d.ruta === docActivo)?.fragmento ?? null}
            />
          ) : (
            <div className={styles.docVacio}>
              Los documentos del proyecto se abren acá.
              <br />
              Tocá un documento citado en un veredicto y vas a verlo con la
              cita subrayada.
            </div>
          )}
        </div>
      </aside>

      <Tutorial />
    </main>
  );
}
