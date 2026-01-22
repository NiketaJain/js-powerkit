import {
  chunk,
  flatten,
  unique,
  shuffle,
  randomElement,
  compact,
  sortBy,
  groupBy,
  intersection,
  difference,
  union,
  zip,
  range,
  max,
  min,
  sum,
  average,
  countOccurrences,
  remove,
  take,
  drop,
  includesAll,
  includesAny,
  rotate
} from '../src/arrayUtils.js';

describe('Array Utilities', () => {
  describe('chunk', () => {
    test('splits array into chunks', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
    });

    test('throws error for invalid inputs', () => {
      expect(() => chunk('not array', 2)).toThrow(TypeError);
      expect(() => chunk([1, 2], 0)).toThrow(TypeError);
    });
  });

  describe('flatten', () => {
    test('flattens nested arrays', () => {
      expect(flatten([1, [2, [3, 4]], 5])).toEqual([1, 2, [3, 4], 5]);
      expect(flatten([1, [2, [3, 4]], 5], 2)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('unique', () => {
    test('removes duplicates', () => {
      expect(unique([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
      expect(unique(['a', 'b', 'a'])).toEqual(['a', 'b']);
    });
  });

  describe('shuffle', () => {
    test('shuffles array', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffle(arr);
      expect(shuffled).toHaveLength(5);
      expect(shuffled.sort()).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('randomElement', () => {
    test('returns random element', () => {
      const arr = [1, 2, 3, 4, 5];
      const element = randomElement(arr);
      expect(arr).toContain(element);
    });

    test('returns undefined for empty array', () => {
      expect(randomElement([])).toBeUndefined();
    });
  });

  describe('compact', () => {
    test('removes falsy values', () => {
      expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN]))
        .toEqual([1, 2, 3]);
    });
  });

  describe('sortBy', () => {
    test('sorts by property', () => {
      const arr = [{ a: 2 }, { a: 1 }, { a: 3 }];
      expect(sortBy(arr, 'a')).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
      expect(sortBy(arr, 'a', 'desc')).toEqual([{ a: 3 }, { a: 2 }, { a: 1 }]);
    });
  });

  describe('groupBy', () => {
    test('groups by property', () => {
      const arr = [{ type: 'a', val: 1 }, { type: 'b', val: 2 }, { type: 'a', val: 3 }];
      expect(groupBy(arr, 'type')).toEqual({
        a: [{ type: 'a', val: 1 }, { type: 'a', val: 3 }],
        b: [{ type: 'b', val: 2 }]
      });
    });
  });

  describe('intersection', () => {
    test('finds intersection', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });
  });

  describe('difference', () => {
    test('finds difference', () => {
      expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
    });
  });

  describe('union', () => {
    test('finds union', () => {
      expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
  });

  describe('zip', () => {
    test('zips arrays', () => {
      expect(zip([1, 2], ['a', 'b'], [true, false])).toEqual([[1, 'a', true], [2, 'b', false]]);
    });
  });

  describe('range', () => {
    test('creates range', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
      expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
    });
  });

  describe('max', () => {
    test('finds maximum value', () => {
      expect(max([1, 5, 3, 9, 2])).toBe(9);
    });
  });

  describe('min', () => {
    test('finds minimum value', () => {
      expect(min([1, 5, 3, 9, 2])).toBe(1);
    });
  });

  describe('sum', () => {
    test('calculates sum', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });
  });

  describe('average', () => {
    test('calculates average', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
    });
  });

  describe('countOccurrences', () => {
    test('counts occurrences', () => {
      expect(countOccurrences([1, 2, 2, 3, 3, 3]))
        .toEqual({ '1': 1, '2': 2, '3': 3 });
    });
  });

  describe('remove', () => {
    test('removes value from array', () => {
      expect(remove([1, 2, 3, 2, 4], 2)).toEqual([1, 3, 4]);
    });
  });

  describe('take', () => {
    test('takes first n elements', () => {
      expect(take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
      expect(take([10, 21, 31, 41, 51], 4)).toEqual([10, 21, 31, 41]);
    });
  });

  describe('drop', () => {
    test('drops first n elements', () => {
      expect(drop([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
    });
  });

  describe('includesAll', () => {
    test('checks if includes all values', () => {
      expect(includesAll([1, 2, 3, 4], [2, 3])).toBe(true);
      expect(includesAll([1, 2, 3], [2, 5])).toBe(false);
    });
  });

  describe('includesAny', () => {
    test('checks if includes any value', () => {
      expect(includesAny([1, 2, 3], [3, 4, 5])).toBe(true);
      expect(includesAny([1, 2, 3], [4, 5, 6])).toBe(false);
    });
  });

  describe('rotate', () => {
    test('rotates array', () => {
      expect(rotate([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
      expect(rotate([1, 2, 3, 4, 5], 1)).toEqual([2, 3, 4, 5, 1]);
      expect(rotate([1, 2, 3, 4, 5], -1)).toEqual([5, 1, 2, 3, 4]);
      expect(rotate([1, 2, 3, 4, 5], -2)).toEqual([4, 5, 1, 2, 3]);
    });
  });
});