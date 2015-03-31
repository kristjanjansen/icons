var path = require('path')

var gulp = require('gulp')
var tap = require('gulp-tap')
var twig = require("gulp-twig");

gulp.task('icons_monochrome_demo', function () {

  var sizes = ['tiny', 'small', 'medium', 'big']
  var colors = ['black', 'white', 'gray', 'orange']
  var styles = ['']

  var files = []

  gulp.src('./assets/svg/monochrome/*.svg')
    .pipe(tap(function(filepath) {
       files.push(path.basename(filepath.path, '.svg'))
     }))
    .on('end', function() {
      gulp.src('./assets/templates/html/icons_monochrome_demo.html')
        .pipe(twig({data: {
          files: files,
          sizes: sizes,
          colors: colors,
          styles: styles
        }}))
        .pipe(gulp.dest('public'))
    })


})