const { Schema, model } = require("mongoose");

//TODO: Shema de responsable de oficvina
const fotobm1chema = new Schema(
  {
    fotobm1: { type: String, required: true },
    fotonamebm1: { type: String, requerid: true, unique: true}
  },
  {
    timestamps: true,
  }
);

module.exports = model("fotobm1", fotobm1Schema);