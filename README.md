## Icons

Experimental icon system based on SVG sources and outputting various iconfont, SVG and PNG sprites.

### Monochrome icons

#### Demo

http://188.166.28.228/icons/public/icons_monochrome_demo.html

#### Fallback methods

| Type      | Modernizr test           | Format     | Browsers            | 100icn | 100icn x 2col| 100icn x 8col|    
|-----------|--------------------------|------------|---------------------|---------|-------------|--------------|
| Default   | ```fontface svg```       | Iconfont   | Chr, FF, Saf, IE9+  | 13KB    | same        | same         |
| Fallback1 | ```fontface no-svg```    | Iconfont   | Old Android         | 13KB    | same        | same         |
| Fallback2 | ```no-fontface svg```    | SVG sprite | Opera Mini?         | 73/24KB | 147/29KB    | 593/37KB     |
| Fallback3 | ```no-fontface no-svg``` | PNG sprite | Opera Mini?         | 39KB    | 78KB        | 69KB         |

#### Comments

* Sample size: 100 black-and-white SVG icons and with 2 and 8 color variations. The color variations are generated into the sprite because SVG background sprites do not allow styling SVG.
* SVG file sizes are given without and with gzip compression.
* Opera Mini supports SVG and it's proxy requests the SVG content with gzip encoding and passing it on to the client using OBML format. Bandwidth-wise it's feasible to deliver SVG sprites to Opera Mini but only when gzip transfer is guaranteed (usually it is not) and there are no color variations. Color variations bump up the unpacked SVG file size and it can likely cause performance problems in unpacking and rendering. 
* Since Opera Mini Modernizr test can give false positives or does not work at all is replaced with browser detection, forcing either ```no-fontface svg``` or ```no-fontface no-svg```.
* There is no IE6-8 support but it has to do with the sprite display methods (relative units and ::before content generation to achieve easy resizing). When reworked to pixes units and removing ::before its possible go also support IE8 and likely even IE7 to use PNG sprites. 
* Opera is untested
* Other SVG sprite usage options (inline, symbols, fragment indentifiers, stacks) are untestested.

### Color icons

#### Demo

http://188.166.28.228/icons/public/icons_color_demo.html

#### Fallback methods

| Type      | Modernizr test | Format     | Browsers                        | 10icn | 20icn  | 100icn  |
|-----------|----------------|------------|---------------------------------|-------|--------|---------|
| Default   | ```svg```      | SVG sprite | Chr, FF, Saf, IE9+, Opera Mini? | 13/5KB| 33/12KB| 170/54KB|  
| Fallback1 | ```no-svg```   | PNG sprite | Older Android, Opera Mini?      | 8KB   | 16KB   | 69KB    |


* SVG file sizes are given without and with gzip compression.
* Opera is untested


### Usage

    npm install
    gulp


### Implementation

The icon processing pipeline is implemented with Gulp but its easy to port it to Grunt as well. The processing is split into tasks:

#### Monochrome icons

##### gulp/icons_monochrome_font.js

Takes monochrome SVG files in ```assets/svg/monochrome```
and SCSS template ```assets/templates/scss/_icons_monochrome_font.scss```
and outputs font file to ```public/font```
and SCSS to ```assets/scss/default/_icons_monochrome_font.scss```.

##### gulp/icons_monochrome_sprite.js

Takes monochrome SVG files in ```assets/svg/monochrome```
and SCSS template ```assets/templates/scss/_icons_monochrome_sprite.scss```
and outputs SVG sprite to ```public/sprites```
and SCSS to ```assets/scss/default/_icons_monochrome_sprite.scss```.

##### gulp/icons_monochrome_demo.js

Outputs color icon sample sheet demo to ```public/icons_monochrome_demo.html```


#### Color icons

##### gulp/icons_color_sprite.js

Takes color SVG files in ```assets/svg/color```
and SCSS template ```assets/templates/scss/_icons_color_sprite.scss``` 
and outputs SVG sprite to ```public/sprites```
and SCSS to ```assets/scss/default/_icons_color_sprite.scss```.

##### gulp/icons_color_demo.js

Outputs color icon sample sheet demo to ```public/icons_color_demo.html```


#### Bitmap icons

##### gulp/icons_bitmap_sprite.js and gulp/icons_bitmap_sprite_demo.js

TBD
