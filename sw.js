self.addEventListener('install', event => {
  console.log('🔥 Service Worker установлен');
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/gubstroy/',
        '/gubstroy/index.html',
        '/gubstroy/investors.html',
        '/gubstroy/news.html',
        '/gubstroy/objects.html',
        '/gubstroy/services.html',
        '/gubstroy/workers.html',
        '/gubstroy/css/main.css',
        '/gubstroy/js/gallery.js',
        '/gubstroy/js/header.js',
        '/gubstroy/js/modal.js',
        '/gubstroy/js/partners.js',
        '/gubstroy/js/service-descriptions.js',
        '/gubstroy/icons/logo192.png',
        '/gubstroy/icons/kogo512.png',
        // Иконки
        '/gubstroy/src/icons/ecologic.png',
        '/gubstroy/src/icons/electricity.png',
        '/gubstroy/src/icons/house.png',

        // Картинки по номерам
        '/gubstroy/src/images/1.png',
        '/gubstroy/src/images/2.png',
        '/gubstroy/src/images/3.png',
        '/gubstroy/src/images/4.png',
        '/gubstroy/src/images/5.png',
        '/gubstroy/src/images/6.png',
        '/gubstroy/src/images/7.png',
        '/gubstroy/src/images/8.png',
        '/gubstroy/src/images/9.png',
        '/gubstroy/src/images/10.png',
        '/gubstroy/src/images/11.png',
        '/gubstroy/src/images/12.png',

        // Остальные
        '/gubstroy/src/images/arrow.png',
        '/gubstroy/src/images/cross.png',
        '/gubstroy/src/images/gallery-arrow.png',
        '/gubstroy/src/images/logo-big.png',
        '/gubstroy/src/images/logo-small.png',
        '/gubstroy/src/images/map.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});