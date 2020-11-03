# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dlinardi/lotide`

**Require it:**

`const _ = require('@dlinardi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: 
  * *returns **the first element** of the `array`.*

* `tail(array)`: 
  * *returns **everything but the first element** of `array`.*

* `middle(array)`: 
  * *returns **the middle most element(s)** of the given `array`.*

* `flatten(array)`:  
  * *returns a single level **array** from the `array` passed through containing nested arrays.*

* `findKey(object, callback)`: 
  * *returns **the first key** for which the `callback` returns a truthy value or if no key is found returns **undefined**.*

* `findKeyByValue(object, value)`: 
  * *returns **the first key** which contains the given `value`, if no key is found, returns **undefined**.*

* `letterPositions(string)`: 
  * *returns **all the indices** (zero-based positions) in the string where each character is found.*

* `map(array, callback)`: 
  * *returns a new **array** based on the results of the callback function.*

* `takeUntil(array, callback)`: 
  * *returns **a piece of the array** with elements taken from the beginning, keeps going until the callback returns a truthy value.*

* `without(sourceArray, itemsToRemoveArray)`: 
  * *returns a **subset of a given array** (sourceArray), removes unwanted elements (itemsToRemoveArray).*

* `countLetters(string)`: 
  * *returns **an object** with each key representing each character from the string, and the value being the amount of times that character exists in the string.*

* `countOnly(array, object)`: 
  * *returns **an object** that represents how many times each string is found in the input array.*

* `eqArrays(array1, array2)`: 
  * *returns **true** or **false**, based on a perfect match.*

* `eqObjects(object1, object2)`: 
  * *returns **true** or **false**, based on a perfect match.*

* `assertObjectsEqual(actual, expected)`: 
  * *compares two objects it takes in and prints out a message if they match or not.*

* `assertArraysEqual(actual, expected)`: 
  * *compares two arrays it takes in and prints out a message if they match or not.*

* `assertEqual(actual, expected)`: 
  * *compares two values it takes in and prints out a message if they match or not.*
