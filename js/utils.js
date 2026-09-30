/**
 * Devuelve las iniciales (máx. 2) de un nombre.
 * iniciales("Ana María López") -> "AM"
 */
export function iniciales(nombre) {
  return nombre
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0].toUpperCase())
    .join("");
}

const PATRON_GITHUB = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

/**
 * Valida un miembro del equipo.
 * Devuelve una lista de errores (vacía si todo está bien).
 */
export function validarMiembro(miembro) {
  const errores = [];

  if (!miembro || typeof miembro !== "object") {
    return ["el miembro debe ser un objeto"];
  }
  if (typeof miembro.nombre !== "string" || miembro.nombre.trim().length < 3) {
    errores.push("nombre: mínimo 3 caracteres");
  }
  if (typeof miembro.rol !== "string" || miembro.rol.trim() === "") {
    errores.push("rol: es obligatorio");
  }
  if (typeof miembro.github !== "string" || !PATRON_GITHUB.test(miembro.github)) {
    errores.push("github: usuario inválido (sin espacios ni símbolos)");
  }

  return errores;
}
