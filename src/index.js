var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');


app.get('/', function(req, res){
    res.send("Hello world!");
 });
 
 app.listen(3000);