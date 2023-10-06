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

var tape = require( 'tape' );
var isSlice = require( '@stdlib/assert-is-slice' );
var Slice = require( '@stdlib/slice-ctor' );
var normalizeSlice = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof normalizeSlice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function normalizes a Slice object', function test( t ) {
	var expected;
	var actual;
	var values;
	var len;
	var s;
	var i;

	len = 10;

	values = [
		new Slice(),
		new Slice( 10 ),
		new Slice( 2, 10 ),
		new Slice( 2, null ),
		new Slice( null, 10 ),
		new Slice( -2 ),
		new Slice( -5, -2 ),
		new Slice( -5, null ),
		new Slice( null, null, null ),
		new Slice( 2, 10, 2 ),
		new Slice( -2, -10, -2 ),
		new Slice( -2, -11, -2 ),
		new Slice( null, 10, 2 ),
		new Slice( 2, null, 2 ),
		new Slice( 2, 10, null ),
		new Slice( null, null, 2 ),
		new Slice( 2, null, null ),
		new Slice( null, 10, null ),
		new Slice( -1, null, -2 )
	];
	expected = [
		new Slice( 0, 10, 1 ),
		new Slice( 0, 10, 1 ),
		new Slice( 2, 10, 1 ),
		new Slice( 2, 10, 1 ),
		new Slice( 0, 10, 1 ),
		new Slice( 0, 8, 1 ),
		new Slice( 5, 8, 1 ),
		new Slice( 5, 10, 1 ),
		new Slice( 0, 10, 1 ),
		new Slice( 2, 10, 2 ),
		new Slice( 8, 0, -2 ),
		new Slice( 8, null, -2 ),
		new Slice( 0, 10, 2 ),
		new Slice( 2, 10, 2 ),
		new Slice( 2, 10, 1 ),
		new Slice( 0, 10, 2 ),
		new Slice( 2, 10, 1 ),
		new Slice( 0, 10, 1 ),
		new Slice( 9, null, -2 )
	];

	for ( i = 0; i < values.length; i++ ) {
		s = expected[ i ];

		// Non-strict mode:
		actual = normalizeSlice( values[ i ], len, false );
		t.strictEqual( isSlice( actual ), true, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
		t.strictEqual( actual.start, s.start, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
		t.strictEqual( actual.stop, s.stop, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
		t.strictEqual( actual.step, s.step, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );

		// Strict mode:
		actual = normalizeSlice( values[ i ], len, true );
		t.strictEqual( isSlice( actual ), true, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
		t.strictEqual( actual.start, s.start, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
		t.strictEqual( actual.stop, s.stop, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
		t.strictEqual( actual.step, s.step, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
	}
	t.end();
});

tape( 'the function normalizes a Slice object (out-of-bounds, non-strict)', function test( t ) {
	var expected;
	var actual;
	var values;
	var len;
	var s;
	var i;

	len = 10;

	values = [
		new Slice( -20, null, 1 ),
		new Slice( null, -20, -1 ),
		new Slice( 20, 30, 1 ),
		new Slice( 2, 30, 1 ),
		new Slice( 20, -20, -1 ),
		new Slice( -20, 20, null ),
		new Slice( 20, null, -1 ),
		new Slice( null, -20, 1 )
	];
	expected = [
		new Slice( 0, 10, 1 ),
		new Slice( 9, null, -1 ),
		new Slice( 10, 10, 1 ),
		new Slice( 2, 10, 1 ),
		new Slice( 9, null, -1 ),
		new Slice( 0, 10, 1 ),
		new Slice( 9, null, -1 ),
		new Slice( 0, 0, 1 )
	];

	for ( i = 0; i < values.length; i++ ) {
		s = expected[ i ];
		actual = normalizeSlice( values[ i ], len, false );
		t.strictEqual( isSlice( actual ), true, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
		t.strictEqual( actual.start, s.start, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
		t.strictEqual( actual.stop, s.stop, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
		t.strictEqual( actual.step, s.step, 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
	}
	t.end();
});

tape( 'in strict mode, the function returns an error object when a slice exceeds index bounds', function test( t ) {
	var expected;
	var actual;
	var values;
	var len;
	var i;

	len = 10;

	values = [
		new Slice( -20, null, 1 ),
		new Slice( null, -20, -1 ),
		new Slice( 20, 30, 1 ),
		new Slice( 2, 30, 1 ),
		new Slice( 20, -20, -1 ),
		new Slice( -20, 20, null ),
		new Slice( 20, null, -1 ),
		new Slice( null, -20, 1 )
	];
	expected = {
		'code': 'ERR_SLICE_OUT_OF_BOUNDS'
	};

	for ( i = 0; i < values.length; i++ ) {
		actual = normalizeSlice( values[ i ], len, true );
		t.deepEqual( actual, expected, 'returns expected value for ' + values[ i ].toString() );
	}
	t.end();
});
