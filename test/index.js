'use strict'

import test from 'tape'
import toFirebase from '../'

test((t) => {
  t.equal(toFirebase(1), 1, 'value')
  t.equal(toFirebase(null), null, 'null')
  t.deepEqual(toFirebase({
    foo: 'bar'
  }), {
    foo: 'bar'
  }, 'object')
  t.end()
})
