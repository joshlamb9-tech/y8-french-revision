const CACHE_NAME = 'ce-french-v1';

const PRECACHE_URLS = [
  '/y8-french-revision/',
  '/y8-french-revision/index.html',
  '/y8-french-revision/styles.css',
  '/y8-french-revision/styles-v2.css',
  '/y8-french-revision/checklist.html',
  '/y8-french-revision/grammar-trainer.html',
  '/y8-french-revision/grammar.html',
  '/y8-french-revision/past-papers.html',
  '/y8-french-revision/speaking-prep.html',
  '/y8-french-revision/spelling-test.html',
  '/y8-french-revision/js/sentence-generator.js',
  '/y8-french-revision/js/ui-controller.js',
  '/y8-french-revision/icons/icon.svg',
  // Grammar pages
  '/y8-french-revision/grammar/adjectives.html',
  '/y8-french-revision/grammar/articles.html',
  '/y8-french-revision/grammar/near-future.html',
  '/y8-french-revision/grammar/other.html',
  '/y8-french-revision/grammar/perfect-tense.html',
  '/y8-french-revision/grammar/present-tense.html',
  // Topic pages
  '/y8-french-revision/topics/daily-routine.html',
  '/y8-french-revision/topics/food-drink.html',
  '/y8-french-revision/topics/free-time-hobbies.html',
  '/y8-french-revision/topics/future-plans.html',
  '/y8-french-revision/topics/health.html',
  '/y8-french-revision/topics/holidays-travel.html',
  '/y8-french-revision/topics/home-local-area.html',
  '/y8-french-revision/topics/personal-information.html',
  '/y8-french-revision/topics/school.html',
  '/y8-french-revision/topics/weather-seasons.html',
  // Sentence builder data
  '/y8-french-revision/data/sentence-builders/daily-routine.json',
  '/y8-french-revision/data/sentence-builders/describing-family.json',
  '/y8-french-revision/data/sentence-builders/food-preferences.json',
  '/y8-french-revision/data/sentence-builders/free-time-likes-dislikes.json',
  '/y8-french-revision/data/sentence-builders/future-plans.json',
  '/y8-french-revision/data/sentence-builders/health.json',
  '/y8-french-revision/data/sentence-builders/holidays-travel.json',
  '/y8-french-revision/data/sentence-builders/home-local-area.json',
  '/y8-french-revision/data/sentence-builders/school-subjects.json',
  '/y8-french-revision/data/sentence-builders/weather-seasons.json',
];

// Install: precache everything
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// Activate: clear old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first (static site — content only changes on deploy)
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
