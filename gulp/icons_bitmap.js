var path = require('path')

var gulp = require('gulp')
var sprite = require('css-sprite').stream
var tap = require('gulp-tap')
var twig = require("gulp-twig");
var filter = require('gulp-filter');
var rename = require('gulp-rename');

gulp.task('icons_bitmap', function () {

  var pngFilter = filter('*.png')
  var cssFilter = filter('*.css')
  var files = []

  gulp.src('./assets/png/*.png')
    .pipe(tap(function(filepath) {
       files.push(path.basename(filepath.path, '.png'))
     }))
    .pipe(sprite({
      name: 'icons_bitmap',
      style: 'icons_bitmap.css',
      cssPath: '../sprites/',
      processor: 'css',
      orientation: 'binary-tree',
      prefix: 'icon-bitmap',
      template: './assets/templates/icons_bitmap.css'
    }))
    .pipe(pngFilter)
    .pipe(gulp.dest('./public/sprites'))
    .pipe(pngFilter.restore())
    .pipe(cssFilter)
    .pipe(gulp.dest('./public/css'))
    .on('end', function() {

        gulp.src('./assets/templates/icons_bitmap.html')
          .pipe(twig({data: {files: files}}))
          .pipe(gulp.dest('./public'))
   
    })


})