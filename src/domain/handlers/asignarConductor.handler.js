// ----- Archivo: src/domain/handlers/asignarConductor.handler.js -----
const viajeRepository = require("../../domain/repositories/viaje.repository");
const { ConductorAsignadoEvent } = require("../events/conductorAsignado.event");

const asignarConductorHandler = {
  handle: async (command) => {
    const { viajeId, conductorId } = command;

    // 1️⃣ Buscar el viaje
    const viaje = await viajeRepository.findById(viajeId);
    if (!viaje) {
      throw new Error("Viaje no encontrado");
    }

    // 2️⃣ Validar si ya tiene conductor
    if (viaje.conductorId) {
      throw new Error("El viaje ya tiene un conductor asignado");
    }

    // 3️⃣ Asignar conductor
    viaje.conductorId = conductorId;

    // 4️⃣ Guardar cambios
    const viajeActualizado = await viajeRepository.save(viaje);

    // 5️⃣ Emitir evento
    const evento = new ConductorAsignadoEvent({ viajeId, conductorId });
    // Aquí podrías despachar el evento a un Event Store o bus de eventos
    console.log("📣 Evento emitido:", evento);

    return viajeActualizado;
  },
};

module.exports = { asignarConductorHandler };
