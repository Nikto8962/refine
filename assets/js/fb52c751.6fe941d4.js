"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17098],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(a),d=r,f=s["".concat(m,".").concat(d)]||s[d]||u[d]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},90966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Migrating a React-Admin Application to Refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity.",slug:"migrating-a-react-admin-application-to-refine",authors:"umut",tags:["refine","react-admin","adminpanel","crud"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/migrating-a-react-admin-application-to-refine",source:"@site/blog/2021-10-6-migrating-react-admin-application-to-refine.md",title:"Migrating a React-Admin Application to Refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity.",date:"2021-10-06T00:00:00.000Z",formattedDate:"October 6, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react-admin",permalink:"/blog/tags/react-admin"},{label:"adminpanel",permalink:"/blog/tags/adminpanel"},{label:"crud",permalink:"/blog/tags/crud"}],readingTime:5.7,hasTruncateMarker:!0,authors:[{name:"Umut \xd6zdemir",title:"Frontend Developer",url:"https://github.com/miyavsu-limited",imageURL:"https://github.com/miyavsu-limited.png",key:"umut"}],frontMatter:{title:"Migrating a React-Admin Application to Refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity.",slug:"migrating-a-react-admin-application-to-refine",authors:"umut",tags:["refine","react-admin","adminpanel","crud"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Create E-mail Subscription Panel with Refine and Strapi",permalink:"/blog/e-mail-subscription-panel-with-refine"},nextItem:{title:"Build Fast and Customizable Admin Panel with NestJS",permalink:"/blog/customizable-admin-panel-with-nestjs"},relatedPosts:[{title:"How to Become A Production Hero as Developer with Refine in 2022",permalink:"/blog/how-to-become-a-production-hero-refine-2022",formattedDate:"February 21, 2022",authors:[{name:"Melih \xd6zkalay",title:"Frontend Developer",url:"https://github.com/ozkalai",imageURL:"https://github.com/ozkalai.png",key:"ozkalai"}],readingTime:2.04,date:"2022-02-21T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.64,date:"2022-07-21T00:00:00.000Z"},{title:"10 High-Quality Free Resources That Will Make Every Web Developer's Life Easier",permalink:"/blog/10-high-quality-free-resources",formattedDate:"May 2, 2022",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:4.005,date:"2022-05-02T00:00:00.000Z"}],authorPosts:[]},m={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity. My mission was to migrate it and it took one and a half days for me to rewrite the panel in refine."))}u.isMDXComponent=!0}}]);