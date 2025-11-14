
// const { ServerRouter } = require("react-router-dom");
// const servidor = require("./backend/app.js"); 
// //const connectDB = require("./backend/config/db.js"); 

// const mongoose = require("./backend/config/db.js")
// const PORT = 3002;


require('dotenv').config(); 

const app = require('./backend/app'); 
const connectDB = require('./backend/config/db'); 

const PORT = process.env.PORT || 3000; 

const startServer = async () => {
    try {
        await connectDB(); 
        app.listen(PORT, () => {
            console.log(`🚀 Servidor Express escuchando en puerto ${PORT}`);
        });

    } catch (error) {
        console.error('El servidor falló al iniciar. Error:', error.message);
    }
};

startServer();