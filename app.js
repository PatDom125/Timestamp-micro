'use strict';

var express = require('express');
var app = express();
var converter = require('./converter');

var port = process.env.PORT || 3000;

app.get('/', function(req, res){

  res.sendFile(__dirname + '/index.html');

});

app.get('/:time', function(req, res){

  res.json(converter(req.params.time));

});

app.listen(port);
