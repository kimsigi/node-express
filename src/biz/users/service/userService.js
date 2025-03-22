const User = require("@biz/users/model/user");
const { $where } = require("../model/user");

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

const getList = async (params) => {
    try {
        const {searchCondition = '', 
                searchKeyword = '', 
                limit = 5, 
                page = 1
              } = params;
        const query = {};
        if ( searchKeyword ) {
            if ( !searchCondition ) {
                query['$or'] = [
                    {idStr: { $regex: searchKeyword, $options: 'i' }},
                    {name: { $regex: searchKeyword, $options: 'i' }}
                ];
            } else if ( searchCondition === '_id' ) {
                query['idStr'] = {$regex: searchKeyword, $options: 'i' };
            } else {
                query[searchCondition] = {$regex: searchKeyword, $options: 'i' };
            }
        }
        const skip = (Number(page) - 1) * Number(limit);
        console.log("### skip: ", skip);
        const queryParams = [
            {$addFields: {idStr: { $toString: "$_id" }}},
            { $match: query },
            {$facet: {
                totalCount: [{$count: 'count'}],
                users: [
                    { $sort: { createdAt: -1, name: 1 } },
                    { $skip: skip },
                    { $limit: Number(limit)},
                ]
            }}
        ];

        const qResult = await User.aggregate(queryParams);
        const totalCount = qResult[0].totalCount[0]?.count||0;
        const users = qResult[0].users;
        return {
            users: users,
            totalCount: totalCount,
            page: Number(page),
            limit: Number(limit),
            totalPage: Math.ceil(totalCount / Number(limit))
        }

        //return await User.find(params);
    } catch (error) {
        console.log(error.message);
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
    getList,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};