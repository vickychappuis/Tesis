"use client";

import { useState } from "react";
import type { Entrada, TipoVeredicto } from "@/lib/tipos";
import VisorDocumento from "./VisorDocumento";
import styles from "./TarjetaVeredicto.module.css";

interface Props {
  entrada: Entrada;
  onCorregir: (id: string, texto: string) => void;
  onAceptarTicket: (id: string) => void;
  onMarcarVista: (id: string) => void;
  onReintentar: (id: string) => void;
}

const TITULOS: Record<TipoVeredicto, { sello: string; detalle: string }> = {
  choca: { sello: "Choca", detalle: "con lo acordado" },
  coincide: { sello: "Coincide", detalle: "con lo acordado" },
  no_contemplado: { sello: "No contemplado", detalle: "pedido nuevo" },
  no_accionable: { sello: "No accionable", detalle: "charla de la sesión" },
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
  const [docAbierto, setDocAbierto] = useState<{
    ruta: string;
    fragmento: string | null;
  } | null>(null);

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
  // Sesiones guardadas antes del modo bibliotecario no traen fuentes_consultadas.
  const fuentes = veredicto.fuentes_consultadas ?? [];

  const guardarCorreccion = () => {
    const texto = textoCorregido.trim();
    if (texto === "") return;
    onCorregir(entrada.id, texto);
    setEditando(false);
  };

  return (
    <div className={`${styles.tarjeta} ${clasePorTipo[veredicto.tipo]}`}>
      <div className={styles.cabecera}>
        <span className={styles.sello}>{TITULOS[veredicto.tipo].sello}</span>
        <span className={styles.detalle}>{TITULOS[veredicto.tipo].detalle}</span>
      </div>
      <div className={styles.cuerpo}>{veredicto.justificacion}</div>

      {veredicto.citas.length > 0 && (
        <div className={styles.citas}>
          {veredicto.citas.map((cita, i) => (
            <div key={i} className={styles.cita}>
              <button
                type="button"
                className={styles.citaArchivo}
                title="Abrir el documento con la cita resaltada"
                onClick={() =>
                  setDocAbierto({
                    ruta: cita.archivo,
                    fragmento: cita.verificada ? cita.fragmento_textual : null,
                  })
                }
              >
                {cita.archivo}
              </button>
              <span className={styles.citaFragmento}>
                &ldquo;{cita.fragmento_textual}&rdquo;
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

      {fuentes.length > 0 && (
        <div className={styles.fuentes}>
          Consultó:
          {fuentes.map((fuente) => (
            <button
              key={fuente}
              type="button"
              className={styles.fuente}
              title="Abrir el documento"
              onClick={() => setDocAbierto({ ruta: fuente, fragmento: null })}
            >
              {fuente}
            </button>
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
            className={styles.botonPrimario}
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
              className={styles.botonPrimario}
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
            className={styles.botonPrimario}
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
        <div className={`${styles.resolucion} ${styles.resolucionCorregida}`}>
          → El cliente corrigió su enunciado en la sesión.
        </div>
      )}
      {entrada.estado === "ticket" && (
        <div className={`${styles.resolucion} ${styles.resolucionTicket}`}>
          → Aceptado por el cliente como ticket de alto nivel.
        </div>
      )}
      {entrada.estado === "vista" && (
        <div className={`${styles.resolucion} ${styles.resolucionVista}`}>
          → Marcado como visto en la sesión.
        </div>
      )}

      {docAbierto && (
        <VisorDocumento
          ruta={docAbierto.ruta}
          fragmento={docAbierto.fragmento}
          onCerrar={() => setDocAbierto(null)}
        />
      )}
    </div>
  );
}
