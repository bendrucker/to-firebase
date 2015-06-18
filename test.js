'use strict'

var test = require('tape')
var toFirebase = require('./')

test(function (t) {
  t.equal(toFirebase(1), 1, 'value')
  t.equal(toFirebase(null), null, 'null')
  t.deepEqual(toFirebase({
    foo: 'bar'
  }), {
    foo: 'bar'
  }, 'object')
  t.end()
})
