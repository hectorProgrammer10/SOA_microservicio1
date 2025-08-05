// ----- Archivo: src/application/usecases/finalizarViaje.js -----
const Viaje = require("../../domain/entities/viaje.entity");

module.exports = async function finalizarViaje(viajeId, { viajeRepository }) {
  const viajeExistente = await viajeRepository.findById(viajeId);
  if (!viajeExistente) return null;

  const viaje = new Viaje(viajeExistente);
  viaje.finalizar();

  viajeExistente.estado = viaje.estado;

  await viajeRepository.save(viajeExistente);
  return viajeExistente;
};
