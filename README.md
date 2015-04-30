# to-firebase [![Build Status](https://travis-ci.org/bendrucker/to-firebase.svg?branch=master)](https://travis-ci.org/bendrucker/to-firebase)
Transform data into its Firebase representation, including nested objects. Uses [object-to-firebase](https://github.com/bendrucker/object-to-firebase) to converted nested objects and [value-to-firebase](https://github.com/bendrucker/value-to-firebase) to convert plain values.

## Installing

```sh
$ npm install to-firebase
```

## API

##### `toFirebase(data)` -> `Any`

`toFirebase` receives a `data` argument (any common JavaScript value) and return the value that would appear in Firebase if you called `ref.set(data)`.
