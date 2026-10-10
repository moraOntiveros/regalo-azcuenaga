import { regalo } from "@/data/regalo"

export function Pie() {
  const [n1, n2] = regalo.novios
  const [d1, d2] = regalo.deParteDe

  return (
    <footer className="bg-tierra px-4 py-16 text-center text-crema">
      <p className="font-hand text-3xl md:text-4xl">¡Que vivan los novios!</p>
      <p className="mt-2 font-heading text-5xl font-semibold md:text-6xl">
        {n1} <span className="text-terracota">&</span> {n2}
      </p>
      <p className="mx-auto mt-6 max-w-md text-crema/70">
        Gracias por dejarnos ser parte de este momento. Disfruten mucho este finde, se lo merecen.
      </p>
      <p className="mt-8 font-hand text-2xl text-[oklch(0.78_0.09_45)]">
        Con amor, {d1} y {d2} ♥
      </p>
    </footer>
  )
}
