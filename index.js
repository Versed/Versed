var express = require('express');
var debug = require('debug')('shim:server');
var app = express();

var port = process.env.PORT || 3000;

/** Configuration **/


/** Routing **/
var books = require('./lib/books');

app.get('/books', books.list);

app.listen(port);
debug('Listening on %d', port);
