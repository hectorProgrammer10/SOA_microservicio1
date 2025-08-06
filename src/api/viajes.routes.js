// ----- Archivo: src/api/viajes.routes.js -----
const express = require("express");
const router = express.Router();
const viajeController = require("../adapters/in/express/viaje.controller");

// 📤 Commands (modifican el estado)
router.post("/", viajeController.crearViaje); // Crear nuevo viaje
router.put("/:id/asignar-conductor", viajeController.asignarConductor); // Asignar conductor
router.put("/:id/finalizar", viajeController.finalizarViaje); // Finalizar viaje

// 📥 Queries (solo lectura)
router.get("/:id", viajeController.obtenerViajePorId); // Obtener viaje por ID

module.exports = router;
