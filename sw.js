self.addEventListener('activate', () => {
  console.log('sw activate');
  clients.claim();
});
