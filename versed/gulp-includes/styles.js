'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');

var reload = browserSync.reload;

module.exports = gulp.task('less:dev', function() {
  return gulp.src('public/styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/lib/css/'))
    .pipe(reload({ stream:true }));
});
