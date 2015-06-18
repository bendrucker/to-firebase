'use strict'

var toValue = require('value-to-firebase')
var toObject = require('object-to-firebase')
var isObject = require('is-object')

module.exports = function toFirebase (data) {
  data = toValue(data)
  return isObject(data) ? toObject(data) : data
}
