const bm1Ctrl = {};

bm1Ctrl.renderBm1Form = (req, res) => {
  res.send("Formulario de Add de BM1");
};

bm1Ctrl.createBm1 = (req, res) => {
  res.send("save nuevos BM1");
};

bm1Ctrl.renderBm1 = (req, res) => {
  res.send("Lista todos los BM1");
};

bm1Ctrl.renderBm1EditForm = (req, res) => {
  res.send("Formulario para Editar BM1");
};

bm1Ctrl.updateBm1 = (req, res) => {
  res.send("Update de BM1");
};

bm1Ctrl.deleteBm1 = (req, res) => {
  res.send("Delete de BM1");
};

module.exports = bm1Ctrl;
