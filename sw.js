const CACHE_NAME='auto-luxury-cashbill-v212';
const CORE=['./','./index.html','./logo.jpg','./logo-tight.jpg','./footer-strip.jpg','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('auto-luxury-')&&k!==CACHE_NAME).map(k=>caches.delete(k)))),self.clients.claim()]));});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==self.location.origin)return;
 e.respondWith(fetch(new Request(r,{cache:'reload'})).then(async response=>{if(response.ok){const cache=await caches.open(CACHE_NAME);cache.put(r,response.clone()).catch(()=>{});}return response;}).catch(async()=>{const cached=await caches.match(r);if(cached)return cached;if(r.mode==='navigate'){return (await caches.match('./index.html'))||Response.error();}return Response.error();}));
});
