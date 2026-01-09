function countFrequency(sentence, n) {
  if (sentence.length === 0 || n <= 0) {
    return {};
  }

  // Split the sentence into words
  const words = sentence.split(' ');

  // Create a frequency map
  const wordFrequency = {};
  for (const word of words) {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  }

  // Convert to array of [word, frequency] pairs
  const wordFreqArray = Object.entries(wordFrequency);

  // Sort by decreasing frequency, then alphabetically
  wordFreqArray.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }
    // If frequencies are the same, sort alphabetically
    return a[0].localeCompare(b[0]);
  });

  // Format the result
  const result = [];
  for (let i = 0; i < Math.min(n, wordFreqArray.length); i++) {
    const [word, count] = wordFreqArray[i];
    result.push(`("${word}", ${count})`);
  }

  return result;
}

module.exports = countFrequency;
