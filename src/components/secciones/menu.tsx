"use client"
// Es "client" porque el menú del celular se abre y se cierra al tocarlo.

import { useState } from "react"
import { Menu as IconoMenu, X } from "lucide-react"

const links = [
  { href: "#regalo", texto: "El regalo" },
  { href: "#casa", texto: "La casa" },
  { href: "#que-hacer", texto: "Qué hacer" },
  { href: "#donde-comer", texto: "Dónde comer" },
  { href: "#como-llegar", texto: "Cómo llegar" },
  { href: "#preguntas", texto: "Cómo prepararse" },
]

// Barra de navegación fija arriba de todo.
// En compu muestra los links; en celular, un botón de hamburguesa.
export function Menu() {
  const [abierto, setAbierto] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-crema/10 bg-[oklch(0.22_0.08_20/0.92)] backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-end px-4 md:justify-center">
        <ul className="hidden gap-8 font-heading text-base text-crema/80 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-crema">
                {l.texto}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setAbierto((a) => !a)}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          className="-mr-2 rounded-full p-2 text-crema md:hidden"
        >
          {abierto ? <X className="size-6" /> : <IconoMenu className="size-6" />}
        </button>
      </nav>

      {abierto && (
        <ul className="border-t border-crema/10 px-4 pb-4 font-heading text-lg text-crema md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setAbierto(false)}
                className="block border-b border-crema/10 py-3 last:border-0"
              >
                {l.texto}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
