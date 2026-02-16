"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=a(function(w,o){
function p(e,r){var n,t;if(t=e.length,t<2||r===0)return t===0?0:e[0];for(t-=1,n=e[t]*r+e[t-1],t-=2;t>=0;)n=n*r+e[t],t-=1;return n}o.exports=p
});var l=a(function(R,f){
var q=require('@stdlib/function-ctor/dist'),h=i();function x(e){var r,n,t,u;if(e.length>500)return s;if(r="return function evalpoly(x){",n=e.length,n===0)r+="return 0.0;";else if(n===1)r+="return "+e[0]+";";else{for(r+="if(x===0.0){return "+e[0]+";}",r+="return "+e[0],t=n-1,u=1;u<n;u++)r+="+x*",u<t&&(r+="("),r+=e[u];for(u=0;u<t-1;u++)r+=")";r+=";"}return r+="}",r+="//# sourceURL=evalpoly.factory.js",new q(r)();function s(y){return h(e,y)}}f.exports=x
});var c=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=i(),g=l();c(v,"factory",g);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
