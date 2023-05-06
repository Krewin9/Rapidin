const express = require("express");
const userSchema =  require("../models/usuarios")

const router = express.Router();


//CREAR
router.post("/usuario", (req,res)=>{

    const usuarios = userSchema(req.body);
    usuarios
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json(({message: error})))
}
);


//GET
router.get("/usuario", (req,res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json(({message: error})))
});

router.get("/usuario/:id", (req,res)=> {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json(({message: error})))
});

router.put("/usuario/:id", (req,res)=> {
    const { id } = req.params;
    const {nombre,apellido,ordenes}=req.body;
    userSchema
    .updateOne({_id:id}, {$set:nombre, apellido ,ordenes})
    .then((data)=>res.json(data))
    .catch((error)=>res.json(({message: error})))
});

module.exports = router;

