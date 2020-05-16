const { Schema, model } = require("mongoose");

//TODO: Shema de fto de bienes del BM-2
const fotobm2Schema = new Schema(
  {
    fotobm2: { type: String, required: true },
    fotonamebm2: { type: String, requerid: true, unique: true}
  },
  {
    timestamps: true,
  }
);

module.exports = model("fotobm2", fotoSchema);