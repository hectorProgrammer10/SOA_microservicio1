// ----- Archivo: src/server.js -----
const express = require("express");
const app = express();
const initDB = require("./infrastructure/init-db");
const viajeRoutes = require("./api/viajes.routes");

app.use(express.json());

app.use("/viajes", viajeRoutes);

initDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
