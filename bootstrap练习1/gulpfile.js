var gulp = require("gulp")
var jsmin = require("gulp-jsmin")
var htmlmin = require("gulp-htmlmin")
var cssmin = require("gulp-cssmin")

gulp.task('htmlmin',function () {
	 gulp.src('view/index.html')
	 .pipe(htmlmin())
	 .pipe(gulp.dest('desk/html/'))
})
gulp.task('cssmin',function () {
	 gulp.src('src/css/index.css')
	 .pipe(cssmin())
	 .pipe(gulp.dest('desk/css/'))
})
gulp.task('jsmin',function () {
	 gulp.src('src/js/index.js')
	 .pipe(jsmin())
	 .pipe(gulp.dest('desk/js/'))
})