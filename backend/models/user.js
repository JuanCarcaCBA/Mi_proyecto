
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: { 
        type: String,
        required: true,
    },
    role: {
        type: String,
    }
}, {
    
    collection: 'sugerencias' 
});

const user = mongoose.model('user', UserSchema);

module.exports = user;