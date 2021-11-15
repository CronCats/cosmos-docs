"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3419],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7898:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=t(3117),a=t(102),s=(t(7294),t(3905)),o=["components"],c={sidebar_position:2},i="Infrastructure de la cha\xeene de blocs",u={unversionedId:"basics/infra",id:"basics/infra",isDocsHomePage:!1,title:"Infrastructure de la cha\xeene de blocs",description:"Dans les services web traditionnels, une application front end (comme une page web ou une application) interagit avec une application backend (comme les API ou un serveur Postgres).",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/basics/02-infra.md",sourceDirName:"basics",slug:"/basics/infra",permalink:"/fr/dev-academy/basics/infra",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"Qu'est-ce que la blockchain ?",permalink:"/fr/dev-academy/basics/what-is-blockchain"},next:{title:"Les bases de Cosmos SDK et CosmWasm",permalink:"/fr/dev-academy/basics/cosmos-sdk-cw"}},l=[],d={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"infrastructure-de-la-cha\xeene-de-blocs"},"Infrastructure de la cha\xeene de blocs"),(0,s.kt)("p",null,"Dans les services web traditionnels, une application front end (comme une page web ou une application) interagit avec une application backend (comme les API ou un serveur Postgres)."),(0,s.kt)("p",null,"Dans l'infrastructure blockchain, un frontend parle directement avec le r\xe9seau blockchain, visualisant l'\xe9tat de la cha\xeene. Un r\xe9seau de blockchain contient des n\u0153uds, qui valident les transactions et les ajoutent aux blocs. Ce r\xe9seau d\xe9centralis\xe9 de n\u0153uds prend la place de la base de donn\xe9es et des API dans un service web traditionnel. La blockchain elle-m\xeame sert de data store, et l'application (ou machine \xe0 \xe9tats) que les n\u0153uds ex\xe9cutent prend la place de ses API (en ing\xe9rant les transactions et en d\xe9finissant les transitions entre les \xe9tats)."),(0,s.kt)("p",null,"Dans l'infrastructure blockchain, un frontend parle directement au r\xe9seau blockchain, visualisant l'\xe9tat de la cha\xeene, ou interagit avec un backend qui est en connexion avec le r\xe9seau blockchain. Un r\xe9seau de blockchain a besoin d'un ensemble d'ordinateurs pour stocker et v\xe9rifier les donn\xe9es. Ces ordinateurs sont appel\xe9s des n\u0153uds, qui sont connect\xe9s et qui produisent des blocs, v\xe9rifiant les transactions. Chaque n\u0153ud poss\xe8de une copie des donn\xe9es qui ont \xe9t\xe9 stock\xe9es sur la blockchain depuis sa cr\xe9ation et qui sont mises \xe0 jour lorsque de nouveaux blocs sont confirm\xe9s et ajout\xe9s. Ce r\xe9seau de noeuds d\xe9centralis\xe9 remplace la base de donn\xe9es et les APIs d'un web service traditionnel. La blockchain elle-m\xeame sert de data store, et l'application (ou machine \xe0 \xe9tats) que les n\u0153uds ex\xe9cutent prend la place de ses API (en ing\xe9rant les transactions et en d\xe9finissant les transitions entre les \xe9tats)."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Note"),": Dans certains cas, les applications blockchain peuvent \xe9galement interagir avec un backend qui, \xe0 son tour, se connecte \xe0 la blockchain. Par exemple, l'infrastructure backend peut enregistrer les informations dans une base de donn\xe9es externe pour servir des requ\xeates complexes qui seraient co\xfbteuses \xe0 ex\xe9cuter sur la cha\xeene elle-m\xeame."))}p.isMDXComponent=!0}}]);