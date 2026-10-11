import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { faNewspaper } from "@fortawesome/free-regular-svg-icons"
import { ArrowUpRight } from "lucide-react"
import { plus } from "@/data/regalo"
import { TituloSeccion } from "./titulo-seccion"

const iconos = { nota: faNewspaper, musica: faSpotify }

// Última sección: enlaces extra
export function UnPlus() {
  return (
    <section id="un-plus" className="papel scroll-mt-16 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <TituloSeccion titulo="Un plus" variante="bordo" />

        <div className="grid gap-4 md:grid-cols-2">
          {plus.map((p) => (
            <article
              key={p.titulo}
              className="flex flex-col overflow-hidden rounded-3xl bg-[oklch(0.3_0.1_20)] text-crema shadow-lg"
            >
              {/* Zona superior de la misma altura en las dos tarjetas:
                  reproductor de Spotify (se desliza para ver los temas) o imagen de vista previa.
                  Spotify solo tiene dos tamaños reales: compacto (152 px) y grande (352 px, con la lista completa).
                  376 px = el reproductor grande más el margen de 12 px arriba y abajo */}
              {p.embed ? (
                <div className="h-[376px] bg-crema/10 p-3">
                  <iframe
                    src={p.embed}
                    title={`${p.titulo}: playlist en Spotify`}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    className="block size-full rounded-xl border-0"
                  />
                </div>
              ) : (
                p.imagen && (
                  <div className="relative h-[376px] bg-crema/10">
                    <Image
                      src={p.imagen}
                      alt={p.alt ?? ""}
                      fill
                      sizes="(min-width: 768px) 448px, 100vw"
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                )
              )}
              <div className="flex flex-1 flex-col p-5">
                {/* Ícono y título en la misma línea para ahorrar altura */}
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-crema/10">
                    <FontAwesomeIcon
                      icon={iconos[p.icono]}
                      aria-hidden="true"
                      className="h-5! w-auto!"
                    />
                  </div>
                  <h3 className="font-heading text-xl leading-tight font-semibold text-balance">
                    {p.titulo}
                  </h3>
                </div>
                <p className="mt-3 flex-1 text-sm text-pretty text-crema/80">{p.texto}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-crema px-4 py-1.5 text-sm font-medium text-[oklch(0.3_0.1_20)] transition-colors hover:bg-white"
                >
                  {p.boton}
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
