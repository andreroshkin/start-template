module.exports = function (gulp, plugins) {
    return () =>{
    const webpackConfig = require('../webpack.config.js');
     gulp.src('js/src/app.js')
    .pipe(plugins.webpackStream(webpackConfig), plugins.webpack)
    .pipe(gulp.dest('js'))
    .pipe(plugins.connect.reload());
    };
};