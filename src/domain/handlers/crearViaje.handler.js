// ----- Archivo: src/domain/handlers/crearViaje.handler.js -----
const viajeRepository = require("../../domain/repositories/viaje.repository");
const { ViajeCreadoEvent } = require("../events/viajeCreado.event");
const { v4: uuidv4 } = require("uuid");

const crearViajeHandler = {
  handle: async (command) => {
    const { origen, destino, fecha } = command;

    // 1️⃣ Crear entidad de viaje
    const viajeEntity = {
      id: uuidv4(),
      origen,
      destino,
      fecha,
      estado: "pendiente",
      conductorId: null,
    };

    // 2️⃣ Guardar en repositorio
    const viajeCreado = await viajeRepository.create(viajeEntity);

    // 3️⃣ Emitir evento
    const evento = new ViajeCreadoEvent({
      viajeId: viajeEntity.id,
      origen,
      destino,
      fecha,
    });

    return viajeCreado;
  },
};

module.exports = { crearViajeHandler };
