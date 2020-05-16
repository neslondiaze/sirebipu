const { Schema, model } = require("mongoose");

//TODO: Shema de BM-2 Relación del Movimiento de Bienes Muebles:
const BM2Schema = new Schema(
  {
    grupo2: { type: String, requerid: true },
    subgrupo2: { type: String, requerid: true },
    seccion2: { type: String, requerid: true},
    concepto2: { type: String, requerid: true },
    cantidad2: { type: String, requerid: true },
    codigo2: { type: String, required: true, unique: true },
    descripcion2: { type: String, requerid: true },
    detalles2: { type: String, requerid: true},
    bsvalor2: { type: Number, requerid: true },
    imagen2: { type: Schema.ObjectId, ref: "fotobm2" },
    
  },
  {
    timestamps: true,
  }
);

module.exports = model("BM2", BM2Schema);
