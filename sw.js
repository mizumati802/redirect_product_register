// 最小限のService Worker（PWA登録用）
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // リダイレクト専用なのでキャッシュ不要
});
