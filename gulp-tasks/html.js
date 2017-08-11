module.exports = function (gulp, plugins) {
    return function () {
    gulp.src('*.html')
      .pipe(plugins.connect.reload());
    };
};