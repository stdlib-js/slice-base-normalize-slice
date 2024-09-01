/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var Slice = require( '@stdlib/slice-ctor' );
var normalizeSlice = require( './../lib' );

var s = normalizeSlice( new Slice(), 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 5. step: 1.'

s = normalizeSlice( new Slice( 1, 4, 2 ), 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 1. stop: 4. step: 2.'

s = normalizeSlice( new Slice( -1, null, -1 ), 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 4. stop: null. step: -1.'

s = normalizeSlice( new Slice( -10, -2, 2 ), 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 3. step: 2.'

s = normalizeSlice( new Slice( 1, 20, 2 ), 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 1. stop: 5. step: 2.'
