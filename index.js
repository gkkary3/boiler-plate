const express = require('express');
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kkary:qwe123@boilerplate.uvsnwa7.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log('MongoDB Connected..')})
.catch(err=>{console.log(err)})


app.get('/', (req,res) => {res.send('Hello world!')});

app.listen(port,()=>{console.log(`Example app listening on part ${port}`)});