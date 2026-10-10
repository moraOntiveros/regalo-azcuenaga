"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { valija } from "@/data/regalo"
import { cn } from "@/lib/utils"

// Lista para tildar lo que ya metieron en la valija
export function Valija() {
  const [listos, setListos] = useState<string[]>([])

  const alternar = (item: string) =>
    setListos((l) => (l.includes(item) ? l.filter((x) => x !== item) : [...l, item]))

  const completo = listos.length === valija.length

  return (
    <div className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10 md:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-heading text-2xl font-semibold">🧳 La valija</h3>
        <span className="text-sm text-muted-foreground tabular-nums">
          {listos.length}/{valija.length}
        </span>
      </div>
      <ul className="mt-5 space-y-2">
        {valija.map((item) => {
          const listo = listos.includes(item)
          return (
            <li key={item}>
              <button
                onClick={() => alternar(item)}
                className="flex w-full items-center gap-3 rounded-xl px-2 py-1.5 text-left transition-colors hover:bg-muted"
              >
                <span
                  className={cn(
                    "flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
                    listo ? "border-salvia bg-salvia text-white" : "border-border"
                  )}
                >
                  {listo && <Check className="size-3.5" strokeWidth={3} />}
                </span>
                <span className={cn(listo && "text-muted-foreground line-through")}>{item}</span>
              </button>
            </li>
          )
        })}
      </ul>
      <p className="mt-5 h-7 text-center font-hand text-2xl text-terracota">
        {completo && "¡Listos para salir! 🚗💨"}
      </p>
    </div>
  )
}
