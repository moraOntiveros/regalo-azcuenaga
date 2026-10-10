import Image from "next/image"
import { Utensils } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { actividades, restaurantes } from "@/data/regalo"
import { TituloSeccion } from "./titulo-seccion"

export function QueHacer() {
  return (
    <section id="que-hacer" className="papel scroll-mt-14 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <TituloSeccion nota="Ideas para el finde" titulo="¿Qué se puede hacer?" recuadro />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {actividades.map((a, i) => (
            <div
              key={a.titulo}
              className="rounded-3xl bg-[oklch(0.3_0.1_20)] p-5 text-crema shadow-lg transition-transform hover:-translate-y-1"
              // Pequeña inclinación alternada, como fotos pegadas en una heladera
              style={{ rotate: `${i % 2 === 0 ? -1 : 1}deg` }}
            >
              {a.imagen ? (
                <Image
                  src={a.imagen}
                  alt={a.titulo}
                  width={a.ancho ?? 64}
                  height={a.alto ?? 64}
                  unoptimized
                  className={
                    a.ajuste === "entera"
                      ? `${a.altura ?? "h-16"} w-auto rounded-2xl`
                      : a.ajuste === "contain"
                        ? "size-16 rounded-2xl object-contain"
                        : `size-16 rounded-2xl object-cover ${a.pos ?? ""}`
                  }
                />
              ) : (
                <span className="text-4xl">{a.emoji}</span>
              )}
              <h3 className="mt-3 font-heading text-lg font-semibold">{a.titulo}</h3>
              {a.texto && <p className="mt-1 text-sm text-pretty text-crema/75">{a.texto}</p>}
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="flex items-center justify-center gap-2 font-heading text-3xl font-semibold">
            <Utensils className="size-6 text-terracota" />
            Dónde comer en el pueblo
          </h3>
          <p className="mt-2 text-center text-muted-foreground">
            ⚠️ Reserven con unos días de anticipación: los fines de semana se llenan.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {restaurantes.map((r) => (
              <Card key={r.nombre}>
                <CardHeader>
                  <Badge variant="secondary">{r.tipo}</Badge>
                  <CardTitle className="mt-2 font-heading text-xl">{r.nombre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-pretty text-muted-foreground">{r.texto}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
