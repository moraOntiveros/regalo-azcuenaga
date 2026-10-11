import Image from "next/image"
import { regalo } from "@/data/regalo"

// Cierre del sitio: la imagen final y la firma, sobre el fondo bordo
export function Pie() {
  const [d1, d2] = regalo.deParteDe

  return (
    <footer className="flex flex-col items-center bg-[oklch(0.3_0.1_20)] px-4 py-12 sm:py-16">
      <Image
        src="/fotos/final/thats-all-folks.webp"
        alt="Bugs Bunny: That's all folks!"
        width={512}
        height={512}
        unoptimized
        className="size-56 sm:size-72"
      />
      <p className="mt-4 text-center font-hand text-3xl text-[oklch(0.78_0.09_45)] md:text-4xl">
        Con amor, {d1} y {d2} ♥
      </p>
    </footer>
  )
}
