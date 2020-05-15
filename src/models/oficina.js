const { Schema, model } = require("mongoose");

//TODO: Shema de responsable de oficvina
const OficinaSchema = new Schema(
  {
    ofiname: { type: String, required: true },
    ofinumb: { type: String, requerid: true, unique: true}
  },
  {
    timestamps: true,
  }
);

module.exports = model("oficina", OficinaSchema);
