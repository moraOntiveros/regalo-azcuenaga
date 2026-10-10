import { Menu } from "@/components/secciones/menu"
import { Portada } from "@/components/secciones/portada"
import { SobreRegalo } from "@/components/secciones/sobre-regalo"
import { LaCasa } from "@/components/secciones/la-casa"
import { SorpresaClick } from "@/components/secciones/sorpresa-click"
import { Sorpresa } from "@/components/secciones/sorpresa"
import { QueHacer } from "@/components/secciones/que-hacer"
import { ComoLlegar } from "@/components/secciones/como-llegar"
import { Preguntas } from "@/components/secciones/preguntas"
import { Pie } from "@/components/secciones/pie"

// La página principal: es simplemente la lista de secciones en orden.
// Para cambiar el orden, mové las líneas. Para sacar una, borrala.
export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <Portada />
        <SobreRegalo />
        <LaCasa />
        <SorpresaClick />
        <Sorpresa />
        <QueHacer />
        <ComoLlegar />
        <Preguntas />
      </main>
      <Pie />
    </>
  )
}
