(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{150:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return y}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(149),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var s=n(156),d=n.n(s);n.d(e,"PageRenderer",function(){return d.a});var l=n(49);n.d(e,"parsePath",function(){return l.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(t,e,n){"use strict";n(157);e.a=function(t){return t.children}},154:function(t,e,n){"use strict";var a=n(158),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(159),s=n.n(u),d=n(150);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(d.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=l;var p="1025518380"},156:function(t,e,n){var a;t.exports=(a=n(167))&&a.default||a},157:function(t,e,n){},158:function(t){t.exports={data:{site:{siteMetadata:{title:"learn.graphile.org",description:"Learn GraphQL, PostgreSQL and PostGraphile with these handy resources",author:"@benjie"}}}}},167:function(t,e,n){"use strict";n.r(e);var a=n(14),r=n.n(a),i=n(0),o=n.n(i),c=n(4),u=n.n(c),s=n(73),d=n(2),l=function(t){var e=t.location,n=d.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(s.a,r()({location:e,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=l}}]);
//# sourceMappingURL=1-3103805630283b3c2e63.js.map