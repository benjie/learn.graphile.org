(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(151),o=n(153);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist..."))}},149:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(148),c=n.n(u);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var s=n(150),d=n.n(s);n.d(e,"PageRenderer",function(){return d.a});var l=n(33);n.d(e,"parsePath",function(){return l.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(t,e,n){var a;t.exports=(a=n(156))&&a.default||a},151:function(t,e,n){"use strict";n(157),n(152);e.a=function(t){return t.children}},152:function(t,e,n){},153:function(t,e,n){"use strict";var a=n(154),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(158),s=n.n(c),d=n(149);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,u=t.title;return i.a.createElement(d.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:u},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},e.a=l;var p="1025518380"},154:function(t){t.exports={data:{site:{siteMetadata:{title:"learn.graphile.org",description:"Learn GraphQL, PostgreSQL and PostGraphile with these handy resources",author:"@benjie"}}}}},156:function(t,e,n){"use strict";n.r(e);var a=n(14),r=n.n(a),i=n(0),o=n.n(i),u=n(4),c=n.n(u),s=n(57),d=n(2),l=function(t){var e=t.location,n=d.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(s.a,r()({location:e,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=l}}]);
//# sourceMappingURL=component---src-pages-404-js-fbbdb18416794083ab23.js.map