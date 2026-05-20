self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('raiosh-v1').then(function(cache) {
      return cache.addAll([
        '/raiosh/',
        '/raiosh/index.html',
        '/raiosh/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});