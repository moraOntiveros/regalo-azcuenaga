"use client"
// ☝️ "use client" significa que este componente es interactivo
// (reacciona a clics), por eso corre en el navegador.

import { useState } from "react"
import Image from "next/image"
import confetti from "canvas-confetti"
import { MapPin, CalendarHeart, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { regalo } from "@/data/regalo"
import { fechaCorta, fechaLarga } from "@/lib/fechas"
import { CuentaRegresiva } from "./cuenta-regresiva"

export function SobreRegalo() {
  const [abierto, setAbierto] = useState(false)
  const [n1, n2] = regalo.novios
  const listaPasajeros = `${n1} y ${n2}`

  function abrir() {
    setAbierto(true)
    // Lluvia de confeti con los colores de la casa
    const colores = ["#b5563a", "#8fae95", "#f4ead8", "#e8a87c"]
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: colores,
    })
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: colores,
      })
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: colores,
      })
    }, 300)
  }

  return (
    <>
      <section id="regalo" className="papel relative scroll-mt-14 overflow-hidden px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
            Su regalo de casamiento
          </h2>
        </div>

        <div className={`mx-auto mt-12 ${abierto ? "max-w-5xl" : "max-w-xl"}`}>
          {!abierto ? (
            // ✉️ EL SOBRE CERRADO
            <button
              onClick={abrir}
              className="group relative mx-auto block aspect-[3/2] w-full max-w-md cursor-pointer"
              aria-label="Abrir el sobre"
            >
              <div className="absolute inset-0 rounded-2xl bg-[oklch(0.3_0.1_20)] shadow-2xl transition-transform group-hover:-translate-y-1 group-hover:rotate-1" />
              {/* Solapa */}
              <div
                className="absolute inset-x-0 top-0 h-1/2 origin-top rounded-t-2xl bg-[oklch(0.23_0.09_20)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              />
              {/* Sello de cera */}
              <div className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-crema text-3xl shadow-md transition-transform group-hover:scale-110">
                💌
              </div>
              <p className="absolute inset-x-0 bottom-5 font-hand text-2xl text-crema">
                Para {n1} & {n2} · tocá para abrir
              </p>
            </button>
          ) : (
            // 🎟️ EL PASE (aparece al abrir el sobre)
            <div className="relative animate-in duration-700 fade-in zoom-in-95 slide-in-from-bottom-8 lg:flex lg:items-start lg:justify-center lg:gap-10">
              {/* Columna de la tarjeta (en compu, la imagen queda a su derecha) */}
              <div className="mx-auto w-full max-w-xl lg:mx-0 lg:flex-1">
                <div className="overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-foreground/10">
                  <div className="flex items-center justify-center bg-[oklch(0.3_0.1_20)] py-3 text-crema">
                    <Sparkles className="size-5" />
                  </div>

                  <div className="px-6 pt-6 pb-4 text-left">
                    <p className="text-xs tracking-widest text-muted-foreground uppercase">
                      Destino
                    </p>
                    <div className="mt-1 flex items-end justify-between gap-4">
                      <p className="min-w-0 flex-1 font-heading text-3xl font-semibold leading-tight text-balance sm:text-4xl">
                        {regalo.destinoTitulo}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{regalo.destinoDetalle}</p>

                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                      <Dato
                        icono={<Users className="size-4" />}
                        titulo="Pasajeros"
                        valor={listaPasajeros}
                      />
                      <Dato
                        icono={<CalendarHeart className="size-4" />}
                        titulo="Cuándo"
                        valor={
                          regalo.fechaDefinida
                            ? `${fechaCorta(regalo.checkIn)} al ${fechaCorta(regalo.checkOut)}`
                            : "Ustedes eligen"
                        }
                      />
                      <Dato
                        icono={<MapPin className="size-4" />}
                        titulo="Distancia"
                        valor="~100 km de CABA"
                      />
                      <Dato
                        icono={<Sparkles className="size-4" />}
                        titulo="Clase"
                        valor="Relax total"
                      />
                    </div>
                  </div>

                  {/* Línea punteada de "cortar acá" */}
                  <div className="relative my-2 border-t-2 border-dashed border-border">
                    <span className="absolute -top-3 -left-3 size-6 rounded-full bg-background" />
                    <span className="absolute -top-3 -right-3 size-6 rounded-full bg-background" />
                  </div>

                  <div className="px-6 pt-4 pb-6 text-left">
                    <p className="font-hand text-2xl text-[oklch(0.3_0.1_20)]">{regalo.firma}</p>
                  </div>
                </div>

                {regalo.fechaDefinida && (
                  <p className="mt-6 text-center text-muted-foreground">
                    Check-in el{" "}
                    <strong className="text-foreground">{fechaLarga(regalo.checkIn)}</strong> a las{" "}
                    {regalo.horaCheckIn} hs
                  </p>
                )}

                <div className="mt-4 text-center">
                  <Button variant="ghost" size="sm" onClick={abrir}>
                    Más confeti 🎉
                  </Button>
                </div>
              </div>

              {/* Imagen sorpresa que aparece junto con el confeti */}
              <figure className="mx-auto mt-10 w-full max-w-[15rem] rotate-2 sm:max-w-sm lg:mx-0 lg:mt-0 lg:w-[17rem] lg:shrink-0 xl:w-[20rem] animate-in bg-white p-2 shadow-2xl delay-300 duration-700 fill-mode-backwards zoom-in-75 sm:p-3">
                <Image
                  src="/fotos/sorpresa.jpg"
                  alt="Retrato con anteojos de sol"
                  width={1163}
                  height={1600}
                  unoptimized
                  className="h-auto w-full"
                />
              </figure>
            </div>
          )}
        </div>
      </section>

      {regalo.fechaDefinida && <CuentaRegresiva fecha={regalo.checkIn} hora={regalo.horaCheckIn} />}
    </>
  )
}

function Dato({ icono, titulo, valor }: { icono: React.ReactNode; titulo: string; valor: string }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-xs tracking-widest text-muted-foreground uppercase">
        {icono}
        {titulo}
      </p>
      <p className="mt-1 font-medium">{valor}</p>
    </div>
  )
}
