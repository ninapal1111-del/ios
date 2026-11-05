// Generated at build time (vite.config.js)
const CACHE = 'nclc7-mw34xnr6';
const FILES = ["./","index.html","manifest.webmanifest","icon.svg","apple-touch-icon.png","icon-192.png","icon-512.png","assets/admin-BZGsJvvm.css","assets/main-Df-DCjEl.css","assets/admin-4rvU4LM9.js","assets/main-D3UmidZp.js","assets/insights-Gx5wlwnb.js","assets/w1-BNPuHCAF.js","assets/w10-CEi-L86M.js","assets/w11-Dw4kRwtH.js","assets/w12-in0HqJtv.js","assets/w13-_C1_dUPM.js","assets/w14-CpXfz2Ma.js","assets/w15-DOLvjNDY.js","assets/w16-BqubCPCX.js","assets/w17-D7QI4P2e.js","assets/w18-CbRYO4x9.js","assets/w19-D1--c1vs.js","assets/w2-h5Zqbuu3.js","assets/w20-Bm7GhKNR.js","assets/w21-BkcNUoo9.js","assets/w22-DGpkXTFO.js","assets/w23-B2VLEWxp.js","assets/w24-BQAK79u7.js","assets/w3-QcSWlJ_K.js","assets/w4-Y9PVQu-v.js","assets/w5-CuDRH4ok.js","assets/w6-BUvFjwJn.js","assets/w7-B9lrdffR.js","assets/w8-skQMhAp5.js","assets/w9-CDtE3lsj.js","assets/m1-B9eQoHwI.js","assets/m2-Buxwld5H.js","assets/mocks-jCmuOefH.js","assets/vocab-u8DUASwv.js","assets/conj-UxsDSm_w.js","assets/guide-Di1Wikv_.js","assets/lvlA1-B1hxxXlo.js","assets/lvlA2-BMRC6KZj.js","assets/lvlB1-Clg_3jh-.js","assets/lvlB2-C3I8hLsN.js","assets/ref-Cc_wP8mE.js","assets/start-BjPoHw-1.js","assets/dictation-rkERmThU.js","assets/web-Cr-A8k44.js","assets/web-BQpsPQV0.js","assets/web-C5SXZVwW.js","assets/web-hJKzRnRd.js","assets/web-BxlxfzUA.js","assets/web-BB6q7ifS.js","assets/web-DesW2td2.js","assets/web-kOhlXKCw.js"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return; // accounts, voices: network
  if (url.pathname.endsWith('.mp3')) return; // recordings stream from the network
  e.respondWith(caches.match(e.request, { ignoreSearch: true, ignoreVary: true }).then((hit) => hit || fetch(e.request).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
    return res;
  }).catch(() => caches.match('index.html', { ignoreVary: true }))));
});
