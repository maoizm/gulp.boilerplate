// styles.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	helper = require('../helper'),
	path = require('../path');

// Base
gulp.task('styles', ['styles:common']);

// Common
gulp.task('styles:common', function() {
	var name = 'Styles';

	if($.util.env.watch) {
		gulp.watch(path.source.style + '**/*.scss', ['styles:common']);
	}

	return gulp.src(path.source.style + '*.scss')
		.pipe($.plumber(helper.error))
		.pipe($.sourcemaps.init())
		.pipe($.include())
		.pipe($.sass())
		.pipe($.autoprefixer())
		.pipe($.if($.util.env.optimize, $.cssnano()))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest(path.public.style))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
