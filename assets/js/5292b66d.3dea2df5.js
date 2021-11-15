"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8016],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,h=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9672:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:2},s="Blockchain Infrastructure",l={unversionedId:"basics/infra",id:"basics/infra",isDocsHomePage:!1,title:"Blockchain Infrastructure",description:"In traditional web services, a frontend application (like a webpage or an app) interacts with a backend application (like APIs or a Postgres server).",source:"@site/dev-academy/basics/02-infra.md",sourceDirName:"basics",slug:"/basics/infra",permalink:"/dev-academy/basics/infra",editUrl:"https://github.com/InterWasm/docs/edit/main/dev-academy/basics/02-infra.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"What is Blockchain?",permalink:"/dev-academy/basics/what-is-blockchain"},next:{title:"Basics of Cosmos SDK and CosmWasm",permalink:"/dev-academy/basics/cosmos-sdk-cw"}},d=[],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blockchain-infrastructure"},"Blockchain Infrastructure"),(0,i.kt)("p",null,"In traditional web services, a frontend application (like a webpage or an app) interacts with a backend application (like APIs or a Postgres server)."),(0,i.kt)("p",null,"In blockchain infrastructure, a frontend speaks directly with the blockchain network, visualizing the state of the chain. A blockchain network contains nodes, which validate transactions and add them to blocks. This decentralized network of nodes takes the place of the database and APIs in a traditional web service. The blockchain itself serves as a data store, and the application (or state machine) that the nodes run take the place of its APIs (by ingesting transactions and defining transitions between states)."),(0,i.kt)("p",null,"In blockchain infrastructure, a frontend either speaks directly to the blockchain\nnetwork, visualizing the state of the chain,\nor interacts with a backend which is in connection with blockchain network.\nA blockchain network needs a collection of computers to store and verify data. These computers are called nodes, which are connected and building blocks, verifying transactions. Each node has a copy of the data that has been stored on the blockchain since its inception and it gets updated as fresh blocks are confirmed and added. This decentralized\nnetwork of nodes takes the place of the database and APIs in a traditional web\nservice. The blockchain itself serves as a data store, and the application (or\nstate machine) that the nodes run take the place of its APIs (by ingesting\ntransactions and defining transitions between states)."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note"),": In some cases, blockchain applications can also interact with a backend which in turn connects to the blockchain. For example, backend infrastructure can save information to an external database to serve complex queries that would be expensive to perform on the chain itself."))}u.isMDXComponent=!0}}]);