// ----- Archivo: src/server.js -----
const express = require("express");
const app = express();
const initDB = require("./infrastructure/init-db");
const viajeRoutes = require("./api/viajes.routes");

// 🧩 Middlewares
app.use(express.json());

// 📦 Rutas
app.use("/viajes", viajeRoutes);

// 🛠️ Inicializar infraestructura
initDB();

// 🟢 Arrancar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
