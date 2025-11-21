const {
  createUserController,
  getAllUserController,
  getUserByNameController,
  getOneUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/userControllers");

const Joi = require("joi");

const esquemaUser = Joi.object({
  name: Joi.string().min(2).required(),
  userName: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
});

const getUserHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const userByName = await getUserByNameController(name); 
      res.send(userByName);
    } else {
      const allUsers = await getAllUserController(); 
      res.send(allUsers);
    }
  } catch (error) {
    res.status(404).send({ error: error.message || "No hay usuarios" }); 
  }
};

const getUserByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const userById = await getOneUserController(id); 
    
    return res.send(userById);

  } catch (error) {

    return res.status(404).send({ error: error.message || "No se encontro el usuario" });
  }
};

const createUserHandler = async (req, res) => {
  console.log("Creando usuario UserHandlers");
  try {
    const { error } = esquemaUser.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      const { name, userName, email } = req.body;
      const newUser = await createUserController(name, userName, email); 
      res.status(201).send(newUser);
    }
  } catch (error) {
    res.status(400).send({ error: error.message || "Error al crear el usuario" }); 
  }
};

const putUserHandler = async (req, res) => {
  const { name, userName, email } = req.body;
  const { id } = req.params;
  try {
    const newUserData = await updateUserController(id, name, userName, email);
    res.send(newUserData);
  } catch (error) {
    res.status(404).send({ error: error.message || "Error al actualizar el usuario" });
  }
};

const deleteUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await deleteUserController(id);
    res.send(deleteUser);
  } catch (error) {
    res.status(404).send({ error: error.message || "Error al eliminar el usuario" });
  }
};

module.exports = {
  getUserHandler,
  getUserByIdHandler,
  createUserHandler,
  putUserHandler,
  deleteUserHandler,
};