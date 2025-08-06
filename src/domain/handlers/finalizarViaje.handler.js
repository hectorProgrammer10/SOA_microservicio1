// ----- Archivo: src/domain/handlers/finalizarViaje.handler.js -----
const viajeRepository = require("../../domain/repositories/viaje.repository");
const { ViajeFinalizadoEvent } = require("../events/viajeFinalizado.event");

const finalizarViajeHandler = {
  handle: async (command) => {
    const { viajeId } = command;

    // 1️⃣ Buscar el viaje
    const viaje = await viajeRepository.findById(viajeId);
    if (!viaje) {
      throw new Error("Viaje no encontrado");
    }

    // 2️⃣ Validar estado actual
    if (viaje.estado === "finalizado") {
      throw new Error("El viaje ya está finalizado");
    }

    // 3️⃣ Actualizar estado
    viaje.estado = "finalizado";

    // 4️⃣ Guardar cambios
    const viajeActualizado = await viajeRepository.save(viaje);

    // 5️⃣ Emitir evento
    const evento = new ViajeFinalizadoEvent({ viajeId });
    // Aquí podrías despachar el evento a un Event Store o bus de eventos
    console.log("📣 Evento emitido:", evento);

    return viajeActualizado;
  },
};

module.exports = { finalizarViajeHandler };
