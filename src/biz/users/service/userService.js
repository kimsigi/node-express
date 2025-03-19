const User = require("@biz/users/model/user");

const login = async (params) => {
    
    const user = await User.findOne(params);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

const getAllUsers = async () => {
    try {
        return await User.find();
    } catch (error) {
        throw new Error(error);
    }
}

const getUserById = async (id) => {
    try {
        return await User.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const createUser = async (params) => {
    try {
        const user = new User(params);
        return await user.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateUser = async (id, params) => {
    try {
        
        return await User.findByIdAndUpdate(id, params);
    } catch (error) {
        throw new Error(error);
    } 
}

const deleteUser = async (id) => {
    try {
        return await User.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    login,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};