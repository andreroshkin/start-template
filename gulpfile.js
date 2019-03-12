var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

plugins.tinypng = require('gulp-tinypng-compress');
plugins.svgo = require('gulp-svgo');
plugins.sassSCSS = require('gulp-sass');
plugins.concat = require('gulp-concat');
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
plugins.browserSync = require('browser-sync').create();

plugins.postcss = require('gulp-postcss');
plugins.cssvariables = require("postcss-css-variables");



function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('tinypng', getTask('tinypng'));
gulp.task('svgo', getTask('svgo'));
gulp.task('sass', getTask('sass'));
gulp.task('watch', getTask('watch'));
gulp.task('connect', getTask('connect'));
gulp.task('templates', getTask('templates'));
gulp.task('webpack', getTask('webpack'));


gulp.task('default', ['connect', 'sass', 'templates', 'webpack', 'watch']);