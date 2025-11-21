
const mongoose = require('mongoose');

const SugerenciaSchema = new mongoose.Schema({
    
    id: { 
        type: Number,
        unique: true, 
    },
    categoria: {
        type: String,
    }
}, {
    
    collection: 'sugerencias' 
});

const Sugerencia = mongoose.models.sugerencia || mongoose.model('sugerencia', SugerenciaSchema);

module.exports = Sugerencia;