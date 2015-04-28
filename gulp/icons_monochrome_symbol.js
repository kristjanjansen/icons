var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var rename = require('gulp-rename');
var cheerio = require('gulp-cheerio');

gulp.task('icons_monochrome_symbol', function () {
  return gulp
    .src('assets/svg/monochrome/*.svg')
    .pipe(cheerio({
        run: function ($) {
            $('[fill]').attr('fill', '');
        },
        parserOptions: { xmlMode: true }
    }))
    .pipe(svgstore({inlineSvg: false}))
    .pipe(rename({ basename:'icons_monochrome_symbol' }))
    .pipe(gulp.dest('public/sprites'));
});