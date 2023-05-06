const express = require("express");
const userSchema =  require("../models/usuarios")

const router = express.Router();

router.post("/usuario", (req,res)=>{
    userSchema(req.body);
    usuarios
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json(({message: error})))
}
);

module.exports = router;

