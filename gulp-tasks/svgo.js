module.exports = function (gulp, plugins) {
    return () => {
    gulp.src('assets/images/src/*.svg')
      .pipe(plugins.svgo())
      .pipe(gulp.dest('images'));
    };
};