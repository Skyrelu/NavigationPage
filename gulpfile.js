var gulp = require('gulp');
var svgSymbols = require('gulp-svg-symbols');
var connect = require('gulp-connect');
gulp.task('webserver',function () {
	connect.server();
});

gulp.task('sprites',function () {
	return gulp.src('svg/*.svg').pipe(svgSymbols()).pipe(gulp.dest('svg.min'));
});