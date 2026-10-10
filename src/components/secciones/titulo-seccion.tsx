// Título reutilizable que usan todas las secciones
export function TituloSeccion({
  nota,
  titulo,
  bajada,
  oscuro = false,
  recuadro = false,
}: {
  nota?: string
  titulo: string
  bajada?: string
  oscuro?: boolean // true cuando el fondo de la sección es oscuro
  recuadro?: boolean // true para resaltar el título dentro de un recuadro bordo
}) {
  const textoTitulo = "font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl"

  // Con recuadro: la nota y el título van juntos dentro de un bloque bordo
  if (recuadro) {
    return (
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <div className="rounded-[2.5rem] bg-[oklch(0.3_0.1_20)] px-6 py-8 text-crema shadow-2xl sm:px-10 sm:py-10">
          {nota && <p className="font-hand text-2xl text-[oklch(0.78_0.09_45)]">{nota}</p>}
          <h2 className={`${nota ? "mt-1" : ""} ${textoTitulo}`}>{titulo}</h2>
        </div>
        {bajada && <p className="mt-4 text-lg text-pretty text-muted-foreground">{bajada}</p>}
      </div>
    )
  }

  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {nota && <p className="font-hand text-2xl text-terracota">{nota}</p>}
      <h2 className={`${nota ? "mt-1" : ""} ${textoTitulo}`}>{titulo}</h2>
      {bajada && (
        <p
          className={`mt-4 text-lg text-pretty ${oscuro ? "text-crema/70" : "text-muted-foreground"}`}
        >
          {bajada}
        </p>
      )}
    </div>
  )
}
