var gulp = require('gulp'),
    sassSCSS = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    tinypng = require('gulp-tinypng-compress'),
    handlebars = require('gulp-compile-handlebars'),
    connect = require('gulp-connect'),
    babel = require('gulp-babel'),
    svgo = require('gulp-svgo'),
    notify = require("gulp-notify");



//минификация изображений
gulp.task('tinypng', function () {
	gulp.src('images/src/**/*.{png,jpg,jpeg}')
		.pipe(tinypng({
			key: 'wzh-97aFdlvuXooHhHd1YT0F_G-fsGFI',
			sigFile: 'images/.tinypng-sigs',
			log: true
		}))
		.pipe(gulp.dest('images'));
});

//svgo
gulp.task('svgo', function () {
	gulp.src('images/src/*.svg')
    .pipe(svgo())
		.pipe(gulp.dest('images'));
});


//sass
gulp.task('sass', function(){
	 gulp.src('sass/*.scss')
	.pipe(sassSCSS({errLogToConsole: false, sourceComments: 'map'}))
  .on('error', function(err) {
            notify().write(err);
            this.emit('end');
        })
  .pipe(autoprefixer())
	.pipe(gulp.dest('css'))
	.pipe(connect.reload());


});

gulp.task('babel', function () {
  gulp.src('js/app.js')
    .pipe(babel({
            presets: ['es2015']
        }))
    .pipe(gulp.dest('dist'))
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  	gulp.watch('*.html', ['html'])
    gulp.watch('templates/partials/*.hbs', ['templates'])
    gulp.watch('templates/*.hbs', ['templates'])
 	  gulp.watch('sass/*.scss', ['sass'])
});


gulp.task('connect', function() {
  connect.server({
    //root: 'app',
    livereload: true
  });
});


gulp.task('templates', function () {
    options = {
        ignorePartials: true,
        batch : ['templates/partials'],
    }
    return gulp.src('templates/*.hbs')
        .pipe(handlebars(null,options))
        
        .pipe(rename(function (path) {
          path.extname = ".html"
        })
     )
      .pipe(gulp.dest('./'))
      .pipe(connect.reload());
});


gulp.task('default', [ 'connect','sass','templates', 'watch']);


