
const Sugerencia = require("../models/sugerencias");
//const Sugerencia = require("../handlers/sugerciasHandlersDB");

const getAllSugerControllerDB = async () => {
    const sugerencias = await Sugerencia.find({});
    return sugerencias;
};

const registrarControllerDB = async (Nombre, Descripcion, Categoria) => {
    console.log("crear una sugerencia controller (MongoDB)");
    
    if (!Nombre || !Descripcion) throw new Error("Nombre y descripción son requeridos");
    
    const newSuge = new Sugerencia({ 
        Nombre: Nombre.toUpperCase(), 
        Descripcion,
        Categoria
        });
    
    await newSuge.save();
    
    return newSuge;
};


module.exports = {
  registrarControllerDB,
  getAllSugerControllerDB
};