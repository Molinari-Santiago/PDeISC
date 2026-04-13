export function mostrarHora() {
  const ahora = new Date();
  return ahora.toLocaleTimeString();
}

export function mostrarFecha() {
  const hoy = new Date();
  return hoy.toLocaleDateString();
}
