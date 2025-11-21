//const { users } = require("../db/dataBase");
//const users = require("../db/dataBase");
const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (name, userName, email, password, role) => {
  const userExiste = await UserModel.findOne({ email });
  if (userExiste) {
    throw new Error("Usuario ya registrado");
  }

  const hashePase = await bcrypt.hash(password, 10);
  
  // ⚡️ CORRECCIÓN CLAVE: Usar UserModel.create() para guardar en MongoDB
  const newUser = await UserModel.create({ 
    name, 
    userName, 
    email, 
    password: hashePase, // Mongoose lo guarda
    role 
  }); 

  // Eliminamos la lógica de array
  
  // Usamos newUser.toObject() para manipular el objeto Mongoose devuelto
  const { password: _, ...usuarioSinPasss } = newUser.toObject(); 
  return usuarioSinPasss;
};

const loginController = async (email, password) => {
  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Credenciales inválidas");
  }
  const passMatch = await bcrypt.compare(password, user.password);
  if (!passMatch) {
    throw new Error("Credenciales inválidas");
  }

  const token = jwt.sign({ id: user._id, role: user.role }, "mySecretKey", {
    expiresIn: "1h",
  });
  //console.log(token);
  const { password: _, ...usuarioSinPasss } = user.toObject();

  return { message: "Inicio de sesión exitoso", token, user: usuarioSinPasss };
};

module.exports = {
  registerController,
  loginController,
};
