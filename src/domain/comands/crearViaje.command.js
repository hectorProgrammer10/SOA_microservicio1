// ----- Archivo: src/domain/commands/crearViaje.command.js -----

class CrearViajeCommand {
  constructor({ origen, destino, fecha }) {
    if (!origen || !destino || !fecha) {
      throw new Error("origen, destino y fecha son obligatorios");
    }

    this.origen = origen;
    this.destino = destino;
    this.fecha = new Date(fecha);
  }
}

module.exports = { CrearViajeCommand };
