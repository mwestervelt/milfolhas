(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h}),n.d(t,"pageQuery",function(){return d});var r=n(0),a=n.n(r),i=n(139),u=n(141),o=n.n(u),l=n(153),s=n(138),c=n.n(s),f=n(140),m=function(e,t){return t.allMarkdownRemark.edges.map(function(e){return e.node.frontmatter}).filter(function(t){return t.path===e}).pop()};function h(e){var t=e.data,n=t.markdownRemark,r=n.frontmatter.related?n.frontmatter.related.map(function(e){return m(e.post,t)}):[];return a.a.createElement(f.a,null,a.a.createElement("div",null,a.a.createElement(o.a,{title:"Blog | "+n.frontmatter.title},t.site.siteMetadata.disqus&&a.a.createElement("script",{id:"dsq-count-scr",src:"//gatsby-starter-blog.disqus.com/count.js",async:!0}),t.site.siteMetadata.disqus&&a.a.createElement("script",null,"(function() {\n          var d = document, s = d.createElement('script');\n          s.src = 'https://"+t.site.siteMetadata.disqus+".disqus.com/embed.js';\n          s.setAttribute('data-timestamp', +new Date());\n          (d.head || d.body).appendChild(s);\n          })();")),a.a.createElement(i.g,null,a.a.createElement("h1",{className:"display-3"},n.frontmatter.title)),a.a.createElement(i.g,{dangerouslySetInnerHTML:{__html:n.html}}),n.frontmatter.attachments&&a.a.createElement(i.g,null,a.a.createElement("h4",null,"Attachments"),a.a.createElement(i.c,null,n.frontmatter.attachments.map(function(e,t){return a.a.createElement(i.a,{key:t},a.a.createElement(i.b,null,a.a.createElement(i.f,null,a.a.createElement("a",{href:e.filename},Object(l.basename)(e.filename)))))}))),n.frontmatter.related&&a.a.createElement(i.g,null,a.a.createElement("h4",null,"Related"),a.a.createElement(i.c,null,r.map(function(e,t){return a.a.createElement(i.a,{key:t},a.a.createElement(i.b,null,a.a.createElement(i.f,null,a.a.createElement(c.a,{to:e.path},e.title))))}))),t.site.siteMetadata.disqus&&a.a.createElement(i.g,null,a.a.createElement("hr",null),a.a.createElement("div",{id:"disqus_thread"}))))}var d="3239617000"},153:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(e){return r.exec(e).slice(1)};function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var u=a>=0?arguments[a]:e.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(t=u+"/"+t,r="/"===u.charAt(0))}return(r?"/":"")+(t=n(i(t.split("/"),function(e){return!!e}),!r).join("/"))||"."},t.normalize=function(e){var r=t.isAbsolute(e),a="/"===u(e,-1);return(e=n(i(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var a=r(e.split("/")),i=r(n.split("/")),u=Math.min(a.length,i.length),o=u,l=0;l<u;l++)if(a[l]!==i[l]){o=l;break}var s=[];for(l=o;l<a.length;l++)s.push("..");return(s=s.concat(i.slice(o))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=a(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=a(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return a(e)[3]};var u="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(154))},154:function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var l,s=[],c=!1,f=-1;function m(){c&&l&&(c=!1,l.length?s=l.concat(s):f=-1,s.length&&h())}function h(){if(!c){var e=o(m);c=!0;for(var t=s.length;t;){for(l=s,s=[];++f<t;)l&&l[f].run();f=-1,t=s.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new d(e,t)),1!==s.length||c||o(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}}]);
//# sourceMappingURL=component---src-templates-blog-js-269b6a3e64749272ea10.js.map