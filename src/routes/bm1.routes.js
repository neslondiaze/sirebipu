const { Router } = require("express");
const router = Router();

const {
  renderBm1Form,
  createBm1,
  renderBm1,
  renderBm1EditForm,
  updateBm1,
  deleteBm1,
} = require("../controllers/bm1.controller");

//TODO: Nuevos Muebles
router.get("/bm1/add", renderBm1Form);

router.post("/bm1/add", createBm1);

//TODO: GET All Muebles
router.get("/bm1", renderBm1);

//TODO: Edit Muebles
router.get("/bm1/edit/:id", renderBm1EditForm);

router.put("/bm1/edit/:id", updateBm1);

//TODO: Delete Muebles
router.delete("/bm1/delete/:id", deleteBm1);

module.exports = router;