// ============================================================
//  ✏️  ACÁ SE EDITA TODO EL CONTENIDO DEL SITIO
//  Cambiá los textos entre comillas y guardá el archivo.
//  La página se actualiza sola en el navegador.
// ============================================================

export const regalo = {
  // Los novios
  novios: ["Abril", "Gonza"],

  // Quienes regalan
  deParteDe: ["Juan", "Mora"],

  // Fechas del finde. Formato: "AAAA-MM-DD"
  // Si todavía no tienen fecha, poné fechaDefinida en false
  // y la página va a decir "Ustedes eligen la fecha".
  fechaDefinida: true,
  checkIn: "2027-03-24",
  checkOut: "2027-03-28",
  horaCheckIn: "10:00",

  // Datos que aparecen en la tarjeta del regalo
  destinoTitulo: "La Negrita Casa de Campo",
  destinoDetalle: "Juan Manuel de Rosas, Azcuénaga",

  // Firma del final de la tarjeta
  firma: "Con mucho amor, Mora y tu hermano (este fue Claudio)",

  // El mensaje del regalo (aparece al abrir el sobre)
  mensaje:
    "Después de tanto organizar casamiento, se merecen un finde sin planes, sin listas y sin invitados. Solo ustedes dos, una pileta, el campo y el mejor atardecer de la provincia.",

  // Link de la reserva (Booking)
  linkReserva:
    "https://www.booking.com/hotel/ar/la-negrita-casa-azcuenaga.es-ar.html",
}

// ------------------------------------------------------------
//  La casa
// ------------------------------------------------------------
export const casa = {
  nombre: "La Negrita",
  subtitulo: "Casa de Campo",
  direccion: "Juan Manuel de Rosas S/N, entre Ruta 193 y 41",
  localidad: "Azcuénaga, San Andrés de Giles, Buenos Aires",
  puntaje: "10",
  resenias: [
    {
      texto:
        "Buenísima la casa para vivir la experiencia campestre por unos días. La cama era de reyes.",
      autor: "Roberto",
    },
    {
      texto:
        "Una hermosa casa de campo que invita al descanso. Es mi segunda estadía.",
      autor: "Cecilia",
    },
    {
      texto:
        "Todo hermoso: la ubicación, la casa, las instalaciones y la atención de Marcela.",
      autor: "Leonardo",
    },
  ],
}

// ------------------------------------------------------------
//  Fotos de la casa (están guardadas en la carpeta public/fotos/casa).
//  La 1.ª y la 6.ª se muestran en tamaño grande en la galería.
//  Para cambiar una foto: reemplazá el archivo o cambiá el nombre en src.
// ------------------------------------------------------------
export const fotos = {
  galeria: [
    { src: "/fotos/casa/frente.jpg", alt: "El frente de la casa con su galería" },
    { src: "/fotos/casa/living.webp", alt: "El living con hogar central" },
    { src: "/fotos/casa/cocina.webp", alt: "La cocina con horno de barro" },
    { src: "/fotos/casa/comedor.webp", alt: "El comedor" },
    { src: "/fotos/casa/reposeras.webp", alt: "Reposeras bajo la galería, con vista a la pileta" },
    // "pos" elige qué parte de la foto se ve cuando hay que recortarla
    {
      src: "/fotos/casa/pileta-campo.jpg",
      alt: "La pileta en medio del campo",
      pos: "object-[65%_60%]",
    },
    { src: "/fotos/casa/dormitorio-azul.webp", alt: "Dormitorio principal" },
    { src: "/fotos/casa/bano.webp", alt: "Baño con bañera de patas" },
    { src: "/fotos/casa/dormitorio-verde.webp", alt: "Dormitorio con hogar" },
    { src: "/fotos/casa/atardecer-pileta.jpg", alt: "Atardecer sobre la pileta" },
  ],
}

// ------------------------------------------------------------
//  Plan sugerido del finde
// ------------------------------------------------------------
export const itinerario = [
  {
    dia: "Viernes",
    emoji: "🚗",
    momentos: [
      { hora: "10:00", texto: "Llegada, llaves y primera recorrida (sí, ya pueden gritar)" },
      { hora: "18:00", texto: "Primer chapuzón en la pileta" },
      { hora: "19:30", texto: "Atardecer con mate o vermú en la galería" },
      { hora: "21:30", texto: "Picada y vino. Nada de cocinar en serio todavía" },
    ],
  },
  {
    dia: "Sábado",
    emoji: "☀️",
    momentos: [
      { hora: "10:00", texto: "Desayuno largo, sin alarma" },
      { hora: "11:30", texto: "Paseo en bici por los caminos de tierra" },
      { hora: "13:30", texto: "Almuerzo en el pueblo: pastas caseras" },
      { hora: "16:00", texto: "Siesta oficial. Es obligatoria" },
      { hora: "18:00", texto: "Revancha de pool" },
      { hora: "21:00", texto: "Asado o pizza al horno de barro y fogón bajo las estrellas" },
    ],
  },
  {
    dia: "Domingo",
    emoji: "🌾",
    momentos: [
      { hora: "10:00", texto: "Último desayuno en la galería" },
      { hora: "11:00", texto: "Feria del pueblo: quesos, salames y pan de campo para llevar" },
      { hora: "13:00", texto: "Último chapuzón y despedida (con lagrimita)" },
    ],
  },
]

// ------------------------------------------------------------
//  Qué hacer
// ------------------------------------------------------------
// Cada actividad lleva un emoji o una imagen (imagen: ruta en /public) y, opcionalmente, un texto.
export const actividades: {
  emoji?: string
  imagen?: string
  // cover recorta la foto para llenar un cuadrado; contain la muestra entera dentro del cuadrado;
  // entera la muestra completa y rectangular (hay que indicar ancho y alto de la imagen)
  ajuste?: "cover" | "contain" | "entera"
  ancho?: number
  alto?: number
  altura?: string // con "entera", alto en pantalla (por defecto "h-16"; ej: "h-24" para más grande)
  pos?: string // con cover, qué parte de la foto se ve (ej: "object-top")
  titulo: string
  texto?: string
}[] = [
  { imagen: "/fotos/actividades/mimir.webp", ajuste: "cover", titulo: "Mimir" },
  { imagen: "/fotos/actividades/mario.webp", ajuste: "contain", titulo: "Jugar al Mario Kart y Mario Party" },
  {
    imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202607/2321/c7c534e1e9b24ccf7ff11c429948f31494ccce402b452647.png",
    ajuste: "contain",
    titulo: "Jugar al FIFA",
  },
  { imagen: "/fotos/actividades/pool.jpg", ajuste: "cover", pos: "object-[50%_30%]", titulo: "Jugar al pool" },
  {
    imagen: "/fotos/actividades/pelis.jpg",
    ajuste: "entera",
    ancho: 585,
    alto: 330,
    titulo: "Mirar pelis",
  },
  {
    imagen: "/fotos/actividades/juegos.webp",
    ajuste: "entera",
    ancho: 1200,
    alto: 800,
    titulo: "Llevar juegos de mesa",
  },
  {
    imagen: "/fotos/actividades/asado.jpg",
    ajuste: "entera",
    ancho: 474,
    alto: 563,
    altura: "h-24",
    titulo: "Hacer muchos asados",
  },
  { imagen: "/fotos/actividades/chisme.jpg", ajuste: "cover", titulo: "Chismosear" },
]

export const restaurantes = [
  {
    nombre: "La Porteña",
    tipo: "Pastas caseras",
    texto: "Casa de familia, porciones enormes. Ravioles, ñoquis, malfatti y un ossobuco famoso.",
  },
  {
    nombre: "Almacén CT & Cía",
    tipo: "Parrilla y picadas",
    texto: "En un almacén de 1912. Fiambres, quesos y carnes a la parrilla.",
  },
  {
    nombre: "Le Four",
    tipo: "Cocina francesa",
    texto: "Un toque de Francia en medio del campo bonaerense.",
  },
  {
    nombre: "Club Apolo",
    tipo: "Buffet de club",
    texto: "El clásico del pueblo y el único que abre todos los días.",
  },
]

// ------------------------------------------------------------
//  Checklist de la valija
// ------------------------------------------------------------
export const valija = [
  "Malla y ojotas",
  "Protector solar",
  "Repelente (el campo tiene sus habitantes)",
  "Un buzo para la noche",
  "Mate, termo y yerba",
  "Vino o vermú",
  "Parlante y una buena playlist",
  "Juegos de cartas",
  "Ganas de no hacer nada",
]

// ------------------------------------------------------------
//  Preguntas frecuentes
// ------------------------------------------------------------
export const preguntas = [
  {
    p: "¿Qué incluye el regalo?",
    r: "Cuatro noches en La Negrita, toda la casa para ustedes: 2 dormitorios, 2 baños, cocina equipada, pileta, quincho y parque.",
  },
  {
    p: "¿Hay que llevar comida?",
    r: "La casa tiene cocina completa. Pueden llevar cosas o comprar en los almacenes del pueblo. Si quieren comer afuera, reserven con anticipación porque los restaurantes se llenan.",
  },
  {
    p: "¿Hay wifi?",
    r: "Sí, hay wifi gratis. Pero la idea es que lo usen poco 😉",
  },
  {
    p: "¿Podemos llevar a la mascota?",
    r: "¡Sí! La casa acepta mascotas.",
  },
  {
    p: "¿Dónde dejamos el auto?",
    r: "Hay estacionamiento privado y gratis en la propiedad.",
  },
  {
    p: "¿Y si queremos cambiar la fecha?",
    r: "Avísennos y lo resolvemos juntos.",
  },
]
