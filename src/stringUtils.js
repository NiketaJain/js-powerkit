/**
 * String Utility Functions
 * @module string
 */


/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter capitalized.
 * @example
 * capitalize('hello world'); // 'Hello world'
 */
export const capitalize = (str) => {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase.
 * @param {string} str - The input string.
 * @returns {string} The camelCase version of the string.
 * @example
 * toCamelCase('hello world'); // 'helloWorld'
 */
export const toCamelCase = (str) => {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
    .replace(/^./, char => char.toLowerCase());
}

/**
 * Converts a string to kebab-case.
 * @param {string} str - The input string.
 * @returns {string} The kebab-case version of the string.
 * @example
 * toKebabCase('Hello World'); // 'hello-world'
 */
export const toKebabCase = (str) => {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Converts a string to snake_case.
 * @param {string} str - The input string.
 * @returns {string} The snake_case version of the string.
 * @example
 * toSnakeCase('Hello World'); // 'hello_world'
 */
export const toSnakeCase = (str) => {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

/**
 * Converts a string to PascalCase.
 * @param {string} str - The input string.
 * @returns {string} The PascalCase version of the string.
 * @example
 * toPascalCase('hello world'); // 'HelloWorld'
 */
export const toPascalCase = (str) => {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
    .replace(/^./, char => char.toUpperCase());
}

/**
 * Capitalizes the first letter of each word
 * @param {string} str - The string to convert
 * @returns {string} The title case string
 * @example
 * toTitleCase('hello world'); // 'Hello World'
 */
export const toTitleCase = (str) => {
  if (!str) return '';
  return str.replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

/**
 * Reverses a string.
 * @param {string} str - The input string.
 * @returns {string} The reversed string.
 * @example
 * reverse('hello'); // 'olleh'
 */
export const reverse = (str) => {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  return str.split('').reverse().join('');
}

/**
 * Truncates a string to a specified length and adds an ellipsis.
 * @param {string} str - The input string.
 * @param {number} length - The maximum length.
 * @param {string} [suffix='...'] - The suffix to add.
 * @returns {string} The truncated string.
 * @example
 * truncate('Hello World', 5, '', true); // 'He...'
 * truncate('Hello World', 5, '', false); // 'Hello'
 */
export const truncate = (str, length, suffix = '...', addSuffix = true) => {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  if (typeof length !== 'number') throw new TypeError('Length must be a number');

  if (str.length <= length) return str;

  if (addSuffix && suffix) {
    return str.slice(0, length - suffix.length) + suffix;
  }

  return str.slice(0, length);
};

/**
 * Checks if a string is a palindrome.
 * @param {string} str - The input string.
 * @returns {boolean} True if the string is a palindrome.
 * @example
 * isPalindrome('racecar'); // true
 */
export const isPalindrome = (str) => {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Masks a string (useful for sensitive data)
 * @param {string} str - The string to mask
 * @param {number} visibleChars - Number of visible characters at start/end
 * @param {string} maskChar - Character to use for masking
 * @returns {string} The masked string
 * @example
 * mask('secret', 1); // 's****t'
 */
export const mask = (str, visibleChars = 4, maskChar = '*') => {
  if (!str || str.length <= visibleChars * 2) return str;
  const start = str.substring(0, visibleChars);
  const end = str.substring(str.length - visibleChars);
  const masked = maskChar.repeat(str.length - visibleChars * 2);
  return start + masked + end;
};

/**
 * Converts a string to a URL slug.
 * @param {string} str - The input string.
 * @returns {string} The slugified string.
 * @example
 * slugify('Hello World!'); // 'hello-world'
 */
export const slugify = (str) => {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Counts the number of words in a string.
 * @param {string} str - The input string.
 * @returns {number} The word count.
 * @example
 * countWords('Hello world!'); // 2
 */
export const countWords = (str) => {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Removes duplicate characters from a string.
 * @param {string} str - The input string.
 * @returns {string} The string with duplicates removed.
 * @example
 * removeDuplicates('hello'); // 'helo'
 */
export const removeDuplicates = (str) => {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  return [...new Set(str)].join('');
}

/**
 * Removes all whitespace from a string
 * @param {string} str - The string to process
 * @returns {string} String without whitespace
 * @example
 * removeWhitespace('  hello  world  '); // 'helloworld'
 */
export const removeWhitespace = (str) => {
  if (!str) return '';
  return str.replace(/\s+/g, '');
};

/**
 * Extracts all email addresses from a string
 * @param {string} str - The string to search
 * @returns {Array<string>} Array of email addresses
 * @example
 * extractEmails('Contact us at test@example.com or support@test.org'); // ['test@example.com', 'support@test.org']
 */
export const extractEmails = (str) => {
  if (!str) return [];
  const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
  return str.match(emailRegex) || [];
};

/**
 * Extracts all URLs from a string
 * @param {string} str - The string to search
 * @returns {Array<string>} Array of URLs
 * @example
 * extractUrls('Visit https://example.com or http://test.org'); // ['https://example.com', 'http://test.org']
 */
export const extractUrls = (str) => {
  if (!str) return [];
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return str.match(urlRegex) || [];
};

/**
 * Removes HTML tags from a string
 * @param {string} str - The string containing HTML
 * @returns {string} String without HTML tags
 * @example
 * stripHtml('<p>Hello <b>World</b></p>'); // 'Hello World'
 */
export const stripHtml = (str) => {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '');
};

/**
 * Escapes HTML special characters
 * @param {string} str - The string to escape
 * @returns {string} The escaped string
 * @example
 * escapeHtml('<div>Test & "quotes"</div>'); // '&lt;div&gt;Test &amp; &quot;quotes&quot;&lt;/div&gt;'
 */
export const escapeHtml = (str) => {
  if (!str) return '';
  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return str.replace(/[&<>"']/g, char => htmlEscapes[char]);
};

/**
 * Checks if a string contains only numbers
 * @param {string} str - The string to check
 * @returns {boolean} True if numeric
 * @example
 * isNumeric('12345'); // true
 */
export const isNumeric = (str) => {
  if (!str) return false;
  return /^\d+$/.test(str);
};

/**
 * Checks if a string is a valid email
 * @param {string} str - The string to validate
 * @returns {boolean} True if valid email
 * @example
 * isEmail('test@example.com'); // true
 */
export const isEmail = (str) => {
  if (!str) return false;
  const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
  return emailRegex.test(str);
};

/**
 * Checks if a string is a valid URL
 * @param {string} str - The string to validate
 * @returns {boolean} True if valid URL
 * @example
 * isUrl('https://example.com'); // true
 */
export const isUrl = (str) => {
  if (!str) return false;
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
};

/**
 * Repeats a string n times
 * @param {string} str - The string to repeat
 * @param {number} times - Number of repetitions
 * @returns {string} The repeated string
 * @example
 * repeatString('ab', 3); // 'ababab'
 */
export const repeatString = (str, times) => {
  if (!str || times <= 0) return '';
  return str.repeat(times);
};
