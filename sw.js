// Service Worker for offline support
const CACHE_NAME = 'chemistry-app-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/problems.js',
    '/content.js',
    '/molecule-viewer.js',
    '/enhanced-problems.js',
    '/gamification.js',
    '/api/progress.json',
    // 폰트 및 아이콘
    'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap',
    // 플레이스홀더 이미지들
    'https://via.placeholder.com/200x150/4CAF50/FFFFFF?text=공유결합',
    'https://via.placeholder.com/200x150/2196F3/FFFFFF?text=이온화합물',
    'https://via.placeholder.com/200x150/FF9800/FFFFFF?text=분자구조',
    'https://via.placeholder.com/200x150/9C27B0/FFFFFF?text=결합세기'
];

// 설치 이벤트
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('캐시 열기 완료');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('모든 리소스 캐싱 완료');
                return self.skipWaiting(); // 즉시 활성화
            })
    );
});

// 활성화 이벤트
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('이전 캐시 삭제:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim(); // 즉시 제어권 획득
        })
    );
});

// 페치 이벤트
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 캐시에 있으면 캐시에서 반환
                if (response) {
                    return response;
                }

                // 캐시에 없으면 네트워크 요청
                return fetch(event.request).then(response => {
                    // 유효한 응답이 아니면 그대로 반환
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // 응답을 복제하여 캐시에 저장
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            // GET 요청만 캐시
                            if (event.request.method === 'GET') {
                                cache.put(event.request, responseToCache);
                            }
                        });

                    return response;
                }).catch(() => {
                    // 네트워크 오류 시 오프라인 페이지 반환
                    return caches.match('/offline.html').catch(() => {
                        // 오프라인 페이지도 없으면 기본 응답
                        return new Response('오프라인 상태입니다. 인터넷 연결을 확인해주세요.', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: new Headers({
                                'Content-Type': 'text/plain; charset=utf-8'
                            })
                        });
                    });
                });
            })
    );
});

// 백그라운드 동기화
self.addEventListener('sync', event => {
    if (event.tag === 'sync-progress') {
        event.waitUntil(syncProgress());
    }
});

async function syncProgress() {
    // 로컬 스토리지의 진도 데이터를 서버와 동기화
    const cache = await caches.open(CACHE_NAME);
    const requests = await cache.keys();
    
    // 보류 중인 진도 업데이트 찾기
    const pendingUpdates = [];
    
    for (const request of requests) {
        if (request.url.includes('api/progress') && request.method === 'POST') {
            const response = await cache.match(request);
            const data = await response.json();
            pendingUpdates.push(data);
        }
    }
    
    // 서버로 전송 시도
    for (const update of pendingUpdates) {
        try {
            await fetch('/api/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(update)
            });
            
            // 성공하면 캐시에서 제거
            // ...
        } catch (error) {
            console.error('동기화 실패:', error);
        }
    }
}

// 푸시 알림
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : '새로운 화학 문제가 준비되었습니다!',
        icon: '/icon-192.png',
        badge: '/badge-72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: '학습하기',
                icon: '/checkmark.png'
            },
            {
                action: 'close',
                title: '닫기',
                icon: '/xmark.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('화학 학습 프로그램', options)
    );
});

// 알림 클릭 처리
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'explore') {
        // 앱 열기
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// 주기적 백그라운드 동기화
self.addEventListener('periodicsync', event => {
    if (event.tag === 'update-content') {
        event.waitUntil(updateContent());
    }
});

async function updateContent() {
    // 새로운 문제나 콘텐츠 확인
    try {
        const response = await fetch('/api/check-updates');
        const data = await response.json();
        
        if (data.hasUpdates) {
            // 새 콘텐츠 캐싱
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(data.newUrls);
        }
    } catch (error) {
        console.error('콘텐츠 업데이트 확인 실패:', error);
    }
}