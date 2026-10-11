import Image from "next/image"
import { MapPin } from "lucide-react"
import { pueblos } from "@/data/regalo"
import { TituloSeccion } from "./titulo-seccion"

// Tres pueblos cercanos para salir a pasear
export function OtrosPueblos() {
  return (
    <section
      id="otros-pueblos"
      aria-labelledby="pueblos-titulo"
      className="scroll-mt-16 border-y border-[oklch(0.915_0.02_78)] bg-[#f1e6d6] px-4 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <TituloSeccion
          id="pueblos-titulo"
          nota="Para salir a pasear"
          titulo="Mejor que 2 son 3"
          variante="terracota"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {pueblos.map((p) => (
            <article
              key={p.nombre}
              className="flex flex-col rounded-3xl bg-[oklch(0.3_0.1_20)] p-6 text-crema shadow-lg"
            >
              {/* Mismo cuadradito redondeado de fondo que los íconos de "Qué se puede hacer" */}
              <div className="mb-4 flex size-12 shrink-0 items-center justify-center rounded-xl bg-crema/10">
                <Image
                  src={p.icono}
                  alt=""
                  width={36}
                  height={36}
                  unoptimized
                  className="size-9 brightness-0 invert"
                />
              </div>
              <h3 className="font-heading text-2xl font-semibold">{p.nombre}</h3>
              <p className="mt-1 text-sm font-medium text-[oklch(0.78_0.09_45)]">{p.distancia}</p>
              <p className="mt-2 flex-1 text-pretty text-crema/80">{p.texto}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.mapa)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[oklch(0.78_0.09_45)] underline-offset-4 hover:underline"
              >
                <MapPin className="size-4" />
                Ver en el mapa
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
