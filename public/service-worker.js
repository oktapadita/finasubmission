importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

  workbox.precaching.precacheAndRoute([
    { url: '/', revision: '1' },
    { url: '/index.html', revision: '1' },
    { url: '/players.html', revision: '1' },
    { url: '/nav.html', revision: '1' },
    { url: '/pages/teams.html', revision: '1' },
    { url: '/pages/klasemen.html', revision: '1' },
    { url: '/pages/contact.html', revision: '1' },
    { url: '/pages/topscore.html', revision: '1' },
    { url: '/pages/saved.html', revision: '1' },
    { url: '/css/materialize.min.css', revision: '1' },
    { url: '/js/materialize.min.js', revision: '1' },
    { url: '/js/api.js', revision: '1' },
    { url: '/js/db.js', revision: '1' },
    { url: '/js/idb.js', revision: '1' },
    { url: '/js/index.js', revision: '1' },
    { url: '/js/nav.js', revision: '1' },
    { url: '/manifest.json', revision: '1' },
    { url: 'https://fonts.googleapis.com/icon?family=Material+Icons', revision: '1' },
    { url: 'https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2', revision: '1' },
    { url: '/icons/icon-72x72.png', revision: '1' },
    { url: '/icons/icon-96x96.png', revision: '1' },
    { url: '/icons/icon-128x128.png', revision: '2' },
    { url: '/icons/icon-144x144.png', revision: '2' },
    { url: '/icons/icon-152x152.png', revision: '2' },
    { url: '/icons/icon-192x192.png', revision: '2' },
    { url: '/icons/icon-384x384.png', revision: '2' },
    { url: '/icons/icon-512x512.png', revision: '2' },
], {
ignoreUrlParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
  new RegExp('(https://api.football-data.org/v2/)'),
  workbox.strategies.staleWhileRevalidate(
    {
      cacheName: 'data-live'
    }
  )
);

workbox.routing.registerRoute(
  new RegExp('/pages/'),
  workbox.strategies.staleWhileRevalidate(
    {
      cacheName: 'pages'
    }
  )
);

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'img/notification.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification Berhasil', options)
  );
});
