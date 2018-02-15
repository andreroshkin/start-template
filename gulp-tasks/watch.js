module.exports = function (gulp, plugins) {
    return () => {
        gulp.watch('*.html', ['html'])
        gulp.watch('templates/partials/*.hbs', ['templates'])
        gulp.watch('templates/*.hbs', ['templates'])
        gulp.watch('sass/*.scss', ['sass'])
        gulp.watch('sass/*/*.scss', ['sass'])
        gulp.watch('js/src/*.js', ['webpack'])
    };
};