if (!self.define) {
  let e,
    s = {};
  const n = (n, c) => (
    (n = new URL(n + ".js", c).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, a) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let t = {};
    const r = (e) => n(e, i),
      d = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(c.map((e) => d[e] || r(e))).then((e) => (a(...e), t));
  };
}
define(["./workbox-541f88f7"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/CNAME", revision: "11f78eea86cee5f810a5349398385637" },
        {
          url: "/_next/static/chunks/065a3ddb.9b99dcf241645264.js",
          revision: "9b99dcf241645264",
        },
        {
          url: "/_next/static/chunks/109.1686bc015a425943.js",
          revision: "1686bc015a425943",
        },
        {
          url: "/_next/static/chunks/215.9fb733d4d346b327.js",
          revision: "9fb733d4d346b327",
        },
        {
          url: "/_next/static/chunks/32.2954f0e8e686da76.js",
          revision: "2954f0e8e686da76",
        },
        {
          url: "/_next/static/chunks/453.7ce4087d61f4cc7f.js",
          revision: "7ce4087d61f4cc7f",
        },
        {
          url: "/_next/static/chunks/466.65dd8b6cd3ce4b3b.js",
          revision: "65dd8b6cd3ce4b3b",
        },
        {
          url: "/_next/static/chunks/4a5bdccf.1a9f95ea5640c6ae.js",
          revision: "1a9f95ea5640c6ae",
        },
        {
          url: "/_next/static/chunks/59b4e022.fe324f9529c87127.js",
          revision: "fe324f9529c87127",
        },
        {
          url: "/_next/static/chunks/69bd6bf3.3be180836127b58d.js",
          revision: "3be180836127b58d",
        },
        {
          url: "/_next/static/chunks/81ca6f2a.6f5b1eaf2946a6b6.js",
          revision: "6f5b1eaf2946a6b6",
        },
        {
          url: "/_next/static/chunks/823-6bb1226044891a05.js",
          revision: "6bb1226044891a05",
        },
        {
          url: "/_next/static/chunks/915.c01e8d631e5d71aa.js",
          revision: "c01e8d631e5d71aa",
        },
        {
          url: "/_next/static/chunks/916-4bfe553daa3b41ef.js",
          revision: "4bfe553daa3b41ef",
        },
        {
          url: "/_next/static/chunks/9296490e.54ade19f5f80855b.js",
          revision: "54ade19f5f80855b",
        },
        {
          url: "/_next/static/chunks/9814d858.0c30bade4842395c.js",
          revision: "0c30bade4842395c",
        },
        {
          url: "/_next/static/chunks/c8eae200.b0a421e3055feec7.js",
          revision: "b0a421e3055feec7",
        },
        {
          url: "/_next/static/chunks/d50d312a.cb8556d628764291.js",
          revision: "cb8556d628764291",
        },
        {
          url: "/_next/static/chunks/f36c6662.8bd4b99cfdd13db4.js",
          revision: "8bd4b99cfdd13db4",
        },
        {
          url: "/_next/static/chunks/main-db8dd5036a037d1a.js",
          revision: "db8dd5036a037d1a",
        },
        {
          url: "/_next/static/chunks/pages/_app-72bf29df73bcd0d1.js",
          revision: "72bf29df73bcd0d1",
        },
        {
          url: "/_next/static/chunks/pages/_error-7608f7038469bf2b.js",
          revision: "7608f7038469bf2b",
        },
        {
          url: "/_next/static/chunks/pages/acerca-de-142cad78adbfdd19.js",
          revision: "142cad78adbfdd19",
        },
        {
          url: "/_next/static/chunks/pages/compartir/%5BfragmentoId%5D-d63e264d45fa500b.js",
          revision: "d63e264d45fa500b",
        },
        {
          url: "/_next/static/chunks/pages/index-e034d96aed634742.js",
          revision: "e034d96aed634742",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-f93112c3d7eb5992.js",
          revision: "f93112c3d7eb5992",
        },
        {
          url: "/_next/static/css/210ab11b6664e24b.css",
          revision: "210ab11b6664e24b",
        },
        {
          url: "/_next/static/media/escudo.86a8fb32.png",
          revision: "60a2580488741f5171ffb16eb104756b",
        },
        {
          url: "/_next/static/media/titulo.00319e1d.png",
          revision: "8c8825bea1eac6f15e02d4c5fbc7693d",
        },
        {
          url: "/_next/static/z1sGlH7L72djh6Egco7EH/_buildManifest.js",
          revision: "0fbc2ebd41914ef576e55ca231093505",
        },
        {
          url: "/_next/static/z1sGlH7L72djh6Egco7EH/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "334fdb796617edf90b925977e8907e4b",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "2fedf973f187e15bf5398017921d5b49",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "5948485b33640339e728787cc8b99003",
        },
        {
          url: "/favicon-16x16.png",
          revision: "411c227583603b4bc6b9745b275caaa2",
        },
        {
          url: "/favicon-32x32.png",
          revision: "d396c968db30425c7a02b8c83a0b56e4",
        },
        { url: "/favicon.ico", revision: "ec84edb7cdaf3cab37bcd8a0436e0f70" },
        {
          url: "/fonts/ConvencionFJ-Regular.ttf",
          revision: "2a127c517c2ef9c6e64fa2ee109cd3c3",
        },
        {
          url: "/fonts/ConvencionFJ-Regular.woff2",
          revision: "e49b9eda8e0a9ef1095a461d7a6d2fd6",
        },
        {
          url: "/images/escudo.png",
          revision: "60a2580488741f5171ffb16eb104756b",
        },
        {
          url: "/images/logo.png",
          revision: "9755a37e908ebefedb24dcf2fefe3416",
        },
        {
          url: "/images/screenshot-actions-menu.png",
          revision: "c7532d4db5bc56d0236cf488ebceade5",
        },
        {
          url: "/images/screenshot-anchor-link.png",
          revision: "2b5fa973c288988630d847e990c85cbd",
        },
        {
          url: "/images/screenshot-cross-reference-1.png",
          revision: "4970c279695b11e2c0aa82bee9652b31",
        },
        {
          url: "/images/screenshot-cross-reference-2.png",
          revision: "bcc6eb9db1da8cc64f2a6ed4de0f0314",
        },
        {
          url: "/images/screenshot-install-app.png",
          revision: "82f315e1d7597da39c78f6d6b0c12fd8",
        },
        {
          url: "/images/screenshot-link-law.png",
          revision: "c4e1e3dd4a2627b365ee364048fd5f1d",
        },
        {
          url: "/images/screenshot-reference.png",
          revision: "ac0aeb5027e28bc3808c912be7b1df19",
        },
        {
          url: "/images/screenshot-social-articulo.png",
          revision: "1bbc2789e1b00ade76ec582876623f12",
        },
        {
          url: "/images/screenshot-tag-links.png",
          revision: "60fa07eec98e8a7e1eca68a77315446a",
        },
        {
          url: "/images/titulo.png",
          revision: "8c8825bea1eac6f15e02d4c5fbc7693d",
        },
        {
          url: "/site.webmanifest",
          revision: "e012de515b0b252e70cf4b38e37ef4fa",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: c,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
