module.exports = function (gulp, plugins) {
    return () => {
    gulp.src('assets/images/src/**/*.{png,jpg,jpeg}')
      .pipe(plugins.tinypng({
        key: 'wzh-97aFdlvuXooHhHd1YT0F_G-fsGFI',
        sigFile: 'assets/images/.tinypng-sigs',
        log: true
      }))
      .pipe(gulp.dest('assets/images'));
    };
};