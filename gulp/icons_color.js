var fs = require('fs')

var gulp = require('gulp')
var svgsprites = require('gulp-svg-sprites')
var del = require('del');
var filter    = require('gulp-filter');
var svg2png   = require('gulp-svg2png');

gulp.task('icons_color', function () {

  var config = {
    common: 'icon-color',
    baseSize: 32,
    padding: 10,
    cssFile: 'css/icons_color.css',
    svg: {
      sprite: 'sprites/icons_color.svg'
    },
    preview: {
      sprite: 'icons_color.html'
    },
    templates: {
      css: fs.readFileSync("./assets/templates/icons_color_svg_png.css", "utf-8"),
      previewSprite: fs.readFileSync("./assets/templates/icons_color.html", "utf-8")
    }
  };

  gulp.src('assets/svg/color/*.svg')
    .pipe(svgsprites(config))
    .pipe(gulp.dest('public'))
    .pipe(filter('**/*.svg'))
    .pipe(svg2png())
    .pipe(gulp.dest('public'));

});
