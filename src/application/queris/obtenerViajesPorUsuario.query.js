// ----- Archivo: src/application/queries/obtenerViajesPorUsuarios.query.js -----
const viajeRepository = require("../../infrastructure/repositories/viaje.repository");

const obtenerViajesPorUsuarios = async (usuarioId) => {
  if (!usuarioId) {
    throw new Error("El ID del usuario es obligatorio");
  }

  // Suponiendo que el usuario es el conductor
  const viajes = await viajeRepository.findByConductorId(usuarioId);
  return viajes;
};

module.exports = { obtenerViajesPorUsuarios };
