# Random Sentence Practice Generator

## What Was Implemented (MVP)

### ✅ Core Features
- **Random sentence generation** based on EPI Sentence Builder methodology
- **Three difficulty levels:**
  - ⭐ Easy: 3-4 columns, simple vocabulary only
  - ⭐⭐ Medium: 4 columns, includes some complex vocabulary
  - ⭐⭐⭐ Hard: 4-5 columns, includes advanced extensions
- **Configurable countdown timer** (10, 15, 20, or 30 seconds)
- **Answer reveal** after countdown completes
- **Clean, responsive UI** matching the existing site design

### 📁 Files Created

```
y8-french-revision/
├── data/
│   └── sentence-builders/
│       └── free-time-likes-dislikes.json     # First sentence builder data
├── js/
│   ├── sentence-generator.js                  # Core sentence generation logic
│   └── ui-controller.js                       # UI and timer management
└── PRACTICE-GENERATOR.md                      # This file
```

### 📝 Files Modified
- `styles.css` - Added practice generator styling
- `topics/free-time-hobbies.html` - Integrated practice generator component

### 🎯 Current Status

**Working:**
- Free Time & Hobbies topic has the practice generator live
- One sentence builder available: "Free Time (Likes/Dislikes)"
- All three difficulty levels functional
- Timer and answer reveal working
- French grammar rules (je → j' before vowels)

**Tested:**
- ✅ Sentence randomness
- ✅ Difficulty scaling
- ✅ Timer countdown
- ✅ Answer reveal
- ✅ Grammar accuracy (apostrophes)
- ✅ Responsive design

## How to Use (Student Instructions)

1. **Choose a sentence builder** from the dropdown
2. **Select difficulty level:** ⭐ Easy, ⭐⭐ Medium, or ⭐⭐⭐ Hard
3. **Set countdown time** (15 seconds recommended)
4. **Click "Generate Sentence"**
5. **Read the English sentence** and write your French translation on paper
6. **When the timer runs out**, check your answer against the revealed French sentence
7. **Click "Next Sentence"** to practice another one

## Next Steps to Complete the Full Version

### 1. Add More Sentence Builders for Free Time Topic

Create JSON files for the other two sentence builders:
- `talking-about-free-time-1st-person.json`
- `free-time-aller-jouer-faire.json`

Then update the init call in `free-time-hobbies.html` to include all three:

```javascript
controller.init('free-time-hobbies', [
    'free-time-likes-dislikes',
    'talking-about-free-time-1st-person',
    'free-time-aller-jouer-faire'
]);
```

### 2. Create Sentence Builders for Other Priority Topics

**Priority order:**
1. Daily Routine (`daily-routine.json`)
2. Describing Family (`describing-family.json`)
3. School Subjects (`school-subjects.json`)
4. Talking About Food (`talking-about-food.json`)

### 3. Integrate into Other Topic Pages

For each topic page, add:
1. The practice generator HTML block (copy from `free-time-hobbies.html`)
2. The three script tags before `</body>`
3. Initialize with appropriate sentence builder files

### 4. Template for Creating New Sentence Builder JSON

Use this structure when extracting data from PDF sentence builders:

```json
{
  "id": "unique-id-here",
  "title": "Display Title",
  "topic": "topic-folder-name",
  "columns": [
    {
      "id": 1,
      "header": "Column Name",
      "complexity": "simple|medium|advanced",
      "optional": false,
      "items": [
        {"fr": "French phrase", "en": "English translation"}
      ]
    }
  ],
  "rules": {
    "difficulty": {
      "1-star": {
        "minColumns": 3,
        "maxColumns": 4,
        "excludeComplexity": ["advanced"],
        "optionalColumnsMax": 0
      },
      "2-star": {
        "minColumns": 4,
        "maxColumns": 4,
        "excludeComplexity": [],
        "optionalColumnsMax": 0
      },
      "3-star": {
        "minColumns": 4,
        "maxColumns": 5,
        "excludeComplexity": [],
        "optionalColumnsMax": 1
      }
    }
  }
}
```

## Pedagogical Notes

**Why This Works:**
- Based on EPI Sentence Builder methodology (proven approach for language learning)
- Active recall practice (more effective than passive reading)
- Timed practice builds fluency and reduces overthinking
- Immediate feedback when answer is revealed
- Difficulty scaling allows differentiation

**How Students Should Use It:**
- Start with ⭐ Easy to build confidence
- Practice 5-10 sentences per session
- Write answers on paper (better for learning than typing)
- Check answer carefully and correct mistakes
- Move to ⭐⭐ Medium when getting 80%+ correct
- Use ⭐⭐⭐ Hard for exam-level challenge

## Future Enhancements (Post-Full Version)

1. **Statistics tracking** - Record how many practiced, success rate
2. **Print worksheet mode** - Generate 10 random sentences as a PDF
3. **Audio pronunciation** - Speak the French answer using Web Speech API
4. **Multiple subjects** - Add tu, il/elle, nous, vous, ils/elles
5. **Negative sentences** - Practice "je n'aime pas..."
6. **Question formation** - Practice "Est-ce que tu aimes...?"
7. **Spaced repetition** - Track which structures need more practice

## Technical Notes

**Grammar Rules Implemented:**
- `je` + vowel → `j'` (e.g., "je aime" → "j'aime")

**To Add Later:**
- `le`/`la` + vowel → `l'` (e.g., "le école" → "l'école")
- `de` + `le` → `du` (e.g., "jouer de le piano" → "jouer du piano")
- `à` + `le` → `au` (e.g., "jouer à le foot" → "jouer au foot")

These more complex rules should be built into the JSON data itself rather than in the grammar rules function, as they're already present in the vocabulary (e.g., "jouer au foot" is stored as a complete phrase).

---

**Created:** 2026-02-15
**Status:** MVP Complete ✅
**Next:** Add more sentence builders and roll out to other topics
