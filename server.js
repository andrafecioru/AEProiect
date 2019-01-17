const express = require("express")

const app = express()

app.get('/', function(request,response) {
response.status(200).send('hello world!')
})

app.listen(8080)