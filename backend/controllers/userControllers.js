// backend/controllers/userControllers.js - CORREGIDO Y ASÍNCRONO

// 1. Renombramos la importación a UserModel para evitar conflictos.
const UserModel = require("../models/user"); 

// 2. REFECTORIZACIÓN: Usar Mongoose .create() en lugar de .push()
const createUserController = async (name, userName, email) => { // Ahora es ASÍNCRONO
  console.log("User controler Body recibido");
  
  if (!name || !userName || !email) throw new Error("Faltan datos requeridos.");

  if (!email.includes("@") || !email.includes(".")) {
    return { error: "El email no tiene un formato válido." };
  }

  // Comprobar si existe antes de crear
  const userExist = await UserModel.findOne({ email });
  if (userExist) throw new Error("El email ya está registrado");

  // Usamos .create() para insertar en la DB (el _id se genera solo)
  const newUser = await UserModel.create({ name, userName, email });
  
  // Eliminamos la lógica de array (.length + 1 y .push())
  return newUser;
};

// 3. CORRECCIÓN DEL REFERENCEERROR
const getAllUserController = async () => {
    // Usamos 'allUsers' (variable local) y 'UserModel' (Modelo importado)
    const allUsers = await UserModel.find({});
    return allUsers;
};


// 4. REFECTORIZACIÓN: Usar Mongoose .find() y .findOne()
const getUserByNameController = async (name) => { // Ahora es ASÍNCRONO
  const userByName = await UserModel.find({ name: name }); // Buscar por nombre
  if (!userByName.length) throw new Error("Usuario no encontrado por nombre");
  return userByName;
}; 

const getOneUserController = async (id) => { 
  const user = await UserModel.findById(id); 
  
  if (!user) throw new Error("Usuario no encontrado por ID");
    return user.toObject(); 
};
const updateUserController = async (id, name, userName, email) => { // Ahora es ASÍNCRONO
  // Usamos findByIdAndUpdate para eficiencia. {new: true} devuelve el doc actualizado.
  const updatedUser = await UserModel.findByIdAndUpdate(id, { name, userName, email }, { new: true });
  if (!updatedUser) return { error: "Usuario no encontrado para actualizar" };
  return updatedUser;
};

const deleteUserController = async (id) => { // Ahora es ASÍNCRONO
  // Usamos findByIdAndDelete para eficiencia.
  const deleted = await UserModel.findByIdAndDelete(id);
  if (!deleted) return { error: "Usuario no encontrado para eliminar" };
  return deleted;
};

module.exports = {
  createUserController,
  getAllUserController,
  getUserByNameController,
  getOneUserController,
  updateUserController,
  deleteUserController,
};