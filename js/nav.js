document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.querySelector('.header-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Dropdown group toggles
    nav.querySelectorAll('.hn-group-toggle').forEach(function (groupToggle) {
      groupToggle.addEventListener('click', function (e) {
        e.preventDefault();
        var group = groupToggle.closest('.hn-group');
        var isOpen = group.classList.toggle('open');
        // On mobile, close other groups
        nav.querySelectorAll('.hn-group').forEach(function (g) {
          if (g !== group) g.classList.remove('open');
        });
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        nav.querySelectorAll('.hn-group').forEach(function (g) { g.classList.remove('open'); });
      }
    });

    // Close menu when a real nav link is tapped (not group toggles)
    nav.querySelectorAll('a:not(.hn-group-toggle)').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  // Auto-mark active link and group based on current page
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (nav) {
    nav.querySelectorAll('a.hn-link').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      var linkPage = href.split('/').pop() || 'index.html';
      if (linkPage === currentPage) {
        link.classList.add('active');
        var group = link.closest('.hn-group');
        if (group) {
          group.querySelector('.hn-group-toggle').classList.add('active');
        }
      }
    });
  }

  // ─── VOCAB SEARCH ──────────────────────────────────────────────────────────
  (function () {
    var header = document.querySelector('.header-inner');
    if (!header) return;

    // Detect path depth for data URL
    var depth = (window.location.pathname.indexOf('/topics/') !== -1 ||
                 window.location.pathname.indexOf('/grammar/') !== -1) ? '../' : '';

    // Inject search widget into header
    var wrap = document.createElement('div');
    wrap.className = 'hs-wrap';
    wrap.innerHTML =
      '<div class="hs-input-wrap">' +
        '<svg class="hs-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5"/><line x1="13" y1="13" x2="18" y2="18"/></svg>' +
        '<input class="hs-input" id="hs-input" type="search" placeholder="Search vocab\u2026" autocomplete="off" spellcheck="false">' +
      '</div>' +
      '<div class="hs-results" id="hs-results"></div>';
    header.appendChild(wrap);

    var inp     = document.getElementById('hs-input');
    var resList = document.getElementById('hs-results');
    var vocabData = null;

    function normSearch(s) {
      return s.toLowerCase()
        .replace(/[éèêë]/g, 'e').replace(/[àâ]/g, 'a')
        .replace(/[ùûü]/g, 'u').replace(/[ôö]/g, 'o')
        .replace(/[îï]/g, 'i').replace(/ç/g, 'c').replace(/œ/g, 'oe');
    }

    function runSearch(q) {
      q = q.trim();
      if (!vocabData || !q) { resList.innerHTML = ''; resList.classList.remove('open'); return; }
      var nq = normSearch(q);
      var hits = vocabData.filter(function (e) {
        return normSearch(e.fr).indexOf(nq) !== -1 || normSearch(e.en).indexOf(nq) !== -1;
      }).slice(0, 8);
      if (!hits.length) {
        resList.innerHTML = '<div class="hs-no-results">No results for &ldquo;' + q + '&rdquo;</div>';
      } else {
        resList.innerHTML = hits.map(function (h) {
          return '<a class="hs-result" href="' + depth + h.url + '">' +
            '<span class="hs-fr">' + h.fr + '</span>' +
            '<span class="hs-en">' + h.en + '</span>' +
            '<span class="hs-topic">' + h.topic + '</span>' +
          '</a>';
        }).join('');
      }
      resList.classList.add('open');
    }

    // Lazy-load vocab data on first focus
    inp.addEventListener('focus', function () {
      if (vocabData) return;
      fetch(depth + 'data/vocab-search.json')
        .then(function (r) { return r.json(); })
        .then(function (d) { vocabData = d; if (inp.value.trim()) runSearch(inp.value); })
        .catch(function () {});
    });

    var timer;
    inp.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { runSearch(inp.value); }, 150);
    });

    inp.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { inp.value = ''; resList.innerHTML = ''; resList.classList.remove('open'); inp.blur(); }
    });

    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) { resList.innerHTML = ''; resList.classList.remove('open'); }
    });
  }());

  // Vocab quiz: dynamically load vocab-quiz.js on pages with vocab tables
  if (document.querySelectorAll('.vocab-table').length > 0) {
    var vqs = document.createElement('script');
    vqs.src = (window.location.pathname.indexOf('/topics/') !== -1 ? '../' : '') + 'js/vocab-quiz.js';
    document.head.appendChild(vqs);
  }

  // Inline PDF viewer for sentence builder links
  // Intercepts .resource-link clicks, extracts Drive file ID, embeds preview iframe
  var resourceLinks = document.querySelectorAll('.resource-link');
  if (!resourceLinks.length) return;

  // Create viewer container once
  var viewer = document.createElement('div');
  viewer.id = 'pdf-viewer';
  viewer.style.cssText = 'display:none; margin-top:1rem; border:1.5px solid #ccc; border-radius:8px; overflow:hidden; position:relative;';

  var closeBtn = document.createElement('button');
  closeBtn.textContent = '✕ Close';
  closeBtn.style.cssText = 'position:absolute; top:8px; right:8px; z-index:10; background:#fff; border:1px solid #ccc; border-radius:4px; padding:4px 10px; cursor:pointer; font-size:0.85rem;';

  var iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%; height:600px; border:none; display:block;';
  iframe.setAttribute('allowfullscreen', '');

  viewer.appendChild(closeBtn);
  viewer.appendChild(iframe);

  // Insert viewer after the first resource-link container
  var linkContainer = resourceLinks[0].closest('div');
  if (linkContainer) linkContainer.parentNode.insertBefore(viewer, linkContainer.nextSibling);

  var activeLink = null;

  resourceLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var href = link.getAttribute('href');
      var match = href.match(/\/d\/([a-zA-Z0-9_-]+)\//);
      if (!match) return;
      var fileId = match[1];
      var embedUrl = 'https://drive.google.com/file/d/' + fileId + '/preview';

      if (activeLink === link && viewer.style.display !== 'none') {
        // Same button clicked again — close
        viewer.style.display = 'none';
        iframe.src = '';
        activeLink = null;
        return;
      }

      iframe.src = embedUrl;
      viewer.style.display = 'block';
      activeLink = link;
      viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  closeBtn.addEventListener('click', function () {
    viewer.style.display = 'none';
    iframe.src = '';
    activeLink = null;
  });
});
