// ----- Archivo: src/domain/events/conductorAsignado.event.js -----

class ConductorAsignadoEvent {
  constructor({ viajeId, conductorId, timestamp = new Date() }) {
    if (!viajeId || !conductorId) {
      throw new Error("viajeId y conductorId son obligatorios para el evento");
    }

    this.viajeId = viajeId;
    this.conductorId = conductorId;
    this.timestamp = timestamp;
    this.eventType = "ConductorAsignado";
  }
}

module.exports = { ConductorAsignadoEvent };
