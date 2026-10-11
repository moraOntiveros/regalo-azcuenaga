"use client"
// Es "client" porque el menú del celular se abre y se cierra al tocarlo.

import { useEffect, useRef, useState } from "react"
import { Menu as IconoMenu, X } from "lucide-react"
import { regalo } from "@/data/regalo"
import { cn } from "@/lib/utils"

const links = [
  { href: "#regalo", texto: "El regalo" },
  { href: "#casa", texto: "La casa" },
  { href: "#que-hacer", texto: "Qué hacer" },
  { href: "#donde-comer", texto: "Dónde comer" },
  { href: "#otros-pueblos", texto: "Qué visitar" },
  { href: "#como-llegar", texto: "Cómo llegar" },
  { href: "#preguntas", texto: "Cómo prepararse" },
]

// Barra de navegación fija arriba de todo.
// En compu muestra los links; en celular, un botón de hamburguesa.
export function Menu() {
  const [abierto, setAbierto] = useState(false)
  const [activo, setActivo] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const secciones = links.map((link) => {
      const elemento = document.getElementById(link.href.slice(1))
      return {
        href: link.href,
        elemento,
        final: link.href === "#regalo" ? document.getElementById("sorpresa") : elemento,
      }
    })
    let frame = 0

    function actualizar() {
      frame = 0
      const linea = (headerRef.current?.getBoundingClientRect().bottom ?? 64) + 24
      const actual = secciones.find(({ elemento, final }) => {
        if (!elemento) return false
        const rect = elemento.getBoundingClientRect()
        return rect.top <= linea && (final?.getBoundingClientRect().bottom ?? rect.bottom) > linea
      })
      setActivo(actual?.href ?? null)
    }

    function programar() {
      if (!frame) frame = window.requestAnimationFrame(actualizar)
    }

    window.addEventListener("scroll", programar, { passive: true })
    window.addEventListener("resize", programar)
    const observer = new ResizeObserver(programar)
    const main = document.querySelector("main")
    if (main) observer.observe(main)
    programar()

    return () => {
      window.removeEventListener("scroll", programar)
      window.removeEventListener("resize", programar)
      observer.disconnect()
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-40 border-b border-crema/10 bg-[oklch(0.22_0.08_20/0.92)] backdrop-blur-md">
      <nav aria-label="Navegación principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#inicio" onClick={() => setAbierto(false)} className="shrink-0 rounded-sm font-heading text-xl font-semibold text-crema focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crema">
          {regalo.novios[0]} <span className="text-[oklch(0.78_0.09_45)]">&</span> {regalo.novios[1]}
        </a>
        <ul className="hidden items-center gap-3 font-heading text-sm text-crema/80 md:flex lg:gap-6 lg:text-base">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={activo === l.href ? "location" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-sm underline-offset-8 decoration-2 transition-colors hover:text-crema focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crema",
                  activo === l.href && "text-crema underline"
                )}
              >
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
                aria-current={activo === l.href ? "location" : undefined}
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
