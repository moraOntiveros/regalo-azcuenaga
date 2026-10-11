import { Car, Clock, MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { casa } from "@/data/regalo"
import { TituloSeccion } from "./titulo-seccion"

const busqueda = encodeURIComponent("La Negrita Casa de Campo, Azcuénaga, Buenos Aires")

export function ComoLlegar() {
  return (
    <section id="como-llegar" className="papel scroll-mt-16 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <TituloSeccion nota="Rumbo al campo" titulo="¿Cómo llegar?" variante="terracota" />

        <div className="grid items-stretch gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Info icono={<MapPin />} titulo="Dirección">
              {casa.direccion}
              <br />
              {casa.localidad}
            </Info>
            <Info icono={<Clock />} titulo="Distancia">
              Unos 100 km desde CABA: entre 1 h 30 y 2 h en auto.
            </Info>
            <Info icono={<Car />} titulo="El camino">
              Los últimos tramos son de campo. Si llovió mucho, mejor ir con calma. También se puede cambiar la reserva para un día de sol.
            </Info>
            <Button asChild size="lg" className="h-12 w-full rounded-full text-base">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${busqueda}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation /> Abrir en Google Maps
              </a>
            </Button>
          </div>

          <div className="min-h-80 overflow-hidden rounded-3xl ring-1 ring-foreground/10 lg:col-span-3">
            <iframe
              title="Mapa de La Negrita"
              src={`https://maps.google.com/maps?q=${busqueda}&z=13&output=embed`}
              className="size-full min-h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Info({
  icono,
  titulo,
  children,
}: {
  icono: React.ReactNode
  titulo: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4 rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-terracota/10 text-terracota [&_svg]:size-5">
        {icono}
      </span>
      <div>
        <p className="font-semibold">{titulo}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  )
}
