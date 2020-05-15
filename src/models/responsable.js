const { Schema, model } = require("mongoose");

//TODO: Shema de responsable de oficvina
const RespSchema = new Schema(
  {
    name: { type: String, required: true },
    nit: { type: String, requerid: true},
    cargo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    oficina: { type: Schema.ObjectId, ref: "Oficina" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Respon", RespSchema);