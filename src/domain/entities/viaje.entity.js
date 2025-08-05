// ----- Archivo: src/domain/entities/viaje.entity.js -----
class Viaje {
  constructor({
    origen,
    destino,
    tarifa,
    pasajeroId,
    conductorId = null,
    estado = "pendiente",
  }) {
    this.origen = origen;
    this.destino = destino;
    this.tarifa = tarifa;
    this.pasajeroId = pasajeroId;
    this.conductorId = conductorId;
    this.estado = estado;
  }

  asignarConductor(conductorId) {
    this.conductorId = conductorId;
    this.estado = "en_curso";
  }

  finalizar() {
    this.estado = "finalizado";
  }
}

module.exports = Viaje;
