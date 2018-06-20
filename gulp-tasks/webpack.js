module.exports = function (gulp, plugins) {
    return () =>{
    const webpackConfig = require('../config/webpack.config.js');
     gulp.src('assets/js/src/app.js')
    .pipe(plugins.webpackStream(webpackConfig), plugins.webpack)
    .on('error', function (err) {
        plugins.notify().write(err);
        this.emit('end');
    })
    
    .pipe(gulp.dest('assets/js'))
    .pipe(plugins.connect.reload());
    };
};