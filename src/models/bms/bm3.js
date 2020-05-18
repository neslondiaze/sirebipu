const { Schema, model } = require("mongoose");

//TODO: Shema de BM-3 Relación de Bienes Muebles Faltantes
const BM3Schema = new Schema(
  {
    grupo3: { type: String, requerid: true },
    subgrupo3: { type: String, requerid: true },
    seccion3: { type: String, requerid: true},
    concepto3: { type: String, requerid: true },
    cantidad3: { type: String, requerid: true },
    codigo3: { type: String, required: true, unique: true },
    descripcion3: { type: String, requerid: true },
    detalles3: { type: String, requerid: true},
    bsvalor3: { type: Number, requerid: true },
    imagen3: { type: Schema.ObjectId, ref: "fotobm3" },
    
  },
  {
    timestamps: true,
  }
);

module.exports = model("BM3", BM3Schema);