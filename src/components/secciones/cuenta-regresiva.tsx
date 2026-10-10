"use client"

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons"

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
    <div role="timer" aria-label="Cuenta regresiva para el viaje" className="text-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-3xl bg-[oklch(0.3_0.1_20)] px-4 py-5 text-crema shadow-xl sm:flex-row sm:gap-8 sm:px-8 sm:py-6">
        <div className="sm:w-40 sm:shrink-0 sm:text-left">
          <div className="flex items-center justify-center gap-3 text-[oklch(0.78_0.09_45)] sm:justify-start">
            <FontAwesomeIcon icon={faHourglassHalf} aria-hidden="true" className="size-4! shrink-0" />
            <p className="font-hand text-3xl leading-none sm:text-4xl">
              {ahora !== null && resta === 0 ? "¡Ya es hora! A disfrutar 🎉" : "Faltan"}
            </p>
          </div>
          {!(ahora !== null && resta === 0) && (
            <p className="mt-2 text-xs text-crema/70 sm:text-sm">para el finde en el campo</p>
          )}
        </div>
        <div className="grid w-full min-w-0 grid-cols-4 gap-2 sm:flex-1 sm:gap-3">
          {partes.map((p) => (
            <div key={p.texto} className="min-w-0 rounded-2xl border border-crema/15 bg-crema/5 px-1 py-3">
              <p className="font-heading text-3xl leading-none font-semibold tracking-tight tabular-nums md:text-5xl">
                {ahora === null ? "–" : p.valor}
              </p>
              <p className="mt-2 text-[10px] font-medium tracking-[0.16em] text-crema/65 uppercase sm:text-xs">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
