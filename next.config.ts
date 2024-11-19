import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['th.bing.com'], // Lista de domínios autorizados
  },
  output: 'export', // Habilita exportação estática
  // Outras opções de configuração podem ser adicionadas aqui!
};

export default nextConfig;
