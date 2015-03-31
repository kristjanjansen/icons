var fs = require('fs')

var gulp = require('gulp')
var svgsprites = require('gulp-svg-sprites')
var del = require('del');
var filter    = require('gulp-filter');
var svg2png   = require('gulp-svg2png');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('icons_color_sprite', function () {

  var cssFilter = filter('**/*.{css,scss}')
  var svgFilter = filter('**/*.svg')

  var config = {
    common: 'icon-color',
    baseSize: 32,
    padding: 10,
    cssFile: '_icons_color_sprite.scss',
    svg: {
      sprite: 'sprites/icons_color.svg'
    },
    preview: null,
    templates: {
      css: fs.readFileSync("./assets/templates/scss/_icons_color_sprite.scss", "utf-8"),
    }
  };

  gulp.src('assets/svg/color/*.svg')
    .pipe(svgsprites(config))
    .pipe(cssFilter)
    .pipe(gulp.dest('assets/scss/default'))
    .pipe(cssFilter.restore())
    .pipe(svgFilter)
    .pipe(gulp.dest('public'))
    .pipe(svg2png())
    .pipe(imagemin({ progressive: true, use: [pngquant()] }))
    .pipe(gulp.dest('public'))

});
