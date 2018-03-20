module.exports = function (gulp, plugins) {
    return () =>{
    const webpackConfig = require('../webpack.config.js');
     gulp.src('assets/js/src/app.js')
    .pipe(plugins.webpackStream(webpackConfig), plugins.webpack)
    .pipe(gulp.dest('assets/js'))
    .pipe(plugins.connect.reload());
    };
};