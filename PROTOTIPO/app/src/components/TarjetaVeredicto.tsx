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
  onAbrirDoc: (ruta: string, fragmento: string | null) => void;
}

const SELLOS: Record<TipoVeredicto, { texto: string; clase: string }> = {
  choca: { texto: "Choca", clase: "choca" },
  coincide: { texto: "Coincide", clase: "coincide" },
  no_contemplado: { texto: "No contemplado", clase: "noContemplado" },
  no_accionable: { texto: "No accionable", clase: "noAccionable" },
};

export default function TarjetaVeredicto({
  entrada,
  onCorregir,
  onAceptarTicket,
  onMarcarVista,
  onReintentar,
  onAbrirDoc,
}: Props) {
  const [editando, setEditando] = useState(false);
  const [textoCorregido, setTextoCorregido] = useState(entrada.texto);

  const veredicto = entrada.veredicto;
  const sello = veredicto ? SELLOS[veredicto.tipo] : null;
  const claseTipo = sello ? styles[sello.clase] : "";
  const pendiente = entrada.estado === "respondido";
  const corregida = entrada.estado === "corregida";
  // Sesiones guardadas antes del modo bibliotecario no traen fuentes_consultadas.
  const fuentes = veredicto?.fuentes_consultadas ?? [];

  const guardarCorreccion = () => {
    const texto = textoCorregido.trim();
    if (texto === "") return;
    onCorregir(entrada.id, texto);
    setEditando(false);
  };

  return (
    <div className={`${styles.tarjeta} ${claseTipo}`}>
      <div className={styles.cab}>
        <span className={styles.quien}>{entrada.quien}</span>
        {entrada.estado === "verificando" && (
          <span className={styles.verificando}>
            <span className={styles.spinner} />
            buscando en la documentación…
          </span>
        )}
        {entrada.estado === "error" && (
          <span className={`${styles.sello} ${styles.selloError}`}>Error</span>
        )}
        {sello && <span className={styles.sello}>{sello.texto}</span>}
      </div>

      <div className={`${styles.texto} ${corregida ? styles.tachado : ""}`}>
        {entrada.texto}
      </div>
      {corregida && entrada.textoCorregido && (
        <div className={styles.correccion}>
          <span className={styles.correccionEtiqueta}>
            Corregido por el cliente en la sesión
          </span>
          {entrada.textoCorregido}
        </div>
      )}

      {entrada.estado === "error" && (
        <>
          <div className={styles.mensajeError}>
            {entrada.mensajeError ?? "Error desconocido."}
          </div>
          <div className={styles.acciones}>
            <button
              type="button"
              className={styles.botonNeutro}
              onClick={() => onReintentar(entrada.id)}
            >
              Reintentar
            </button>
          </div>
        </>
      )}

      {veredicto && (
        <>
          <div className={styles.justi}>
            <span>{veredicto.justificacion}</span>
          </div>

          {veredicto.citas.length > 0 && (
            <div className={styles.chips}>
              {veredicto.citas.map((cita, i) => (
                <span key={i} className={styles.citaGrupo}>
                  <button
                    type="button"
                    className={styles.chipDoc}
                    title="Abrir el documento con la cita subrayada"
                    onClick={() =>
                      onAbrirDoc(
                        cita.archivo,
                        cita.verificada ? cita.fragmento_textual : null
                      )
                    }
                  >
                    {cita.archivo}
                  </button>
                  {!cita.verificada && (
                    <span className={styles.citaNoVerificada}>
                      cita no encontrada literal
                    </span>
                  )}
                </span>
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
                  className={styles.chipFuente}
                  title="Abrir el documento"
                  onClick={() => onAbrirDoc(fuente, null)}
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
        </>
      )}
    </div>
  );
}
