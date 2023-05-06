const express = require('express')

const app = express()
const port = 3000

app.use(
express.urlencoded({
extended: true
})
)

app.use(express.json({
    type: "*/*"
})
)


app.get('/prueba', (req,res) => {
    res.send('Servidor Funcionando')
})

app.listen(port,()=>{
    console.log(`Servidor corriendo en puerto ${port}`)
})