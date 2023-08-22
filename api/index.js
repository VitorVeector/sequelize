const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

app.listen(port, () => `O servidor está rodando na porta: ${port}!`)

app.get('/', (req, res) => {
    res.status(200).send({message: 'Você esta conectado'})
})
