/**
 * Array Utility Functions
 * @module array
 */

/**
 * Splits an array into chunks of a specified size.
 * @param {Array} arr - The input array.
 * @param {number} size - The size of each chunk.
 * @returns {Array} An array of chunks.
 * @example
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 */
export const chunk = (arr, size) => {
  if (!Array.isArray(arr)) throw new TypeError('Input must be an array');
  if (typeof size !== 'number' || size <= 0) throw new TypeError('Size must be a positive number');
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Flattens a nested array to a specified depth.
 * @param {Array} arr - The input array.
 * @param {number} [depth=1] - The depth to flatten.
 * @returns {Array} The flattened array.
 * @example
 * flatten([1, [2, [3, 4]], 5]); // [1, 2, [3, 4], 5]
 */
export const flatten = (arr, depth = 1) => {
  if (!Array.isArray(arr)) throw new TypeError('Input must be an array');
  return arr.flat(depth);
}

/**
 * Removes duplicate elements from an array.
 * @param {Array} arr - The input array.
 * @returns {Array} The array with duplicates removed.
 * @example
 * unique([1, 2, 2, 3, 4, 4]); // [1, 2, 3, 4]
 */
export const unique = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError('Input must be an array');
  return [...new Set(arr)];
}

/**
 * Shuffles the elements of an array in place.
 * @param {Array} arr - The input array.
 * @returns {Array} The shuffled array.
 * @example
 * shuffle([1, 2, 3, 4]); // [3, 1, 4, 2] (random order)
 */
export const shuffle = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError('Input must be an array');
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Gets a random element from an array
 * @param {Array} arr - The array
 * @returns {*} Random element
 * @example
 * randomElement([1, 2, 3, 4, 5]); // 5
 */
export const randomElement = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Removes falsy values from an array
 * @param {Array} arr - The array to compact
 * @returns {Array} Array without falsy values
 * @example
 * compact([0, 1, false, 2, '', 3, null, undefined, NaN]); // [1, 2, 3]
 */
export const compact = (arr) => {
  if (!Array.isArray(arr)) return [];
  return arr.filter(Boolean);
};

/**
 * Sorts an array of objects by a property.
 * @param {Array} arr - The input array.
 * @param {string} prop - The property to sort by.
 * @param {string} [order='asc'] - The sort order ('asc' or 'desc').
 * @returns {Array} The sorted array.
 * @example
 * sortBy([{a: 2}, {a: 1}], 'a'); // [{a: 1}, {a: 2}]
 */
export const sortBy = (arr, prop, order = 'asc') => {
  if (!Array.isArray(arr)) throw new TypeError('Input must be an array');
  return [...arr].sort((a, b) => {
    if (a[prop] < b[prop]) return order === 'asc' ? -1 : 1;
    if (a[prop] > b[prop]) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * Groups an array of objects by a property.
 * @param {Array} arr - The input array.
 * @param {string} prop - The property to group by.
 * @returns {Object} An object with grouped arrays.
 * @example
 * groupBy([{type: 'a', val: 1}, {type: 'b', val: 2}, {type: 'a', val: 3}], 'type');
 * // {a: [{type: 'a', val: 1}, {type: 'a', val: 3}], b: [{type: 'b', val: 2}]}
 */
export const groupBy = (arr, prop) => {
  if (!Array.isArray(arr)) throw new TypeError('Input must be an array');
  return arr.reduce((groups, item) => {
    const key = item[prop];
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
    return groups;
  }, {});
}

/**
 * Finds the intersection of two arrays.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} The intersection array.
 * @example
 * intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
 */
export const intersection = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new TypeError('Inputs must be arrays');
  return arr1.filter(item => arr2.includes(item));
}

/**
 * Finds the difference of two arrays.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} The difference array.
 * @example
 * difference([1, 2, 3], [2, 3, 4]); // [1]
 */
export const difference = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new TypeError('Inputs must be arrays');
  return arr1.filter(item => !arr2.includes(item));
}

/**
 * Finds the union of two arrays.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} The union array.
 * @example
 * union([1, 2, 3], [2, 3, 4]); // [1, 2, 3, 4]
 */
export const union = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new TypeError('Inputs must be arrays');
  return [...new Set([...arr1, ...arr2])];
}

/**
 * Zips multiple arrays together.
 * @param {...Array} arrays - The arrays to zip.
 * @returns {Array} The zipped array.
 * @example
 * zip([1, 2], ['a', 'b'], [true, false]); // [[1, 'a', true], [2, 'b', false]]
 */
export const zip = (...arrays) => {
  arrays.forEach(arr => {
    if (!Array.isArray(arr)) throw new TypeError('All inputs must be arrays');
  });
  const minLength = Math.min(...arrays.map(arr => arr.length));
  const result = [];
  for (let i = 0; i < minLength; i++) {
    result.push(arrays.map(arr => arr[i]));
  }
  return result;
}

/**
 * Creates an array of numbers from start to end.
 * @param {number} start - The start number.
 * @param {number} end - The end number.
 * @param {number} [step=1] - The step size.
 * @returns {Array} The range array.
 * @example
 * range(1, 5); // [1, 2, 3, 4, 5]
 */
export const range = (start, end, step = 1) => {
  if (typeof start !== 'number' || typeof end !== 'number') throw new TypeError('Start and end must be numbers');
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

/**
 * Finds the maximum value in an array
 * @param {Array} arr - The array
 * @returns {*} Maximum value
 * @example
 * max([1, 5, 3, 9, 2]); // 9
 */
export const max = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return Math.max(...arr);
};

/**
 * Finds the minimum value in an array
 * @param {Array} arr - The array
 * @returns {*} Minimum value
 * @example
 * min([1, 5, 3, 9, 2]); // 1
 */
export const min = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return Math.min(...arr);
};

/**
 * Calculates the sum of array elements
 * @param {Array} arr - The array of numbers
 * @returns {number} Sum of elements
 * @example
 * sum([1, 2, 3, 4, 5]); // 15
 */
export const sum = (arr) => {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((total, num) => total + (Number(num) || 0), 0);
};

/**
 * Calculates the average of array elements
 * @param {Array} arr - The array of numbers
 * @returns {number} Average value
 * @example
 * average([1, 2, 3, 4, 5]); // 3
 */
export const average = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  return sum(arr) / arr.length;
};

/**
 * Counts occurrences of each element
 * @param {Array} arr - The array
 * @returns {Object} Object with counts
 * @example
 * countOccurrences([1, 2, 2, 3, 3, 3]); // { '1': 1, '2': 2, '3': 3 }
 */
export const countOccurrences = (arr) => {
  if (!Array.isArray(arr)) return {};
  return arr.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});
};

/**
 * Removes elements from array by value
 * @param {Array} arr - The array
 * @param {*} value - Value to remove
 * @returns {Array} Array without the value
 * @example
 * remove([1, 2, 3, 2, 4], 2); // [1, 3, 4]
 */
export const remove = (arr, value) => {
  if (!Array.isArray(arr)) return [];
  return arr.filter(item => item !== value);
};

/**
 * Takes first n elements from array
 * @param {Array} arr - The array
 * @param {number} n - Number of elements
 * @returns {Array} First n elements
 * @example
 * take([10, 21, 31, 41, 51], 4); // [10, 21, 31, 41]
 */
export const take = (arr, n = 1) => {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, n);
};

/**
 * Drops first n elements from array
 * @param {Array} arr - The array
 * @param {number} n - Number of elements to drop
 * @returns {Array} Array without first n elements
 * @example
 * drop([1, 2, 3, 4, 5], 2); // [3, 4, 5]
 */
export const drop = (arr, n = 1) => {
  if (!Array.isArray(arr)) return [];
  return arr.slice(n);
};

/**
 * Checks if array includes all values
 * @param {Array} arr - The array
 * @param {Array} values - Values to check
 * @returns {boolean} True if all values are included
 * @example
 * includesAll([1, 2, 3, 4], [2, 3]); // true
 * includesAll([1, 2, 3], [2, 5]); // false
 */
export const includesAll = (arr, values) => {
  if (!Array.isArray(arr) || !Array.isArray(values)) return false;
  return values.every(val => arr.includes(val));
};

/**
 * Checks if array includes any of the values
 * @param {Array} arr - The array
 * @param {Array} values - Values to check
 * @returns {boolean} True if any value is included
 * @example
 * includesAny([1, 2, 3], [3, 4, 5]); // true
 * includesAny([1, 2, 3], [4, 5, 6]); // false
 */
export const includesAny = (arr, values) => {
  if (!Array.isArray(arr) || !Array.isArray(values)) return false;
  return values.some(val => arr.includes(val));
};

/**
 * Rotates array elements
 * @param {Array} arr - The array
 * @param {number} positions - Number of positions to rotate
 * @returns {Array} Rotated array
 * @example
 * rotate([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
 * rotate([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]
 */
export const rotate = (arr, positions = 1) => {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const len = arr.length;
  const shift = ((positions % len) + len) % len;
  return [...arr.slice(shift), ...arr.slice(0, shift)];
};