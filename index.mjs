// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.1.0-esm/index.mjs";function i(i,_,l){var r,t,f;if(r=i.start,t=i.stop,null===(f=i.step)&&(f=1),null===r)r=f>0?0:_-1;else if(r<0){if((r=_+r)<0){if(l)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};r=0}}else if(r>=_){if(l)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};r=f<0?_-1:_}if(null===t)t=f>0?_:null;else if(t<0){if((t=_+t)<0)if(f>0){if(l)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};t=0}else{if(l&&t<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};t=null}}else if(t>_){if(l)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};t=_}return new e(r,t,f)}export{i as default};
//# sourceMappingURL=index.mjs.map
