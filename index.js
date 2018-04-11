'use strict'

const copyOwn = require('copy-own')
const isClassOf = require('is-class-of')
const is = require('is-instance-of')

module.exports = function errate (e, Cls = Error) {
  if (arguments.length === 1 && isClassOf(e, 'Error')) {
    Cls = e
    e = null
  } else if (!isClassOf(Cls, 'Error')) {
    throw new TypeError('Invalid error class')
  }
  if (!e) return new Cls()
  if (is(e, Cls)) return e
  if (is(e, 'Error')) return copyOwn(e, new Cls())
  return new Cls(e)
}
