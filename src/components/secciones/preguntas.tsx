import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleQuestion, faChevronDown, faScroll } from "@fortawesome/free-solid-svg-icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { preguntas } from "@/data/regalo"
import { TituloSeccion } from "./titulo-seccion"
import { Valija } from "./valija"

export function Preguntas() {
  return (
    <section id="preguntas" className="scroll-mt-16 bg-muted px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <TituloSeccion nota="Antes de salir" titulo="¿Cómo prepararse para el finde?" variante="salvia" />

        <div className="mx-auto grid max-w-5xl gap-6">
          <Valija />

          <div className="rounded-3xl bg-[oklch(0.3_0.1_20)] p-6 text-crema shadow-lg md:p-8">
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-crema/10">
                <FontAwesomeIcon icon={faCircleQuestion} aria-hidden="true" className="h-6! w-auto!" />
              </span>
              <div>
                <h3 className="font-heading text-2xl font-semibold">Preguntas frecuentes</h3>
                <p className="mt-1 text-sm text-crema/75">Las dudas prácticas, resueltas.</p>
              </div>
            </div>
            <Accordion type="single" collapsible className="mt-4">
              {preguntas.map((q) => (
                <AccordionItem key={q.p} value={q.p} className="border-crema/15">
                  <AccordionTrigger className="min-h-12 items-center gap-4 py-3 text-base focus-visible:border-crema focus-visible:ring-crema/40 [&_[data-slot=accordion-trigger-icon]]:hidden">
                    {q.p}
                    <FontAwesomeIcon icon={faChevronDown} aria-hidden="true" className="size-3! shrink-0 text-crema/70 transition-transform group-aria-expanded/accordion-trigger:rotate-180 motion-reduce:transition-none" />
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-7 text-crema/75">
                    {q.r}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="rounded-3xl bg-[oklch(0.3_0.1_20)] p-6 text-crema shadow-lg md:p-8">
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-crema/10">
                <FontAwesomeIcon icon={faScroll} aria-hidden="true" className="h-6! w-auto!" />
              </span>
              <div>
                <h3 className="font-heading text-2xl font-semibold">Reglas del finde</h3>
                <p className="mt-1 text-sm text-crema/75">Pocas reglas, mucho descanso.</p>
              </div>
            </div>
            <ol className="mt-5 list-inside list-decimal space-y-3 text-base leading-7 marker:font-heading marker:font-semibold">
              <li>Prohibido hablar del trabajo más de 10 minutos seguidos.</li>
              <li>La siesta no se negocia.</li>
              <li>El que pierde al pool o alguno de los juegos lava los platos.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
