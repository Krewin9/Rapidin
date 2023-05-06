const mongoose = require("mongoose")



const userSchema = mongoose.Schema({
    nombre: { type: String },
    apellido: { type: String },
    ordenes: {
      type: [{
        nombreProducto: { type: String },
        descripcion: { type: String },
        precio: { type: Number }
      }]
    }
  });

module.exports = mongoose.model('Usuarios', userSchema)
