// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,n,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,s=parseInt(n,10),!isFinite(s)){if(!t(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(n=(-s).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=s.toString(r),s||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,c=String.prototype.toLowerCase,u=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,y,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,f,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===u.call(e.specifier)?u.call(n):c.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var v=String.fromCharCode,S=Array.isArray;function E(e){return e!=e}function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,a,o,l,c,u,p,f,g,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,u=0;u<e.length;u++)if("string"==typeof(n=e[u]))l+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):v(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+_(h):_(h)+f)),l+=n.arg||"",c+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push(x(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function j(e){var r,t;if("string"!=typeof e)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[k(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var F=Object.prototype,R=F.toString,V=F.__defineGetter__,N=F.__defineSetter__,C=F.__lookupGetter__,U=F.__lookupSetter__,$=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||U.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&V&&V.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};function P(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function A(e,r,t){$(e,r,{configurable:!1,enumerable:!1,get:t})}function L(e){return"number"==typeof e}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return B&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,W="function"==typeof Symbol?Symbol:void 0,z="function"==typeof W?W.toStringTag:"",M=D()?function(e){var r,t,n,i,a;if(null==e)return G.call(e);t=e[z],a=z,r=null!=(i=e)&&Z.call(i,a);try{e[z]=void 0}catch(r){return G.call(e)}return n=G.call(e),r?e[z]=t:delete e[z],n}:function(e){return G.call(e)},X=Number,Y=X.prototype.toString,J=D();function q(e){return"object"==typeof e&&(e instanceof X||(J?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Number]"===M(e)))}function H(e){return L(e)||q(e)}P(H,"isPrimitive",L),P(H,"isObject",q);var K=Number.POSITIVE_INFINITY,Q=X.NEGATIVE_INFINITY,ee=Math.floor;function re(e){return e<K&&e>Q&&ee(r=e)===r;var r}function te(e){return L(e)&&re(e)}function ne(e){return q(e)&&re(e.valueOf())}function ie(e){return te(e)||ne(e)}function ae(e){return te(e)||function(e){return null===e}(e)||function(e){return void 0===e}(e)}function oe(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof oe))return new oe(r,t,n);if(!ae(r))throw new TypeError(j("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!ae(t))throw new TypeError(j("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!ae(n))throw new TypeError(j("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(j("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}return P(ie,"isPrimitive",te),P(ie,"isObject",ne),P(oe,"name","Slice"),A(oe.prototype,"start",(function(){return this._start})),A(oe.prototype,"stop",(function(){return this._stop})),A(oe.prototype,"step",(function(){return this._step})),P(oe.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),P(oe.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}})),function(e,r,t){var n,i,a;if(n=e.start,i=e.stop,null===(a=e.step)&&(a=1),null===n)n=a>0?0:r-1;else if(n<0){if((n=r+n)<0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=0}}else if(n>=r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=a<0?r-1:r}if(null===i)i=a>0?r:null;else if(i<0){if((i=r+i)<0)if(a>0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=0}else{if(t&&i<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=null}}else if(i>r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=r}return new oe(n,i,a)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).normalizeSlice=r();
//# sourceMappingURL=index.js.map
