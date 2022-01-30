'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0cf69404e3b97c859bc44ff73cf60a87",
".git/config": "c746106fe04a99c6f3fec288b58d2ad9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4523922ac06701870707bce8022f7c82",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b83ea9e49a22e0c200a2e4d427116e8d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "911900b7b3f10953b34a2308a2f318b2",
".git/logs/refs/heads/main": "6c354f9f74802543199901b9578ec980",
".git/logs/refs/remotes/origin/main": "f78d0ab76fc9bd44f3f2660aba130f1f",
".git/objects/01/9070f63fd46ffefd56c3dc7e29b2696099edc1": "fe05acd3c4bf04c88dc82fec37da38c6",
".git/objects/06/65b351e2cc444e5726bd0f060166aa60c92693": "51e6d2323bee2c0aa1b1b0169e1aaa82",
".git/objects/0e/f00c4bc6414401a8117397f8a1777fb170baad": "b4f9e7f1c78be560d4b0ac05d1fb8eda",
".git/objects/13/46956cf9317ac6f8e5d334ef20c569e836f1cb": "b267b8954e2656265d640398e9f2dd41",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/17/ecb4574ca1b64050a2e0eb27efdae62f7b6a75": "80c06b77932074bd63bece7d37476853",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/1a/f0ccde227787e1dbd4b7094627eef1713bf324": "301475c163f9f72690a72d755a171797",
".git/objects/2b/059939f47090d10dc12fb14d35ddbedee67e88": "f0ca44d3379237aa02408197c7d0d9bc",
".git/objects/2b/3cf2f6ff8796f56ae8c271f73fdc56758d02ca": "d3d60a2c943ae85c1cf4c812c60fcf89",
".git/objects/30/cc95b373430c55acc007da2d7860a478b5e3fa": "d5ac8824025681363a09f217a1296445",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/601bdb011302e80cd2656eb535c03787b912c0": "ef4d474b131611d1d2ea941dbe24eeab",
".git/objects/36/1cf167662b53c748fb88826f3d05858f62f55a": "f3786e406761ff657594cb84be3e0d6f",
".git/objects/42/aaa83066fdf3d6fd9bb4b2b95c892f9e81d86a": "cf6d80d5a56cdfa861ad840743199576",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/3cff3d16b34efd9320324982ccb446a5a14dab": "73c8f17465a951729ac43a0a3aaffbbe",
".git/objects/49/a8e21c7651a77d15ef1a8f8b3bfb9be8f6f427": "8cc0a39c7ff3f481812a65e2da27175b",
".git/objects/4a/ef121f92368adb2c0e20ec9158251deba0f023": "8ed1a14d58cab92736da9ea2fc349485",
".git/objects/4b/a11ba922d928153b2122e40d8120ea97bf87f5": "aa67bc47603c6e9ad229dce4dacb9120",
".git/objects/50/0265df8ebf60d2a2178a4ecd188d94810548fa": "13b219a3f3b9c9902567462bd1ce772d",
".git/objects/51/30836d69419a5c975ec95a1b030593f818928e": "0914e316d22f03fcdfdcd710e939b6a5",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/59/215b57281e7390da2795ad394f06b42c4307f3": "7b6cbbafe15dbd1cf2c50dc768527f97",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/5e/3c11ac86736e3e96df87ce0196556d0275840f": "17368c30eb57aa788e38cedb7c264629",
".git/objects/67/abc755c7bd8aec7bcb74d62116e9814358bfa1": "44215fdfa66cc9429160b76c28b504e6",
".git/objects/73/387ed7372d61db4f23c7f2c0ba0dda25d7911c": "60c1472c15137656854b1ddf8a980a0c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/088e5e47d7ed9fed511d988f9978bfe48cf973": "ece51ded0352dae3a5503ffd1d28af1e",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/81/a2cafec707ee12c04a3af7ebb9110431d9a9af": "6fcbb7b84c9f5971296815856cf34ab0",
".git/objects/86/cbacdc127c82e45ccef3497250a696baf09b3f": "33fd325df636ff2c1fe8d78f8b4bd449",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f3b6b5d9482bbdea6cf50f6e67b2bfd6ff0061": "05d0fbb80f38385fed5c22b3d69755b1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/c36d135245e727963bcda7ac53cb01bde4737d": "f56bed79641f5a35c08c51e83b66c93e",
".git/objects/91/8bbd26ac83b6c9efdc268ba6a367d6a49ae8bc": "034fc97f9055052b39741f059e5aee42",
".git/objects/a0/4fc30a3463ec82068524415955ba31e56e7b70": "961efcb3c0a4de3d5ac49ac1fce636c2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/94004abc6d919b2317c4aa572b3b924e7d85ce": "89dd95e7385dbb92b2bf50dad8a81477",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/57af3f9d1b734fd4c584cbac97cd0047d2e7b0": "4d5f93fa31100ddfa1dc938e73326a59",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/caf16afc6f34f3ed9ef59144a590125256c3eb": "bd45a553a81945d06599918a673cc5fe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/bdf1449df4763fd15d687f8854e130f7482a62": "d3ee5d21f0a2d8832c8fa5d9fd3cbd53",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c7/11993a63965ca555dbb9b9a411ea55837eec10": "cbeb277148afb1be2f17ce530cc395cb",
".git/objects/c8/1b5c3b011f5bb5dff30d49970577cccfae71a1": "1bece4b231a9d0d135fcc1df8c74403d",
".git/objects/c9/890f4ba325e2d5db2a974c4f8e253545677a2b": "fb30aef9f21d2c3090a88d3b2f28f16c",
".git/objects/cb/d33aea3b04b49a6b21a4e957634a83178b0ab5": "463e97301170032ad666a681c8c04a75",
".git/objects/cd/8fe0781700ef2841af74a8b1e835f2962a66f5": "a75db99df0a7b84be888716caaf60fe4",
".git/objects/d2/df574582dc61efbd8aaeb45591b11d53704dad": "2d9158c710eaf63de8c86c1bd25c1604",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/6ad7bfbc3acd7703d2e91fb588a1455214283c": "735b4e250640756611da51ef044e3255",
".git/objects/e4/ef8264f58e992761b0bd5c0f4f895f232d911f": "ae38824450e30857ce2db4f8ef97db1e",
".git/objects/e5/5b3b6b94d1227a2c2576e38a21e22647795e12": "51a607305d29cbd9b854ff4cafffa014",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/fd367676078810c6b0243cc68b30a1ae7af541": "3845797734f1e238f1d43c66898b66a2",
".git/objects/e8/767aaafd6395b4c36fbc2b5a9ad71551729de6": "4eee64d04d9062871d9a4b44cdd5d6a6",
".git/objects/eb/304ba23f7090c3d7dd295a2c35cc57f5ce1e46": "ce95e0dc9172b0a55dbdbb51a3254ee6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/efb1aef4fac256772794ce56e71d7ceda639b5": "a8cd1b789ec3fbfd55e76d3ef47f6e95",
".git/objects/f0/05182569e41f6bc81b3659ab583ae84414981c": "35eedbfcb346bd63b5f560056db80a5b",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/f4/35f37f9b5bff9233991d90f69781e586514f7f": "211409d4a5195490e6aa26d813041698",
".git/objects/f5/f3e7967e0137fcb6c263fc590138657b9d5030": "b8f6c41105573d886b3c3682157b6574",
".git/objects/f7/e8efc3c76910f87b395079691cab612245b80a": "afd845e2d2764487924b20562beb365a",
".git/objects/f8/ab71d2d89c69bd0fa80f62664a14422adaa1b8": "b1f33ebc256d5218c7b5b148647b0dd0",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/objects/fa/fac4a9afc9f5e111fd644ba744bd4db33775b8": "a279f4ca66714bed4eb33d1015603583",
".git/refs/heads/main": "327e1f05af242ba296b892753c38f2e3",
".git/refs/remotes/origin/main": "327e1f05af242ba296b892753c38f2e3",
"assets/AssetManifest.json": "ca8d7561391c9e1c721fe5be1015d1e8",
"assets/assets/image/2Player.png": "8bee9391d2d7e74a56101b7d0bd5a652",
"assets/assets/image/autoPlay.png": "0d5ce0e12efa16a9ee630a55591de6a8",
"assets/assets/image/splash.gif": "38bb86d3da23ebbf13d105e24c3a1e8a",
"assets/assets/image/tic-tac-toe.png": "e7484368df4d23a47c51242e7cfeb490",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/image/tic-tac-toe.png": "e7484368df4d23a47c51242e7cfeb490",
"assets/NOTICES": "5f565ab8422750c1410112235ab1aa81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3d7b1966d5359867cb4b9662bd55eb9a",
"/": "3d7b1966d5359867cb4b9662bd55eb9a",
"main.dart.js": "15032394686a4b1b7ebbe7d11fb871e3",
"manifest.json": "cedd0d21130762ad85e3d6b98c919985",
"version.json": "1318222dfdf66e81dd27a3c0d750e993"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
