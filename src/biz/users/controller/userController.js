const service = require("@biz/users/service/userService");

const getAllUsers = (req, res) => {
  try {
    console.log("#### controller");
    const users = service.getAllUsers();
    //console.log("#### controller after: ", users.json());
    res.status(200).json(users);
  } catch (error) {
    console.log("### err");
    res.status(500).json({ error: error.message });
  }
}

const getUserById = (req, res) => {
  try {
    //const user = service.getUserById(req.params.id);
    //res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const createUser = async (req, res) => {    
  try {
    //const user = service.createUser(req.body);
    //res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateUser = async (req, res) => {
  try {
    //const user = service.updateUser(req.params.id, req.body);
    //res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteUser = async (req, res) => {
  try {
    //service.deleteUser(req.params.id);
    //res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};