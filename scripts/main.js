var express = require('express')
var http = require('http')
var request = require('request')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
var port = Number(process.env.PORT||5000)
app.use(express.static(path.join(__dirname)));
app.get('/',function(req,res){
res.sendFile(path.join(__dirname+'/../views/front.html'));  
})
app.get('/theme.css',function(req,res){
res.sendFile(path.join(__dirname+'/../views/theme.css'));  
})
app.listen(port)
