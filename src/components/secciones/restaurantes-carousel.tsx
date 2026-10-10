"use client"

import { useEffect, useMemo, useState, useSyncExternalStore } from "react"
import Image from "next/image"
import AutoScroll from "embla-carousel-auto-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel, CarouselContent, CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { restaurantes } from "@/data/regalo"

const motionQuery = "(prefers-reduced-motion: reduce)"
function subscribeMotion(callback: () => void) {
  const media = window.matchMedia(motionQuery)
  media.addEventListener("change", callback)
  return () => media.removeEventListener("change", callback)
}
const getReducedMotion = () => window.matchMedia(motionQuery).matches
const getServerMotion = () => true
// Embla needs extra slides to loop when three of the four places are visible.
const slides = [...restaurantes, ...restaurantes]

export function RestaurantesCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion, getServerMotion)
  const autoScroll = useMemo(() => AutoScroll({
    speed: 0.5,
    startDelay: 0,
    playOnInit: false,
    stopOnInteraction: true,
    stopOnFocusIn: false,
    stopOnMouseEnter: false,
  }), [])
  const plugins = useMemo(() => [autoScroll], [autoScroll])
  const playing = !reducedMotion

  useEffect(() => {
    if (!api) return
    const syncPlayback = () => {
      if (playing) autoScroll.play(0)
      else autoScroll.stop()
    }
    // Resume promptly instead of waiting for drag momentum to settle.
    const resumeAfterDrag = () => {
      if (playing) autoScroll.play(150)
    }
    syncPlayback()
    api.on("reInit", syncPlayback)
    api.on("pointerUp", resumeAfterDrag)
    return () => {
      api.off("reInit", syncPlayback)
      api.off("pointerUp", resumeAfterDrag)
      autoScroll.stop()
    }
  }, [api, autoScroll, playing])

  return (
    <Carousel
      aria-labelledby="restaurantes-titulo"
      opts={{ align: "start", loop: true, dragFree: true, duration: reducedMotion ? 0 : 25 }}
      plugins={plugins}
      setApi={setApi}
      className="mt-8"
    >
      <CarouselContent className="items-stretch py-1" aria-live={playing ? "off" : "polite"}>
        {slides.map((r, i) => (
          <CarouselItem key={`${r.nombre}-${i}`} className="flex md:basis-1/2 lg:basis-1/3" aria-label={`${r.nombre}, ${i % restaurantes.length + 1} de ${restaurantes.length}`}>
            <Card className="h-full w-full gap-0 rounded-3xl py-0">
              <div className="relative aspect-[3/2] shrink-0 overflow-hidden bg-muted">
                <Image src={r.foto} alt={r.fotoAlt} fill sizes="(min-width: 1200px) 373px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <CardHeader className="gap-3 px-6 pt-6">
                <Badge variant="secondary" className="w-fit">{r.tipo}</Badge>
                <h3 className="font-heading text-2xl font-semibold">{r.nombre}</h3>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col px-6 pt-3 pb-6">
                <p className="text-base leading-7 text-pretty text-muted-foreground">{r.texto}</p>
                <div className="mt-auto pt-6">
                  <Button asChild className="h-11 w-full rounded-xl">
                    <a href={r.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Ver Instagram de ${r.nombre} (abre en una nueva pestaña)`}>
                      <FontAwesomeIcon icon={faInstagram} aria-hidden="true" className="size-4" />
                      Ver Instagram
                    </a>
                  </Button>
                  <a href={r.fotoFuente} target="_blank" rel="noopener noreferrer" className="mt-3 block text-xs leading-5 text-muted-foreground underline decoration-border underline-offset-2 hover:text-foreground" aria-label={`Más información sobre ${r.nombre} (abre en una nueva pestaña)`}>
                    Más información: {r.fotoCredito}
                  </a>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {reducedMotion && <p className="mt-3 text-center text-xs text-muted-foreground">Reproducción automática desactivada por tu preferencia de movimiento reducido.</p>}
    </Carousel>
  )
}
