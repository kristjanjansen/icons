var gulp = require('gulp')
var requireDir = require('require-dir');

requireDir('./gulp', { recurse: true });

gulp.task('production', ['icons_bitmap', 'icons_color', 'icons_monochrome_font', 'icons_monochrome_sprites', 'js']);
gulp.task('mono', ['icons_monochrome_font', 'icons_monochrome_sprites', 'js']);

gulp.task('default', ['production']);
