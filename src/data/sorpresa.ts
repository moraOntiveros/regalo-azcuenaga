// Las fotos de la sorpresa interactiva.
// "giro" es la inclinación en grados (para que parezcan fotos pegadas).
// "texto" aparece debajo de la foto cuando la descubren.
export const fotosSorpresa = [
  {
    src: "/fotos/sorpresa/perro-1.jpg",
    alt: "Perro panza arriba tomando sol sobre una manta",
    ancho: 1219,
    alto: 1280,
    giro: -3,
    texto: "¡Jacky está invitada!",
    // Imagen que aparece al costado (a la izquierda) cuando descubren esta foto
    reaccion: {
      src: "/fotos/sorpresa/reaccion-1.jpg",
      alt: "Hombre sonriendo con los dos pulgares arriba",
      ancho: 750,
      alto: 737,
      giro: -4,
    },
  },
  {
    src: "/fotos/sorpresa/perro-2.jpg",
    alt: "Perro mirando por la ventana hacia el jardín",
    ancho: 960,
    alto: 1280,
    giro: 3,
    texto: "González, por su salud mental, no fue invitado",
    // Imagen que aparece al costado (a la derecha) cuando descubren esta foto
    reaccion: {
      src: "/fotos/sorpresa/reaccion-2.avif",
      alt: "Gato con ojos grandes y tristes",
      ancho: 802,
      alto: 800,
      giro: 4,
    },
  },
]
