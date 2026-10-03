"use client";

import { useState } from "react";
import type { Entrada, TipoVeredicto } from "@/lib/tipos";
import styles from "./TarjetaVeredicto.module.css";

interface Props {
  entrada: Entrada;
  onCorregir: (id: string, texto: string) => void;
  onAceptarTicket: (id: string) => void;
  onMarcarVista: (id: string) => void;
  onReintentar: (id: string) => void;
}

const TITULOS: Record<TipoVeredicto, string> = {
  choca: "Choca con lo acordado",
  coincide: "Coincide con lo acordado",
  no_contemplado: "No está contemplado · pedido nuevo",
  no_accionable: "No accionable",
};

export default function TarjetaVeredicto({
  entrada,
  onCorregir,
  onAceptarTicket,
  onMarcarVista,
  onReintentar,
}: Props) {
  const [editando, setEditando] = useState(false);
  const [textoCorregido, setTextoCorregido] = useState(entrada.texto);

  if (entrada.estado === "verificando") {
    return (
      <div className={styles.verificando}>
        <span className={styles.spinner} />
        Enunciado de {entrada.quien} · buscando en la documentación…
      </div>
    );
  }

  if (entrada.estado === "error") {
    return (
      <div className={styles.error}>
        <div className={styles.errorTitulo}>No se pudo verificar</div>
        {entrada.mensajeError ?? "Error desconocido."}
        <div className={styles.acciones}>
          <button
            type="button"
            className={styles.botonNeutro}
            onClick={() => onReintentar(entrada.id)}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  const veredicto = entrada.veredicto;
  if (!veredicto) return null;

  const clasePorTipo: Record<TipoVeredicto, string> = {
    choca: styles.choca,
    coincide: styles.coincide,
    no_contemplado: styles.noContemplado,
    no_accionable: styles.noAccionable,
  };

  const pendiente = entrada.estado === "respondido";

  const guardarCorreccion = () => {
    const texto = textoCorregido.trim();
    if (texto === "") return;
    onCorregir(entrada.id, texto);
    setEditando(false);
  };

  return (
    <div className={`${styles.tarjeta} ${clasePorTipo[veredicto.tipo]}`}>
      <div className={styles.titulo}>{TITULOS[veredicto.tipo]}</div>
      <div className={styles.cuerpo}>{veredicto.justificacion}</div>

      {veredicto.citas.length > 0 && (
        <div className={styles.citas}>
          {veredicto.citas.map((cita, i) => (
            <div key={i} className={styles.cita}>
              <span className={styles.citaArchivo}>{cita.archivo}</span>
              <span className={styles.citaFragmento}>
                "{cita.fragmento_textual}"
              </span>
              {!cita.verificada && (
                <span className={styles.citaNoVerificada}>
                  cita no encontrada literal en el documento
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {pendiente && veredicto.pregunta_al_cliente && (
        <div className={styles.pregunta}>{veredicto.pregunta_al_cliente}</div>
      )}

      {veredicto.prioridad && (
        <span className={styles.prioridad}>
          Prioridad sugerida: {veredicto.prioridad.nivel} ·{" "}
          {veredicto.prioridad.razon}
        </span>
      )}

      {pendiente && veredicto.tipo === "choca" && !editando && (
        <div className={styles.acciones}>
          <button
            type="button"
            className={styles.botonVioleta}
            onClick={() => {
              setTextoCorregido(entrada.texto);
              setEditando(true);
            }}
          >
            Corregir enunciado
          </button>
          <button
            type="button"
            className={styles.botonNeutro}
            onClick={() => onMarcarVista(entrada.id)}
          >
            Marcar visto
          </button>
        </div>
      )}

      {pendiente && veredicto.tipo === "choca" && editando && (
        <div className={styles.edicion}>
          <textarea
            className={styles.textareaCorreccion}
            value={textoCorregido}
            onChange={(e) => setTextoCorregido(e.target.value)}
            rows={3}
            autoFocus
          />
          <div className={styles.acciones}>
            <button
              type="button"
              className={styles.botonVioleta}
              disabled={textoCorregido.trim() === ""}
              onClick={guardarCorreccion}
            >
              Guardar corrección
            </button>
            <button
              type="button"
              className={styles.botonNeutro}
              onClick={() => setEditando(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {pendiente && veredicto.tipo === "coincide" && (
        <div className={styles.acciones}>
          <button
            type="button"
            className={styles.botonNeutro}
            onClick={() => onMarcarVista(entrada.id)}
          >
            Marcar visto
          </button>
        </div>
      )}

      {pendiente && veredicto.tipo === "no_contemplado" && (
        <div className={styles.acciones}>
          <button
            type="button"
            className={styles.botonAzul}
            onClick={() => onAceptarTicket(entrada.id)}
          >
            Aceptar como ticket
          </button>
          <button
            type="button"
            className={styles.botonNeutro}
            onClick={() => onMarcarVista(entrada.id)}
          >
            Marcar visto
          </button>
        </div>
      )}

      {entrada.estado === "corregida" && (
        <div className={`${styles.resolucion} ${styles.resolucionVioleta}`}>
          → El cliente corrigió su enunciado en la sesión.
        </div>
      )}
      {entrada.estado === "ticket" && (
        <div className={`${styles.resolucion} ${styles.resolucionAzul}`}>
          → Aceptado por el cliente como ticket de alto nivel.
        </div>
      )}
      {entrada.estado === "vista" && (
        <div className={`${styles.resolucion} ${styles.resolucionGris}`}>
          → Marcado como visto en la sesión.
        </div>
      )}
    </div>
  );
}
