import { equipo } from "./equipo.js";
import { iniciales } from "./utils.js";

const VERSION = "1.0.0";

function crearTarjeta(miembro) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = iniciales(miembro.nombre);

  const nombre = document.createElement("h3");
  nombre.textContent = `${miembro.emoji ?? ""} ${miembro.nombre}`.trim();

  const rol = document.createElement("p");
  rol.className = "rol";
  rol.textContent = miembro.rol;

  const enlace = document.createElement("a");
  enlace.href = `https://github.com/${encodeURIComponent(miembro.github)}`;
  enlace.textContent = `@${miembro.github}`;
  enlace.target = "_blank";
  enlace.rel = "noopener noreferrer";

  tarjeta.append(avatar, nombre, rol, enlace);
  return tarjeta;
}

const contenedor = document.getElementById("equipo");
equipo.forEach((miembro) => contenedor.append(crearTarjeta(miembro)));

document.getElementById("version").textContent = VERSION;
document.getElementById("anio").textContent = new Date().getFullYear();
