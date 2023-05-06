const express = require('express');
const mongoose = require('mongoose');
require ("dotenv").config();
const userRoutes = require("./routes/usuarios");


const app = express();
const port = process.env.PORT || 5501

app.get("/", (req,res) => {
    res.send('Servidor Funcionando')
});

//midd
app.use(express.json());
app.use('/api',userRoutes);



mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("Conectado a MONGO DB Atlas"))
.catch((error)=> console.error(error));


app.listen(port,()=>{
        console.log(`Servidor corriendo en puerto ${port}`)
    });