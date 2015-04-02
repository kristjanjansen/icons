// http://anthonydillon.com/blog/using-modernizr-with-opera-mini

var isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1); 

if(isOperaMini) {
  var root = document.documentElement;
  root.className += " no-fontface"; 
//  root.className += " no-svg"; 
}

