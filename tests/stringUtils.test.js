import {
  capitalize,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  toPascalCase,
  toTitleCase,
  reverse,
  truncate,
  isPalindrome,
  mask,
  slugify,
  countWords,
  removeDuplicates,
  removeWhitespace,
  extractEmails,
  extractUrls,
  stripHtml,
  escapeHtml,
  isNumeric,
  isEmail,
  isUrl,
  repeatString
} from '../src/stringUtils.js';

describe('String Utilities', () => {
  describe('capitalize', () => {
    test('capitalizes the first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    test('handles empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('throws error for non-string input', () => {
      expect(() => capitalize(123)).toThrow(TypeError);
    });
  });

  describe('toCamelCase', () => {
    test('converts to camelCase', () => {
      expect(toCamelCase('hello world')).toBe('helloWorld');
      expect(toCamelCase('foo-bar')).toBe('fooBar');
    });

    test('throws error for non-string input', () => {
      expect(() => toCamelCase(null)).toThrow(TypeError);
    });
  });

  describe('toKebabCase', () => {
    test('converts to kebab-case', () => {
      expect(toKebabCase('Hello World')).toBe('hello-world');
      expect(toKebabCase('fooBar')).toBe('foo-bar');
    });
  });

  describe('toSnakeCase', () => {
    test('converts to snake_case', () => {
      expect(toSnakeCase('Hello World')).toBe('hello_world');
      expect(toSnakeCase('fooBar')).toBe('foo_bar');
    });
  });

  describe('toPascalCase', () => {
    test('converts to PascalCase', () => {
      expect(toPascalCase('hello world')).toBe('HelloWorld');
      expect(toPascalCase('foo-bar')).toBe('FooBar');
    });
  });

  describe('toTitleCase', () => {
    test('converts to title case', () => {
      expect(toTitleCase('hello world')).toBe('Hello World');
      expect(toTitleCase('HELLO WORLD')).toBe('Hello World');
    });
  });

  describe('reverse', () => {
    test('reverses the string', () => {
      expect(reverse('hello')).toBe('olleh');
      expect(reverse('123')).toBe('321');
    });
  });

  describe('truncate', () => {
    describe('Truncation WITH Suffix (default behavior)', () => {
      test('truncates string with default suffix', () => {
        expect(truncate('Hello World', 5)).toBe('He...');
      });

      test('truncates with custom suffix', () => {
        expect(truncate('Hello World', 5, '***')).toBe('He***');
      });

      test('does not truncate if length is sufficient', () => {
        expect(truncate('Hi', 5)).toBe('Hi');
      });
    });

    describe('Truncation WITHOUT Suffix', () => {
      test('truncates string without suffix when addSuffix is false', () => {
        expect(truncate('Hello World', 5, '', false)).toBe('Hello');
      });

      test('should ignore suffix parameter when addSuffix is false', () => {
        expect(truncate('Hello World', 8, '!!!', false)).toBe('Hello Wo');
      });
    });
  });

  describe('isPalindrome', () => {
    test('checks if string is palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    });
  });

  describe('mask', () => {
    test('masks string', () => {
      expect(mask('1234567890', 2)).toBe('12******90');
      expect(mask('secret', 1)).toBe('s****t');
    });
  });

  describe('slugify', () => {
    test('converts to slug', () => {
      expect(slugify('Hello World!')).toBe('hello-world');
      expect(slugify('Foo & Bar')).toBe('foo-bar');
    });
  });

  describe('countWords', () => {
    test('counts words', () => {
      expect(countWords('Hello world')).toBe(2);
      expect(countWords('One')).toBe(1);
      expect(countWords('')).toBe(0);
    });
  });

  describe('removeDuplicates', () => {
    test('removes duplicate characters', () => {
      expect(removeDuplicates('hello')).toBe('helo');
      expect(removeDuplicates('aaa')).toBe('a');
    });
  });

  describe('removeWhitespace', () => {
    test('removes all whitespace', () => {
      expect(removeWhitespace('hello world')).toBe('helloworld');
      expect(removeWhitespace('  hello  world  ')).toBe('helloworld');
    });
  });

  describe('extractEmails', () => {
    test('extracts email addresses', () => {
      const text = 'Contact us at test@example.com or support@test.org';
      expect(extractEmails(text)).toEqual(['test@example.com', 'support@test.org']);
    });

    test('returns empty array when no emails', () => {
      expect(extractEmails('No emails here')).toEqual([]);
    });
  });

  describe('extractUrls', () => {
    test('extracts URLs', () => {
      const text = 'Visit https://example.com or http://test.org';
      expect(extractUrls(text)).toEqual(['https://example.com', 'http://test.org']);
    });
  });

  describe('stripHtml', () => {
    test('removes HTML tags', () => {
      expect(stripHtml('<p>Hello <b>World</b></p>')).toBe('Hello World');
      expect(stripHtml('No tags here')).toBe('No tags here');
    });
  });

  describe('escapeHtml', () => {
    test('escapes HTML special characters', () => {
      expect(escapeHtml('<div>Test & "quotes"</div>'))
        .toBe('&lt;div&gt;Test &amp; &quot;quotes&quot;&lt;/div&gt;');
    });
  });

  describe('isNumeric', () => {
    test('checks if string is numeric', () => {
      expect(isNumeric('12345')).toBe(true);
      expect(isNumeric('123.45')).toBe(false);
      expect(isNumeric('abc')).toBe(false);
    });
  });

  describe('isEmail', () => {
    test('validates email format', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('invalid.email')).toBe(false);
      expect(isEmail('')).toBe(false);
    });
  });

  describe('isUrl', () => {
    test('validates URL format', () => {
      expect(isUrl('https://example.com')).toBe(true);
      expect(isUrl('http://test.org')).toBe(true);
      expect(isUrl('not a url')).toBe(false);
    });
  });

  describe('repeatString', () => {
    test('repeats string n times', () => {
      expect(repeatString('ab', 3)).toBe('ababab');
      expect(repeatString('x', 0)).toBe('');
    });
  });
});