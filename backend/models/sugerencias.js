
const mongoose = require('mongoose');
const SugerenciaSchema = new mongoose.Schema({
    
    Nombre: {
        type: String,
        required: true,
        trim: true,
    },
    Descripcion: { 
        type: String,
        required: true,
    },
    Categoria: {
        type: String,
    }
}, {
    
    collection: 'suscripciones' 
});

const sugerencia = mongoose.model('sugerencia', SugerenciaSchema);

module.exports = sugerencia;