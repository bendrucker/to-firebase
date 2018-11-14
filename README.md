# to-firebase [![Build Status](https://travis-ci.org/bendrucker/to-firebase.svg?branch=master)](https://travis-ci.org/bendrucker/to-firebase) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/to-firebase.svg)](https://greenkeeper.io/)

> Transform data into its Firebase representation, including nested objects

Uses [object-to-firebase](https://github.com/bendrucker/object-to-firebase) to converted nested objects and [value-to-firebase](https://github.com/bendrucker/value-to-firebase) to convert plain values.

## Installing

```sh
$ npm install --save to-firebase
```

## Usage

```js
var toFirebase = require('to-firebase')
toFirebase({foo: null, bar: 'baz'})
// => {bar: 'baz'}
```

## API

##### `toFirebase(data)` -> `any`

Returns the value that would appear in Firebase if you called `ref.set(data)`

##### data

*Required*  
Type: `any`

The data to transform.
