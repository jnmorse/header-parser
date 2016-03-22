var express = require('express');
var useragent = require('express-useragent');

var app = express();

app.use(useragent.express());

app.get('/', function(req, res) {
  res.send({
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || null,
    os: req.useragent.os,
    language: req.headers['accept-language'].split(';')[0].split(',')[0],
    browser: req.useragent.browser + ' ' + req.useragent.version
  });
});

module.exports = app;
