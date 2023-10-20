const express = require("express")
const app = express()
const port = 8000

app.get('/', (req,res) =>{
    res.send('<h1>Olá mundo node.js docker<h1>')
})


app.listen(port, ()=>{
    console.log("rodando na porta " + port)
})