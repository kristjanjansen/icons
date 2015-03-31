var gulp = require('gulp')
var requireDir = require('require-dir');

requireDir('./gulp', { recurse: true });

gulp.task('production', [
  'icons_monochrome_font',
  'icons_monochrome_sprite',
  'icons_monochrome_demo',
  'icons_color_sprite',
  'icons_color_demo',
  'icons_bitmap_sprite',
  'icons_bitmap_demo',
  'js', 
  'sass']);

gulp.task('default', ['production']);
