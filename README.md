## Icons

Experimental icon system based on SVG sources and outputting various iconfont, SVG and PNG sprites.

### Monochrome icons

#### Demo

http://188.166.28.228/icons/public/icons_monochrome_demo.html

#### Fallback methods

| Type      | Modernizr test           | Format     | Browsers            | 1 color | 2 colors |  8 colors |    
|-----------|--------------------------|------------|---------------------|---------|----------------------|
| Default   | ```fontface svg```       | Iconfont   | Chr, FF, Saf, IE9+  | 13KB    | same     | same      |
| Fallback1 | ```fontface no-svg```    | Iconfont   | Old Android         | 13KB    | same     | same      |
| Fallback2 | ```no-fontface svg```    | SVG sprite | Opera Mini?         | 77/26KB | 156/29KB | 628/39KB  |
| Fallback3 | ```no-fontface no-svg``` | PNG sprite | Opera Mini?         | 42KB    | 83KB     | 70KB      |

#### Comments

* Sample size: 108 black SVG icons and with 2 and 8 color variations. The color variations are there because SVG background sprites do not allow styling SVG with CSS.
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

| Type      | Modernizr test           | Format     | Browsers                         | Size       |
|-----------|--------------------------|------------|----------------------------------|------------|
| Default   | ```svg```                | SVG sprite | Chr, FF, Saf, IE9+, Opera Mini?  | 53KB/17KB  |  
| Fallback1 | ```no-svg```             | PNG sprite | Older Android, Opera Mini?       | 24KB       |


* Sizes: Size of sprites generated from 31 color SVG icons
* SVG file sizes are given without and with gzip compression.
* Opera is untested