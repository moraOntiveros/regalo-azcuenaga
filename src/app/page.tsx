import { Menu } from "@/components/secciones/menu"
import { Portada } from "@/components/secciones/portada"
import { SobreRegalo } from "@/components/secciones/sobre-regalo"
import { LaCasa } from "@/components/secciones/la-casa"
import { SorpresaClick } from "@/components/secciones/sorpresa-click"
import { Sorpresa } from "@/components/secciones/sorpresa"
import { QueHacer } from "@/components/secciones/que-hacer"
import { DondeComer } from "@/components/secciones/donde-comer"
import { OtrosPueblos } from "@/components/secciones/otros-pueblos"
import { ComoLlegar } from "@/components/secciones/como-llegar"
import { Preguntas } from "@/components/secciones/preguntas"
import { UnPlus } from "@/components/secciones/un-plus"
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
        <SorpresaClick />
        <Sorpresa />
        <LaCasa />
        <QueHacer />
        <DondeComer />
        <OtrosPueblos />
        <ComoLlegar />
        <Preguntas />
        <UnPlus />
      </main>
      <Pie />
    </>
  )
}
