// ----- Archivo: src/domain/viaje.model.js -----
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Viaje = sequelize.define("Viaje", {
  origen: DataTypes.STRING,
  destino: DataTypes.STRING,
  estado: {
    type: DataTypes.ENUM("pendiente", "en_curso", "finalizado", "cancelado"),
    defaultValue: "pendiente",
  },
  tarifa: DataTypes.DECIMAL,
  pasajeroId: DataTypes.INTEGER,
  conductorId: DataTypes.INTEGER,
});

module.exports = Viaje;
