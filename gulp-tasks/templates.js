module.exports = function (gulp, plugins) {
    return () => {
    options = {
      ignorePartials: true,
      batch: ['templates/partials'],
    }
    return gulp.src('templates/*.hbs')
      .pipe(plugins.handlebars(null, options))
  
      .pipe(plugins.rename(function (path) {
        path.extname = ".html"
      }))
      .pipe(gulp.dest('./'))
      .pipe(plugins.connect.reload());
  };
};