'use strict';

(function () {

  var QUESTION_TYPES = ['mcq-fr-en', 'mcq-en-fr', 'type-en', 'type-fr', 'fill-blank', 'spell-check'];
  var ACCENTS = ['é','è','ê','à','â','ù','û','ü','ô','î','ï','ç','œ'];

  // ── HELPERS ──────────────────────────────────────────────────────

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function stripAccents(s) {
    return s.toLowerCase()
      .replace(/[éèêë]/g, 'e').replace(/[àâ]/g, 'a')
      .replace(/[ùûü]/g, 'u').replace(/[ô]/g, 'o')
      .replace(/[îï]/g, 'i').replace(/[ç]/g, 'c')
      .replace(/œ/g, 'oe');
  }

  function checkAnswer(input, correct) {
    var ni = input.trim().toLowerCase();
    var nc = correct.trim().toLowerCase();
    if (ni === nc) return 'exact';
    if (stripAccents(ni) === stripAccents(nc)) return 'near';
    // try slash-separated alternatives, e.g. "tall / big"
    var parts = nc.split(/\s*[\/,]\s*/);
    for (var i = 0; i < parts.length; i++) {
      if (ni === parts[i]) return 'exact';
      if (stripAccents(ni) === stripAccents(parts[i])) return 'near';
    }
    return 'wrong';
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  // ── TABLE PARSING ──────────────────────────────────────────────

  function parseTable(table) {
    var pairs = [];
    var rows = table.querySelectorAll('tr');
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].querySelector('th')) continue;
      var cells = rows[i].querySelectorAll('td');
      if (cells.length >= 2) {
        var fr = cells[0].textContent.trim();
        var en = cells[1].textContent.trim();
        if (fr && en) pairs.push({ fr: fr, en: en });
      }
    }
    return pairs;
  }

  function getSectionHeading(table) {
    var el2 = table.previousElementSibling;
    while (el2) {
      var tag = el2.tagName ? el2.tagName.toLowerCase() : '';
      if (tag === 'h2' || tag === 'h3') return el2.textContent.trim();
      if (tag === 'table') break;
      el2 = el2.previousElementSibling;
    }
    return 'Vocabulary';
  }

  // ── QUESTION GENERATION ───────────────────────────────────────

  function getDistractors(pair, pool, key, n) {
    var others = pool.filter(function (p) { return p[key] !== pair[key]; });
    return shuffle(others).slice(0, n).map(function (p) { return p[key]; });
  }

  function makeFillBlank(word) {
    var chars = word.split('');
    var indices = [];
    for (var i = 0; i < chars.length; i++) {
      if (chars[i] !== ' ' && chars[i] !== '(' && chars[i] !== ')' && chars[i] !== '.') {
        indices.push(i);
      }
    }
    var n = Math.max(1, Math.round(indices.length * 0.35));
    var toBlank = shuffle(indices).slice(0, n);
    toBlank.forEach(function (i) { chars[i] = '_'; });
    return chars.join('');
  }

  function makeSpellingErrors(word) {
    var errors = [];
    var accentMap = {
      'é':'e','è':'e','ê':'e','ë':'e','à':'a','â':'a',
      'ù':'u','û':'u','ü':'u','ô':'o','î':'i','ï':'i','ç':'c','œ':'oe'
    };

    // 1: swap two adjacent non-space letters
    var swapPos = [];
    for (var i = 0; i < word.length - 1; i++) {
      if (word[i] !== ' ' && word[i + 1] !== ' ') swapPos.push(i);
    }
    if (swapPos.length) {
      var si = swapPos[Math.floor(Math.random() * swapPos.length)];
      var a = word.split('');
      var t = a[si]; a[si] = a[si + 1]; a[si + 1] = t;
      var swapped = a.join('');
      if (swapped !== word) errors.push(swapped);
    }

    // 2: strip one accent
    var accentPos = [];
    for (var i = 0; i < word.length; i++) {
      if (accentMap[word[i]]) accentPos.push(i);
    }
    if (accentPos.length) {
      var ai = accentPos[Math.floor(Math.random() * accentPos.length)];
      var ch = word.split('');
      ch[ai] = accentMap[word[ai]];
      var stripped = ch.join('');
      if (stripped !== word) errors.push(stripped);
    }

    // 3: double a consonant
    var consonants = 'bcdfghjklmnpqrstvwxyz';
    var consPos = [];
    for (var i = 1; i < word.length - 1; i++) {
      if (word[i] !== ' ' && consonants.indexOf(word[i].toLowerCase()) !== -1) consPos.push(i);
    }
    if (consPos.length) {
      var ci = consPos[Math.floor(Math.random() * consPos.length)];
      var doubled = word.slice(0, ci) + word[ci] + word.slice(ci);
      if (doubled !== word) errors.push(doubled);
    }

    // Pad to 3 with simple fallbacks
    while (errors.length < 3) errors.push(word + 'e');
    return errors.slice(0, 3);
  }

  function getQuestionType(index, poolSize) {
    var type = QUESTION_TYPES[index % QUESTION_TYPES.length];
    if ((type === 'mcq-fr-en' || type === 'mcq-en-fr') && poolSize < 5) {
      type = index % 2 === 0 ? 'type-en' : 'type-fr';
    }
    return type;
  }

  // ── INPUT COMPONENT ───────────────────────────────────────────

  function makeAccentBar(input) {
    var bar = el('div', 'vq-accents');
    ACCENTS.forEach(function (a) {
      var btn = el('button', 'vq-accent-btn');
      btn.type = 'button';
      btn.textContent = a;
      btn.addEventListener('mousedown', function (e) {
        e.preventDefault();
        var s = input.selectionStart, end = input.selectionEnd;
        input.value = input.value.slice(0, s) + a + input.value.slice(end);
        input.setSelectionRange(s + a.length, s + a.length);
        input.focus();
      });
      bar.appendChild(btn);
    });
    return bar;
  }

  function addTypeInput(card, placeholder, withAccents, correctWord, frWord, enWord, onAnswer) {
    var wrap = el('div', 'vq-input-wrap');
    var inp = el('input');
    inp.type = 'text';
    inp.className = 'vq-input';
    inp.placeholder = placeholder;
    inp.autocomplete = 'off';
    inp.setAttribute('autocorrect', 'off');
    inp.setAttribute('autocapitalize', 'off');
    inp.spellcheck = false;
    wrap.appendChild(inp);
    var bar = null;
    if (withAccents) {
      bar = makeAccentBar(inp);
      wrap.appendChild(bar);
    }
    card.appendChild(wrap);
    var btn = el('button', 'vq-check-btn', 'Check ✓');
    card.appendChild(btn);
    function go() {
      inp.disabled = true;
      btn.disabled = true;
      if (bar) bar.style.display = 'none';
      showFeedback(card, checkAnswer(inp.value, correctWord), frWord, enWord, onAnswer);
    }
    btn.addEventListener('click', go);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    setTimeout(function () { inp.focus(); }, 50);
  }

  // ── QUESTION RENDERER ────────────────────────────────────────

  function renderQuestion(card, pair, pool, type, onAnswer) {
    card.innerHTML = '';

    if (type === 'mcq-fr-en' || type === 'mcq-en-fr') {
      var isFrEn = type === 'mcq-fr-en';
      var promptWord = isFrEn ? pair.fr : pair.en;
      var correctAns = isFrEn ? pair.en : pair.fr;
      var distKey = isFrEn ? 'en' : 'fr';
      var langLabel = isFrEn ? 'French \u2192 English' : 'English \u2192 French';
      var distractors = getDistractors(pair, pool, distKey, 3);
      if (distractors.length < 3) {
        return renderQuestion(card, pair, pool, isFrEn ? 'type-en' : 'type-fr', onAnswer);
      }
      card.appendChild(el('div', 'vq-lang', esc(langLabel)));
      card.appendChild(el('div', 'vq-word', esc(promptWord)));
      var options = shuffle([correctAns].concat(distractors));
      var grid = el('div', 'vq-options');
      options.forEach(function (opt) {
        var btn = el('button', 'vq-option');
        btn.textContent = opt;
        btn.addEventListener('click', function () {
          var isCorrect = opt === correctAns;
          grid.querySelectorAll('.vq-option').forEach(function (b) {
            b.disabled = true;
            if (b.textContent === correctAns) b.classList.add('correct');
          });
          if (!isCorrect) btn.classList.add('wrong');
          showFeedback(card, isCorrect ? 'exact' : 'wrong', pair.fr, pair.en, onAnswer);
        });
        grid.appendChild(btn);
      });
      card.appendChild(grid);

    } else if (type === 'type-en') {
      card.appendChild(el('div', 'vq-lang', 'French \u2192 English'));
      card.appendChild(el('div', 'vq-word', esc(pair.fr)));
      addTypeInput(card, 'Type the English\u2026', false, pair.en, pair.fr, pair.en, onAnswer);

    } else if (type === 'type-fr') {
      card.appendChild(el('div', 'vq-lang', 'English \u2192 French'));
      card.appendChild(el('div', 'vq-word', esc(pair.en)));
      addTypeInput(card, 'Type the French\u2026', true, pair.fr, pair.fr, pair.en, onAnswer);

    } else if (type === 'fill-blank') {
      var blanked = makeFillBlank(pair.fr);
      card.appendChild(el('div', 'vq-lang', 'Fill in the blanks'));
      card.appendChild(el('div', 'vq-word vq-mono', esc(blanked)));
      card.appendChild(el('div', 'vq-hint', esc(pair.en)));
      addTypeInput(card, 'Type the complete French\u2026', true, pair.fr, pair.fr, pair.en, onAnswer);

    } else if (type === 'spell-check') {
      var errors = makeSpellingErrors(pair.fr);
      var opts = shuffle([pair.fr].concat(errors));
      card.appendChild(el('div', 'vq-lang', 'Spot the correct spelling'));
      card.appendChild(el('div', 'vq-hint', esc(pair.en)));
      var grid2 = el('div', 'vq-options');
      opts.forEach(function (opt) {
        var btn = el('button', 'vq-option vq-mono');
        btn.textContent = opt;
        btn.addEventListener('click', function () {
          var isCorrect = opt === pair.fr;
          grid2.querySelectorAll('.vq-option').forEach(function (b) {
            b.disabled = true;
            if (b.textContent === pair.fr) b.classList.add('correct');
          });
          if (!isCorrect) btn.classList.add('wrong');
          showFeedback(card, isCorrect ? 'exact' : 'wrong', pair.fr, pair.en, onAnswer);
        });
        grid2.appendChild(btn);
      });
      card.appendChild(grid2);
    }
  }

  // ── FEEDBACK + CONFIDENCE ────────────────────────────────────

  function showFeedback(card, result, fr, en, onAnswer) {
    var msgs = {
      exact: '\u2713 Correct!',
      near:  '\u007e Almost \u2014 check your accents! <strong>' + esc(fr) + '</strong>',
      wrong: '\u2717 The answer was <strong>' + esc(fr) + '</strong> \u2014 ' + esc(en)
    };
    card.appendChild(el('div', 'vq-feedback vq-fb-' + result, msgs[result]));
    var row = el('div', 'vq-confidence');
    var confs = [
      { label: '\u2705 Got it',              val: 'got-it',        cls: 'vq-conf-got'   },
      { label: '\uD83D\uDFE1 Getting there', val: 'getting-there', cls: 'vq-conf-mid'   },
      { label: '\u274C Need more practice',  val: 'needs-work',    cls: 'vq-conf-needs' }
    ];
    confs.forEach(function (c) {
      var btn = el('button', 'vq-conf-btn ' + c.cls, c.label);
      btn.addEventListener('click', function () {
        row.querySelectorAll('.vq-conf-btn').forEach(function (b) { b.disabled = true; });
        btn.classList.add('selected');
        onAnswer({ result: result, confidence: c.val, pair: { fr: fr, en: en } });
      });
      row.appendChild(btn);
    });
    card.appendChild(row);
  }

  // ── RESULTS SCREEN ───────────────────────────────────────────

  function showResults(panel, results) {
    var card = panel.querySelector('.vq-card');
    var counter = panel.querySelector('.vq-counter');
    card.innerHTML = '';
    if (counter) counter.textContent = 'Complete!';
    var total  = results.length;
    var correct = results.filter(function (r) { return r.result !== 'wrong'; }).length;
    var pct    = total ? Math.round(correct / total * 100) : 0;
    var emoji  = pct >= 90 ? '\uD83C\uDFC6' : pct >= 70 ? '\uD83C\uDFAF' : pct >= 50 ? '\uD83D\uDCAA' : '\uD83D\uDCDA';
    var gotIt  = results.filter(function (r) { return r.confidence === 'got-it'; }).length;
    var midIt  = results.filter(function (r) { return r.confidence === 'getting-there'; }).length;
    var needs  = results.filter(function (r) { return r.confidence === 'needs-work'; }).length;

    var div = el('div', 'vq-results');
    div.innerHTML =
      '<div class="vq-score">' + emoji + ' ' + pct + '%</div>' +
      '<div class="vq-score-sub">' + correct + ' / ' + total + ' correct</div>' +
      '<div class="vq-breakdown">' +
        '<span class="vq-bd">\u2705 ' + gotIt + ' got it</span>' +
        '<span class="vq-bd">\uD83D\uDFE1 ' + midIt + ' getting there</span>' +
        '<span class="vq-bd">\u274C ' + needs + ' need work</span>' +
      '</div>';

    var toReview = results.filter(function (r) {
      return r.result === 'wrong' || r.confidence === 'needs-work';
    });
    if (toReview.length) {
      var seen = {};
      var ul = el('ul', 'vq-review-list');
      var hasItems = false;
      toReview.forEach(function (r) {
        if (seen[r.pair.fr]) return;
        seen[r.pair.fr] = true;
        var li = document.createElement('li');
        li.innerHTML = '<strong>' + esc(r.pair.fr) + '</strong> \u2014 ' + esc(r.pair.en);
        ul.appendChild(li);
        hasItems = true;
      });
      if (hasItems) {
        div.appendChild(el('div', 'vq-review-title', 'Words to review:'));
        div.appendChild(ul);
      }
    }

    var finBtn = el('button', 'vq-finish-btn', '\u2713 Finish');
    div.appendChild(finBtn);
    card.appendChild(div);
    return finBtn;
  }

  // ── MAIN INIT ────────────────────────────────────────────────

  function init() {
    var tables = document.querySelectorAll('.vocab-table');
    if (!tables.length) return;

    var allPairs = [];
    tables.forEach(function (t) { allPairs = allPairs.concat(parseTable(t)); });

    tables.forEach(function (table) {
      var pairs = parseTable(table);
      if (pairs.length < 2) return;
      var heading = getSectionHeading(table);

      // Wrap table so we can position an overlay on top of it
      var wrap = el('div', 'vq-table-wrap');
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);

      var triggerBtn = el('button', 'vq-btn', 'Test on this area &#9654;');
      wrap.parentNode.insertBefore(triggerBtn, wrap.nextSibling);

      triggerBtn.addEventListener('click', function () {
        triggerBtn.style.display = 'none';
        table.classList.add('quiz-active');

        // Cover the table with an overlay pane
        var overlay = el('div', 'vq-table-overlay',
          '<span class="vq-overlay-label">\uD83D\uDCDD Quiz in progress</span>');
        wrap.appendChild(overlay);

        // Build panel
        var panel = el('div', 'vq-panel');
        var header = el('div', 'vq-header');
        var titleEl = el('span', 'vq-title', esc(heading));
        var counter = el('span', 'vq-counter', '');
        header.appendChild(titleEl);
        header.appendChild(counter);
        panel.appendChild(header);
        var card = el('div', 'vq-card');
        panel.appendChild(card);
        // Insert panel between wrap and (hidden) button
        wrap.parentNode.insertBefore(panel, triggerBtn);

        // Build question queue
        var quizCount = Math.min(8, Math.max(4, pairs.length));
        var queue = [];
        while (queue.length < quizCount) {
          queue = queue.concat(shuffle(pairs));
        }
        queue = queue.slice(0, quizCount);

        var results = [];
        var idx = 0;

        function next() {
          if (idx >= quizCount) {
            var finBtn = showResults(panel, results);
            finBtn.addEventListener('click', function () {
              overlay.remove();
              panel.remove();
              table.classList.remove('quiz-active');
              triggerBtn.style.display = '';
              triggerBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            return;
          }
          counter.textContent = 'Question ' + (idx + 1) + ' of ' + quizCount;
          var type = getQuestionType(idx, allPairs.length);
          renderQuestion(card, queue[idx], allPairs, type, function (r) {
            results.push(r);
            idx++;
            setTimeout(next, 600);
          });
          panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        next();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
