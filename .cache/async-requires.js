// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-js": () => import("./../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-index-2-js": () => import("./../src/pages/index2.js" /* webpackChunkName: "component---src-pages-index-2-js" */),
  "component---src-pages-page-2-js": () => import("./../src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

