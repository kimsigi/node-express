const service = require("@biz/users/service/userService");

const login = async (req, res) => {
  try {
    const user = await service.login(req.body);
    res.json({user: user, token: 'fake-jwt-token'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await service.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getList = async (req, res) => {
  try {
    const users = await service.getList(req.body);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await service.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const createUser = async (req, res) => {    
  try {
    const user = await service.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateUser = async (req, res) => {
  try {
    const user = await service.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteUser = async (req, res) => {
  try {
    await service.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  login,
  getAllUsers,
  getList,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};