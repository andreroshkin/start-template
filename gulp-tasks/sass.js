module.exports = function (gulp, plugins) {
  return () => {
    setTimeout(
      () => {
        gulp.src('assets/scss/main.scss')
          .pipe(plugins.sassSCSS({
            errLogToConsole: false,
            outputStyle: 'compressed'
          }))
          .on('error', function (err) {
            plugins.notify().write(err);
            this.emit('end');
          })
          .pipe(plugins.postcss([plugins.cssvariables()]))
          .pipe(plugins.autoprefixer())
          .pipe(gulp.dest('assets/css'))
          .pipe(plugins.browserSync.stream());
      }, 500
    )
  };
};