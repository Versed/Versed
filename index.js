var express = require('express');
var debug = require('debug')('shim:server');
var app = express();
var db  = require('./database');

var port = process.env.PORT || 3000;
db.init();

/** Configuration **/


/** Routing **/
var books = require('./lib/books');

app.get('/books', books.list);
app.post('/books', books.create);
app.get('/books/:id', books.detail);
app.put('/books/:id', books.update);
app.delete('/books/:id', books.destroy);

app.listen(port);
debug('Listening on %d', port);
