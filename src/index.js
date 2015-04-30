'use strict'

import toValue from 'value-to-firebase'
import toObject from 'object-to-firebase'
import isObject from 'is-object'

export default function toFirebase (data) {
  data = toValue(data)
  return isObject(data) ? toObject(data) : data
}
