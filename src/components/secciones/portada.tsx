import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { regalo } from "@/data/regalo"

// La primera pantalla: fondo liso, dos "post-its" con fotos en las esquinas
// y el saludo a los novios en el centro.
export function Portada({ fondo = "oklch(0.3 0.1 20)" }: { fondo?: string }) {
  const [n1, n2] = regalo.novios

  return (
    <section
      id="inicio"
      className="relative grid min-h-svh grid-cols-2 content-center items-center justify-items-center gap-x-3 gap-y-6 overflow-hidden px-4 pt-[4.75rem] pb-12 sm:flex sm:items-center sm:justify-center sm:gap-0 sm:px-4 sm:pt-14 sm:pb-0"
      style={{ backgroundColor: fondo }}
    >
      {/* Post-it de arriba a la izquierda */}
      <PostIt
        src="/fotos/boda-novios.jpg"
        alt="Novios sonriendo el día de su casamiento"
        loading="eager"
        className="order-1 -rotate-6 sm:top-20 sm:left-6 lg:top-24 lg:left-12"
        ancho="aspect-[2/3]"
        tam="vertical"
      />

      {/* Post-it de abajo a la derecha */}
      <PostIt
        src="/fotos/elvis.jpg"
        alt="Novios riendo bajo una lluvia de arroz"
        className="order-4 rotate-4 sm:right-6 sm:bottom-16 lg:right-12 lg:bottom-14"
        ancho="aspect-[4/3] sm:aspect-video"
        recorte="object-[50%_25%]"
      />

      {/* Post-it de arriba a la derecha (foto vertical) */}
      <PostIt
        src="/fotos/madonna.avif"
        alt="Novios abrazados el día de su casamiento"
        className="order-1 rotate-5 sm:top-20 sm:right-6 lg:top-24 lg:right-12"
        ancho="aspect-[2/3]"
        tam="vertical"
      />

      {/* Post-it de abajo a la izquierda */}
      <PostIt
        src="/fotos/boda-clasica.jpg"
        alt="Novia dándole un beso a su novio en la mesa del casamiento"
        className="order-3 -rotate-3 sm:bottom-16 sm:left-6 lg:bottom-14 lg:left-12"
        ancho="aspect-[4/3] sm:aspect-video"
      />

      <div className="relative z-10 order-2 col-span-2 text-center text-crema sm:order-none sm:col-span-1">
        <p className="font-hand text-2xl text-[oklch(0.78_0.09_45)] sm:text-3xl md:text-4xl">¡Felicitaciones!</p>
        <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl xl:text-8xl">
          {n1} <span className="text-[oklch(0.78_0.09_45)]">&</span> {n2}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl font-heading text-sm text-balance text-crema/85 sm:mt-6 sm:text-base md:text-xl">
          Ya se casaron, ya bailaron, ya saludaron a todos los tíos.
        </p>
        <p className="mt-2 font-hand text-2xl sm:mt-3 sm:text-3xl md:text-4xl">Ahora se vienen cositas</p>
        <Button asChild size="lg" className="mt-6 h-10 rounded-full bg-crema px-6 text-sm sm:mt-10 sm:h-12 sm:px-8 sm:text-base shadow-lg hover:bg-white" style={{ color: fondo }}>
          <a href="#regalo">🎁 Nuestro regalo</a>
        </Button>
      </div>

      <a
        href="#regalo"
        aria-label="Bajar"
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 animate-bounce text-crema/70"
      >
        <ChevronDown className="size-8" />
      </a>
    </section>
  )
}

const TAMAÑOS = {
  vertical: "w-full max-w-[9.5rem] sm:w-32 sm:max-w-none lg:w-44 xl:w-64",
  horizontal: "w-full max-w-[10.5rem] sm:w-52 sm:max-w-none lg:w-72 xl:w-96",
}

// Foto con marco blanco, cinta adhesiva y una notita escrita a mano
function PostIt({
  src,
  alt,
  nota,
  className,
  ancho,
  tam = "horizontal",
  recorte = "object-center",
  loading = "lazy",
}: {
  src: string
  alt: string
  nota?: string
  className: string
  ancho: string
  tam?: "vertical" | "horizontal" // define cuánto ancho ocupa la foto
  recorte?: string // qué parte de la foto se ve cuando hay que recortarla
  loading?: "eager" | "lazy"
}) {
  return (
    <figure
      className={`relative z-0 bg-white p-1.5 pb-2 shadow-xl sm:absolute sm:p-2 sm:pb-3 ${
        TAMAÑOS[tam]
      } ${className}`}
    >
      {/* Cinta */}
      <span className="absolute -top-3 left-1/2 h-5 w-14 -translate-x-1/2 rotate-2 bg-amber-200/80 shadow-sm sm:h-6 sm:w-20" />
      <div className={`relative w-full overflow-hidden ${ancho}`}>
        <Image src={src} alt={alt} fill sizes="288px" loading={loading} className={`object-cover ${recorte}`} />
      </div>
      {nota && (
        <figcaption className="mt-1.5 text-center font-hand text-sm leading-tight text-tierra sm:text-lg lg:text-2xl">
          {nota}
        </figcaption>
      )}
    </figure>
  )
}
