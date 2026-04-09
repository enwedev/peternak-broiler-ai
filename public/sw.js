const CACHE_NAME = "broiler-ai-cache-v4";
const OFFLINE_URL = "/offline";

const STATIC_ASSETS = [
  "/",
  OFFLINE_URL,
  "/manifest.webmanifest",
  "/icon.png",
  "/apple-icon.png",
];

self.addEventListener("install", (event) => {
  console.log("[SW] Installing v4...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activated v4");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("[SW] Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // Navigation requests: Network first -> Cache fallback -> Offline fallback
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        console.log("[SW] Navigation failed, checking cache for:", url.pathname);
        const cachedResponse = await caches.match(request, { ignoreSearch: true });
        if (cachedResponse) {
          console.log("[SW] Found cached response for navigation:", url.pathname);
          return cachedResponse;
        }
        console.log("[SW] No cache found, falling back to offline page");
        return caches.match(OFFLINE_URL);
      })
    );
    return;
  }

  // Static assets and other requests: Cache first -> Network
  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        // Cache same-origin successful responses
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === "basic"
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return networkResponse;
      });
    })
  );
});
