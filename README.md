# JS PowerKit

[![npm version](https://badge.fury.io/js/js-powerkit.svg)](https://badge.fury.io/js/js-powerkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/yourusername/js-powerkit.svg?branch=master)](https://travis-ci.org/yourusername/js-powerkit)

A comprehensive JavaScript utility library providing essential functions for strings, arrays, and objects. Built with modern ES6+ syntax and designed for performance and ease of use.

## Features

- **String Utilities**: Capitalization, case conversion, truncation, palindrome checking, and more
- **Array Utilities**: Chunking, flattening, unique filtering, sorting, grouping, and set operations
- **Object Utilities**: Deep cloning, merging, property picking/omitting, and transformation
- **TypeScript Support**: Full type definitions included
- **Zero Dependencies**: Lightweight and fast
- **ES6+ Modules**: Modern JavaScript with tree-shaking support

## Installation

```bash
npm install js-powerkit
```

## Quick Start

```javascript
import { capitalize, chunk, deepClone } from 'js-powerkit';

// String utilities
console.log(capitalize('hello world')); // 'Hello world'

// Array utilities
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]

// Object utilities
const obj = { a: 1, b: { c: 2 } };
const cloned = deepClone(obj);
console.log(cloned); // { a: 1, b: { c: 2 } }
```

## API Documentation

### String Utilities

#### `capitalize(str)`
Capitalizes the first letter of a string.
```javascript
capitalize('hello world'); // 'Hello world'
```

#### `toCamelCase(str)`
Converts a string to camelCase.
```javascript
toCamelCase('hello world'); // 'helloWorld'
```

#### `toKebabCase(str)`
Converts a string to kebab-case.
```javascript
toKebabCase('Hello World'); // 'hello-world'
```

#### `toSnakeCase(str)`
Converts a string to snake_case.
```javascript
toSnakeCase('Hello World'); // 'hello_world'
```

#### `toPascalCase(str)`
Converts a string to PascalCase.
```javascript
toPascalCase('hello world'); // 'HelloWorld'
```

#### `toTitleCase(str)`
Converts a string to TitleCase.
```javascript
toTitleCase('hello world'); // 'Hello World'
```

#### `reverse(str)`
Reverses a string.
```javascript
reverse('hello'); // 'olleh'
```

#### `truncate(str, length, suffix, addSuffix)`
Truncates a string to a specified length with an optional suffix.
```javascript
truncate('Hello World', 5); // 'He...'
truncate('Hello World', 5, '***'); // 'He***'
truncate('Hello World', 5, '***', false); // 'Hello'
```

#### `isPalindrome(str)`
Checks if a string is a palindrome (case-insensitive, ignores non-alphanumeric).
```javascript
isPalindrome('racecar'); // true
isPalindrome('A man a plan a canal Panama'); // true
```

#### `mask(str, visibleChars, maskChar)`
Masks a string (useful for sensitive data).
```javascript
mask('1234567890', 2); // '12******90'
mask('1234567890', 2, '.'); // '12......90'
```

#### `slugify(str)`
Converts a string to a URL-friendly slug.
```javascript
slugify('Hello World!'); // 'hello-world'
```

#### `countWords(str)`
Counts the number of words in a string.
```javascript
countWords('Hello world!'); // 2
```

#### `removeDuplicates(str)`
Removes duplicate characters from a string.
```javascript
removeDuplicates('hello'); // 'helo'
```

#### `removeWhitespace(str)`
Removes all whitespace from a string.
```javascript
removeWhitespace('  hello  world  '); // 'helloworld'
```

#### `extractEmails(str)`
Extracts all email addresses from a string.
```javascript
extractEmails('Contact us at test@example.com or support@test.org'); // ['test@example.com', 'support@test.org']
```

#### `extractUrls(str)`
Extracts all URLs addresses from a string.
```javascript
extractUrls('Visit https://example.com or http://test.org'); // ['https://example.com', 'http://test.org']
```

#### `stripHtml(str)`
Removes HTML tags from a string.
```javascript
stripHtml('<p>Hello <b>World</b></p>'); // 'Hello World'
```

#### `escapeHtml(str)`
Escapes HTML special characters.
```javascript
escapeHtml('<div>Test & "quotes"</div>'); // '&lt;div&gt;Test &amp; &quot;quotes&quot;&lt;/div&gt;'
```

#### `isNumeric(str)`
Checks if a string contains only numbers.
```javascript
isNumeric('12345'); // true
```

#### `isEmail(str)`
Checks if a string is a valid email.
```javascript
isEmail('test@example.com'); // true
```

#### `isUrl(str)`
Checks if a string is a valid URL.
```javascript
isUrl('https://example.com'); // true
```

#### `repeatString(str, times)`
Repeats a string n times
```javascript
repeatString('ab', 3); // 'ababab'
```

### Array Utilities

#### `chunk(arr, size)`
Splits an array into chunks of specified size.
```javascript
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

#### `flatten(arr, depth)`
Flattens a nested array to a specified depth.
```javascript
flatten([1, [2, [3, 4]], 5]); // [1, 2, [3, 4], 5]
flatten([1, [2, [3, 4]], 5], 2); // [1, 2, 3, 4, 5]
```

#### `unique(arr)`
Removes duplicate elements from an array.
```javascript
unique([1, 2, 2, 3, 4, 4]); // [1, 2, 3, 4]
```

#### `shuffle(arr)`
Shuffles the elements of an array randomly.
```javascript
shuffle([1, 2, 3, 4]); // [3, 1, 4, 2] (random order)
```

#### `randomElement(arr)`
Gets a random element from an array.
```javascript
randomElement([1, 2, 3, 4, 5]); // 5 (random element)
```

#### `compact(arr)`
Removes falsy values from an array.
```javascript
compact([0, 1, false, 2, '', 3, null, undefined, NaN]); // [1, 2, 3]
```

#### `sortBy(arr, prop, order)`
Sorts an array of objects by a property.
```javascript
sortBy([{a: 2}, {a: 1}], 'a'); // [{a: 1}, {a: 2}]
sortBy([{a: 2}, {a: 1}], 'a', 'desc'); // [{a: 2}, {a: 1}]
```

#### `groupBy(arr, prop)`
Groups an array of objects by a property.
```javascript
groupBy([{type: 'a', val: 1}, {type: 'b', val: 2}, {type: 'a', val: 3}], 'type');
// {a: [{type: 'a', val: 1}, {type: 'a', val: 3}], b: [{type: 'b', val: 2}]}
```

#### `intersection(arr1, arr2)`
Returns the intersection of two arrays.
```javascript
intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
```

#### `difference(arr1, arr2)`
Returns the difference of two arrays.
```javascript
difference([1, 2, 3], [2, 3, 4]); // [1]
```

#### `union(arr1, arr2)`
Returns the union of two arrays.
```javascript
union([1, 2, 3], [2, 3, 4]); // [1, 2, 3, 4]
```

#### `zip(...arrays)`
Zips multiple arrays together.
```javascript
zip([1, 2], ['a', 'b'], [true, false]); // [[1, 'a', true], [2, 'b', false]]
```

#### `range(start, end, step)`
Creates an array of numbers from start to end.
```javascript
range(1, 5); // [1, 2, 3, 4, 5]
range(0, 10, 2); // [0, 2, 4, 6, 8, 10]
```

#### `max(arr)`
Finds the maximum value in an array.
```javascript
max([1, 5, 3, 9, 2]); // 9
```

#### `min(arr)`
Finds the minimum value in an array.
```javascript
min([1, 5, 3, 9, 2]); // 1
```

#### `sum(arr)`
Calculates the sum of array elements.
```javascript
sum([1, 2, 3, 4, 5]); // 15
```

#### `average(arr)`
Calculates the average of array elements.
```javascript
average([1, 2, 3, 4, 5]); // 3
```

#### `countOccurrences(arr)`
Counts occurrences of each element.
```javascript
countOccurrences([1, 2, 2, 3, 3, 3]); // { '1': 1, '2': 2, '3': 3 }
```

#### `remove(arr, value)`
Removes elements from array by value.
```javascript
remove([1, 2, 3, 2, 4], 2); // [1, 3, 4]
```

#### `take(arr, n)`
Takes first n elements from array.
```javascript
take([10, 21, 31, 41, 51], 4); // [10, 21, 31, 41]
```

#### `drop(arr, n)`
Drops first n elements from array.
```javascript
drop([1, 2, 3, 4, 5], 2); // [3, 4, 5]
```

#### `includesAll(arr, values)`
Checks if array includes all values.
```javascript
includesAll([1, 2, 3, 4], [2, 3]); // true
includesAll([1, 2, 3], [2, 5]); // false
```

#### `includesAny(arr, values)`
Checks if array includes any of the values.
```javascript
includesAny([1, 2, 3], [3, 4, 5]); // true
includesAny([1, 2, 3], [4, 5, 6]); // false
```

#### `rotate(arr, positions)`
Rotates array elements.
```javascript
rotate([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
rotate([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]
```


### Object Utilities

#### `deepClone(obj)`
Creates a deep clone of an object.
```javascript
const obj = { a: 1, b: { c: 2 } };
const cloned = deepClone(obj);
// cloned is a deep copy of obj
```

#### `deepMerge(...objects)`
Merges multiple objects into one.
```javascript
deepMerge({a: 1}, {b: 2}); // {a: 1, b: 2}
deepMerge({a: {b: 1}}, {a: {c: 2}}); // {a: {b: 1, c: 2}}
```

#### `pick(obj, keys)`
Picks specified properties from an object.
```javascript
pick({a: 1, b: 2, c: 3}, ['a', 'c']); // {a: 1, c: 3}
```

#### `omit(obj, keys)`
Omits specified properties from an object.
```javascript
omit({a: 1, b: 2, c: 3}, ['b']); // {a: 1, c: 3}
```

#### `isEmpty(obj)`
Checks if an object is empty.
```javascript
isEmpty({}); // true
isEmpty({a: 1}); // false
```

#### `invert(obj)`
Inverts the keys and values of an object.
```javascript
invert({a: 1, b: 2}); // {1: 'a', 2: 'b'}
```

#### `mapKeys(obj, fn)`
Maps the keys of an object using a function.
```javascript
mapKeys({a: 1, b: 2}, key => key.toUpperCase()); // {A: 1, B: 2}
```

#### `mapValues(obj, fn)`
Maps the values of an object using a function.
```javascript
mapValues({a: 1, b: 2}, val => val * 2); // {a: 2, b: 4}
```

#### `defaults(obj, defaults)`
Sets default values for an object.
```javascript
defaults({a: 1}, {a: 2, b: 3}); // {a: 1, b: 3}
```

#### `getNestedValue(obj, path, defaultValue)`
Gets a nested property value using dot notation.
```javascript
getNestedValue({ a: { b: { c: 42 } } }, 'a.b.c'); // 42
getNestedValue({ a: { b: { c: 42 } } }, 'a.c', 'default'); // 'default'
```

#### `setNestedValue(obj, path, value)`
Sets a nested property value using dot notation.
```javascript
let obj = { a: { b: 1 } };
setNestedValue(obj, 'a.c.d', 42);
console.log(obj.a.c.d); // 42
```

#### `getAllKeys(obj, prefix)`
Gets all keys from nested object.
```javascript
getAllKeys({ a: 1, b: { c: 2, d: { e: 3 } } }); // ['a', 'b.c', 'b.d.e']
```

#### `flattenObject(obj, prefix)`
Flattens a nested object.
```javascript
flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } }); // {'a': 1, 'b.c': 2, 'b.d.e': 3 }
```

#### `unflattenObject(obj, prefix)`
Unflattens a flattened object.
```javascript
unflattenObject({ 'a': 1, 'b.c': 2, 'b.d.e': 3 }); // { a: 1, b: { c: 2, d: { e: 3 } } }
```

#### `removeNullish(obj)`
Removes null and undefined values from object.
```javascript
removeNullish({ a: 1, b: null, c: undefined, d: 0, e: '' }); // { a: 1, d: 0, e: '' }
```

#### `isEqual(obj1, obj2)`
Checks if two objects are deeply equal.
```javascript
isEqual({ a: 1 }, { a: 1 }); // true
```

#### `filterObject(obj, fn)`
Filters object by predicate function.
```javascript
filterObject({ a: 1, b: 2, c: 3, d: 4 }, val => val % 2 === 0); // { b: 2, d: 4 }
```

#### `toQueryString(obj)`
Converts object to query string.
```javascript
toQueryString({ name: 'John', age: 30 }); // 'name=John&age=30'
```

#### `fromQueryString(queryString)`
Converts query string to object.
```javascript
fromQueryString('name=John&age=30'); // { name: 'John', age: 30 }
```

#### `size(obj)`
Gets object size (number of properties).
```javascript
size({ a: 1, b: 2, c: 3 }); // 3
size({}); // 0
```

#### `has(obj, prop)`
Checks if an object has a property.
```javascript
has({a: 1}, 'a'); // true
has({a: 1}, 'b'); // false
```

#### `hasPath(obj, path)`
Checks if object has a nested property.
```javascript
hasPath({ a: { b: { c: 1 } } }, 'a.b.c'); // true
hasPath({ a: { b: { c: 1 } } }, 'a.b.d'); // false
```


## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

Run the test suite:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### [1.0.0] - 2025-01-22
- Initial release with comprehensive string, array, and object utilities
- Full test coverage
- ES6+ module support

## Support

If you find this library helpful, please give it a ⭐ on GitHub!

For issues or questions, please [open an issue](https://github.com/yourusername/js-powerkit/issues) on GitHub.