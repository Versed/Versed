'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var src = {
  public: './public/',
  dist: './dist/'
};

require('./gulp-includes/styles');
require('./gulp-includes/scripts');
require('./gulp-includes/templates');

gulp.task('default', ['less:dev', 'scripts:dev', 'templates:dev'], function() {
  gulp.watch(src.public + 'styles/**/*.less', ['less']);
  gulp.watch(src.public + 'js/**/*', ['scripts']);
  gulp.watch(src.public + 'templates/**/*', ['templates']);
  nodemon({script: './app.js'});
});

gulp.task('build', ['less:production', 'scripts:production']);
