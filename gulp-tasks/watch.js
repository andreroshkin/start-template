module.exports = function (gulp, plugins) {
    return () => {
        gulp.watch('*.html', ['html'])
        gulp.watch('templates/partials/*.twig', ['templates'])
        gulp.watch('templates/*.twig', ['templates'])
        gulp.watch('sass/*.scss', ['sass'])
        gulp.watch('sass/*/*.scss', ['sass'])
        gulp.watch('js/src/*.js', ['webpack'])
    };
};