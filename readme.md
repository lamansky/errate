# errate

Converts a value into an Error of the specified type.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i errate
```

## API

The module exports a single function.

### Parameters

1. Optional: `e` (string or Error object): The error message, or an existing Error object.
2. Optional: `Cls` (Error class): The desired class of the returned Error (such as `TypeError` or `RangeError`). Defaults to `Error`.

### Return Value

An Error of the specified class.

## Examples

### Default Class With Message

```javascript
const errate = require('errate')

const err = errate('Message')
err instanceof Error // true
err.message // 'Message'
```

### Default Class Without Message

```javascript
const errate = require('errate')

const err = errate()
err instanceof Error // true
err.message // ''
```

### Error Subclass With Message

```javascript
const errate = require('errate')

const err = errate('Message', TypeError)
err instanceof TypeError // true
err.message // 'Message'
```

### Error Subclass Without Message

```javascript
const errate = require('errate')

const err = errate(TypeError)
err instanceof TypeError // true
err.message // ''
```

### Error Class Conversion

```javascript
const errate = require('errate')

const err = errate(new TypeError('Message'), RangeError)
err instanceof RangeError // true
err.message // 'Message'
```
