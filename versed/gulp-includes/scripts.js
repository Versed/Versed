'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var browserify = require('browserify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');

module.exports = gulp.task('scripts:dev', function() {
  var bundler = watchify(browserify('./public/app.js', watchify.args));

  function rebundle() {
    return bundler.bundle()
      // log errors if they happen
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./public/lib/js/'));
  }

  bundler.on('update', rebundle);
  return rebundle();
});
