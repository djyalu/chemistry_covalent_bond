// Service Worker for Chemistry Learning Program
const CACHE_NAME = 'chemistry-learning-v1';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './problems.js',
  './content.js',
  './molecule-viewer.js',
  './enhanced-problems.js',
  './gamification.js',
  './enhanced-learning.js',
  './styles.css',
  './enhanced-styles.css',
  './dynamic-learning-styles.css',
  './manifest.json'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: 캐시 열기');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Service Worker: 캐시 추가 실패', error);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 캐시에 있으면 캐시에서 반환, 없으면 네트워크에서 가져오기
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(error => {
        console.error('Service Worker: Fetch 실패', error);
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: 오래된 캐시 삭제', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});