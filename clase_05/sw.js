
self.addEventListener('install', () => {
    console.log("Soy un service worker. Y me estoy instalando.");
    console.log("se instaló todo");
    self.skipWaiting();
})

self.addEventListener('activate', () => {
    console.log("Soy un service worker. Y me estoy activado");
});