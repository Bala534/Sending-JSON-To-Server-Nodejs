const path = require('path');
const express = require('express');
const app = express();
const request = require('request');
var bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/public/index.html'))
})
app.post('/add',function(req,res){
    console.log(req.body.response);
 });
 app.listen(8000)