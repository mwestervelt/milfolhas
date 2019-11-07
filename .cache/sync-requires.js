// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-atlantic-forest-js": preferDefault(require("/Users/marielwestervelt/Documents/milfolhas1/src/templates/atlantic-forest.js")),
  "component---src-templates-blog-js": preferDefault(require("/Users/marielwestervelt/Documents/milfolhas1/src/templates/blog.js")),
  "component---src-templates-contact-js": preferDefault(require("/Users/marielwestervelt/Documents/milfolhas1/src/templates/contact.js")),
  "component---src-templates-reforestation-js": preferDefault(require("/Users/marielwestervelt/Documents/milfolhas1/src/templates/reforestation.js")),
  "component---src-templates-zecar-js": preferDefault(require("/Users/marielwestervelt/Documents/milfolhas1/src/templates/zecar.js")),
  "component---src-templates-about-js": preferDefault(require("/Users/marielwestervelt/Documents/milfolhas1/src/templates/about.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/marielwestervelt/Documents/milfolhas1/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/marielwestervelt/Documents/milfolhas1/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/marielwestervelt/Documents/milfolhas1/src/pages/index.js"))
}

