// ----- Archivo: src/application/usecases/obtenerViajePorId.js -----
module.exports = async function obtenerViajePorId(id, { viajeRepository }) {
  const viaje = await viajeRepository.findById(id);
  return viaje || null;
};
