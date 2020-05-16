const { Schema, model } = require("mongoose");

//TODO: Shema de responsable de oficvina
const OficinaSchema = new Schema(
  {
    oficname: { type: String, required: true },
    oficnumb: { type: String, requerid: true, unique: true}
  },
  {
    timestamps: true,
  }
);

module.exports = model("oficina", OficinaSchema);
