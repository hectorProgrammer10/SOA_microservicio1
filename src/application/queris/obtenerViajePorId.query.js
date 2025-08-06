// ----- Archivo: src/application/queries/obtenerViajePorId.query.js -----
const viajeRepository = require("../../domain/repositories/viaje.repository");

const obtenerViajePorId = async (id) => {
  if (!id) {
    throw new Error("El ID del viaje es obligatorio");
  }

  const viaje = await viajeRepository.findById(id);
  return viaje;
};

module.exports = { obtenerViajePorId };
