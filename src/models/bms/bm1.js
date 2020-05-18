const { Schema, model } = require("mongoose");

//TODO: Shema de BM-1 Inventario Inicial de Bienes Muebles
const BM1Schema = new Schema(
  {
    empresa: { type: String, requerid: true },
    acta: { type: String, requerid: true, unique: true },
    recepcion: { type: String, requerid: true},
    ubicacion: { type: String, requerid: true },
    cantidad: { type: String, requerid: true },
    codigo: { type: String, required: true, unique: true },
    descripcion: { type: String, requerid: true },
    bsvalor: { type: Number, requerid: true },
    imagen: { type: Schema.ObjectId, ref: "fotobm1" },
    
  },
  {
    timestamps: true,
  }
);

module.exports = model("BM1", BM1Schema);
