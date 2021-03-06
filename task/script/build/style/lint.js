// lint.js

var gulp = require('gulp');
var utility = require('../../../utility.js');
var path = require('../../../path.js');
var $ = {
	plumber: require('gulp-plumber'),
	sasslint: require('gulp-sass-lint')
};

// Define task.
var task = function() {
	return gulp.src(path.source.style + '**/*.scss')
		.pipe($.plumber(utility.error))
		.pipe($.sasslint())
		.pipe($.sasslint.format());
};

task.description = 'Lint styles.';
task.watch = path.source.style + '**/*.scss';

// Export task.
module.exports = task;
