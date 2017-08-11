module.exports = function (gulp, plugins) {
    return function () {
    gulp.src('js/src/app.js')
      .pipe(plugins.babel({
        "presets": ["es2015"],
        "comments": false
      }))
      .on('error', function (err) {
        plugins.notify().write(err);
        this.emit('end');
      })
      .pipe(gulp.dest('js'))
      .pipe(plugins.connect.reload());
    };
};