// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,l=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__;function f(e,t){var r,n;if((n=e.length)<2||0===t)return 0===n?0:e[0];for(r=e[n-=1]*t+e[n-1],n-=2;n>=0;)r=r*t+e[n],n-=1;return r}e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||a.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),p="get"in r,_="set"in r,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&l&&l.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e};var c=Function;return e(f,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(e){var t,r,n,o;if(e.length>500)return function(t){return f(e,t)};if(t="return function evalpoly(x){",0===(r=e.length))t+="return 0.0;";else if(1===r)t+="return "+e[0]+";";else{for(t+="if(x===0.0){return "+e[0]+";}",t+="return "+e[0],n=r-1,o=1;o<r;o++)t+="+x*",o<n&&(t+="("),t+=e[o];for(o=0;o<n-1;o++)t+=")";t+=";"}return t+="}",new c(t+="//# sourceURL=evalpoly.factory.js")()}}),f},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).evalpoly=t();
//# sourceMappingURL=browser.js.map
