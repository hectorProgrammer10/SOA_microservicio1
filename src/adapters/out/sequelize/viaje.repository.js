// ----- Archivo: src/adapters/out/sequelize/viaje.repository.js -----
const ViajeModel = require("../../../domain/viaje.model");

module.exports = {
  create: async (viajeEntity) => {
    return await ViajeModel.create({ ...viajeEntity });
  },

  findById: async (id) => {
    return await ViajeModel.findByPk(id);
  },

  save: async (viajeInstance) => {
    return await viajeInstance.save();
  },
};
