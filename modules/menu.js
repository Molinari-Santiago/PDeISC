export function obtenerMenu() {
  return `
    <nav style="background:#222; padding:15px; text-align:center;">
      <a href="/" style="color:white; margin:10px;">Inicio</a>
      <a href="/suma" style="color:white; margin:10px;">Suma</a>
      <a href="/resta" style="color:white; margin:10px;">Resta</a>
      <a href="/multiplicacion" style="color:white; margin:10px;">Multiplicación</a>
      <a href="/division" style="color:white; margin:10px;">División</a>
      <a href="/tiempo" style="color:white; margin:10px;">Tiempo</a>
    </nav>
  `;
}