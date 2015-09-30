// build.js

var gulp = require('gulp'),
	sequence = require('run-sequence');

gulp.task('build', ['setup'], function(callback) {
	sequence(['common', 'templates', 'styles', 'scripts', 'images', 'icons', 'fonts'], callback);
});
