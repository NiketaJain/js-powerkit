/**
 * Object Utility Functions
 * @module object
 */


/**
 * Deep clones an object.
 * @param {Object} obj - The object to clone.
 * @returns {Object} The cloned object.
 * @example
 * deepClone({a: 1, b: {c: 2}}); // {a: 1, b: {c: 2}}
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  if (typeof obj === 'object') {
    const cloned = {};
    Object.keys(obj).forEach(key => {
      cloned[key] = deepClone(obj[key]);
    });
    return cloned;
  }
}

/**
 * Deep merges two or more objects
 * @param {...Object} objects - The objects to merge.
 * @returns {Object} The merged object.
 * @example
 * deepMerge({a: 1}, {b: 2}); // {a: 1, b: 2}
 */
export const deepMerge = (...objects) => {
  return objects.reduce((merged, obj) => {
    if (obj && typeof obj === 'object') {
      Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          merged[key] = deepMerge(merged[key] || {}, obj[key]);
        } else {
          merged[key] = obj[key];
        }
      });
    }
    return merged;
  }, {});
}

/**
 * Picks specified properties from an object.
 * @param {Object} obj - The source object.
 * @param {Array} keys - The keys to pick.
 * @returns {Object} The object with picked properties.
 * @example
 * pick({a: 1, b: 2, c: 3}, ['a', 'c']); // {a: 1, c: 3}
 */
export const pick = (obj, keys) => {
  if (!obj || typeof obj !== 'object') throw new TypeError('First argument must be an object');
  if (!Array.isArray(keys)) throw new TypeError('Second argument must be an array');
  const result = {};
  keys.forEach(key => {
    if (key in obj) result[key] = obj[key];
  });
  return result;
}

/**
 * Omits specified properties from an object.
 * @param {Object} obj - The source object.
 * @param {Array} keys - The keys to omit.
 * @returns {Object} The object without omitted properties.
 * @example
 * omit({a: 1, b: 2, c: 3}, ['b']); // {a: 1, c: 3}
 */
export const omit = (obj, keys) => {
  if (!obj || typeof obj !== 'object') throw new TypeError('First argument must be an object');
  if (!Array.isArray(keys)) throw new TypeError('Second argument must be an array');
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
}

/**
 * Checks if an object is empty.
 * @param {Object} obj - The object to check.
 * @returns {boolean} True if the object is empty.
 * @example
 * isEmpty({}); // true
 * isEmpty({a: 1}); // false
 */
export const isEmpty = (obj) => {
  return obj != null && typeof obj === 'object' && Object.keys(obj).length === 0;
}

/**
 * Inverts the keys and values of an object.
 * @param {Object} obj - The object to invert.
 * @returns {Object} The inverted object.
 * @example
 * invert({a: 1, b: 2}); // {1: 'a', 2: 'b'}
 */
export const invert = (obj) => {
  if (!obj || typeof obj !== 'object') throw new TypeError('Input must be an object');
  const result = {};
  Object.keys(obj).forEach(key => {
    result[obj[key]] = key;
  });
  return result;
}

/**
 * Maps the keys of an object using a function.
 * @param {Object} obj - The source object.
 * @param {Function} fn - The mapping function.
 * @returns {Object} The object with mapped keys.
 * @example
 * mapKeys({a: 1, b: 2}, key => key.toUpperCase()); // {A: 1, B: 2}
 */
export const mapKeys = (obj, fn) => {
  if (!obj || typeof obj !== 'object') throw new TypeError('First argument must be an object');
  if (typeof fn !== 'function') throw new TypeError('Second argument must be a function');
  const result = {};
  Object.keys(obj).forEach(key => {
    result[fn(key)] = obj[key];
  });
  return result;
}

/**
 * Maps the values of an object using a function.
 * @param {Object} obj - The source object.
 * @param {Function} fn - The mapping function.
 * @returns {Object} The object with mapped values.
 * @example
 * mapValues({a: 1, b: 2}, val => val * 2); // {a: 2, b: 4}
 */
export const mapValues = (obj, fn) => {
  if (!obj || typeof obj !== 'object') throw new TypeError('First argument must be an object');
  if (typeof fn !== 'function') throw new TypeError('Second argument must be a function');
  const result = {};
  Object.keys(obj).forEach(key => {
    result[key] = fn(obj[key]);
  });
  return result;
}

/**
 * Sets default values for an object.
 * @param {Object} obj - The target object.
 * @param {Object} defaults - The default values.
 * @returns {Object} The object with defaults applied.
 * @example
 * defaults({a: 1}, {a: 2, b: 3}); // {a: 1, b: 3}
 */
export const defaults = (obj, defaults) => {
  if (!obj || typeof obj !== 'object') throw new TypeError('First argument must be an object');
  if (!defaults || typeof defaults !== 'object') throw new TypeError('Second argument must be an object');
  const result = { ...defaults };
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined) result[key] = obj[key];
  });
  return result;
}

/**
 * Gets a nested property value using dot notation
 * @param {Object} obj - The object
 * @param {string} path - Path to property (e.g., 'user.address.city')
 * @param {*} defaultValue - Default value if not found
 * @returns {*} Property value
 * @example
 * getNestedValue({ a: { b: { c: 42 } } }, 'a.b.c'); // 42
 * getNestedValue({ a: { b: { c: 42 } } }, 'a.c', 'default'); // 'default'
 */
export const getNestedValue = (obj, path, defaultValue = undefined) => {
  if (!obj || typeof path !== 'string') return defaultValue;

  const keys = path.split('.');
  let result = obj;

  for (const key of keys) {
    result = (result && result[key]) ? result[key] : defaultValue;
    if (result === undefined) return defaultValue;
  }

  return result;
}

/**
 * Sets a nested property value using dot notation
 * @param {Object} obj - The object
 * @param {string} path - Path to property
 * @param {*} value - Value to set
 * @returns {Object} Modified object
 * @example
 * let obj = { a: { b: 1 } };
 * setNestedValue(obj, 'a.c.d', 42);
 * console.log(obj.a.c.d); // 42
 */
export const setNestedValue = (obj, path, value) => {
  if (!obj || typeof path !== 'string') return obj;

  const keys = path.split('.');
  const lastKey = keys.pop();
  let current = obj;

  for (const key of keys) {
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }

  current[lastKey] = value;
  return obj;
}

/**
 * Gets all keys from nested object (flattened)
 * @param {Object} obj - The object
 * @param {string} prefix - Prefix for keys
 * @returns {Array<string>} Array of all keys
 * @example
 * getAllKeys({ a: 1, b: { c: 2, d: { e: 3 } } }); // ['a', 'b.c', 'b.d.e']
 */
export const getAllKeys = (obj, prefix = '') => {
  if (!obj || typeof obj !== 'object') return [];

  return Object.keys(obj).reduce((keys, key) => {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      return keys.concat(getAllKeys(obj[key], newKey));
    }

    return keys.concat(newKey);
  }, []);
}

/**
 * Flattens a nested object
 * @param {Object} obj - The object to flatten
 * @param {string} prefix - Prefix for keys
 * @returns {Object} Flattened object
 * @example
 * flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } }); // {'a': 1, 'b.c': 2, 'b.d.e': 3 }
 */
export const flattenObject = (obj, prefix = '') => {
  if (!obj || typeof obj !== 'object') return {};

  return Object.keys(obj).reduce((acc, key) => {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(acc, flattenObject(obj[key], newKey));
    } else {
      acc[newKey] = obj[key];
    }

    return acc;
  }, {});
}

/**
 * Unflattens a flattened object
 * @param {Object} obj - The flattened object
 * @returns {Object} Nested object
 * @example
 * unflattenObject({ 'a': 1, 'b.c': 2, 'b.d.e': 3 }); // { a: 1, b: { c: 2, d: { e: 3 } } }
 */
export const unflattenObject = (obj) => {
  if (!obj || typeof obj !== 'object') return {};

  const result = {};

  for (const key in obj) {
    setNestedValue(result, key, obj[key]);
  }

  return result;
}

/**
 * Removes null and undefined values from object
 * @param {Object} obj - The object
 * @returns {Object} Object without null/undefined values
 * @example
 * removeNullish({ a: 1, b: null, c: undefined, d: 0, e: '' }); // { a: 1, d: 0, e: '' }
 */
export const removeNullish = (obj) => {
  if (!obj || typeof obj !== 'object') return obj;

  return Object.keys(obj).reduce((result, key) => {
    if (obj[key] != null) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}

/**
 * Checks if two objects are deeply equal
 * @param {Object} obj1 - First object
 * @param {Object} obj2 - Second object
 * @returns {boolean} True if equal
 * @example
 * isEqual({ a: 1 }, { a: 1 }); // true
 */
export const isEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  if (obj1 == null || obj2 == null) return false;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!isEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

/**
 * Filters object by predicate function
 * @param {Object} obj - The object
 * @param {Function} fn - Predicate function
 * @returns {Object} Filtered object
 * @example
 * filterObject({ a: 1, b: 2, c: 3, d: 4 }, val => val % 2 === 0); // { b: 2, d: 4 }
 */
export const filterObject = (obj, fn) => {
  if (!obj || typeof obj !== 'object' || typeof fn !== 'function') return {};

  return Object.keys(obj).reduce((result, key) => {
    if (fn(obj[key], key, obj)) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}

/**
 * Converts object to query string
 * @param {Object} obj - The object
 * @returns {string} Query string
 * @example
 * toQueryString({ name: 'John', age: 30 }); // 'name=John&age=30'
 */
export const toQueryString = (obj) => {
  if (!obj || typeof obj !== 'object') return '';

  return Object.keys(obj)
    .filter(key => obj[key] != null)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
}

/**
 * Converts query string to object
 * @param {string} queryString - The query string
 * @returns {Object} Parsed object
 * @example
 * fromQueryString('name=John&age=30'); // { name: 'John', age: 30 }
 */
export const fromQueryString = (queryString) => {
  if (!queryString || typeof queryString !== 'string') return {};

  const params = new URLSearchParams(queryString);
  const result = {};

  for (const [key, value] of params) {
    result[key] = value;
  }

  return result;
}

/**
 * Gets object size (number of properties)
 * @param {Object} obj - The object
 * @returns {number} Number of properties
 * @example
 * size({ a: 1, b: 2, c: 3 }); // 3
 * size({}); // 0
 */
export const size = (obj) => {
  if (!obj || typeof obj !== 'object') return 0;
  return Object.keys(obj).length;
}

/**
 * Checks if an object has a property.
 * @param {Object} obj - The object to check.
 * @param {string} prop - The property to check.
 * @returns {boolean} True if the property exists.
 * @example
 * has({a: 1}, 'a'); // true
 * has({ a: 1 }, 'b') // false
 */
export const has = (obj, prop) => {
  if (!obj || typeof obj !== 'object') throw new TypeError('First argument must be an object');
  return prop in obj;
}

/**
 * Checks if object has a nested property
 * @param {Object} obj - The object
 * @param {string} path - Path to check
 * @returns {boolean} True if property exists
 * @example
 * hasPath({ a: { b: { c: 1 } } }, 'a.b.c'); // true
 * hasPath({ a: { b: { c: 1 } } }, 'a.b.d'); // false
 */
export const hasPath = (obj, path) => {
  if (!obj || typeof path !== 'string') return false;
  const notFound = Symbol('not-found');
  return getNestedValue(obj, path, notFound) !== notFound;
};