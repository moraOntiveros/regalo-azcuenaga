import type { Metadata } from "next"
import { Caveat, Fraunces, Geist } from "next/font/google"
import { regalo } from "@/data/regalo"
import "./globals.css"

// Tipografías: Geist para el texto, Fraunces para los títulos
// y Caveat para las notas "escritas a mano"
const geist = Geist({ variable: "--font-sans", subsets: ["latin"] })
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] })
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] })

const [n1, n2] = regalo.novios

// Lo que se ve en la pestaña del navegador y al compartir el link por WhatsApp
export const metadata: Metadata = {
  title: `Un regalo para ${n1} & ${n2} 🎁`,
  description: "Un fin de semana en el campo, en La Negrita (Azcuénaga).",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${fraunces.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
