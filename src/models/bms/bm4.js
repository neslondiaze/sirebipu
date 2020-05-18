const { Schema, model } = require("mongoose");

//TODO: Shema de BM-4 Resumen Mensual de la cuenta de Bienes Muebles
const BM4Schema = new Schema(
  {
    empresa4: { type: String, requerid: true },
    presidente: { type: String, requerid: true, unique: true },
    periodo: { type: String, requerid: true},
    bsExitAnt: { type: Number, requerid: true },
    bsIncorpAnual: { type: Number, requerid: true },
    bsSubTotal: { type: Number, required: true, unique: true },
    bsDesiAnual: { type: Number, requerid: true },
    bsExitActual: { type: Number, requerid: true }
  },
  {
    timestamps: true,
  }
);

module.exports = model("BM4", BM4Schema);
