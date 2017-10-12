const cacheName = 'serviceWorkerStudy'
const cacheFiles = [
  './',
  './index.html',
  './app.js',
  './style.css',
]

log = (...args) => console.log('[SW]', ...args)

self.addEventListener('install', function(e) {
  log('install', e)
  
  e.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        log('install cache', cache)
        return cache.addAll(cacheFiles)
      })
  )
})

self.addEventListener('activate', function(e) {
  log('activate', e)
})

self.addEventListener('fetch', function(e) {
  log('fetch', e)
  
  e.respondWith(
    caches.match(e.request)
      .then(function(res) {
        if (res) {
          log('found in cache', e)
          return res
        }
        
        return fetch(e.request)
      })
  )
})