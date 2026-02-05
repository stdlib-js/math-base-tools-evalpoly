<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# evalpoly

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate a [polynomial][polynomial] using double-precision floating-point arithmetic.

<section class="intro">

A [polynomial][polynomial] in a variable `x` can be expressed as

<!-- <equation class="equation" label="eq:polynomial" align="center" raw="c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i" alt="Polynomial expression."> -->

```math
c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i
```

<!-- <div class="equation" align="center" data-raw-text="c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i" data-equation="eq:polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/evalpoly/docs/img/equation_polynomial.svg" alt="Polynomial expression.">
    <br>
</div> -->

<!-- </equation> -->

where `c_n, c_{n-1}, ..., c_0` are constants.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
evalpoly = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalpoly@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-tools-evalpoly/tags). For example,

```javascript
evalpoly = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalpoly@v0.2.3-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var evalpoly = require( 'path/to/vendor/umd/math-base-tools-evalpoly/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalpoly@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.evalpoly;
})();
</script>
```

#### evalpoly( c, x )

Evaluates a [polynomial][polynomial] having coefficients `c` and degree `n` at a value `x`, where `n = c.length-1`.

```javascript
var v = evalpoly( [ 3.0, 2.0, 1.0 ], 10 ); // => 3*10^0 + 2*10^1 + 1*10^2
// returns 123.0
```

The coefficients should be ordered in **ascending** degree, thus matching summation notation.

#### evalpoly.factory( c )

Uses code generation to in-line coefficients and return a function for evaluating a [polynomial][polynomial] using double-precision floating-point arithmetic.

```javascript
var polyval = evalpoly.factory( [ 3.0, 2.0, 1.0 ] );

var v = polyval( 10.0 ); // => 3*10^0 + 2*10^1 + 1*10^2
// returns 123.0

v = polyval( 5.0 ); // => 3*5^0 + 2*5^1 + 1*5^2
// returns 38.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For hot code paths in which coefficients are invariant, a compiled function will be more performant than `evalpoly()`.
-   While code generation can boost performance, its use may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalpoly@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create an array of random coefficients:
var coef = discreteUniform( 10, -100, 100 );

// Evaluate the polynomial at random values:
var v;
var i;
for ( i = 0; i < 100; i++ ) {
    v = uniform( 0.0, 100.0 );
    console.log( 'f(%d) = %d', v, evalpoly( coef, v ) );
}

// Generate an `evalpoly` function:
var polyval = evalpoly.factory( coef );
for ( i = 0; i < 100; i++ ) {
    v = uniform( -50.0, 50.0 );
    console.log( 'f(%d) = %d', v, polyval( v ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/tools/evalrational`][@stdlib/math/base/tools/evalrational]</span><span class="delimiter">: </span><span class="description">evaluate a rational function using double-precision floating-point arithmetic.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-evalpoly.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-evalpoly

[test-image]: https://github.com/stdlib-js/math-base-tools-evalpoly/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/math-base-tools-evalpoly/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-evalpoly/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-evalpoly?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-evalpoly.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-evalpoly/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools-evalpoly/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-tools-evalpoly/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-tools-evalpoly/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-tools-evalpoly/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-tools-evalpoly/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-tools-evalpoly/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-tools-evalpoly/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools-evalpoly/main/LICENSE

[polynomial]: https://en.wikipedia.org/wiki/Polynomial

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

<!-- <related-links> -->

[@stdlib/math/base/tools/evalrational]: https://github.com/stdlib-js/math-base-tools-evalrational/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
