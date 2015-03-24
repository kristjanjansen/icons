var gulp = require('gulp')
var requireDir = require('require-dir');

requireDir('./gulp', { recurse: true });

gulp.task('icons', ['icons_bitmap_sprite', 'icons_color_sprite', 'icons_monochrome_font', 'icons_monochrome_sprite']);
gulp.task('production', ['icons', 'js', 'sass']);

gulp.task('default', ['production']);
