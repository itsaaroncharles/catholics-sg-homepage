const CACHE_NAME = 'catholicsg-assets-v1';

// On install, activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    // Delete old caches that don't match current version
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only cache GET requests for images (Figma assets + local assets)
  if (event.request.method !== 'GET') return;

  const isFigmaAsset = url.hostname === 'www.figma.com' && url.pathname.startsWith('/api/mcp/asset/');
  const isLocalAsset = url.origin === self.location.origin && /\.(png|svg|jpg|jpeg|webp|mp4|gif)$/i.test(url.pathname);

  if (!isFigmaAsset && !isLocalAsset) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(event.request);
      if (cached) return cached;

      const response = await fetch(event.request);
      // Only cache successful responses
      if (response.ok) {
        cache.put(event.request, response.clone());
      }
      return response;
    })
  );
});
