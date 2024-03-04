const express = require('express');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4400
const {urlencoded} = require("body-parser")
const connect = require('./config/db')

connect()
const app = express()
app.use(express.json())
app.use(urlencoded({ extended:false }))

app.use('/', require("./routes/userRoutes.js"))

app.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`)
} )