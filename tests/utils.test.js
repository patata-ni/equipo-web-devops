import { test } from "node:test";
import assert from "node:assert/strict";
import { iniciales, validarMiembro } from "../js/utils.js";
import { equipo } from "../js/equipo.js";

test("iniciales: usa las dos primeras palabras", () => {
  assert.equal(iniciales("Ana María López"), "AM");
});

test("iniciales: una sola palabra", () => {
  assert.equal(iniciales("  luis "), "L");
});

test("validarMiembro: acepta un miembro correcto", () => {
  const ok = { nombre: "Ana López", rol: "Diseño", github: "ana-lopez" };
  assert.deepEqual(validarMiembro(ok), []);
});

test("validarMiembro: rechaza usuario de GitHub con espacios", () => {
  const mal = { nombre: "Ana López", rol: "Diseño", github: "ana lopez" };
  assert.equal(validarMiembro(mal).length, 1);
});

test("equipo.js: todos los miembros son válidos", () => {
  for (const miembro of equipo) {
    assert.deepEqual(
      validarMiembro(miembro),
      [],
      `Miembro inválido: ${miembro?.nombre}`
    );
  }
});

test("equipo.js: no hay usuarios de GitHub repetidos", () => {
  const usuarios = equipo.map((m) => m.github.toLowerCase());
  assert.equal(new Set(usuarios).size, usuarios.length);
});
