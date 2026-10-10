"use client"

import { useEffect, useId, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faChevronDown, faSuitcase } from "@fortawesome/free-solid-svg-icons"
import { valija } from "@/data/regalo"
import { cn } from "@/lib/utils"

const storageKey = "regalo-azcuenaga:valija:v1"
const idsValidos = new Set(valija.map((item) => item.id))

// Lista personal: se restaura después del montaje para respetar la hidratación.
export function Valija() {
  const [listos, setListos] = useState<string[]>([])
  const [cargada, setCargada] = useState(false)
  const [persistente, setPersistente] = useState(false)
  const [abierta, setAbierta] = useState(false)
  const listaId = useId()

  useEffect(() => {
    let guardados: string[] = []
    let disponible = false

    try {
      const valor = window.localStorage.getItem(storageKey)
      const datos: unknown = valor === null ? [] : JSON.parse(valor)
      if (Array.isArray(datos)) {
        guardados = [...new Set(datos.filter((id): id is string => typeof id === "string" && idsValidos.has(id)))]
        // Comprobar también escritura: algunos navegadores permiten leer pero no guardar.
        window.localStorage.setItem(storageKey, JSON.stringify(guardados))
        disponible = true
      }
    } catch {
      // La lista sigue funcionando sin almacenamiento o con datos dañados.
    }

    // Sincronizar datos externos después del montaje evita acceder al navegador en SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setListos(guardados)
    setPersistente(disponible)
    setCargada(true)
  }, [])

  function actualizar(siguientes: string[]) {
    setListos(siguientes)
    if (!persistente) return

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(siguientes))
    } catch {
      setPersistente(false)
    }
  }

  function alternar(id: string) {
    actualizar(listos.includes(id) ? listos.filter((item) => item !== id) : [...listos, id])
  }

  const completo = listos.length === valija.length

  return (
    <div className="rounded-3xl bg-[oklch(0.3_0.1_20)] p-6 text-crema shadow-lg md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-crema/10">
            <FontAwesomeIcon icon={faSuitcase} aria-hidden="true" className="h-6! w-auto!" />
          </span>
          <div>
            <h3 className="font-heading text-2xl font-semibold">La valija</h3>
            <p className="mt-1 text-sm text-crema/75">Tildá lo que ya tenés listo.</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-crema/10 px-3 py-1.5 text-sm text-crema/80 tabular-nums">
          {listos.length}/{valija.length}
        </span>
      </div>
      <div
        role="progressbar"
        aria-label="Progreso de la valija"
        aria-valuemin={0}
        aria-valuemax={valija.length}
        aria-valuenow={listos.length}
        className="mt-5 h-1.5 overflow-hidden rounded-full bg-crema/15"
      >
        <div
          className="h-full rounded-full bg-salvia transition-[width] duration-300 motion-reduce:transition-none"
          style={{ width: `${(listos.length / valija.length) * 100}%` }}
        />
      </div>
      <button
        type="button"
        aria-expanded={abierta}
        aria-controls={listaId}
        onClick={() => setAbierta((valor) => !valor)}
        className="mt-3 flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-2 text-sm text-crema/85 hover:bg-crema/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crema md:hidden"
      >
        {abierta ? "Ocultar lista" : "Ver lista"}
        <FontAwesomeIcon
          icon={faChevronDown}
          aria-hidden="true"
          className={cn("size-3! transition-transform motion-reduce:transition-none", abierta && "rotate-180")}
        />
      </button>
      <div id={listaId} className={cn(!abierta && "hidden", "md:block")}>
        <ul className="mt-3 grid auto-rows-fr gap-3 sm:grid-cols-2 md:mt-5 lg:grid-cols-3">
          {valija.map((item) => {
            const listo = listos.includes(item.id)
            return (
              <li key={item.id}>
                <label
                  className={cn(
                    "relative flex h-full min-h-12 w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm leading-6 transition-colors hover:bg-crema/10 focus-within:ring-2 focus-within:ring-crema",
                    listo && "bg-crema/10",
                    !cargada && "cursor-wait opacity-60"
                  )}
                >
                  <input
                    type="checkbox"
                    checked={listo}
                    disabled={!cargada}
                    onChange={() => alternar(item.id)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
                      listo ? "border-salvia bg-salvia text-crema" : "border-crema/40"
                    )}
                  >
                    {listo && <FontAwesomeIcon icon={faCheck} className="size-3!" />}
                  </span>
                  <span className={cn(listo && "text-crema/60 line-through")}>{item.texto}</span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
      <p role="status" className={cn("text-center font-hand text-2xl text-crema", completo && "pt-6 md:pt-8")}>
        {completo && "¡Listos para salir!"}
      </p>
    </div>
  )
}
