const CACHE_NAME = "pimpwasen-essensbestellung-v34";
const ASSETS = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "manifest.json",
  "sw.js",
  "assets/icons/icon-72.png",
  "assets/icons/icon-96.png",
  "assets/icons/icon-128.png",
  "assets/icons/icon-144.png",
  "assets/icons/icon-152.png",
  "assets/icons/icon-180.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-256.png",
  "assets/icons/icon-384.png",
  "assets/icons/icon-512.png",
  "assets/icons/favicon.png",
  "assets/pdfs/Waldschenke Mittag.pdf",
  "assets/pdfs/Waldschenke Speisekarte.pdf",
  "assets/pdfs/La Bussola Speisekarte .pdf",
  "assets/pdfs/Lotus Mittagskarte.pdf"
,
  "assets/pdfs/ANH Asia.pdf"
,
  "assets/pdfs/Niyo.pdf"
,
  "assets/pdfs/Soul-Bowl2.pdf"
,
  "assets/pdfs/Da fernando.pdf"
,
  "assets/pdfs/Burgeria.pdf"
,
  "assets/pdfs/könig.pdf"
,
  "assets/pdfs/koenig.pdf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
