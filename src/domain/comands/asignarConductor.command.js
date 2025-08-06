// ----- Archivo: src/domain/commands/asignarConductor.command.js -----

class AsignarConductorCommand {
  constructor({ viajeId, conductorId }) {
    if (!viajeId || !conductorId) {
      throw new Error("viajeId y conductorId son obligatorios");
    }

    this.viajeId = viajeId;
    this.conductorId = conductorId;
  }
}

module.exports = { AsignarConductorCommand };
