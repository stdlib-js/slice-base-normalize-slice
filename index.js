// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,i=t.__defineGetter__,a=t.__defineSetter__,o=t.__lookupGetter__,l=t.__lookupSetter__,s=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,s){var c,u,p,f;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof s||null===s||"[object Array]"===n.call(s))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+s+"`.");if((u="value"in s)&&(o.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=t,delete e[r],e[r]=s.value,e.__proto__=c):e[r]=s.value),p="get"in s,f="set"in s,u&&(p||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,s.get),f&&a&&a.call(e,r,s.set),e};function c(e,r,t){s(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function u(e,r,t){s(e,r,{configurable:!1,enumerable:!1,get:t})}function p(e){return"number"==typeof e}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return f&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString,h=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",y=g()?function(e){var r,t,n,i,a;if(null==e)return d.call(e);t=e[b],a=b,r=null!=(i=e)&&h.call(i,a);try{e[b]=void 0}catch(r){return d.call(e)}return n=d.call(e),r?e[b]=t:delete e[b],n}:function(e){return d.call(e)},m=Number,w=m.prototype.toString,_=g();function v(e){return"object"==typeof e&&(e instanceof m||(_?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object Number]"===y(e)))}function S(e){return p(e)||v(e)}c(S,"isPrimitive",p),c(S,"isObject",v);var E=Number.POSITIVE_INFINITY,O=m.NEGATIVE_INFINITY,T=Math.floor;function I(e){return e<E&&e>O&&T(r=e)===r;var r}function x(e){return p(e)&&I(e)}function k(e){return v(e)&&I(e.valueOf())}function j(e){return x(e)||k(e)}function F(e){return"number"==typeof e}function R(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function V(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+R(i):R(i)+e,n&&(e="-"+e)),e}c(j,"isPrimitive",x),c(j,"isObject",k);var N=String.prototype.toLowerCase,C=String.prototype.toUpperCase;function U(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!F(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=V(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=V(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===C.call(e.specifier)?C.call(t):N.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function $(e){return"string"==typeof e}var A=Math.abs,P=String.prototype.toLowerCase,L=String.prototype.toUpperCase,B=String.prototype.replace,D=/e\+(\d)$/,G=/e-(\d)$/,Z=/^(\d+)$/,W=/^(\d+)e/,z=/\.0$/,M=/\.0*e/,X=/(\..*[^0])0*e/;function Y(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!F(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":A(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=B.call(t,X,"$1e"),t=B.call(t,M,"e"),t=B.call(t,z,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=B.call(t,D,"e+0$1"),t=B.call(t,G,"e-0$1"),e.alternate&&(t=B.call(t,Z,"$1."),t=B.call(t,W,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===L.call(e.specifier)?L.call(t):P.call(t)}function J(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function q(e,r,t){var n=r-e.length;return n<0?e:e=t?e+J(n):J(n)+e}var H=String.fromCharCode,K=isNaN,Q=Array.isArray;function ee(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function re(e){var r,t,n,i,a,o,l,s,c;if(!Q(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",l=1,s=0;s<e.length;s++)if($(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=ee(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,K(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,K(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=U(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!K(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=K(a)?String(n.arg):H(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=V(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=q(n.arg,n.width,n.padRight)),o+=n.arg||"",l+=1}return o}var te=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ne(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ie(e){var r,t,n,i;for(t=[],i=0,n=te.exec(e);n;)(r=e.slice(i,te.lastIndex-n[0].length)).length&&t.push(r),t.push(ne(n)),i=te.lastIndex,n=te.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function ae(e){return"string"==typeof e}function oe(e){var r,t,n;if(!ae(e))throw new TypeError(oe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ie(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return re.apply(null,t)}function le(e){return x(e)||function(e){return null===e}(e)||function(e){return void 0===e}(e)}function se(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof se))return new se(r,t,n);if(!le(r))throw new TypeError(oe("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!le(t))throw new TypeError(oe("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!le(n))throw new TypeError(oe("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(oe("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}return c(se,"name","Slice"),u(se.prototype,"start",(function(){return this._start})),u(se.prototype,"stop",(function(){return this._stop})),u(se.prototype,"step",(function(){return this._step})),c(se.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),c(se.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}})),function(e,r,t){var n,i,a;if(n=e.start,i=e.stop,null===(a=e.step)&&(a=1),null===n)n=a>0?0:r-1;else if(n<0){if((n=r+n)<0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=0}}else if(n>=r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=a<0?r-1:r}if(null===i)i=a>0?r:null;else if(i<0){if((i=r+i)<0)if(a>0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=0}else{if(t&&i<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=null}}else if(i>r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=r}return new se(n,i,a)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).normalizeSlice=r();
//# sourceMappingURL=index.js.map
