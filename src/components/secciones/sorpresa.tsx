import { TituloSeccion } from "./titulo-seccion"
import { SorpresaRaspadita } from "./sorpresa-raspadita"

// Segunda sorpresa: dos fotos tapadas que se descubren raspando
export function Sorpresa() {
  return (
    <section id="sorpresa" className="papel scroll-mt-14 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <TituloSeccion titulo="¡Hay otra sorpresa!" bajada="Raspá y descubrí" />
        <SorpresaRaspadita />
      </div>
    </section>
  )
}
