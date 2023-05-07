const mongoose = require("mongoose")



const userSchema = mongoose.Schema({
    nombreCategoria: { type: String },
    descripcion: { type: String },
    color: { type: String },
    icono: { type: String },
    empresas: {
      type: [{
        nombreEmpresa: { type: String },
        imagen: { type: String },
        producto: { type: String }
      }]
    }
  });

module.exports = mongoose.model('Categorias', userSchema)
