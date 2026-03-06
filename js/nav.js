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
