var debug = require('debug')('shim:books');
var books = require('./database');

exports.list = function(req, res, next) {
  res.send('got books');
};

exports.create = function(req, res, next) {
  res.send('create book');
};

exports.detail = function(req, res, next) {
  res.send('book detail');
};

exports.update = function(req, res, next) {
  res.send('update book');
};

exports.destroy = function(req, res, next) {
  res.send('delete book');
};
