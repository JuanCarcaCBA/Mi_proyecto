
//const sugerencia = require ("../routes/sugerencias")
const { dbSugeController, dbGetAllSugerController } = require("../controllers/db_sugeController")

const dbRegisterHandler = async (req, res) => {

  try {
    console.log("Datos del Body recibidos:", req.body);
    console.log(req.body);
    const { id, idea_ia } = req.body;

    const newSuge = await dbSugeController(id,idea_ia);
    res.status(201).send(newSuge);
  } catch (error) {
    console.error("❌ FALLO en registerHandlerDB. Error:", error.message); 
     res.status(500).send({ error: "Error al registrar la sugerencia: " + error.message });
  }
};

const dbGetSugeHandler = async (req, res) => { 
  try {
   
    const allSuger = await dbGetAllSugerController(); 
    
    if (allSuger.length) {
    res.status(200).send(allSuger); 
    } else {
    console.error("❌ FALLO 404 en registerHandlerDB. Error:", error.message); 

      res.status(404).send({ error: "No hay sugerencias en la base de datos" });
    }
  } catch (error) {
    console.error("[ERROR GET Sugerencias]:");
    res.status(500).send({ error: "Error interno del servidor al obtener sugerencias" }); 
  }
};

module.exports = {
  dbRegisterHandler,
  dbGetSugeHandler
};