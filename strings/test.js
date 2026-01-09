const countFrequency = require('./index');

test('should return top 3 words by frequency with alphabetical tie-breaking', () => {
  const input = 'bar baz foo foo zblah zblah zblah baz toto bar';
  const result = countFrequency(input, 3);
  expect(result).toEqual(['("zblah", 3)', '("bar", 2)', '("baz", 2)']);
});

test('should handle alphabetical order tie-breaking correctly', () => {
  const input = 'cat bat cat bat ant ant';
  const result = countFrequency(input, 3);
  expect(result).toEqual(['("ant", 2)', '("bat", 2)', '("cat", 2)']);
});

test('should handle empty input', () => {
  const input = '';
  const result = countFrequency(input, 3);
  expect(result).toEqual({});
});

test('should handle negative n', () => {
  const input = 'test test';
  const result = countFrequency(input, -1);
  expect(result).toEqual({});
});
