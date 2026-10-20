// Gate de acceso simple: una clave compartida (APP_PASSWORD) y una cookie con
// un token HMAC derivado de la clave y de AUTH_SECRET. Si cambia la clave o el
// secreto, todas las sesiones quedan invalidadas. Usa Web Crypto para funcionar
// igual en el proxy (edge) y en las rutas (node).

export const COOKIE_ACCESO = "acceso";

// El gate solo se activa si las dos variables estan definidas. En desarrollo
// local, sin esas variables, la app queda abierta.
export function gateActivo(): boolean {
  return Boolean(process.env.APP_PASSWORD && process.env.AUTH_SECRET);
}

export async function tokenEsperado(): Promise<string | null> {
  const clave = process.env.APP_PASSWORD;
  const secreto = process.env.AUTH_SECRET;
  if (!clave || !secreto) return null;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secreto),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const firma = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`acceso-v1:${clave}`)
  );
  return Array.from(new Uint8Array(firma))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function cookieValida(valor: string | undefined): Promise<boolean> {
  if (!valor) return false;
  const esperado = await tokenEsperado();
  if (!esperado || valor.length !== esperado.length) return false;
  let distinto = 0;
  for (let i = 0; i < esperado.length; i++) {
    distinto |= valor.charCodeAt(i) ^ esperado.charCodeAt(i);
  }
  return distinto === 0;
}
