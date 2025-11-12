const {Router} = require("express")
const {registerHandler, getSugerHandler} = require("../handlers/sugerHandlers")

const sugeRoutes = Router();

sugeRoutes.post('/registrar', registerHandler)
sugeRoutes.get('/', getSugerHandler)

module.exports = sugeRoutes