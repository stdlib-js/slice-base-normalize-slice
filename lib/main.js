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

// MODULES //

var Slice = require( '@stdlib/slice-ctor' );
var eOutOfBounds = require( './error_out_of_bounds.js' );


// MAIN //

/**
* Returns a normalized Slice object.
*
* @param {Slice} slice - input slice
* @param {NonNegativeInteger} len - maximum number of elements allowed in a slice
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @returns {(Slice|ErrorObject)} slice object or an error object
*
* @example
* var Slice = require( '@stdlib/slice-ctor' );
*
* var s = normalizeSlice( new Slice(), 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 10
*
* v = s.step;
* // returns 1
*
* @example
* var Slice = require( '@stdlib/slice-ctor' );
*
* var s = normalizeSlice( new Slice( null, 20, 2 ), 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 10
*
* v = s.step;
* // returns 2
*
* @example
* var Slice = require( '@stdlib/slice-ctor' );
*
* var s = normalizeSlice( new Slice( -5, -1, 1 ), 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 5
*
* v = s.stop;
* // returns 9
*
* v = s.step;
* // returns 1
*
* @example
* var Slice = require( '@stdlib/slice-ctor' );
*
* var s = normalizeSlice( new Slice( -5, null, -1 ), 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 5
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns -1
*/
function normalizeSlice( slice, len, strict ) {
	var start;
	var stop;
	var step;

	start = slice.start;
	stop = slice.stop;
	step = slice.step;

	// If necessary, set the default increment...
	if ( step === null ) {
		step = 1;
	}

	// Case: start is not specified
	if ( start === null ) {
		// If the step is positive, we default to the first index...
		if ( step > 0 ) {
			start = 0;
		}
		// If the step is negative, we default to the last index (inclusive)...
		else {
			start = len - 1;
		}
	}
	// Case: start is negative and should be resolved relative to the last index
	else if ( start < 0 ) {
		start = len + start;

		// Check whether start still exceeds the index bounds...
		if ( start < 0 ) {
			if ( strict ) {
				return eOutOfBounds();
			}
			// Clamp to the first index (inclusive):
			start = 0;
		}
	}
	// Case: start exceeds index bounds
	else if ( start >= len ) {
		if ( strict ) {
			return eOutOfBounds();
		}
		// If the increment is negative, clamp to the last index (inclusive)...
		if ( step < 0 ) {
			start = len - 1;
		}
		// If the increment is positive, clamp to the "index" following the last index...
		else {
			start = len;
		}
	}

	// Case: stop is not specified
	if ( stop === null ) {
		// If the step is positive, we default to just beyond the last index, as the stopping index is exclusive...
		if ( step > 0 ) {
			stop = len;
		}
		// If the step is negative, we default to a sentinel value indicating that one should iterate through the first index when decrementing...
		else {
			stop = null;
		}
	}
	// Case: stop is negative and should be resolved relative to the last index
	else if ( stop < 0 ) {
		stop = len + stop;

		// Check whether stop still exceeds the index bounds...
		if ( stop < 0 ) {
			// If the step is positive, we should clamp to the first index, as Slice(x,0,step) is an empty slice regardless of `x`...
			if ( step > 0 ) {
				if ( strict ) {
					return eOutOfBounds();
				}
				stop = 0;
			}
			// If the step is negative, we default to just beyond the first index (using a sentinel value), as the stopping index is exclusive, thus indicating to iterate through the first index when decrementing...
			else {
				if ( strict && stop < -1 ) {
					return eOutOfBounds();
				}
				stop = null;
			}
		}
	}
	// Case: stop exceeds index bounds
	else if ( stop > len ) {
		if ( strict ) {
			return eOutOfBounds();
		}
		// Clamp to just beyond the last index, as the stopping index is exclusive:
		stop = len;
	}

	// Return a normalized slice:
	return new Slice( start, stop, step );
}


// EXPORTS //

module.exports = normalizeSlice;
