var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('js', function () {
  gulp.src([
    './node_modules/modernizr/modernizr-latest.js',
    './assets/js/**/*.js',
    ])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./public/js'));
});