module.exports = function (gulp, plugins) {
    return () => {
    gulp.src('images/src/**/*.{png,jpg,jpeg}')
      .pipe(plugins.tinypng({
        key: 'wzh-97aFdlvuXooHhHd1YT0F_G-fsGFI',
        sigFile: 'images/.tinypng-sigs',
        log: true
      }))
      .pipe(gulp.dest('images'));
    };
};