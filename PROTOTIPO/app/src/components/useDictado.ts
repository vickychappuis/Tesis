"use client";

// Dictado con la Web Speech API del navegador (Chrome, Edge, Safari).
// Los resultados finales del reconocedor se acumulan en un buffer de
// transcripcion corrida: los cortes por pausa del habla son arbitrarios,
// asi que la segmentacion en enunciados la decide la etapa extractora
// (/api/extraer), no este hook. El hook no llama a ninguna API.
import { useCallback, useEffect, useRef, useState } from "react";

interface AlternativaVoz {
  transcript: string;
}

interface ResultadoVoz {
  isFinal: boolean;
  0: AlternativaVoz;
}

interface EventoResultadoVoz {
  resultIndex: number;
  results: {
    length: number;
    [index: number]: ResultadoVoz;
  };
}

interface ReconocedorVoz {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((evento: EventoResultadoVoz) => void) | null;
  onerror: ((evento: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
}

type ConstructorReconocedor = new () => ReconocedorVoz;

declare global {
  interface Window {
    SpeechRecognition?: ConstructorReconocedor;
    webkitSpeechRecognition?: ConstructorReconocedor;
  }
}

function obtenerConstructor(): ConstructorReconocedor | null {
  if (typeof window === "undefined") return null;
  return window.SpeechRecognition ?? window.webkitSpeechRecognition ?? null;
}

function juntar(a: string, b: string): string {
  return [a, b].filter((parte) => parte !== "").join(" ");
}

export function useDictado() {
  const [soportado, setSoportado] = useState(false);
  const [escuchando, setEscuchando] = useState(false);
  const [interim, setInterim] = useState("");
  const [buffer, setBuffer] = useState("");
  const [error, setError] = useState<string | null>(null);

  const reconocedorRef = useRef<ReconocedorVoz | null>(null);
  const activoRef = useRef(false);

  useEffect(() => {
    // Deteccion de soporte una sola vez al montar; el cascadeo es acotado.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSoportado(obtenerConstructor() !== null);
    return () => {
      activoRef.current = false;
      reconocedorRef.current?.stop();
    };
  }, []);

  // Detener no vacia el buffer: lo remanente lo procesa la extraccion final.
  const detener = () => {
    activoRef.current = false;
    setEscuchando(false);
    setInterim("");
    reconocedorRef.current?.stop();
    reconocedorRef.current = null;
  };

  const empezar = () => {
    const Constructor = obtenerConstructor();
    if (!Constructor) return;
    setError(null);

    const reconocedor = new Constructor();
    reconocedor.lang = "es-AR";
    reconocedor.continuous = true;
    reconocedor.interimResults = true;

    reconocedor.onresult = (evento) => {
      let parcial = "";
      for (let i = evento.resultIndex; i < evento.results.length; i++) {
        const resultado = evento.results[i];
        const texto = resultado[0].transcript.trim();
        if (resultado.isFinal) {
          // Sin umbral de largo: el extractor decide que sirve y que no.
          if (texto !== "") setBuffer((previo) => juntar(previo, texto));
        } else {
          parcial = `${parcial} ${texto}`.trim();
        }
      }
      setInterim(parcial);
    };

    reconocedor.onerror = (evento) => {
      if (evento.error === "not-allowed" || evento.error === "service-not-allowed") {
        setError("El navegador no dio permiso para usar el micrófono.");
        detener();
      } else if (evento.error === "no-speech") {
        // silencio: el onend se encarga de rearrancar
      } else {
        setError("El dictado se interrumpió. Probá de nuevo.");
        detener();
      }
    };

    // Chrome corta el reconocimiento tras unos segundos de silencio:
    // mientras el dictado siga activo, se rearranca solo.
    reconocedor.onend = () => {
      if (!activoRef.current) return;
      try {
        reconocedor.start();
      } catch {
        detener();
      }
    };

    reconocedorRef.current = reconocedor;
    activoRef.current = true;
    setEscuchando(true);
    try {
      reconocedor.start();
    } catch {
      setError("No se pudo iniciar el micrófono.");
      detener();
    }
  };

  const alternar = () => {
    if (escuchando) detener();
    else empezar();
  };

  // Reemplaza la parte del buffer que se mando a extraer por el resto que
  // devolvio el extractor, preservando lo que se acumulo mientras la request
  // estaba en vuelo (los finales solo se agregan al final, asi que lo enviado
  // es siempre un prefijo del buffer actual).
  const consumirBuffer = useCallback((enviado: string, resto: string) => {
    setBuffer((previo) => {
      // Caso inesperado: lo enviado ya no es prefijo del buffer. Se deja como esta.
      if (!previo.startsWith(enviado)) return previo;
      return juntar(resto.trim(), previo.slice(enviado.length).trim());
    });
  }, []);

  return { soportado, escuchando, interim, buffer, error, alternar, consumirBuffer };
}
