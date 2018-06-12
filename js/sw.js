self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('simple-sw-v29').then(function(cache) {
      return cache.addAll([
        './',
        './img/',
        './css/',
        './js/'
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
