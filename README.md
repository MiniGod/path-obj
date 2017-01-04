# `path-obj`

> Parses a path to an object. Each section of the pathname is indexed and merged with the querystring.

## Example

```js
const pathObj = require('path-obj')

pathObj('/a/b/c/?d=e&f=g')

// result:
// {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   d: 'e',
//   f: 'g'
// }

```
