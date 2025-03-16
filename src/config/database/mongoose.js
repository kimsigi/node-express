require('dotenv').config(); //.env file loaded

const mongoose = require('mongoose');   //mongoose imported

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); //connecting to MongoDB
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
}

module.exports = connection; //exporting connection function