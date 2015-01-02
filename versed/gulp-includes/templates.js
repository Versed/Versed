'use strict';

var gulp = require('gulp');
var htmlCompile = require('gulp-html-compile');
var concat = require('gulp-concat');
var insert = require('gulp-insert');

module.exports = gulp.task('templates:dev', function() {
  return gulp.src('public/templates/**/*.html')
  .pipe(htmlCompile({
    namespace: 'cortex-templates',
    name: function(file) {
      return file.relative.split('.')[0];
    }
  }))
  .pipe(concat('cortex-templates.js'))
  .pipe(insert.append('module.exports = window[ "cortex-templates" ];'))
  .pipe(gulp.dest('public/lib/js/'));
});
