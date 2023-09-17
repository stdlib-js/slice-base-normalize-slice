"use strict";var n=function(f,e){return function(){return e||f((e={exports:{}}).exports,e),e.exports}};var o=n(function(_,l){
function v(){return{code:"ERR_OUT_OF_BOUNDS"}}l.exports=v
});var p=n(function(c,a){
var O=require('@stdlib/slice-ctor/dist'),s=o();function q(f,e,t){var i,r,u;if(i=f.start,r=f.stop,u=f.step,u===null&&(u=1),i===null)u>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return s();i=0}}else if(i>=e){if(t)return s();u<0?i=e-1:i=e}if(r===null)u>0?r=e:r=null;else if(r<0){if(r=e+r,r<0)if(u>0){if(t)return s();r=0}else{if(t&&r<-1)return s();r=null}}else if(r>e){if(t)return s();r=e}return new O(i,r,u)}a.exports=q
});var x=p();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
