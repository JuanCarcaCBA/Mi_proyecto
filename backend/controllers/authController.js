const { users } = require("../db/dataBase");
//const users = require("../db/dataBase");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (name, userName, email, password, role) => {
  const userExiste = users.some((user) => user.email === email);
  if (userExiste) {
    throw new Error("Usuario ya registrado");
  }
  const id = users.length + 1;
  const hashePase = await bcrypt.hash(password, 10);
  const newUser = { id, name, userName, email, password: hashePase, role };
  // if (!id || !name || !userName || !email || !password || !role)
  //   throw new Error();
  users.push(newUser);
  return newUser;
};

const loginController = async (email, password) => {
  const user = users.find((user) => user.email === email);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  const passMatch = await bcrypt.compare(password, user.password);
  if (!passMatch) {
    throw new Error("Contraseña incorrecta");
  }

  const token = jwt.sign({ id: user.id, role: user.role }, "mySecretKey", {
    expiresIn: "1h",
  });
  //console.log(token);
  const { password: _, ...usuarioSinPasss } = user;
  return { message: "Inicio de sesión exitoso", token, user:  usuarioSinPasss};
};

module.exports = {
  registerController,
  loginController,
};
