// ----- Archivo: src/api/viajes.routes.js -----
const express = require("express");
const router = express.Router();
const viajeController = require("../adapters/in/express/viaje.controller");

router.post("/", viajeController.crearViaje);
router.get("/:id", viajeController.obtenerViajePorId);
router.put("/:id/asignar-conductor", viajeController.asignarConductor);
router.put("/:id/finalizar", viajeController.finalizarViaje);

module.exports = router;
