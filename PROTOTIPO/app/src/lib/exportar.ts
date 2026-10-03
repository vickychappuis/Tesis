// Genera el registro de la sesión en markdown y lo descarga en el navegador.
// Insumo para actualizar la documentación: el asistente nunca la modifica.

import type { Entrada, SesionData } from "./tipos";

function dosDigitos(n: number): string {
  return String(n).padStart(2, "0");
}

function citasEnMarkdown(entrada: Entrada): string {
  const citas = entrada.veredicto?.citas ?? [];
  if (citas.length === 0) {
    return "  - Citas: ninguna";
  }
  const lineas = citas.map((cita) => {
    const nota = cita.verificada
      ? ""
      : " (cita no encontrada literal en el documento)";
    return `    - \`${cita.archivo}\`: "${cita.fragmento_textual}"${nota}`;
  });
  return ["  - Citas:", ...lineas].join("\n");
}

function bloqueEntrada(entrada: Entrada): string {
  const lineas: string[] = [
    `- **${entrada.quien}**: "${entrada.texto}"`,
  ];
  if (entrada.veredicto) {
    lineas.push(
      `  - Veredicto (${entrada.veredicto.tipo}): ${entrada.veredicto.justificacion}`
    );
    lineas.push(citasEnMarkdown(entrada));
  }
  return lineas.join("\n");
}

function seccion(titulo: string, bloques: string[]): string {
  const cuerpo = bloques.length > 0 ? bloques.join("\n") : "- ninguna -";
  return `## ${titulo} (${bloques.length})\n\n${cuerpo}`;
}

export function generarMarkdown(data: SesionData, ahora: Date): string {
  const fecha = `${ahora.getFullYear()}-${dosDigitos(ahora.getMonth() + 1)}-${dosDigitos(ahora.getDate())}`;
  const hora = `${dosDigitos(ahora.getHours())}:${dosDigitos(ahora.getMinutes())}`;

  const corregidas = data.entradas.filter((e) => e.estado === "corregida");
  const confirmadas = data.entradas.filter(
    (e) => e.veredicto?.tipo === "coincide" && e.estado !== "error"
  );
  const tickets = data.entradas.filter((e) => e.estado === "ticket");
  const vistas = data.entradas.filter(
    (e) =>
      (e.estado === "vista" || e.estado === "respondido") &&
      e.veredicto?.tipo !== "coincide"
  );

  const bloquesCorregidas = corregidas.map((entrada) =>
    [
      bloqueEntrada(entrada),
      `  - Corrección del cliente: "${entrada.textoCorregido ?? ""}"`,
    ].join("\n")
  );

  const bloquesConfirmadas = confirmadas.map(bloqueEntrada);

  const bloquesTickets = tickets.map((entrada) => {
    const lineas = [bloqueEntrada(entrada)];
    if (entrada.veredicto?.prioridad) {
      lineas.push(
        `  - Prioridad sugerida: ${entrada.veredicto.prioridad.nivel} · ${entrada.veredicto.prioridad.razon}`
      );
    }
    return lineas.join("\n");
  });

  const bloquesVistas = vistas.map(bloqueEntrada);

  const totales = [
    `- Intervenciones: ${data.entradas.length}`,
    `- Corregidas: ${corregidas.length}`,
    `- Confirmadas: ${confirmadas.length}`,
    `- Tickets aceptados: ${tickets.length}`,
    `- Vistas sin resolver / descartadas: ${vistas.length}`,
  ].join("\n");

  return [
    `# Registro de sesión de feedback · ${fecha} ${hora}`,
    "",
    "Insumo para actualizar la documentación del proyecto. Generado por el asistente; la documentación NO fue modificada.",
    "",
    seccion("Reglas corregidas en la sesión", bloquesCorregidas),
    "",
    seccion("Reglas confirmadas", bloquesConfirmadas),
    "",
    seccion("Tickets aceptados", bloquesTickets),
    "",
    seccion("Vistas sin resolver / descartadas", bloquesVistas),
    "",
    "## Totales",
    "",
    totales,
    "",
  ].join("\n");
}

export function exportarRegistro(data: SesionData): void {
  const ahora = new Date();
  const markdown = generarMarkdown(data, ahora);
  const nombre = `sesion-feedback-${ahora.getFullYear()}-${dosDigitos(ahora.getMonth() + 1)}-${dosDigitos(ahora.getDate())}-${dosDigitos(ahora.getHours())}${dosDigitos(ahora.getMinutes())}.md`;

  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = nombre;
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
  URL.revokeObjectURL(url);
}
