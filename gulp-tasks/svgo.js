module.exports = function (gulp, plugins) {
    return function () {
    gulp.src('images/src/*.svg')
      .pipe(plugins.svgo())
      .pipe(gulp.dest('images'));
    };
};