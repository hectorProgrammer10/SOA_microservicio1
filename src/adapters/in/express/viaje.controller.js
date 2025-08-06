// ----- Archivo: src/adapters/in/express/viaje.controller.js -----
const {
  CrearViajeCommand,
} = require("../../../domain/comands/crearViaje.command");
const {
  AsignarConductorCommand,
} = require("../../../domain/comands/asignarConductor.command");
const {
  FinalizarViajeCommand,
} = require("../../../domain/comands/finalizarViaje.comman");

const {
  crearViajeHandler,
} = require("../../../domain/handlers/crearViaje.handler");
const {
  asignarConductorHandler,
} = require("../../../domain/handlers/asignarConductor.handler");
const {
  finalizarViajeHandler,
} = require("../../../domain/handlers/finalizarViaje.handler");

const {
  obtenerViajePorId,
} = require("../../../application/queris/obtenerViajePorId.query");

exports.crearViaje = async (req, res) => {
  try {
    const command = new CrearViajeCommand(req.body);
    const result = await crearViajeHandler.handle(command);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerViajePorId = async (req, res) => {
  try {
    const result = await obtenerViajePorId(req.params.id);
    if (!result) return res.status(404).json({ error: "Viaje no encontrado" });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.asignarConductor = async (req, res) => {
  try {
    const command = new AsignarConductorCommand({
      viajeId: req.params.id,
      conductorId: req.body.conductorId,
    });
    const result = await asignarConductorHandler.handle(command);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.finalizarViaje = async (req, res) => {
  try {
    const command = new FinalizarViajeCommand({ viajeId: req.params.id });
    const result = await finalizarViajeHandler.handle(command);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
