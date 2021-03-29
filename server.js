const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const dbfile = require('./conn');

const postroute = require('./routes/post');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));
app.use('/api/post',postroute)
app.get('/',(req,res)=>{
    res.end('Hello with node js');
})
app.listen(5000,()=>{
    console.log('Node Js and Express Server Started successfully ');
})