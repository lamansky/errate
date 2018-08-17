'use strict'

const assert = require('assert')
const errate = require('.')

describe('errate()', function () {
  it('should turn a string into an Error', function () {
    const errMsg = 'Test'
    const err = errate(errMsg)
    assert.strictEqual(err.constructor, Error)
    assert.strictEqual(err.message, errMsg)
  })

  it('should turn a string into an Error of the specified class', function () {
    const errMsg = 'Test'
    const err = errate(errMsg, TypeError)
    assert.strictEqual(err.constructor, TypeError)
    assert.strictEqual(err.message, errMsg)
  })

  it('should create an Error of the specified class', function () {
    assert.strictEqual(errate(TypeError).constructor, TypeError)
  })

  it('should create an empty Error if no arguments are provided', function () {
    const err = errate()
    assert.strictEqual(err.constructor, Error)
    assert(!err.message)
  })

  it('should throw an error if the specified class is a string', function () {
    assert.throws(() => { errate('Test', 'Error') }, TypeError)
  })

  it('should throw an error if the specified class is not an Error class', function () {
    assert.throws(() => { errate('Test', Date) }, TypeError)
  })

  it('should return an existing Error as-is', function () {
    const err = new Error()
    assert.strictEqual(errate(err), err)
  })

  it('should convert to the specified class, unless `forceClass` is `false`', function () {
    const errMsg = 'Test'
    const typeErr = errate(new Error(errMsg), TypeError)
    assert.strictEqual(typeErr.constructor, TypeError)
    assert.strictEqual(typeErr.message, errMsg)

    const err = errate(new Error(errMsg), TypeError, {forceClass: false})
    assert.strictEqual(err.constructor, Error)
    assert.notStrictEqual(err.constructor, TypeError)
    assert.strictEqual(err.message, errMsg)
  })
})
