// Convierte "2026-11-27" en "viernes 27 de noviembre"
export function fechaLarga(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })
}

// Convierte "2027-03-24" en "24/3"
export function fechaCorta(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "numeric",
  })
}
