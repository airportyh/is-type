is-type
=======

Simple type checks for Javascript as a component. Adapted from [is-type](https://github.com/juliangruber/is-type) and [core-util-is](https://github.com/isaacs/core-util-is).

## Usage

```js
var is = require('is-type');

is.array([1]); // => true
is.primitive(true); // => true
is.primitive({}); // => false
is.string('hello'); // => true
is.number(4); // => true
```