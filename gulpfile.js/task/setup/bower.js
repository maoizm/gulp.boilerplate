// bower.js

var gulp = require('gulp');
var bower = require('bower');
var helper = require('../../helper');
var path = require('../../path');

// Define task.
var task = function() {
	helper.watch(path.setup.bower, gulp.task('setup:bower'));
	return bower.commands.install();
};

task.displayName = 'setup:bower';
task.description = 'Install Bower dependencies.';

// Export task.
module.exports = task;
