var mongoose = require('mongoose');
var debug = require('debug')('shim:books');
var Promise = require('bluebird');

exports.findAll = function() {
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
