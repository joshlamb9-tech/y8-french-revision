/**
 * SentenceGenerator - Generates random French sentences from EPI Sentence Builder data
 */
class SentenceGenerator {
  constructor(sentenceBuilderData) {
    this.data = sentenceBuilderData;
  }

  /**
   * Generate a random sentence at the specified difficulty level
   * @param {number} difficulty - 1 (easy), 2 (medium), or 3 (hard)
   * @returns {Object} {french: string, english: string}
   */
  generateSentence(difficulty) {
    const rules = this.data.rules.difficulty[`${difficulty}-star`];

    // Select which columns to use based on rules
    const selectedColumns = this.selectColumns(rules);

    // Pick random item from each selected column
    const items = this.pickRandomItems(selectedColumns);

    // Build sentences
    return {
      french: this.buildSentence(items, 'fr'),
      english: this.buildSentence(items, 'en')
    };
  }

  /**
   * Select columns to use based on difficulty rules
   * @param {Object} rules - Difficulty rules from JSON
   * @returns {Array} Array of column objects
   */
  selectColumns(rules) {
    const { minColumns, maxColumns, excludeComplexity, optionalColumnsMax } = rules;

    // Filter out excluded complexity levels
    const availableColumns = this.data.columns.filter(col =>
      !excludeComplexity.includes(col.complexity)
    );

    // Separate required and optional columns
    const requiredColumns = availableColumns.filter(col => !col.optional);
    const optionalColumns = availableColumns.filter(col => col.optional);

    // Start with required columns
    let selectedColumns = [...requiredColumns];

    // Add random optional columns up to the max allowed
    const numOptionalToAdd = Math.min(
      optionalColumnsMax,
      optionalColumns.length,
      maxColumns - selectedColumns.length
    );

    if (numOptionalToAdd > 0) {
      const shuffledOptional = this.shuffle([...optionalColumns]);
      selectedColumns = [...selectedColumns, ...shuffledOptional.slice(0, numOptionalToAdd)];
    }

    // Ensure we're within min/max column count
    // If we have too many, randomly remove some (keeping at least required)
    if (selectedColumns.length > maxColumns) {
      selectedColumns = selectedColumns.slice(0, maxColumns);
    }

    // Sort by column ID to maintain proper order
    selectedColumns.sort((a, b) => a.id - b.id);

    return selectedColumns;
  }

  /**
   * Pick one random item from each selected column
   * @param {Array} columns - Array of column objects
   * @returns {Array} Array of selected items
   */
  pickRandomItems(columns) {
    return columns.map(column => {
      const randomIndex = Math.floor(Math.random() * column.items.length);
      return {
        ...column.items[randomIndex],
        columnId: column.id
      };
    });
  }

  /**
   * Build a sentence from selected items
   * @param {Array} items - Array of selected items
   * @param {string} lang - 'fr' or 'en'
   * @returns {string} The complete sentence
   */
  buildSentence(items, lang) {
    let parts = items.map(item => item[lang]);

    // Handle French-specific grammar rules
    if (lang === 'fr') {
      parts = this.applyFrenchGrammarRules(parts);
    }

    // Join parts with spaces
    let sentence = parts.join(' ');

    // Capitalize first letter
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    // Add period at end
    if (!sentence.endsWith('.') && !sentence.endsWith('!') && !sentence.endsWith('?')) {
      sentence += '.';
    }

    return sentence;
  }

  /**
   * Apply French grammar rules to sentence parts
   * @param {Array} parts - Array of sentence parts
   * @returns {Array} Modified parts
   */
  applyFrenchGrammarRules(parts) {
    const result = [];
    let skip = false;

    for (let i = 0; i < parts.length; i++) {
      if (skip) {
        skip = false;
        continue;
      }

      let part = parts[i];
      const nextPart = parts[i + 1];

      // Handle "je" before vowel → "j'aime" (combine with next word)
      if (part === 'je' && nextPart) {
        const firstChar = nextPart.charAt(0).toLowerCase();
        const vowels = ['a', 'e', 'i', 'o', 'u'];

        if (vowels.includes(firstChar)) {
          // Combine "j'" with the next word
          result.push("j'" + nextPart);
          skip = true; // Skip the next part since we already combined it
          continue;
        }
      }

      result.push(part);
    }

    return result;
  }

  /**
   * Shuffle an array (Fisher-Yates algorithm)
   * @param {Array} array - Array to shuffle
   * @returns {Array} Shuffled array
   */
  shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}
