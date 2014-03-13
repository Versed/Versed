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

};

exports.updateById = function(id) {

};

exports.destoryById = function(id) {

};
