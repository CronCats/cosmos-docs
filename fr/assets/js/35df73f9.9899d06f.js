"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5855],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<o;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2031:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return l},default:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),s=["components"],i={sidebar_position:6},c="Next Steps",m={unversionedId:"getting-started/next-steps",id:"version-0.16/getting-started/next-steps",isDocsHomePage:!1,title:"Next Steps",description:"This is a very simple example for the escrow contract we developed, but it should show you what is possible, limited",source:"@site/docs_versioned_docs/version-0.16/02-getting-started/06-next-steps.md",sourceDirName:"02-getting-started",slug:"/getting-started/next-steps",permalink:"/fr/docs/0.16/getting-started/next-steps",editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.16/02-getting-started/06-next-steps.md",tags:[],version:"0.16",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.16/docsSidebar",previous:{title:"Uploading and Interacting",permalink:"/fr/docs/0.16/getting-started/interact-with-contract"},next:{title:"What are Multi-Chain Contracts?",permalink:"/fr/docs/0.16/architecture/multichain"}},l=[],p={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"This is a very simple example for the escrow contract we developed, but it should show you what is possible, limited\nonly by the wasm code you upload and the json messages you send. The next step is\n",(0,o.kt)("a",{parentName:"p",href:"/tutorials/hijack-escrow/intro"},"Hijack Escrow tutorial")," where you will edit a smart contract to put a backdoor that\nenables a thief to steal funds."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/videos-workshops"},"Videos and Workshops"),": We curated some video and workshop resources you can take a\nlook at"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://academy.terra.money/courses/cosmwasm-smart-contracts-i"},"Terra Academy"),": is a great tutorial series apart from here."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cawesome-wasm"},"cosmwasm/cawesome-wasm"),": Curated CosmWasm resources"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cosmwasm-template"},"cosmwasm-template"),": CosmWasm starter project. Do not clone the repo,\nbut rather follow the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cosmwasm-template/blob/master/README.md"},"README")," on how to use\n",(0,o.kt)("inlineCode",{parentName:"li"},"cargo-generate")," to generate your skeleton."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cw-plus"},"cosmwasm/cw-plus"),": Production grade, ready to secure billions, smart\ncontracts. Maintained and developed actively by Confio. Community made high quality smart contracts are hosted\nhere."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cw-examples"},"cosmwasm/cw-examples"),": Community made smart contracts.\nContributions are welcome."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/InterWasmDAO"},"InterWasm DAO"),": DAO for CosmWasm. If you have a great community\ngood project and require funds or help, create an ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/InterWasmDAO#interwasm-proposalsiwps"},"IWP"))),(0,o.kt)("p",null,"Happy Hacking!"))}u.isMDXComponent=!0}}]);