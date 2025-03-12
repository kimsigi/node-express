const User = require("@biz/users/model/user");

const getAllUsers = () => {
    try {
        console.log("#### service");
        return User.find();
    } catch (error) {
        throw new Error(error);
    }
}

const getUserById = (id) => {
    try {
        return User.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const createUser = (params) => {
    try {
        const user = new User(params);
        return user.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateUser = (id, params) => {
    /*
    try {
        return User.findByIdAndUpdate(id, params);
    } catch (error) {
        throw new Error(error);
    } 
        */
    console.log("#### updateUser ####");
}

const deleteUser = (id) => {
    /*
    try {
        return User.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
        */
       console.log("#### deleteUser ####");
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};