const responzableCtrl = {};

responzableCtrl.rendResponzableForm = (req, res) => {
  res.send("Formulario de Add de Responzables");
};

responzableCtrl.createRespozables = (req, res) => {
  res.send("save nuevos Responzable");
};

responzableCtrl.renderResponzables = (req, res) => {
  res.send("Lista todos los Responzables");
};

responzableCtrl.renderResponzableEditForm = (req, res) => {
  res.send("Formulario para Editar Responzable");
};

responzableCtrl.updateRespozables = (req, res) => {
  res.send("Update de Responzable");
};

responzableCtrl.deleteResponzable = (req, res) => {
  res.send("Delete de Responzable");
};

module.exports = responzableCtrl;
