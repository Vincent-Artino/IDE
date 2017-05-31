var express = require('express')
var http = require('http')
var request = require('request')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
app.use(express.static(path.join(__dirname)));
app.get('/',function(req,res){
res.sendFile(path.join(__dirname+'/views/index.html'));
})
