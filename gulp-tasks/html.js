module.exports = function (gulp, plugins) {
    return () =>{
    gulp.src('*.html')
      .pipe(plugins.connect.reload());
    };
};