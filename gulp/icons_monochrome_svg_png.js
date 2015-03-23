var fs = require('fs')

var gulp = require('gulp')
var svgsprites = require('gulp-svg-sprites')
var del = require('del');
var filter    = require('gulp-filter');
var svg2png   = require('gulp-svg2png');

gulp.task('icons_monochrome_svg_png', function () {

  var config = {
    common: 'icon-mono',
    baseSize: 32,
    padding: 10,
    cssFile: 'css/icons_monochrome_svg_png.css',
    svg: {
      sprite: 'sprites/icons_monochrome.svg'
    },
    preview: false,
    templates: {
      css: fs.readFileSync("./assets/templates/icons_monochrome_svg_png.css", "utf-8"),
    }
  };

  gulp.src('assets/svg/monochrome/*.svg')
    .pipe(svgsprites(config))
    .pipe(gulp.dest('public'))
    .pipe(filter('**/*.svg'))
    .pipe(svg2png())
    .pipe(gulp.dest('public'));

});
