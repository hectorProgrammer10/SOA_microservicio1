// ----- Archivo: src/infrastructure/init-db.js -----
const sequelize = require("../config/database");
const Viaje = require("../domain/viaje.model");

async function initDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida");
    await sequelize.sync({ force: false });
    console.log("📦 Tablas sincronizadas");
  } catch (error) {
    console.error("❌ Error al conectar o sincronizar:", error);
  }
}

module.exports = initDB;
