const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/proyecto';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;