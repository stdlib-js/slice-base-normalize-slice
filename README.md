<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# normalizeSlice

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Normalize a [`Slice`][@stdlib/slice/ctor] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import normalizeSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-normalize-slice@v0.2.3-deno/mod.js';
```

<a name="main"></a>

#### normalizeSlice( slice, len, strict )

Normalizes a [`Slice`][@stdlib/slice/ctor] object, where `len` specifies the maximum number of elements allowed in the slice.

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';

var s = normalizeSlice( new Slice( -1, null, -1 ), 10, false );
// returns <Slice>

var v = s.start;
// returns 9

v = s.stop;
// returns null

v = s.step;
// returns -1
```

When `strict` is `true`, the function returns an error object if an input slice exceeds index bounds.

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';

var s = normalizeSlice( new Slice( -20, 20, 1 ), 10, true );
// returns { 'code': 'ERR_SLICE_OUT_OF_BOUNDS' }
```

A returned error object may have one of the following error codes:

-   **ERR_SLICE_OUT_OF_BOUNDS**: a slice exceeds index bounds.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';
import normalizeSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-normalize-slice@v0.2.3-deno/mod.js';

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
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/slice-base/normalize-multi-slice`][@stdlib/slice/base/normalize-multi-slice]</span><span class="delimiter">: </span><span class="description">normalize a MultiSlice object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/slice-base-normalize-slice.svg
[npm-url]: https://npmjs.org/package/@stdlib/slice-base-normalize-slice

[test-image]: https://github.com/stdlib-js/slice-base-normalize-slice/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/slice-base-normalize-slice/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/slice-base-normalize-slice/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/slice-base-normalize-slice?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/slice-base-normalize-slice.svg
[dependencies-url]: https://david-dm.org/stdlib-js/slice-base-normalize-slice/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/slice-base-normalize-slice/tree/deno
[deno-readme]: https://github.com/stdlib-js/slice-base-normalize-slice/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/slice-base-normalize-slice/tree/umd
[umd-readme]: https://github.com/stdlib-js/slice-base-normalize-slice/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/slice-base-normalize-slice/tree/esm
[esm-readme]: https://github.com/stdlib-js/slice-base-normalize-slice/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/slice-base-normalize-slice/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/slice-base-normalize-slice/main/LICENSE

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor/tree/deno

<!-- <related-links> -->

[@stdlib/slice/base/normalize-multi-slice]: https://github.com/stdlib-js/slice-base-normalize-multi-slice/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
