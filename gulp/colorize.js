var lazypipe = require('lazypipe');
var clone = require('gulp-clone');
var cheerio = require('gulp-cheerio');

function colorize (color) {
  var sink;
  return (lazypipe()
      .pipe(function () {
          sink = clone.sink();
          return sink;
      })
      .pipe(cheerio, {
        parserOptions: { xmlMode: true },
        run: function ($, file, done) {
          $('path').attr('fill', color)
          done();
        }
      })
      .pipe(rename, { suffix: '--' + color })
      .pipe(function () {
          return sink.tap();
      })
  )();
}

function isNotColorized (file) {
  var parts = path.basename(file.relative, '.svg').split('--')
  return (parts.length > 1) ? false : true;
}