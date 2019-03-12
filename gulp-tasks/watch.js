module.exports = function (gulp, plugins) {
    return () => {
        gulp.watch('views/partials/*.twig', ['templates'])
        gulp.watch('views/*.twig', ['templates'])
        gulp.watch('assets/scss/*.scss', ['sass'])
        gulp.watch('assets/scss/*/*.scss', ['sass'])
        gulp.watch('assets/js/src/*.js', ['webpack'])
    };
};