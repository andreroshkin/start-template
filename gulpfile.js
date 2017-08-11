var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

plugins.tinypng = require('gulp-tinypng-compress');
plugins.svgo = require('gulp-svgo');
plugins.sassSCSS = require('gulp-sass');
plugins.concat = require('gulp-concat');
plugins.rename = require('gulp-rename');
plugins.autoprefixer = require('gulp-autoprefixer');
plugins.handlebars = require('gulp-compile-handlebars');
plugins.connect = require('gulp-connect');
plugins.babel = require('gulp-babel');
plugins.notify = require('gulp-notify');

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('tinypng', getTask('tinypng'));
gulp.task('svgo', getTask('svgo'));
gulp.task('sass', getTask('sass'));
gulp.task('babel', getTask('babel'));
gulp.task('html', getTask('html'));
gulp.task('watch', getTask('watch'));
gulp.task('connect', getTask('connect'));
gulp.task('templates', getTask('templates'));

gulp.task('default', ['connect', 'sass', 'templates', 'babel', 'watch']);