"use client"
// Sorpresa de un solo toque: al tocar el botón aparecen dos imágenes, una después de la otra.

import { useState } from "react"
import Image from "next/image"
import confetti from "canvas-confetti"
import { Gift } from "lucide-react"
import { TituloSeccion } from "./titulo-seccion"

export function SorpresaClick() {
  const [abierta, setAbierta] = useState(false)

  function abrir() {
    setAbierta(true)
    const colores = ["#b5563a", "#8fae95", "#f4ead8", "#e8a87c"]
    confetti({ particleCount: 140, spread: 90, origin: { y: 0.55 }, colors: colores })
  }

  return (
    <section id="sorpresa-click" className="scroll-mt-16 bg-muted px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <TituloSeccion
          titulo="Hay un detalle"
          bajada={abierta ? "¡Nosotros, Mora y tu hermano, también viajamos!" : "Tocá para descubrir"}
        />

        {!abierta ? (
          <button
            onClick={abrir}
            aria-label="Descubrir la sorpresa"
            className="group mx-auto flex w-full max-w-sm cursor-pointer flex-col items-center gap-4 rounded-[2.5rem] bg-[oklch(0.3_0.1_20)] px-8 py-12 text-crema shadow-2xl transition-transform hover:-translate-y-1 hover:rotate-1"
          >
            <Gift className="size-16 animate-bounce text-[oklch(0.78_0.09_45)]" />
            <span className="font-hand text-4xl">Tocá acá</span>
          </button>
        ) : (
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center">
            <figure className="w-full max-w-sm shrink-0 -rotate-3 animate-in bg-white p-2 shadow-2xl duration-700 fade-in zoom-in-75 sm:p-3 lg:w-[22rem]">
              <Image
                src="/fotos/sorpresa2/tenemos.webp"
                alt="Meme de un conejo que dice: Tenemos"
                width={959}
                height={780}
                unoptimized
                className="h-auto w-full"
              />
            </figure>
            <figure className="w-full max-w-xl shrink-0 rotate-2 animate-in bg-white p-2 shadow-2xl delay-700 duration-700 fill-mode-backwards fade-in zoom-in-75 sm:p-3 lg:w-[30rem] lg:mt-8">
              <Image
                src="/fotos/sorpresa2/pareja.jpg"
                alt="Abril y Gonza abrazados"
                width={1600}
                height={900}
                unoptimized
                className="h-auto w-full"
              />
            </figure>
          </div>
        )}
      </div>
    </section>
  )
}
