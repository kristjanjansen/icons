var fs = require('fs')

var gulp = require('gulp')
var svgsprites = require('gulp-svg-sprites')
var del = require('del');
var filter    = require('gulp-filter');
var svg2png   = require('gulp-svg2png');

gulp.task('icons_color_sprite', function () {

  var cssFilter = filter('*.{css,scss}')
  var svgFilter = filter('*.svg')
  var htmlFilter = filter('*.html')

  var config = {
    common: 'icon-color',
    baseSize: 32,
    padding: 10,
    cssFile: 'icons_color_sprite.scss',
    svg: {
      sprite: 'sprites/icons_color.svg'
    },
    preview: {
      sprite: 'icons_color.html'
    },
    templates: {
      css: fs.readFileSync("./assets/templates/scss/icons_color_sprite.scss", "utf-8"),
      previewSprite: fs.readFileSync("./assets/templates/html/icons_color.html", "utf-8")
    }
  };

  gulp.src('assets/svg/color/*.svg')
    .pipe(svgsprites(config))
    .pipe(cssFilter)
    .pipe(gulp.dest('assets/scss/default'))
    .pipe(cssFilter.restore())
    .pipe(svgFilter)
    .pipe(gulp.dest('public/sprites'))
    .pipe(svgFilter.restore())
    .pipe(htmlFilter)
    .pipe(gulp.dest('public'));

});
