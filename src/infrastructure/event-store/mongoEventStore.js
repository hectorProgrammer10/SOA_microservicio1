// ----- Archivo: src/infrastructure/event-store/mongoEventStore.js -----
const mongoose = require("mongoose");

// 1️⃣ Definir el esquema del evento
const eventSchema = new mongoose.Schema({
  eventType: { type: String, required: true },
  payload: { type: Object, required: true },
  timestamp: { type: Date, default: Date.now },
});

// 2️⃣ Crear el modelo
const EventModel = mongoose.model("DomainEvent", eventSchema);

// 3️⃣ Función para guardar eventos
const mongoEventStore = {
  save: async (event) => {
    if (!event || !event.eventType || !event.timestamp) {
      throw new Error("Evento inválido");
    }

    const eventDocument = new EventModel({
      eventType: event.eventType,
      payload: { ...event },
      timestamp: event.timestamp,
    });

    await eventDocument.save();
    console.log(`🗃️ Evento guardado en MongoDB: ${event.eventType}`);
  },

  // 4️⃣ (Opcional) Obtener eventos por tipo o entidad
  getByType: async (eventType) => {
    return await EventModel.find({ eventType }).sort({ timestamp: -1 }).lean();
  },

  getByEntityId: async (entityId) => {
    return await EventModel.find({ "payload.viajeId": entityId })
      .sort({ timestamp: -1 })
      .lean();
  },
};

module.exports = { mongoEventStore };
