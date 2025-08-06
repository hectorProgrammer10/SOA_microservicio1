// ----- Archivo: src/domain/events/viajeFinalizado.event.js -----

class ViajeFinalizadoEvent {
  constructor({ viajeId, timestamp = new Date() }) {
    if (!viajeId) {
      throw new Error("viajeId es obligatorio para el evento");
    }

    this.viajeId = viajeId;
    this.timestamp = timestamp;
    this.eventType = "ViajeFinalizado";
  }
}

module.exports = { ViajeFinalizadoEvent };
