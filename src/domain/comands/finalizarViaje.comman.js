// ----- Archivo: src/domain/commands/finalizarViaje.command.js -----

class FinalizarViajeCommand {
  constructor({ viajeId }) {
    if (!viajeId) {
      throw new Error("viajeId es obligatorio");
    }

    this.viajeId = viajeId;
  }
}

module.exports = { FinalizarViajeCommand };
