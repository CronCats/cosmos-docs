"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6621],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,h=m["".concat(c,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1701:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),s=["components"],i={sidebar_position:6},c="Next Steps",u={unversionedId:"getting-started/next-steps",id:"getting-started/next-steps",isDocsHomePage:!1,title:"Next Steps",description:"This was a simple example using the escrow contract we developed, but it should show you what is possible. You are limited only by the wasm code you upload and the json messages you send. The next step is Hijack Escrow tutorial where you will edit a smart contract to put a backdoor that enables a thief to steal funds. If you want a guided tutorial to build a contract from start to finish, check out the name service tutorial.",source:"@site/docs/02-getting-started/06-next-steps.md",sourceDirName:"02-getting-started",slug:"/getting-started/next-steps",permalink:"/fr/docs/1.0/getting-started/next-steps",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/02-getting-started/06-next-steps.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Uploading and Interacting",permalink:"/fr/docs/1.0/getting-started/interact-with-contract"},next:{title:"What are Multi-Chain Contracts?",permalink:"/fr/docs/1.0/architecture/multichain"}},p=[],l={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"This was a simple example using the escrow contract we developed, but it should show you what is possible. You are limited only by the wasm code you upload and the json messages you send. The next step is ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/hijack-escrow/intro"},"Hijack Escrow tutorial")," where you will edit a smart contract to put a backdoor that enables a thief to steal funds. If you want a guided tutorial to build a contract from start to finish, check out the ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/name-service/intro"},"name service tutorial"),"."),(0,o.kt)("p",null,"There are a variety of curated video and tutorial resources, which you can check out here: ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/videos-workshops"},"Videos and Workshops")),(0,o.kt)("p",null,"If you feel you understand enough (and have prior experience with rust), feel free to grab ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template"},(0,o.kt)("inlineCode",{parentName:"a"},"cosmwasm-template"))," and use that as a starting place to start hacking. Do not clone the repo, but rather follow the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template/blob/master/README.md"},"README")," on how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-generate")," to generate your skeleton."),(0,o.kt)("p",null,"In either case, there is documentation in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/go-cosmwasm/blob/master/spec/Index.md"},(0,o.kt)("inlineCode",{parentName:"a"},"go-cosmwasm"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/master/README.md"},(0,o.kt)("inlineCode",{parentName:"a"},"cosmwasm"))," that may be helpful. If you run into any issues (either bugs or just confusion), please submit them on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/issues"},(0,o.kt)("inlineCode",{parentName:"a"},"cosmwasm/issues"))," if they deal with the smart contract, and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/issues"},(0,o.kt)("inlineCode",{parentName:"a"},"wasmd/issues"))," if they have to do with the SDK integration."),(0,o.kt)("p",null,"Happy Hacking!"))}m.isMDXComponent=!0}}]);