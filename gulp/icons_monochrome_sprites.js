var fs = require('fs')

var gulp = require('gulp')
var svgsprites = require('gulp-svg-sprites')
var del = require('del');
var filter    = require('gulp-filter');
var svg2png   = require('gulp-svg2png');

var lazypipe = require('lazypipe');
var clone = require('gulp-clone');
var cheerio = require('gulp-cheerio');
var rename = require('gulp-rename');


/*
function isNotColorized (file) {
  var parts = path.basename(file.relative, '.svg').split('--')
  return (parts.length > 1) ? false : true;
}
*/

function cloneAndColorize(colorConf) {
  var sink;
  return (lazypipe()
      .pipe(function () {
          sink = clone.sink();
          return sink;
      })
      .pipe(cheerio, {
        parserOptions: { xmlMode: true },
        run: function ($, file, done) {
          $('path').attr('fill', colorConf.color)
          done();
        }
      })
      .pipe(rename, { suffix: '---' + colorConf.name })
      .pipe(function () {
          return sink.tap();
      })
  )();
}

gulp.task('icons_monochrome_sprites', function () {

  var cssFilter = filter('*.{css,scss}')
  var svgFilter = filter('*.svg')

  var config = {
    afterTransform: function (data) {
      data.svg.map(function (item) {
        var el = item.name.split('---')
        if (el.length > 1) {
          item.name = el[1] + '.icon-mono-' + el[0]
        }
        return item
      })
      return data
    },
    common: 'icon-mono',
    baseSize: 32,
    padding: 10,
    cssFile: 'icons_monochrome_sprites.css',
    svg: {
      sprite: 'sprites/icons_monochrome.svg'
    },
    preview: false,
    templates: {
      css: fs.readFileSync("./assets/templates/icons_monochrome_sprites.css", "utf-8"),
    }
  };

  gulp.src('assets/svg/monochrome/*.svg')
    .pipe(cloneAndColorize({name: 'white', color: '#fff'}))
    .pipe(svgsprites(config))
    .pipe(cssFilter)
    .pipe(gulp.dest('assets/scss')) 
    .pipe(cssFilter.restore())
    .pipe(svgFilter)
    .pipe(gulp.dest('public/sprites')) 
    .pipe(svg2png())
    .pipe(gulp.dest('public/sprites')) 

});
