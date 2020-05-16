const { Router } = require("express");
const router = Router();

const {
  rendMueblesForm,
  createMuebles,
  renderMuebles,
  renderMueblesEditForm,
  updateMuebles,
  deleteMuebles,
} = require("../controllers/muebles.controller");

//TODO: Nuevos Muebles
router.get("/muebles/add", rendMueblesForm);

router.post("/muebles/add", createMuebles);

//TODO: GET All Muebles
router.get("/muebles", renderMuebles);

//TODO: Edit Muebles
router.get("/muebles/edit/:id", renderMueblesEditForm);

router.put("muebles/edit/:id", updateMuebles);

//TODO: Delete Muebles
router.delete("/muebles/delete/:id", deleteMuebles);

module.exports = router;
