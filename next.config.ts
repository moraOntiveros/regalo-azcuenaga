import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Las fotos se muestran tal cual (sin que Next.js las procese),
  // así funcionan tanto las de Booking como las que pongas en /public/fotos
  images: { unoptimized: true },
}

export default nextConfig
