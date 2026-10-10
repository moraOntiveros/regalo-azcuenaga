"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { fotos } from "@/data/regalo"
import { cn } from "@/lib/utils"

// Grilla de fotos. Al tocar una, se abre en grande.
export function Galeria() {
  const [actual, setActual] = useState<number | null>(null)
  const total = fotos.galeria.length

  const mover = (paso: number) =>
    setActual((i) => (i === null ? null : (i + paso + total) % total))

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-flow-dense">
        {fotos.galeria.map((foto, i) => (
          <button
            key={foto.src}
            onClick={() => setActual(i)}
            className={cn(
              "group relative overflow-hidden rounded-2xl bg-muted",
              // La segunda foto grande va a la derecha; las chicas llenan su izquierda.
              i === 0 || i === 5 ? "col-span-2 row-span-2 aspect-square" : "aspect-square",
              i === 5 && "md:col-start-3 md:row-start-3"
            )}
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes={i === 0 || i === 5 ? "(min-width: 1200px) 576px, (min-width: 768px) 50vw, 100vw" : "(min-width: 1200px) 282px, (min-width: 768px) 25vw, 50vw"}
              className={cn(
                "object-cover transition-transform duration-500 group-hover:scale-105",
                "pos" in foto && foto.pos
              )}
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-tierra/80 to-transparent p-3 text-left text-sm text-crema opacity-0 transition-opacity group-hover:opacity-100">
              {foto.alt}
            </span>
          </button>
        ))}
      </div>

      <Dialog open={actual !== null} onOpenChange={(o) => !o && setActual(null)}>
        <DialogContent className="max-w-[calc(100%-2rem)] gap-0 overflow-hidden p-0 sm:max-w-4xl">
          {actual !== null && (
            <>
              <DialogTitle className="sr-only">{fotos.galeria[actual].alt}</DialogTitle>
              <div className="relative aspect-[4/3] w-full bg-tierra">
                <Image
                  src={fotos.galeria[actual].src}
                  alt={fotos.galeria[actual].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
                <button
                  onClick={() => mover(-1)}
                  aria-label="Anterior"
                  className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-crema/80 p-2 hover:bg-crema"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={() => mover(1)}
                  aria-label="Siguiente"
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-crema/80 p-2 hover:bg-crema"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
              <p className="px-4 py-3 text-sm text-muted-foreground">
                {fotos.galeria[actual].alt} · {actual + 1}/{total}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
