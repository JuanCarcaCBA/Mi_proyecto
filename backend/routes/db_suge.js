const {Router} = require("express")
const {dbRegisterHandler, dbGetSugeHandler} = require("../handlers/db_sugeHand")

const db_sugeRoutes = Router();
db_sugeRoutes.post('/registrar', dbRegisterHandler)
db_sugeRoutes.get('/', dbGetSugeHandler)
//db_sugeRoutes.delete('/:id');

module.exports = db_sugeRoutes