import { RestaurantesCarousel } from "./restaurantes-carousel"
import { TituloSeccion } from "./titulo-seccion"

export function DondeComer() {
  return (
    <section id="donde-comer" aria-labelledby="restaurantes-titulo" className="papel scroll-mt-14 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <TituloSeccion
          id="restaurantes-titulo"
          nota="Sabores del pueblo"
          titulo="¿Dónde comer en el pueblo?"
          variante="terracota"
        />
        <RestaurantesCarousel />
      </div>
    </section>
  )
}
