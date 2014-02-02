var express = require('express');
var debug = require('debug')('shim:server');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('This is Versed!');
});

app.listen(port);
debug('Listening on %d', port);