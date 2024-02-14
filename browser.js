// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,n,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,s=parseInt(n,10),!isFinite(s)){if(!t(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(n=(-s).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=s.toString(r),s||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(e){return"string"==typeof e}var c=Math.abs,u=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function _(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,w,"$1e"),n=f.call(n,m,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,d,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):u.call(n)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+v(n):v(n)+e}var E=String.fromCharCode,O=isNaN,T=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,a,o,c,u,p,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",u=1,p=0;p<e.length;p++)if(l(n=e[p]))c+=n;else{if(r=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,O(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!O(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),c+=n.arg||"",u+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(j(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){return"string"==typeof e}function V(e){var r,t;if(!R(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var N=Object.prototype,C=N.toString,U=N.__defineGetter__,$=N.__defineSetter__,P=N.__lookupGetter__,A=N.__lookupSetter__,L=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(e,r)||A.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&U&&U.call(e,r,t.get),o&&$&&$.call(e,r,t.set),e};function B(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function D(e,r,t){L(e,r,{configurable:!1,enumerable:!1,get:t})}function G(e){return"number"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,M=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",J=W()?function(e){var r,t,n,i,a;if(null==e)return z.call(e);t=e[Y],a=Y,r=null!=(i=e)&&M.call(i,a);try{e[Y]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return z.call(e)},q=Number,H=q.prototype.toString,K=W();function Q(e){return"object"==typeof e&&(e instanceof q||(K?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function ee(e){return G(e)||Q(e)}B(ee,"isPrimitive",G),B(ee,"isObject",Q);var re=Number.POSITIVE_INFINITY,te=q.NEGATIVE_INFINITY,ne=Math.floor;function ie(e){return e<re&&e>te&&ne(r=e)===r;var r}function ae(e){return G(e)&&ie(e)}function oe(e){return Q(e)&&ie(e.valueOf())}function se(e){return ae(e)||oe(e)}function le(e){return ae(e)||function(e){return null===e}(e)||function(e){return void 0===e}(e)}function ce(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof ce))return new ce(r,t,n);if(!le(r))throw new TypeError(V("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!le(t))throw new TypeError(V("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!le(n))throw new TypeError(V("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(V("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}return B(se,"isPrimitive",ae),B(se,"isObject",oe),B(ce,"name","Slice"),D(ce.prototype,"start",(function(){return this._start})),D(ce.prototype,"stop",(function(){return this._stop})),D(ce.prototype,"step",(function(){return this._step})),B(ce.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),B(ce.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}})),function(e,r,t){var n,i,a;if(n=e.start,i=e.stop,null===(a=e.step)&&(a=1),null===n)n=a>0?0:r-1;else if(n<0){if((n=r+n)<0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=0}}else if(n>=r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=a<0?r-1:r}if(null===i)i=a>0?r:null;else if(i<0){if((i=r+i)<0)if(a>0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=0}else{if(t&&i<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=null}}else if(i>r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=r}return new ce(n,i,a)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).normalizeSlice=r();
//# sourceMappingURL=browser.js.map
