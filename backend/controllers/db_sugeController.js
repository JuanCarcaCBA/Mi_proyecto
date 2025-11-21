const SugerenciaModel = require("../models/sugerencias");

const dbSugeController = async (categoria) => {
if (!categoria) {
        throw new Error("La Categoría es requerida.");
    }
  const lastSuge = await SugerenciaModel.findOne().sort({ id: -1 });
  //const fechaCrea = Date();
  const newId = lastSuge ? lastSuge.id + 1 : 1;

const newSuge = await SugerenciaModel.create({ 
        id: newId, 
        categoria: categoria 
    });
  return newSuge;
};
const getSuscripcionByNameController = async (name) => {
    // Usamos $regex para buscar coincidencias parciales
    // La opción 'i' hace que la búsqueda sea insensible a mayúsculas/minúsculas
    const suscripciones = await SuscripcionModel.find({
        Nombre: { $regex: name, $options: 'i' } 
    });

    if (suscripciones.length === 0) {
        // En caso de no encontrar, lanzamos un error que el Handler capturará
        throw new Error(`No se encontraron suscripciones con el nombre: ${name}`);
    }

    return suscripciones;
};
const dbGetAllSugerController = async () => {
  const sugerencias = await SugerenciaModel.find({});
  return sugerencias;
};

module.exports = {
  dbSugeController,
  dbGetAllSugerController,
};
