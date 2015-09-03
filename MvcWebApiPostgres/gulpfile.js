"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');       // Runs a local dev server
var open = require('gulp-open');             // Opens a URL in a web browser
var browserify = require('browserify');      // Bundles JS
var reactify = require('reactify');          // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat');         // Concatenate files
var lint = require('gulp-eslint');           // Lint JS files including JSX

var config = {
	port: 65147,
	devBaseUrl: 'http://localhost',
	paths: {
		js: './Scripts/src/**/*.js',
		images: './Scripts/src/images/*',
		css: [
		  'node_modules/bootstrap/dist/css/bootstrap.min.css',
		  'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
		  './Content/toastr.css'
		],
		dist: './Content/dist',
		mainJs: './Scripts/src/main.js'
	}
};

gulp.task('js', function () {
	browserify(config.paths.mainJs)
	  .transform(reactify)
	  .bundle()
	  .on('error', console.error.bind(console))
	  .pipe(source('bundle.js'))
	  .pipe(gulp.dest(config.paths.dist + '/scripts'));

});

gulp.task('css', function () {
	gulp.src(config.paths.css)
	  .pipe(concat('bundle.css'))
	  .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function () {
	gulp.src(config.paths.images)
	  .pipe(gulp.dest(config.paths.dist + '/images'))
	  .pipe(connect.reload());
});

gulp.task('lint', function () {
	return gulp.src(config.paths.js)
	  .pipe(lint({ config: 'eslint.config.json' }))
	  .pipe(lint.format());
});

gulp.task('watch', function () {
	gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('build', ['js', 'css', 'images', 'lint', 'watch']);
