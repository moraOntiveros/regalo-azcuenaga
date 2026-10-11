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
    // Exterior: frente, galería, pileta y atardecer.
    { src: "/fotos/casa/frente.jpg", alt: "El frente de la casa con su galería" },
    { src: "/fotos/casa/reposeras.webp", alt: "Reposeras bajo la galería, con vista a la pileta" },
    // "pos" elige qué parte de la foto se ve cuando hay que recortarla
    {
      src: "/fotos/casa/pileta-campo.jpg",
      alt: "La pileta en medio del campo",
      pos: "object-[65%_60%]",
    },
    { src: "/fotos/casa/atardecer-pileta.jpg", alt: "Atardecer sobre la pileta" },
    // Interior: espacios comunes, dormitorios y baño.
    { src: "/fotos/casa/cocina.webp", alt: "La cocina con horno de barro" },
    { src: "/fotos/casa/living.webp", alt: "El living con hogar central" },
    { src: "/fotos/casa/comedor.webp", alt: "El comedor" },
    { src: "/fotos/casa/dormitorio-azul.webp", alt: "Dormitorio principal" },
    { src: "/fotos/casa/dormitorio-verde.webp", alt: "Dormitorio con hogar" },
    { src: "/fotos/casa/bano.webp", alt: "Baño con bañera de patas" },
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
// Cada actividad lleva un icono de Font Awesome, un título y una descripción.
export type IconoActividad =
  | "descanso"
  | "videojuegos"
  | "pool"
  | "pelis"
  | "mesa"
  | "asado"
  | "charla"
  | "pueblo"

export const actividades: {
  icono: IconoActividad
  titulo: string
  texto: string
}[] = [
  {
    icono: "descanso",
    titulo: "Mimir",
    texto: "Sin alarma y con permiso para cinco minutitos más.",
  },
  {
    icono: "videojuegos",
    titulo: "Videojuegos",
    texto: "Mario Kart, Mario Party, FIFA, entre otros.",
  },
  {
    icono: "pool",
    titulo: "Pool",
    texto: "Una mesa, dos equipos y alguna carambola de pura suerte.",
  },
  {
    icono: "pelis",
    titulo: "Maratón de pelis",
    texto: "Una buena peli y algo rico para picar.",
  },
  {
    icono: "mesa",
    titulo: "Juegos de mesa",
    texto: "Traigan sus favoritos; las reglas se discuten acá.",
  },
  {
    icono: "asado",
    titulo: "Asado sin apuro",
    texto: "El fuego marca el ritmo y la sobremesa se estira.",
  },
  {
    icono: "charla",
    titulo: "Chismosear",
    texto: "Tiempo de sobra para ponerse al día, con lujo de detalles.",
  },
  {
    icono: "pueblo",
    titulo: "Conocer Azcuénaga",
    texto: "Una escapada al pueblo para caminar y cambiar de aire.",
  },
]

export const restaurantes = [
  {
    nombre: "La Porteña",
    tipo: "Pastas caseras",
    texto: "Pastas caseras y sabores de casa en un ambiente familiar. Una parada para comer rico y disfrutar de la sobremesa.",
    instagram: "https://www.instagram.com/laportenarestaurante/",
    foto: "/fotos/restaurantes/la-portena.webp",
    fotoAlt: "Postres caseros con helado servidos en La Porteña",
    fotoCredito: "Restaurant Guru",
    fotoFuente: "https://es.restaurantguru.com/Restaurante-La-Portena-Buenos-Aires",
  },
  {
    nombre: "Almacén CT & Cía",
    tipo: "Parrilla y picadas",
    texto: "Parrilla, picadas y cocina de campo en un antiguo almacén. Mesas entre recuerdos y detalles que cuentan la historia del pueblo.",
    instagram: "https://www.instagram.com/elalmacenct/",
    foto: "/fotos/restaurantes/almacen-ct.webp",
    fotoAlt: "Salón de Almacén CT & Cía, con paredes de ladrillo y mesas de colores",
    fotoCredito: "Almacén CT & Cía",
    fotoFuente: "https://www.almacenct.com/",
  },
  {
    nombre: "Le Four",
    tipo: "Cocina francesa",
    texto: "Cocina de inspiración francesa en el campo bonaerense. Una propuesta para probar otros sabores y comer sin apuro.",
    instagram: "https://www.instagram.com/lefourazcuenaga/",
    foto: "/fotos/restaurantes/le-four.webp",
    fotoAlt: "Selección de quesos servida en Le Four",
    fotoCredito: "Xavier Martín · LA NACION",
    fotoFuente: "https://www.lanacion.com.ar/revista-lugares/sebastien-fouillade-el-chef-frances-que-abrio-un-restaurante-de-campo-y-es-furor-en-azcuenaga-nid18022023/",
  },
  {
    nombre: "Club Apolo",
    tipo: "Buffet de club",
    texto: "El buffet del club, un clásico de Azcuénaga. Un lugar de encuentro con espíritu de pueblo para hacer una pausa y compartir la mesa.",
    instagram: "https://www.instagram.com/clubrecreativoapolo/",
    foto: "/fotos/restaurantes/club-apolo.webp",
    fotoAlt: "Fachada del Club Recreativo Apolo junto a su parque arbolado",
    fotoCredito: "Bafilma · Provincia de Buenos Aires",
    fotoFuente: "https://bafilma.gba.gob.ar/locaciones/azcuenaga/club-recreativo-apolo",
  },
]

// ------------------------------------------------------------
//  Checklist de la valija
// ------------------------------------------------------------
// Pueblos cercanos para visitar (sección "Mejor que 2 son 3").
// Las distancias son aproximadas, en auto desde Azcuénaga; los caminos de tierra pueden demorar más.
export const pueblos = [
  {
    icono: "/fotos/pueblos/areco.png",
    nombre: "San Antonio de Areco",
    distancia: "A unos 20 km de Azcuénaga (30 min en auto)",
    texto:
      "La capital de la tradición gaucha: Puente Viejo, Museo Gauchesco Ricardo Güiraldes y talleres de plateros y artesanos",
    mapa: "San Antonio de Areco, Buenos Aires",
  },
  {
    icono: "/fotos/pueblos/giles.png",
    nombre: "San Andrés de Giles",
    distancia: "A unos 13 km de Azcuénaga (15 min en auto)",
    texto:
      "La cabecera del partido: plaza principal, la vieja estación de tren y un parque ideal para un picnic.",
    mapa: "San Andrés de Giles, Buenos Aires",
  },
  {
    icono: "/fotos/pueblos/keen.png",
    nombre: "Carlos Keen",
    distancia: "A unos 25 km de Azcuénaga (35 min en auto)",
    texto:
      "Un pueblo histórico donde los viejos almacenes de ramos generales son hoy restaurantes de campo. Los fines de semana hay feria artesanal.",
    mapa: "Carlos Keen, Buenos Aires",
  },
]

// Sección final "Un plus": enlaces extra (nota de prensa y playlist)
export const plus: {
  icono: "nota" | "musica"
  titulo: string
  texto: string
  imagen?: string // imagen de vista previa (ruta o link)
  ancho?: number
  alto?: number
  alt?: string
  embed?: string // reproductor incrustado (tiene prioridad sobre la imagen)
  boton: string
  url: string
}[] = [
  {
    icono: "nota",
    titulo: "La Negrita Casa de Campo en Infobae",
    texto: "Una nota sobre Azcuénaga, el pueblo rural a una hora y media de CABA, donde aparece La Negrita.",
    // Imagen de vista previa de la nota (la publica Infobae)
    imagen:
      "https://www.infobae.com/resizer/v2/7ACDRL3YIBFGHAVD3WLDET7FS4.jpg?auth=6a232247b0d3cfdbbdc38498ce0c8c0c28abe5fa2ca23826311013b767d860d6&smart=true&width=1200&height=630&quality=85",
    ancho: 1200,
    alto: 630,
    alt: "Vista previa de la nota de Infobae",
    boton: "Leer la nota",
    url: "https://www.infobae.com/sociedad/2026/10/09/tiene-menos-de-400-habitantes-y-recibe-turistas-todo-el-anos-el-pueblo-rural-a-una-hora-y-media-de-caba-ideal-para-visitar-el-feriado-del-12-de-octubre/",
  },
  {
    icono: "musica",
    titulo: "Para aclimatarse",
    texto: "Escuchá esta playlist: Asado y Folklore.",
    // Reproductor de Spotify incrustado: permite deslizar para ver todos los temas
    embed: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYNxOHelieem?utm_source=generator&theme=0",
    boton: "Abrir en Spotify",
    url: "https://open.spotify.com/playlist/37i9dQZF1DWYNxOHelieem",
  },
]

export const valija = [
  { id: "malla-ojotas", texto: "Malla y ojotas" },
  { id: "protector-solar", texto: "Protector solar" },
  { id: "repelente", texto: "Repelente para insectos" },
  { id: "buzo", texto: "Un buzo para la noche" },
  { id: "mate", texto: "Mate, termo y yerba" },
  { id: "vino-vermu", texto: "Vino o vermú" },
  { id: "parlante-playlist", texto: "Parlante y una buena playlist" },
  { id: "cartas", texto: "Juegos de cartas" },
  { id: "descanso", texto: "Ganas de no hacer nada" },
]

// ------------------------------------------------------------
//  Preguntas frecuentes
// ------------------------------------------------------------
export const preguntas = [
  {
    p: "¿Qué incluye el regalo?",
    r: "Cuatro noches en La Negrita para compartir el finde juntos: 2 dormitorios, 2 baños, cocina equipada, pileta, quincho y parque.",
  },
  {
    p: "¿Hay que llevar comida?",
    r: "La casa tiene cocina completa. Podemos llevar cosas o comprar en los almacenes del pueblo. Si queremos comer afuera, reservemos con anticipación porque los restaurantes se llenan.",
  },
  {
    p: "¿Hay wifi?",
    r: "Sí, hay wifi gratis. Pero la idea es que lo usemos poco 😉",
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
