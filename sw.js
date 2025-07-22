self.addEventListener('install', event => {
  console.log('🔥 Service Worker установлен');
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/investors.html',
        '/news.html',
        '/objects.html',
        '/services.html',
        '/workers.html',
        '/css/main.css',  
        '/js/gallery.js',     
        '/js/header.js', 
        '/js/modal.js',
        '/js/partners.js',  
        '/js/service-descriptions.js',   
        '/icons/logo192.png',
        '/icons/kogo512.png',
        // Иконки
        '/src/icons/ecologic.png',
        '/src/icons/electricity.png',
        '/src/icons/house.png',

        // Картинки по номерам
        '/src/images/1.png',
        '/src/images/2.png',
        '/src/images/3.png',
        '/src/images/4.png',
        '/src/images/5.png',
        '/src/images/6.png',
        '/src/images/7.png',
        '/src/images/8.png',
        '/src/images/9.png',
        '/src/images/10.png',
        '/src/images/11.png',
        '/src/images/12.png',

        // Остальные
        '/src/images/arrow.png',
        '/src/images/cross.png',
        '/src/images/gallery-arrow.png',
        '/src/images/logo-big.png',
        '/src/images/logo-small.png',
        '/src/images/map.png'
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