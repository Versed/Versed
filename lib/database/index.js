/* global console */
var mongoose = require('mongoose');
var debug = require('debug')('shim:db');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  debug('open db connection');
});

exports.init = function() {
  mongoose.connect('mongodb://localhost/versed');
};
