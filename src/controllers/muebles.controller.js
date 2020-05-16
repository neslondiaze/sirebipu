const mueblesCtrl = {};

mueblesCtrl.rendMueblesForm = (req, res) => {
  res.send("Formulario de Add de muebles");
};

mueblesCtrl.createMuebles = (req, res) => {
  res.send("save nuevos muebles");
};

mueblesCtrl.renderMuebles = (req, res) => {
  res.send("Lista todos los muebles");
};

mueblesCtrl.renderMueblesEditForm = (req, res) => {
  res.send("Formulario para Editar Muebles");
};

mueblesCtrl.updateMuebles = (req, res) => {
  res.send("Update de Muebles");
};

mueblesCtrl.deleteMuebles = (req, res) => {
  res.send("Delete de Muebles");
};

module.exports = mueblesCtrl;
