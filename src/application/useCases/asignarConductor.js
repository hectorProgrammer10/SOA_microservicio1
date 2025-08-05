// ----- Archivo: src/application/usecases/asignarConductor.js -----
const Viaje = require("../../domain/entities/viaje.entity");

module.exports = async function asignarConductor(
  viajeId,
  conductorId,
  { viajeRepository }
) {
  const viajeExistente = await viajeRepository.findById(viajeId);
  if (!viajeExistente) return null;

  const viaje = new Viaje(viajeExistente); // reconstruimos entidad desde datos
  viaje.asignarConductor(conductorId);

  viajeExistente.estado = viaje.estado;
  viajeExistente.conductorId = viaje.conductorId;

  await viajeRepository.save(viajeExistente);
  return viajeExistente;
};
