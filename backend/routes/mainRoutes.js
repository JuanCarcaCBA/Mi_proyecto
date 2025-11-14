//const router = express.Router();
const { Router } = require("express");
//const express = require('express');
const userRoutes = require("./userRoutes");
//const postRoutes = require('./postRoutes')
const mainRoutes = Router();

const { getSugerHandlerDB } = require("../handlers/sugerciasHandlersDB"); 

const authRoutes = require("./authRoutes")
const sugerenciasRoutes = require("./sugerenciasRoutes")
//const sugeRoutes = require("./sugeRoutesDB");

mainRoutes.get("/suge", getSugerHandlerDB);
mainRoutes.use("/auth", authRoutes);

mainRoutes.use("/user", userRoutes);
mainRoutes.use("/sugerencias", sugerenciasRoutes);

//mainRoutes.use("/post",postRoutes)

module.exports = mainRoutes;
