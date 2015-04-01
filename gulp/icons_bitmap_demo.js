var path = require('path')

var gulp = require('gulp')
var tap = require('gulp-tap')
var twig = require("gulp-twig");

gulp.task('icons_bitmap_demo', function () {

  var files = []

  gulp.src('./assets/png/*.png')
    .pipe(tap(function(filepath) {
       files.push(path.basename(filepath.path, '.png'))
     }))
    .on('end', function() {
      gulp.src('./assets/templates/html/icons_bitmap_demo.html')
        .pipe(twig({data: {files: files}}))
        .pipe(gulp.dest('public'))
    })


})