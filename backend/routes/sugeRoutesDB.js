const {Router} = require("express")
const {registerHandlerDB, getSugerHandlerDB, getSuscripcionesHandler} = require("../handlers/sugerciasHandlersDB")

const sugeRoutes = Router();
sugeRoutes.post('/registrar', registerHandlerDB)
sugeRoutes.get('/', getSugerHandlerDB)
suscripcionRoutes.get('/', getSuscripcionesHandler);

module.exports = sugeRoutes