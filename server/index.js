var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendStatus(200);
});

module.exports = app;
