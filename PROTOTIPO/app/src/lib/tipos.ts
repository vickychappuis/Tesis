// Contrato compartido entre la API, la UI y la evaluación.
// Si esto cambia, cambian las tres partes: mantener como fuente única.

export type TipoVeredicto = "choca" | "coincide" | "no_contemplado" | "no_accionable";

export type NivelPrioridad = "alta" | "media" | "baja";

export interface Cita {
  archivo: string;
  fragmento_textual: string;
  // Agregado por el servidor: true si el fragmento aparece literal en el archivo citado.
  verificada: boolean;
}

export interface Prioridad {
  nivel: NivelPrioridad;
  razon: string;
}

export interface Veredicto {
  tipo: TipoVeredicto;
  resumen_enunciado: string;
  justificacion: string;
  citas: Cita[];
  pregunta_al_cliente: string | null;
  prioridad: Prioridad | null;
}

export interface VeredictoRequest {
  quien: string;
  enunciado: string;
}

export type CodigoError = "config" | "auth" | "timeout" | "malformada" | "desconocido";

export interface VeredictoErrorBody {
  error: { codigo: CodigoError; mensaje: string };
}

// Ciclo de vida de una entrada de la sesión en la UI.
export type EstadoEntrada =
  | "verificando"
  | "respondido"
  | "corregida"
  | "ticket"
  | "vista"
  | "error";

export interface Entrada {
  id: string;
  quien: string;
  texto: string;
  textoCorregido?: string;
  veredicto?: Veredicto;
  estado: EstadoEntrada;
  mensajeError?: string;
  codigoError?: CodigoError;
}

export interface SesionData {
  iniciadaEn: string; // ISO
  entradas: Entrada[];
}
