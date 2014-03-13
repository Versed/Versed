var mongoose = require('mongoose');
var debug = require('debug')('shim:books');
var Promise = require('bluebird');

var bookSchema = mongoose.Schema({
  name: String,
  author: String,
  difficulty: Number,
  length: Number,
  description: String,
  comments: {body: String, date: Date},
  meta: {
    votes: {type: Number, default:0},
    favs: {type: Number, default: 0 }
  }
});

var Books = mongoose.model('Books', bookSchema);

exports.findAll = function() {
  var promise = new Promise(function(resolve, reject) {
    Books.find(function(err, books) {
      if (err) {
        return reject(err);
      }
      return resolve(books);
    });
  });
  return promise;
};

exports.findById = function(id) {
  var promise = new Promise(function(resolve, reject) {

  });
  return promise;
};

exports.updateById = function(id) {
  var promise = new Promise(function(resolve, reject) {

  });
  return promise;
};

exports.destoryById = function(id) {
  var promise = new Promise(function(resolve, reject) {

  });
  return promise;
};
