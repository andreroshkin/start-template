module.exports = function (gulp, plugins) {
    return () => {
      gulp.src('css/main.css')
      .pipe(plugins.cssnano())
      .pipe(plugins.rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('css/'))
    };
};


