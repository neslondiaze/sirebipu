const { Router } = require("express");
const router = Router();

const {
  rendResponzableForm,
  createRespozables,
  renderResponzables,
  renderResponzableEditForm,
  updateRespozables,
  deleteResponzable,
} = require("../controllers/responzables.controller");

//TODO: Nuevos Muebles
router.get("/respon/add", rendResponzableForm);

router.post("/respon/add", createRespozables);

//TODO: GET All Muebles
router.get("/respon", renderResponzables);

//TODO: Edit Muebles
router.get("/respon/edit/:id", renderResponzableEditForm);

router.put("respon/edit/:id", updateRespozables);

//TODO: Delete Muebles
router.delete("/respon/delete/:id", deleteResponzable);

module.exports = router;
