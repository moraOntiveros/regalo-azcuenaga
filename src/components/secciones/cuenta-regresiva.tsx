"use client"

import { useEffect, useState } from "react"

// Reloj que cuenta los días/horas/minutos/segundos que faltan
export function CuentaRegresiva({ fecha, hora }: { fecha: string; hora: string }) {
  const objetivo = new Date(`${fecha}T${hora}:00-03:00`).getTime()
  const [ahora, setAhora] = useState<number | null>(null)

  useEffect(() => {
    const tic = () => setAhora(Date.now())
    const primero = setTimeout(tic, 0)
    const id = setInterval(tic, 1000)
    return () => {
      clearTimeout(primero)
      clearInterval(id)
    }
  }, [])

  const resta = ahora === null ? 0 : Math.max(0, objetivo - ahora)
  const partes = [
    { valor: Math.floor(resta / 86_400_000), texto: "días" },
    { valor: Math.floor(resta / 3_600_000) % 24, texto: "horas" },
    { valor: Math.floor(resta / 60_000) % 60, texto: "min" },
    { valor: Math.floor(resta / 1000) % 60, texto: "seg" },
  ]

  // Bloque propio, con el color de la portada y esquinas redondeadas
  return (
    <section className="px-4 pb-16 text-center">
      <div className="mx-auto max-w-2xl rounded-[2.5rem] bg-[oklch(0.3_0.1_20)] px-6 py-10 text-crema shadow-2xl sm:px-10">
        <p className="font-hand text-4xl text-[oklch(0.78_0.09_45)] md:text-5xl">
          {ahora !== null && resta === 0 ? "¡Ya es hora! A disfrutar 🎉" : "Faltan"}
        </p>
        <div className="mx-auto mt-6 grid max-w-xl grid-cols-4 gap-3">
          {partes.map((p) => (
            <div key={p.texto} className="rounded-2xl bg-crema/10 py-4 ring-1 ring-crema/20">
              <p className="font-heading text-4xl font-semibold tabular-nums md:text-5xl">
                {ahora === null ? "–" : p.valor}
              </p>
              <p className="mt-1 text-xs tracking-widest text-crema/70 uppercase">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
