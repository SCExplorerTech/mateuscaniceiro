import type { NextConfig } from "next";

// Site 100% estático (06/out/2026): `next build` gera out/, publicado pelo nginx a partir de
// /var/www/mateuscaniceiro (deploy.sh). Sem servidor Node — não há nada dinâmico no site.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // sem servidor não há otimizador; as fotos já são webp/jpg leves
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "*.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
