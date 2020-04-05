/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "84d033115fdac080c417854b578ba116"
  },
  {
    "url": "404/index.html",
    "revision": "84d033115fdac080c417854b578ba116"
  },
  {
    "url": "assets/css/5.styles.0ba91302.css",
    "revision": "9c4f7bf102252ba664a527dae50f4e83"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "e88813aa65b697bf5f6c2926670a2abc"
  },
  {
    "url": "assets/data/index.json",
    "revision": "e88813aa65b697bf5f6c2926670a2abc"
  },
  {
    "url": "assets/data/petition/index.json",
    "revision": "e88813aa65b697bf5f6c2926670a2abc"
  },
  {
    "url": "assets/data/thank-you/index.json",
    "revision": "e88813aa65b697bf5f6c2926670a2abc"
  },
  {
    "url": "assets/js/app.0c1f8d80.js",
    "revision": "7bc3c540b26950ae6816477a9e3bafa4"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.17c38b4b.js",
    "revision": "a70c1abb54801d1dbb65e2baeecd7f92"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.4faac658.js",
    "revision": "a86ce39740e6ccf786038f7bca281a05"
  },
  {
    "url": "assets/js/page--src--pages--petition-vue.30fc20b5.js",
    "revision": "2b3b7cf9448239f7d16ffefe4c05a55f"
  },
  {
    "url": "assets/js/page--src--pages--thank-you-vue.3c79c8e0.js",
    "revision": "15f794d6563194ec22d260bc4f4a56dd"
  },
  {
    "url": "assets/js/vendors~page--src--pages--thank-you-vue.e4067bdc.js",
    "revision": "a7d616d6ad597aa5b39ec23ace8ff17f"
  },
  {
    "url": "assets/static/favicon.1539b60.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "7e3c420ed3359221ac22eedbc5cc1630"
  },
  {
    "url": "assets/static/favicon.62d22cb.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "2f85c47cd65b86c6507ff18b2b8d5e98"
  },
  {
    "url": "assets/static/favicon.7b22250.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "fa38503a9bbe98901bd244b830e4d6c5"
  },
  {
    "url": "assets/static/favicon.ac8d93a.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "6b22178d5429b8ac29e5ced482659f49"
  },
  {
    "url": "assets/static/favicon.b9532cc.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "540320e5aa9702b00a08f9e00d7a921e"
  },
  {
    "url": "assets/static/favicon.ce0531f.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "a8710ab24cde9ded477cd08f602f7349"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "7e2074d4885eacfb8d44276b74beac92"
  },
  {
    "url": "assets/static/favicon.f22e9f3.9bb7ffafafc09ac851d81afb65b8ef59.png",
    "revision": "94b22eed0bfc12ff09d62a86659c4fab"
  },
  {
    "url": "assets/static/favicon.png",
    "revision": "9bb7ffafafc09ac851d81afb65b8ef59"
  },
  {
    "url": "index.html",
    "revision": "e35bb83adf3e789044b2636debb030df"
  },
  {
    "url": "manifest.json",
    "revision": "465fc9f9e42381af261cee1ce4c411d4"
  },
  {
    "url": "meta/meta-img.png",
    "revision": "7c9e8b858c390fc4ed595769bae95f65"
  },
  {
    "url": "petition/index.html",
    "revision": "1a78c228cacb24e22dcdbeaab065cb91"
  },
  {
    "url": "thank-you/index.html",
    "revision": "75eb7623d44c1ac9fad829e041b1aa97"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "thank-you",
    "revision": "b1f1ddb0654bb164d846bd795ee52b43"
  },
  {
    "url": "petition",
    "revision": "394c3826d8f5fd6b8f723220e877f52b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})