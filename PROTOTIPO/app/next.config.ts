import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La ruta de veredicto lee los .md con fs en runtime: hay que incluirlos
  // explicitamente en el bundle del deploy (se copian con scripts/copiar-docs.mjs).
  outputFileTracingIncludes: {
    "/api/veredicto": ["./documentacion/**/*"],
  },
};

export default nextConfig;
