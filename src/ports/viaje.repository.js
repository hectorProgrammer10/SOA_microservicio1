// ----- Archivo: src/infrastructure/repositories/viaje.repository.js -----
const ViajeModel = require("../../database/models/viaje.model");

module.exports = {
  create: async (viajeEntity) => {
    const doc = new ViajeModel(viajeEntity);
    return await doc.save();
  },

  findById: async (id) => {
    return await ViajeModel.findById(id).lean();
  },

  save: async (viajeEntity) => {
    return await ViajeModel.findByIdAndUpdate(viajeEntity.id, viajeEntity, {
      new: true,
    });
  },
};
