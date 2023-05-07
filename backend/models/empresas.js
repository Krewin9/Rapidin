const mongoose = require("mongoose")



const userSchema = mongoose.Schema({
    idEmpresa:{ type: Number },
    nombreEmpresa: { type: String },
    imagen: { type: String },
    color: { type: String },
    productos: {
      type: [{
        nombreProducto: { type: String },
        descripcion: { type: String },
        precio: { type: Number }
      }]
    }
  });

module.exports = mongoose.model('Empresas', userSchema)