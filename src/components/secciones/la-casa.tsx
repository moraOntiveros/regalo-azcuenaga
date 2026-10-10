import { TituloSeccion } from "./titulo-seccion"
import { Galeria } from "./galeria"

export function LaCasa() {
  return (
    <section
      id="casa"
      className="scroll-mt-14 bg-[oklch(0.3_0.1_20)] px-4 py-24 text-crema"
    >
      <div className="mx-auto max-w-6xl">
        <TituloSeccion
          oscuro
          titulo="¿Cómo es la casa?"
          bajada="Una casa de campo con paredes de colores, pisos de ladrillo, galería con reposeras y un parque que termina donde empieza el atardecer."
        />

        <Galeria />
      </div>
    </section>
  )
}
