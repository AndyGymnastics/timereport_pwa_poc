self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'Dags att tidrapportera!',
    icon: 'https://via.placeholder.com/192',
    vibrate: [100, 50, 100]
  };
  event.waitUntil(
    self.registration.showNotification('PWA Påminnelse', options)
  );
});
