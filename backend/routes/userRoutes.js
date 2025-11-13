const { Router } = require('express');

const {
    getUserHandler,
    getUserByIdHandler,
    createUserHandler,
    putUserHandler,
    deleteUserHandler,
} = require ("../handlers/userHandlers.js");

const userRoutes = Router();

const verifytoken = require("../middleware/verifytoken");

const autozarAdmin = require("../middleware/autorizeAdmin.js")

userRoutes.get("/", getUserHandler);
userRoutes.get("/:id", getUserByIdHandler);
userRoutes.post("/", createUserHandler);
userRoutes.put("/:id",putUserHandler);
userRoutes.delete("/:id",verifytoken,autozarAdmin,deleteUserHandler);

//userRoutes.post("/surg", createSugerencia);

module.exports = userRoutes