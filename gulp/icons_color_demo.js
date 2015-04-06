var path = require('path')

var gulp = require('gulp')
var tap = require('gulp-tap')
var twig = require("gulp-twig");

var config = {
  classes: ['tiny', 'small', 'medium', 'big']
}

gulp.task('icons_color_demo', function () {

  var files = []

  gulp.src('./assets/svg/color/*.svg')
    .pipe(tap(function(filepath) {
       files.push(path.basename(filepath.path, '.svg'))
     }))
    .on('end', function() {
      gulp.src('./assets/templates/html/icons_color_demo.html')
        .pipe(twig({data: {files: files, sizes: config.classes}}))
        .pipe(gulp.dest('public'))
    })


})