"use strict";var precacheConfig=[["/weather-app/index.html","8ed3e34068b52884c06d623b1a2b757f"],["/weather-app/static/css/main.8fff2aa0.css","02b6b0255e26a05041582ef99c0a7c10"],["/weather-app/static/js/main.b342e52f.js","2fc8baf07bb8078089043119041bd837"],["/weather-app/static/media/01d.0efaa89e.svg","0efaa89e0087ef11480577942e6fcf4f"],["/weather-app/static/media/01n.14461560.svg","14461560e2b0387f33542b59634dab9b"],["/weather-app/static/media/02d.6a27756c.svg","6a27756cd8b6cd16b82f8b77eb9bb0bd"],["/weather-app/static/media/02n.de81b120.svg","de81b120136e7687447beaaec2e3352c"],["/weather-app/static/media/03d.4cf126cf.svg","4cf126cf74359a895748b4b2f6b8c762"],["/weather-app/static/media/03n.4cf126cf.svg","4cf126cf74359a895748b4b2f6b8c762"],["/weather-app/static/media/04d.a499a7b3.svg","a499a7b3b60f73d9ead9f330c8a7c545"],["/weather-app/static/media/04n.a499a7b3.svg","a499a7b3b60f73d9ead9f330c8a7c545"],["/weather-app/static/media/09d.13834d27.svg","13834d2790e6ca33b1e435e5cc70e74c"],["/weather-app/static/media/09n.bf6bf28e.svg","bf6bf28e512241ed4a52f6a8ac0847b4"],["/weather-app/static/media/10d.11b5fcb1.svg","11b5fcb1969503294db9f087923a55af"],["/weather-app/static/media/10n.e7f7a86c.svg","e7f7a86c698f10cd833d443937ee735f"],["/weather-app/static/media/11d.82d0cb45.svg","82d0cb45984e5f049094aa8af9a05c98"],["/weather-app/static/media/11n.cc6fc59d.svg","cc6fc59d60dfc240888c72fdec7ef4f5"],["/weather-app/static/media/13d.84c4ca35.svg","84c4ca354b4f835d40560802cf332b85"],["/weather-app/static/media/13n.43b75aee.svg","43b75aee8d14fbc186c649d446a89b64"],["/weather-app/static/media/50d.c5080316.svg","c50803163d6878bba6801d571caf20bb"],["/weather-app/static/media/50n.c5080316.svg","c50803163d6878bba6801d571caf20bb"],["/weather-app/static/media/Asset 11.76851012.svg","76851012efb88644af8e6f701a510484"],["/weather-app/static/media/Asset 36.cc8dfcec.svg","cc8dfcec33d8178a68e7135811aeb750"],["/weather-app/static/media/Asset 37.c229785d.svg","c229785d9036cd1dfddcfc3bdd9ae58a"],["/weather-app/static/media/background-image.11a8a0b8.jpeg","11a8a0b83be5fde1b9f1b4f294eeae56"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var r="/weather-app/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});