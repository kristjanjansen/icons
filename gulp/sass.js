var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require("gulp-rename")

gulp.task('sass', ['icons'], function () {
  gulp.src('./assets/scss/**/base.scss')
    .pipe(sass())
    .pipe(rename(function (path) {
      path.basename = path.dirname
      path.dirname = ''
    }))        
    .pipe(gulp.dest('./public/css'));
});