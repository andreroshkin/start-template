var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
  lazy: true
});

plugins.tinypng = require('gulp-tinypng-compress');
plugins.svgo = require('gulp-svgo');
plugins.sassSCSS = require('gulp-sass');
plugins.rename = require('gulp-rename');
plugins.autoprefixer = require('gulp-autoprefixer');
plugins.connect = require('gulp-connect');
plugins.notify = require('gulp-notify');
plugins.twig  = require('gulp-twig');
plugins.path = require('path'),
plugins.fs = require('fs');
plugins.data = require('gulp-data');
plugins.webpackStream  = require('webpack-stream');
plugins.webpack = require('webpack');



function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('tinypng', getTask('tinypng'));
gulp.task('svgo', getTask('svgo'));
gulp.task('sass', getTask('sass'));
gulp.task('html', getTask('html'));
gulp.task('watch', getTask('watch'));
gulp.task('connect', getTask('connect'));
gulp.task('templates', getTask('templates'));
gulp.task('webpack', getTask('webpack'));


gulp.task('default', ['connect', 'sass', 'templates', 'webpack', 'watch']);