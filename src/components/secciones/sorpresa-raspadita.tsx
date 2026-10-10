"use client"
// Dos "raspaditas": se raspa con el dedo (o el mouse) y aparece la foto con su texto.

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import confetti from "canvas-confetti"
import { fotosSorpresa } from "@/data/sorpresa"

const BORDO = "#4d0f14"
const COLORES_CONFETI = ["#b5563a", "#8fae95", "#f4ead8", "#e8a87c"]

function Raspadita({
  src,
  alt,
  ancho,
  alto,
  giro,
  texto,
  alRevelar,
}: (typeof fotosSorpresa)[number] & { alRevelar: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ultimoPunto = useRef<{ x: number; y: number } | null>(null)
  const movimientos = useRef(0)
  const [revelada, setRevelada] = useState(false)

  // Pinta la capa que hay que raspar. Usa la densidad real de la pantalla (retina)
  // para que se vea nítida.
  const pintarCapa = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const caja = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    canvas.width = Math.round(caja.width * dpr)
    canvas.height = Math.round(caja.height * dpr)
    const ctx = canvas.getContext("2d")!
    const degradado = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    degradado.addColorStop(0, "#8a2230")
    degradado.addColorStop(0.5, BORDO)
    degradado.addColorStop(1, "#8a2230")
    ctx.fillStyle = degradado
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // Puntitos de textura
    ctx.fillStyle = "rgba(244, 234, 216, 0.14)"
    for (let i = 0; i < 90; i++) {
      ctx.beginPath()
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        (1 + Math.random() * 2.5) * dpr,
        0,
        Math.PI * 2,
      )
      ctx.fill()
    }
  }, [])

  useEffect(() => {
    pintarCapa()
  }, [pintarCapa])

  // Cuánto de la capa ya se raspó (0 a 1)
  function porcentajeRaspado() {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    const datos = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    let vacios = 0
    let total = 0
    for (let i = 3; i < datos.length; i += 32) {
      total++
      if (datos[i] < 40) vacios++
    }
    return vacios / total
  }

  function posicion(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!
    const caja = canvas.getBoundingClientRect()
    return {
      x: ((e.clientX - caja.left) * canvas.width) / caja.width,
      y: ((e.clientY - caja.top) * canvas.height) / caja.height,
      caja,
    }
  }

  function raspar(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!ultimoPunto.current || revelada) return
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    const { x, y, caja } = posicion(e)

    // Trazo continuo y redondeado (en vez de puntitos sueltos)
    ctx.globalCompositeOperation = "destination-out"
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.lineWidth = canvas.width / 7
    ctx.beginPath()
    ctx.moveTo(ultimoPunto.current.x, ultimoPunto.current.y)
    ctx.lineTo(x, y)
    ctx.stroke()
    ultimoPunto.current = { x, y }

    movimientos.current++
    if (movimientos.current % 6 === 0 && porcentajeRaspado() > 0.4) {
      setRevelada(true)
      alRevelar()
      const origin = {
        x: (caja.left + caja.width / 2) / innerWidth,
        y: (caja.top + caja.height / 2) / innerHeight,
      }
      confetti({ particleCount: 120, spread: 80, origin, colors: COLORES_CONFETI })
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.7 },
          colors: COLORES_CONFETI,
        })
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.7 },
          colors: COLORES_CONFETI,
        })
      }, 250)
    }
  }

  return (
    <figure
      className="w-full max-w-xs shrink-0 bg-white p-2 pb-4 shadow-xl sm:p-3 sm:pb-5 lg:w-56 lg:max-w-none xl:w-72"
      style={{ rotate: `${giro}deg` }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${ancho} / ${alto}` }}
      >
        <Image src={src} alt={alt} fill sizes="320px" unoptimized className="object-cover" />

        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId)
            const { x, y } = posicion(e)
            ultimoPunto.current = { x, y }
            raspar(e)
          }}
          onPointerMove={raspar}
          onPointerUp={() => (ultimoPunto.current = null)}
          onPointerCancel={() => (ultimoPunto.current = null)}
          className={`absolute inset-0 size-full cursor-pointer touch-none transition-opacity duration-700 ${
            revelada ? "pointer-events-none opacity-0" : ""
          }`}
        />

        {/* Brillo animado por encima de la capa (no estorba al raspar) */}
        {!revelada && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="brillo-barrido absolute -inset-y-6 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
          </div>
        )}
      </div>

      {/* Texto que aparece al descubrir la foto (el espacio ya está reservado) */}
      <figcaption
        className={`mt-3 min-h-14 text-center font-hand text-xl leading-snug text-[oklch(0.3_0.1_20)] transition-all duration-700 sm:text-2xl ${
          revelada ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
        aria-hidden={!revelada}
      >
        {texto}
      </figcaption>
    </figure>
  )
}

// Una foto raspable más la imagen que aparece a su costado cuando la descubren.
// En compu, la primera imagen sale a la izquierda y la segunda a la derecha;
// en celular, cada una aparece debajo de su foto.
function Grupo({
  foto,
  alLado,
}: {
  foto: (typeof fotosSorpresa)[number]
  alLado: "izquierda" | "derecha"
}) {
  const [revelada, setRevelada] = useState(false)
  const { reaccion } = foto

  return (
    <div className="flex w-full flex-col items-center gap-8 lg:w-auto lg:min-w-0 lg:flex-row lg:items-start">
      <Raspadita {...foto} alRevelar={() => setRevelada(true)} />

      {revelada && (
        <figure
          className={`w-full max-w-[15rem] shrink-0 animate-in bg-white p-2 shadow-2xl delay-500 duration-700 fill-mode-backwards zoom-in-75 sm:p-3 lg:mt-8 lg:w-44 xl:w-60 ${
            alLado === "izquierda" ? "lg:order-first" : ""
          }`}
          style={{ rotate: `${reaccion.giro}deg` }}
        >
          <Image
            src={reaccion.src}
            alt={reaccion.alt}
            width={reaccion.ancho}
            height={reaccion.alto}
            unoptimized
            className="h-auto w-full"
          />
        </figure>
      )}
    </div>
  )
}

export function SorpresaRaspadita() {
  return (
    <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-8 lg:gap-12">
      {fotosSorpresa.map((f, i) => (
        <Grupo key={f.src} foto={f} alLado={i === 0 ? "izquierda" : "derecha"} />
      ))}
    </div>
  )
}
