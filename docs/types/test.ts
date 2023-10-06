/*
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

import Slice = require( '@stdlib/slice-ctor' );
import normalizeSlice = require( './index' );


// TESTS //

// The function returns a Slice object or an error object...
{
	normalizeSlice( new Slice( 0, 10, 2 ), 10, false ); // $ExpectType SliceResult
	normalizeSlice( new Slice( null, null, -2 ), 10, false ); // $ExpectType SliceResult

	normalizeSlice( new Slice( 0, 10, 2 ), 10, true ); // $ExpectType SliceResult
	normalizeSlice( new Slice( null, null, -2 ), 10, true ); // $ExpectType SliceResult
}

// The compiler throws an error if the function is provided a first argument which is not a slice object...
{
	normalizeSlice( '1', 10, false ); // $ExpectError
	normalizeSlice( 1, 10, false ); // $ExpectError
	normalizeSlice( true, 10, false ); // $ExpectError
	normalizeSlice( false, 10, false ); // $ExpectError
	normalizeSlice( null, 10, false ); // $ExpectError
	normalizeSlice( undefined, 10, false ); // $ExpectError
	normalizeSlice( [], 10, false ); // $ExpectError
	normalizeSlice( {}, 10, false ); // $ExpectError
	normalizeSlice( ( x: number ): number => x, 10, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	normalizeSlice( new Slice( 0, 10, 2 ), '1', false ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), true, false ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), false, false ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), null, false ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), undefined, false ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), [], false ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), {}, false ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	normalizeSlice( new Slice( 0, 10, 2 ), 10, '1' ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), 10, 1 ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), 10, null ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), 10, undefined ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), 10, [] ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), 10, {} ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	normalizeSlice(); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ) ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), 10 ); // $ExpectError
	normalizeSlice( new Slice( 0, 10, 2 ), 10, false, {} ); // $ExpectError
}
