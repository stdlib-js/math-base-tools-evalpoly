// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,i=n.__lookupSetter__;var c=t,f=function(e,r,t){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(u.call(e,r)||i.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&l&&l.call(e,r,t.set),e},_=r()?c:f;function p(e,r){var t,n;if((n=e.length)<2||0===r)return 0===n?0:e[0];for(t=e[n-=1]*r+e[n-1],n-=2;n>=0;)t=t*r+e[n],n-=1;return t}function y(e){var r,t,n,o;if(e.length>500)return function(r){return p(e,r)};if(r="return function evalpoly(x){",0===(t=e.length))r+="return 0.0;";else if(1===t)r+="return "+e[0]+";";else{for(r+="if(x===0.0){return "+e[0]+";}",r+="return "+e[0],n=t-1,o=1;o<t;o++)r+="+x*",o<n&&(r+="("),r+=e[o];for(o=0;o<n-1;o++)r+=")";r+=";"}return r+="}",r+="//# sourceURL=evalpoly.factory.js",new Function(r)()}(function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(p,"factory",y);export{p as default,y as factory};
//# sourceMappingURL=mod.js.map
