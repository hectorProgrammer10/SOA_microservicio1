// ----- Archivo: src/application/usecases/crearViaje.js -----
const Viaje = require("../../domain/entities/viaje.entity");

module.exports = async function crearViaje(data, { viajeRepository }) {
  const nuevoViaje = new Viaje(data);
  return await viajeRepository.create(nuevoViaje);
};
