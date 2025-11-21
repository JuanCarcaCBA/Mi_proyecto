
const Suscripciones = require("../models/suscripcion");
//const Sugerencia = require("../handlers/sugerciasHandlersDB");

const getAllSugerControllerDB = async () => {
    const sugerencia = await Suscripciones.find({});
    return sugerencia;
};

const SuscripcionModel = require("../models/suscripcion"); 


const getSuscripcionByNameController = async (name) => {

    const suscripciones = await SuscripcionModel.find({
        Nombre: { $regex: name, $options: 'i' } 
    });

    if (suscripciones.length === 0) {
        throw new Error(`No se encontraron suscripciones con el nombre: ${name}`);
    }

    return suscripciones;
};

const registrarControllerDB = async (Nombre, Descripcion, Categoria) => {
    console.log("crear una sugerencia controller (MongoDB)");
    
    if (!Nombre || !Descripcion) throw new Error("Nombre y descripción son requeridos");
    
    const newSuge = new Suscripciones({ 
        Nombre: Nombre.toUpperCase(), 
        Descripcion,
        Categoria
        });
    
    await newSuge.save();
    
    return newSuge;
};


module.exports = {
  registrarControllerDB,
  getAllSugerControllerDB,
  getSuscripcionByNameController
};