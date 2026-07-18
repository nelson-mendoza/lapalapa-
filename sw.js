var CACHE = 'lapalapa-v1';
var URLS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(URLS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.url.indexOf('chrome-extension') !== -1) return;
  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request).then(function(res) {
        if (res && res.ok && e.request.method === 'GET' && e.request.url.indexOf('/rest/v1/') === -1 && e.request.url.indexOf('/storage/v1/') === -1) {
          var copy = res.clone();
          caches.open(CACHE).then(function(cache) { cache.put(e.request, copy); });
        }
        return res;
      });
    }).catch(function() {
      return caches.match('/');
    })
  );
});
