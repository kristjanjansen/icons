## Icons

Experimental icon system based on SVG sources and outputting various iconfont, SVG and PNG sprites.

### Monochrome icons

| Type      | Modernizr test           | Format     | Browsers                      | Size | Size with variations |  
|-----------|--------------------------|------------|-------------------------------|------|----------------------|
| Default   | ```fontface svg```       | Iconfont   | Chrome, Firefox, Safari, IE9+ | 13KB | 13KB                 |
| Fallback1 | ```no-fontface svg```    | SVG sprite | Opera Mini                    | 26KB | 29KB                 |
| Fallback2 | ```no-fontface no-svg``` | PNG sprite | ?                             | 42KB | 83KB                 |

* Sizes: Size of font or sprite generated from 108 black SVG icons and 108 black + 108 white variations
* It's assumed SVG is served with gzip compression from server, without it the size is 5x bigger. Opera Mini proxy requests the SVG content with gzip encoding. It is possible that Nginx config needs additional directive ```gzip-proxied``` ([link](https://github.com/h5bp/server-configs-nginx/blob/master/nginx.conf#L84)) to make it work but its unconfirmed.
* Opera is untested
* Opera Mini Modernizr test is replaced with browser detection, forcing ```no-fontface svg```
* There is no IE6-8 support but it has to do with the sprite display methods (relative units and ::before content generation to achieve easy resizing). When reworked to pixes units and removing ::before its possible go also support IE8 and likely even IE7 to use PNG sprites. 

### Color icons
 
| Type      | Modernizr test           | Format     | Browsers                                         | Size  |
|-----------|--------------------------|------------|--------------------------------------------------|-------|
| Default   | ```svg```                | SVG sprite | Chrome, Firefox, Safari, IE9+, Opera, Opera Mini | 17KB  |  
| Fallback1 | ```no-svg```             | PNG sprite | ?                                                | 24KB  |

* Sizes: Size of sprites generated from 31 color SVG icons
* Opera is untested