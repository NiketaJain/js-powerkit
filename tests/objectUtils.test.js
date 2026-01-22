import {
  deepClone,
  deepMerge,
  pick,
  omit,
  isEmpty,
  invert,
  mapKeys,
  mapValues,
  defaults,
  getNestedValue,
  setNestedValue,
  getAllKeys,
  flattenObject,
  unflattenObject,
  removeNullish,
  isEqual,
  filterObject,
  toQueryString,
  fromQueryString,
  size,
  has,
  hasPath
} from '../src/objectUtils.js';

describe('Object Utilities', () => {
  describe('deepClone', () => {
    test('deep clones objects', () => {
      const obj = { a: 1, b: { c: 2 } };
      const cloned = deepClone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
      expect(cloned.b).not.toBe(obj.b);
    });

    test('handles primitives', () => {
      expect(deepClone(42)).toBe(42);
      expect(deepClone('hello')).toBe('hello');
    });
  });

  describe('deepMerge', () => {
    test('merges objects deeply', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { b: { d: 3 }, e: 4 };
      expect(deepMerge(obj1, obj2)).toEqual({
        a: 1,
        b: { c: 2, d: 3 },
        e: 4
      });
      expect(deepMerge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
      expect(deepMerge({ a: { b: 1 } }, { a: { c: 2 } })).toEqual({ a: { b: 1, c: 2 } });
    });
  });

  describe('pick', () => {
    test('picks properties', () => {
      expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    test('throws error for invalid inputs', () => {
      expect(() => pick(null, ['a'])).toThrow(TypeError);
      expect(() => pick({}, 'not array')).toThrow(TypeError);
    });
  });

  describe('omit', () => {
    test('omits properties', () => {
      expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 });
    });
  });

  describe('isEmpty', () => {
    test('checks if empty', () => {
      expect(isEmpty({})).toBe(true);
      expect(isEmpty({ a: 1 })).toBe(false);
      expect(isEmpty(null)).toBe(false);
    });
  });

  describe('invert', () => {
    test('inverts keys and values', () => {
      expect(invert({ a: 1, b: 2 })).toEqual({ 1: 'a', 2: 'b' });
    });
  });

  describe('mapKeys', () => {
    test('maps keys', () => {
      expect(mapKeys({ a: 1, b: 2 }, key => key.toUpperCase())).toEqual({ A: 1, B: 2 });
    });
  });

  describe('mapValues', () => {
    test('maps values', () => {
      expect(mapValues({ a: 1, b: 2 }, val => val * 2)).toEqual({ a: 2, b: 4 });
    });
  });

  describe('defaults', () => {
    test('sets defaults', () => {
      expect(defaults({ a: 1 }, { a: 2, b: 3 })).toEqual({ a: 1, b: 3 });
    });
  });

  describe('getNestedValue', () => {
    test('gets nested value', () => {
      const obj = { a: { b: { c: 42 } } };
      expect(getNestedValue(obj, 'a.b.c')).toBe(42);
    });

    test('returns default value when not found', () => {
      const obj = { a: { b: 1 } };
      expect(getNestedValue(obj, 'a.c', 'default')).toBe('default');
    });
  });

  describe('setNestedValue', () => {
    test('sets nested value', () => {
      const obj = { a: { b: 1 } };
      setNestedValue(obj, 'a.c.d', 42);
      expect(obj.a.c.d).toBe(42);
    });
  });

  describe('getAllKeys', () => {
    test('gets all nested keys', () => {
      const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
      expect(getAllKeys(obj)).toEqual(['a', 'b.c', 'b.d.e']);
    });
  });

  describe('flattenObject', () => {
    test('flattens nested object', () => {
      const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
      expect(flattenObject(obj)).toEqual({
        'a': 1,
        'b.c': 2,
        'b.d.e': 3
      });
    });
  });

  describe('unflattenObject', () => {
    test('unflattens object', () => {
      const obj = { 'a': 1, 'b.c': 2, 'b.d.e': 3 };
      expect(unflattenObject(obj)).toEqual({
        a: 1,
        b: { c: 2, d: { e: 3 } }
      });
    });
  });

  describe('removeNullish', () => {
    test('removes null and undefined values', () => {
      const obj = { a: 1, b: null, c: undefined, d: 0, e: '' };
      expect(removeNullish(obj)).toEqual({ a: 1, d: 0, e: '' });
    });
  });

  describe('isEqual', () => {
    test('checks deep equality', () => {
      expect(isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })).toBe(true);
      expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
    });
  });

  describe('filterObject', () => {
    test('filters object by predicate', () => {
      const obj = { a: 1, b: 2, c: 3, d: 4 };
      expect(filterObject(obj, val => val % 2 === 0)).toEqual({ b: 2, d: 4 });
    });
  });

  describe('toQueryString', () => {
    test('converts object to query string', () => {
      const obj = { name: 'John', age: 30 };
      expect(toQueryString(obj)).toBe('name=John&age=30');
    });
  });

  describe('fromQueryString', () => {
    test('converts query string to object', () => {
      expect(fromQueryString('name=John&age=30')).toEqual({
        name: 'John',
        age: '30'
      });
    });
  });

  describe('size', () => {
    test('returns object size', () => {
      expect(size({ a: 1, b: 2, c: 3 })).toBe(3);
      expect(size({})).toBe(0);
    });
  });

  describe('has', () => {
    test('checks property existence', () => {
      expect(has({ a: 1 }, 'a')).toBe(true);
      expect(has({ a: 1 }, 'b')).toBe(false);
    });
  });

  describe('hasPath', () => {
    test('checks if path exists', () => {
      const obj = { a: { b: { c: 1 } } };
      expect(hasPath(obj, 'a.b.c')).toBe(true);
      expect(hasPath(obj, 'a.b.d')).toBe(false);
    });
  });
});