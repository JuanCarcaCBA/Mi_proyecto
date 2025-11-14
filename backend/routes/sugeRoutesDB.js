const {Router} = require("express")
const {registerHandlerDB, getSugerHandlerDB} = require("../handlers/sugerciasHandlersDB")

const sugeRoutes = Router();
sugeRoutes.post('/registrar', registerHandlerDB)
sugeRoutes.get('/', getSugerHandlerDB)

module.exports = sugeRoutes