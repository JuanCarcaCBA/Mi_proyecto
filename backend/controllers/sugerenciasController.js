const { sugerencias } = require("../db/dataBase");

const registrarController = (name, descrip,tipo) => {
  if (!name || !descrip) throw new Error();
  const id = sugerencias.length + 1;
  const fechaCrea = Date();
  const newSuge = { id, name, descrip,tipo ,fechaCrea };
  sugerencias.push(newSuge);
  return newSuge;
};

const getAllSugerController = () => {
  return sugerencias;
};

module.exports = {
  registrarController,
  getAllSugerController
};
