module.exports = function (gulp, plugins) {
    return () => {
    gulp.src('sass/main.scss')
      .pipe(plugins.sassSCSS({
        errLogToConsole: false,
        sourceComments: 'map'
      }))
      .on('error', function (err) {
        plugins.notify().write(err);
        this.emit('end');
      })
      .pipe(plugins.autoprefixer())
      .pipe(gulp.dest('css'))
      .pipe(plugins.connect.reload());
  
  
    };
};