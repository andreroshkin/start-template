module.exports = function (gulp, plugins) {
    return () => {
      gulp.src(['templates/*.twig'])
      .pipe(plugins.data(function() {
          return JSON.parse(plugins.fs.readFileSync('json/global.json'));
      }))
      .on('error', function (err) {
          plugins.notify().write(err);
          this.emit('end');
      })
      .pipe(plugins.twig({
          includes: [
              'templates/partials/*.twig',
          ],
          getIncludeId: function(filePath) {
              return plugins.path.relative('templates', filePath);
          }
      }))
      .on('error', function (err) {
          plugins.notify().write(err);
          this.emit('end');
      })
        .pipe(plugins.rename(function (path) {
          path.extname = ".html"
        }))
        .pipe(gulp.dest('./'))
        .pipe(plugins.connect.reload());
  };
  };