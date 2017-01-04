const test = require('ava')
const pathObj = require('./')

test('basic paths', t => {
  t.deepEqual(pathObj('/'), {})
  t.deepEqual(pathObj('/a'), {0: 'a'})
  t.deepEqual(pathObj('/a/b'), {0: 'a', 1: 'b'})
  t.deepEqual(pathObj('/a/b/c'), {0: 'a', 1: 'b', 2: 'c'})
})

test('paths with trailing slash', t => {
  t.deepEqual(pathObj('//'), {})
  t.deepEqual(pathObj('/a/'), {0: 'a'})
  t.deepEqual(pathObj('/a/b/'), {0: 'a', 1: 'b'})
  t.deepEqual(pathObj('/a/b/c/'), {0: 'a', 1: 'b', 2: 'c'})
})

test('query strings', t => {
  t.deepEqual(pathObj('/?'), {})
  t.deepEqual(pathObj('/?a=b'), {a: 'b'})
  t.deepEqual(pathObj('/?a=b&c=d'), {a: 'b', c: 'd'})
})

test('paths and query strings', t => {
  t.deepEqual(pathObj('/a/?'), {0: 'a'})
  t.deepEqual(pathObj('/a/b/?c=d'), {0: 'a', 1: 'b', c: 'd'})
  t.deepEqual(pathObj('/a/b/c/?d=e&f=g'), {0: 'a', 1: 'b', 2: 'c', d: 'e', f: 'g'})
})

test('double slashes', t => {
  t.deepEqual(pathObj('/a//b////c'), {0: 'a', 1: 'b', 2: 'c'})
})

test('query string do not override path', t => {
  t.deepEqual(pathObj('/a/b/?0=c'), {0: 'a', 1: 'b'})
})
