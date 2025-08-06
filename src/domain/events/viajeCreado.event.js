// ----- Archivo: src/domain/events/viajeCreado.event.js -----

class ViajeCreadoEvent {
  constructor({ viajeId, origen, destino, fecha, timestamp = new Date() }) {
    if (!viajeId || !origen || !destino || !fecha) {
      throw new Error(
        "viajeId, origen, destino y fecha son obligatorios para el evento"
      );
    }

    this.viajeId = viajeId;
    this.origen = origen;
    this.destino = destino;
    this.fecha = new Date(fecha);
    this.timestamp = timestamp;
    this.eventType = "ViajeCreado";
  }
}

module.exports = { ViajeCreadoEvent };
