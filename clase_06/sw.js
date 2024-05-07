const ALMACEN = 'caches';
const LISTA_ARCHIVOS_CACHEADOS = [
    'michis.json',
    'styles.css',
    'scripts.js',
    '/'
]

self.addEventListener('install', (e) => {
    console.log("Instalando...");
    e.waitUntil(
        caches.has(ALMACEN).then(estaInstalado => {
            if(!estaInstalado) {
                return caches.open(ALMACEN).then(cache => {
                    cache.addAll(LISTA_ARCHIVOS_CACHEADOS);
                })        
            }
        })
    );
})

self.addEventListener('activate', () => {
    console.log("Soy un service worker. Y me estoy activado");
});

self.addEventListener('fetch', (e) => {
    console.log("esta interceptando")
    const consulta = e.request;
    caches.match(consulta).then((respuesta) => {
        console.log("responde", respuesta)
        if(respuesta) return respuesta;
        return fetch(consulta).then((respuesta) => {
            return respuesta;
        })
    })
})