import { cn } from "@/lib/utils"

// Misma estructura y tipografía, con un acento de color por sección.
const variantes = {
  simple: "",
  bordo: "text-[oklch(0.3_0.1_20)]",
  terracota: "text-terracota",
  salvia: "text-[oklch(0.42_0.06_150)]",
}

export function TituloSeccion({
  id,
  nota,
  titulo,
  bajada,
  oscuro = false,
  variante = "simple",
  unaLinea = false,
}: {
  id?: string
  nota?: string
  titulo: string
  bajada?: string
  oscuro?: boolean // true cuando el fondo de la sección es oscuro
  variante?: keyof typeof variantes
  unaLinea?: boolean // true para que el título no se corte en dos renglones
}) {
  const textoTitulo = "font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl"
  const acento = variante !== "simple"

  return (
    <header className={cn("mx-auto mb-8 text-center", unaLinea ? "max-w-4xl" : "max-w-2xl")}>
      <div>
        {nota && (
          <p className={cn("font-hand text-2xl", acento ? variantes[variante] : "text-terracota")}>
            {nota}
          </p>
        )}
        <h2 id={id} className={cn(
          acento ? "font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl" : textoTitulo,
          nota && "mt-1",
          unaLinea && "text-[clamp(1.25rem,5.4vw,3rem)] text-nowrap"
        )}>{titulo}</h2>
        {acento && (
          <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-10 rounded-full bg-terracota" />
        )}
      </div>
      {bajada && (
        <p
          className={`mt-4 text-lg text-pretty ${oscuro ? "text-crema/70" : "text-muted-foreground"}`}
        >
          {bajada}
        </p>
      )}
    </header>
  )
}
