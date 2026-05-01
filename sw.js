// Service Worker för Webpushr PoC
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('push', function(event) {
    // Webpushr hanterar notis-visningen automatiskt
});
