const { Schema, model } = require("mongoose");
const Double = require('@mongoosejs/double');

//TODO: Shema de BM-1 Inventario Inicial de Bienes Muebles
const BM1Schema = new Schema(
  {
    empresa1: { type: String, requerid: true },
    acta1: { type: String, requerid: true, unique: true },
    recepcion1: { type: String, requerid: true},
    ubicacion1: { type: String, requerid: true },
    cantidad1: { type: String, requerid: true },
    codigo1: { type: String, required: true, unique: true },
    descripcion1: { type: String, requerid: true },
    bsvalor1: { type: Double, requerid: true },
    fotobm1: { type: Schema.ObjectId, ref: "fotobm1" },
    
  },
  {
    timestamps: true,
  }
);

module.exports = model("BM1", BM1Schema);
