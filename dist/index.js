"use strict";var n=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(f){throw (e=0, f)}};};var o=n(function(x,l){
function v(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}l.exports=v
});var p=n(function(c,a){
var O=require('@stdlib/slice-ctor/dist'),s=o();function S(t,e,f){var i,r,u;if(i=t.start,r=t.stop,u=t.step,u===null&&(u=1),i===null)u>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(f)return s();i=0}}else if(i>=e){if(f)return s();u<0?i=e-1:i=e}if(r===null)u>0?r=e:r=null;else if(r<0){if(r=e+r,r<0)if(u>0){if(f)return s();r=0}else{if(f&&r<-1)return s();r=null}}else if(r>e){if(f)return s();r=e}return new O(i,r,u)}a.exports=S
});var _=p();module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
