
const mongoose = require('mongoose');
const SuscripcionSchema = new mongoose.Schema({
    
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
    },
    Precio: { 
        type: Number, 
        required: true,
    }
}, {
    
    collection: 'suscripciones' 
});

const Suscripcion = mongoose.models.Suscripcion || mongoose.model('Suscripcion', SuscripcionSchema);

module.exports = Suscripcion;