const { Schema, model } = require("mongoose");

//TODO: Shema de fto de bienes del BM-3
const fotobm3Schema = new Schema(
  {
    fotobm3: { type: String, required: true },
    fotonamebm3: { type: String, requerid: true, unique: true}
  },
  {
    timestamps: true,
  }
);

module.exports = model("fotobm3", fotoSchema);