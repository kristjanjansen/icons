var gulp = require('gulp')
var svgscaler = require('svg-scaler')
var iconfont = require('gulp-iconfont')
var twig = require('gulp-twig')
var rename = require("gulp-rename")

gulp.task('icons_monochrome_font', function() {
 gulp.src(['assets/svg/monochrome/*.svg'])
   .pipe(svgscaler({ scale: 10 }))
   .pipe(iconfont({
     fontName: 'icons_monochrome',
   }))
   .on('codepoints', function(codepoints) {
     var data = {
       glyphs: codepoints,
       fontName: 'icons_monochrome',
       fontPath: '../fonts',
       className: 'icon-mono',
     };

     data.glyphs.map(function(glyph) {
       glyph.codepoint = glyph.codepoint.toString(16).toUpperCase()
       return glyph
     })

     gulp.src('./assets/templates/icons_monochrome_font.css')
       .pipe(twig({data: data}))
       .pipe(rename({ extname:'.css' }))
       .pipe(gulp.dest('public/css'));

     gulp.src('./assets/templates/icons_monochrome.html')
       .pipe(twig({data: data}))
       .pipe(rename({ extname:'.html'}))
       .pipe(gulp.dest('public'));

   })
   .pipe(gulp.dest('public/fonts'))
});

