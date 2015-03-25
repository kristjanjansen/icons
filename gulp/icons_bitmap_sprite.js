var path = require('path')

var gulp = require('gulp')
var sprite = require('css-sprite').stream
var tap = require('gulp-tap')
var twig = require("gulp-twig");
var filter = require('gulp-filter');
var rename = require('gulp-rename');

gulp.task('icons_bitmap_sprite', function () {

  var pngFilter = filter('*.png')
  var cssFilter = filter('*.{scss,css}')

  var files = []

  gulp.src('./assets/png/*.png')
    .pipe(tap(function(filepath) {
       files.push(path.basename(filepath.path, '.png'))
     }))
    .pipe(sprite({
      name: 'icons_bitmap',
      style: '_icons_bitmap_sprite.scss',
      cssPath: '../sprites/',
      processor: 'css',
      orientation: 'binary-tree',
      prefix: 'icon-bitmap',
      template: 'assets/templates/scss/_icons_bitmap_sprite.scss'
    }))
    .pipe(cssFilter)
    .pipe(gulp.dest('assets/scss/default'))
    .pipe(cssFilter.restore())
    .pipe(pngFilter)
    .pipe(gulp.dest('public/sprites'))
    .on('end', function() {

        gulp.src('./assets/templates/html/icons_bitmap.html')
          .pipe(twig({data: {files: files}}))
          .pipe(gulp.dest('public'))
   
    })


})