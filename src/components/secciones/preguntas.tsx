import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { preguntas } from "@/data/regalo"
import { TituloSeccion } from "./titulo-seccion"
import { Valija } from "./valija"

const reglas = [
  "Prohibido hablar del casamiento más de 10 minutos seguidos",
  "El que pierde al pool lava los platos",
  "La siesta no se negocia",
  "Celulares en modo avión al atardecer",
  "Mandarnos al menos una foto (así sabemos que llegaron)",
]

export function Preguntas() {
  return (
    <section id="preguntas" className="papel scroll-mt-14 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <TituloSeccion nota="Lo importante" titulo="Antes de salir" />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Valija />

            <div className="rounded-3xl bg-terracota p-6 text-crema md:p-8">
              <h3 className="font-heading text-2xl font-semibold">📜 Reglas del finde</h3>
              <ol className="mt-4 list-inside list-decimal space-y-2 text-crema/90 marker:font-heading marker:text-crema">
                {reglas.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="self-start rounded-3xl bg-card p-6 ring-1 ring-foreground/10 md:p-8">
            <h3 className="font-heading text-2xl font-semibold">🤔 Preguntas frecuentes</h3>
            <Accordion type="single" collapsible className="mt-4">
              {preguntas.map((q) => (
                <AccordionItem key={q.p} value={q.p}>
                  <AccordionTrigger className="text-base">{q.p}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {q.r}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
