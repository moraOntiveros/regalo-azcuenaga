import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBed,
  faCircleDot,
  faComments,
  faDice,
  faFilm,
  faFire,
  faGamepad,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import { actividades, type IconoActividad } from "@/data/regalo"
import { TituloSeccion } from "./titulo-seccion"

const iconosActividad = {
  descanso: faBed,
  videojuegos: faGamepad,
  pool: faCircleDot,
  pelis: faFilm,
  mesa: faDice,
  asado: faFire,
  charla: faComments,
  pueblo: faMapLocationDot,
} satisfies Record<IconoActividad, IconDefinition>

export function QueHacer() {
  return (
    <section id="que-hacer" className="scroll-mt-16 bg-muted px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <TituloSeccion nota="Ideas para el finde" titulo="¿Qué se puede hacer?" variante="bordo" />

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {actividades.map((a, i) => (
            <div
              key={a.titulo}
              className="@container flex min-w-0 flex-col rounded-3xl bg-[oklch(0.3_0.1_20)] p-6 text-crema shadow-lg transition-transform hover:-translate-y-1"
              style={{ rotate: `${i % 2 === 0 ? -1 : 1}deg` }}
            >
              <div className="mb-4 flex size-12 shrink-0 items-center justify-center rounded-xl bg-crema/10">
                <FontAwesomeIcon
                  icon={iconosActividad[a.icono]}
                  aria-hidden="true"
                  className="h-7! w-auto!"
                />
              </div>
              <h3 className="min-h-[2lh] font-heading text-lg leading-6 font-semibold @[11rem]:min-h-[1lh]">{a.titulo}</h3>
              <p className="mt-2 text-sm leading-6 text-pretty text-crema/75">{a.texto}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
