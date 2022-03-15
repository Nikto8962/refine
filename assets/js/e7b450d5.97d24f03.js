"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1449],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11713:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],c={id:"useResource",title:"useResource"},i=void 0,u={unversionedId:"core/hooks/resource/useResource",id:"core/hooks/resource/useResource",isDocsHomePage:!1,title:"useResource",description:"useResource is used to get resources that are defined as property of the `` component.",source:"@site/docs/core/hooks/resource/useResource.md",sourceDirName:"core/hooks/resource",slug:"/core/hooks/resource/useResource",permalink:"/docs/core/hooks/resource/useResource",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/resource/useResource.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1647323570,formattedLastUpdatedAt:"3/15/2022",frontMatter:{id:"useResource",title:"useResource"},sidebar:"someSidebar",previous:{title:"useShow",permalink:"/docs/core/hooks/show/useShow"},next:{title:"useResourceWithRoute",permalink:"/docs/core/hooks/resource/useResourceWithRoute"}},p=[{value:"API Reference",id:"api-reference",children:[{value:"Return value",id:"return-value",children:[{value:"Interfaces",id:"interfaces",children:[],level:4}],level:3}],level:2}],l={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useResource")," is used to get ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," that are defined as property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@pankod/refine-core";\n\nconst resources = useResource();\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"return-value"},"Return value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Resources"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#interfaces"},(0,a.kt)("inlineCode",{parentName:"a"},"IResourceItem[]")))))),(0,a.kt)("h4",{id:"interfaces"},"Interfaces"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type OptionsProps<TExtends = { [key: string]: any }> = TExtends & {\n    label?: string;\n    route?: string;\n}\n\ninterface IResourceComponentsProps<TCrudData = any, TOptionsPropsExtends = { [key: string]: any }> {\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canDelete?: boolean;\n    canShow?: boolean;\n    name?: string;\n    initialData?: TCrudData;\n    options?: OptionsProps<TOptionsPropsExtends>;\n}\n\ninterface IResourceComponents {\n    list?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    create?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    edit?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    show?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n}\n\ninterface IResourceItem extends IResourceComponents {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n    options?: OptionsProps;\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"canCreate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"canShow")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"canEdit")," properties are defined automatically if the ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," components are defined on the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," property in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),".")))}d.isMDXComponent=!0}}]);