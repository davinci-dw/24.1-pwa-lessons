
self.addEventListener('install', (e) => {
    console.log("Instalando...");
    e.waitUntil(
        caches.open('caches').then(cache => {
            cache.addAll([
                'michis.json',
                'scripts.js'
            ]);
        })
    );
})

self.addEventListener('activate', () => {
    console.log("Soy un service worker. Y me estoy activado");
});