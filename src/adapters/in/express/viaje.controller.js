// ----- Archivo: src/adapters/in/express/viaje.controller.js -----
const crearViaje = require("../../../application/usecases/crearViaje");
const obtenerViajePorId = require("../../../application/usecases/obtenerViajePorId");
const asignarConductor = require("../../../application/usecases/asignarConductor");
const finalizarViaje = require("../../../application/usecases/finalizarViaje");
const viajeRepository = require("../../out/sequelize/viaje.repository");

exports.crearViaje = async (req, res) => {
  try {
    const nuevoViaje = await crearViaje(req.body, { viajeRepository });
    res.status(201).json(nuevoViaje);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerViajePorId = async (req, res) => {
  try {
    const viaje = await obtenerViajePorId(req.params.id, { viajeRepository });
    if (!viaje) return res.status(404).json({ error: "Viaje no encontrado" });
    res.json(viaje);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.asignarConductor = async (req, res) => {
  try {
    const viajeActualizado = await asignarConductor(
      req.params.id,
      req.body.conductorId,
      { viajeRepository }
    );
    res.json({ mensaje: "Conductor asignado", viaje: viajeActualizado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.finalizarViaje = async (req, res) => {
  try {
    const viajeFinalizado = await finalizarViaje(req.params.id, {
      viajeRepository,
    });
    res.json({ mensaje: "Viaje finalizado", viaje: viajeFinalizado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
