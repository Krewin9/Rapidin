const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
nombre : {type: String},
apellido : {type: String},
ordenes : {type:String}
});

module.exports = mongoose.model('Usuarios', userSchema)