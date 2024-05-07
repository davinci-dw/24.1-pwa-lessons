const ALMACEN = 'caches';

self.addEventListener('install', (e) => {
    console.log("Instalando...");
    e.waitUntil(
        caches.has(ALMACEN).then(estaInstalado => {
            if(!estaInstalado) {
                return caches.open(ALMACEN).then(cache => {
                    cache.addAll([
                        'michis.json',
                        'scripts.js'
                    ]);
                })        
            }
        })
    );
})

self.addEventListener('activate', () => {
    console.log("Soy un service worker. Y me estoy activado");
});