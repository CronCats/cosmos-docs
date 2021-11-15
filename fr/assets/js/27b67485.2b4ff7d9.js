"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4555],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),d=o,h=l["".concat(c,".").concat(d)]||l[d]||m[d]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3430:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:6},c="Next Steps",p={unversionedId:"getting-started/next-steps",id:"version-0.14/getting-started/next-steps",isDocsHomePage:!1,title:"Next Steps",description:"This is a very simple example for the escrow contract we developed, but it should show you what is possible, limited",source:"@site/docs_versioned_docs/version-0.14/02-getting-started/06-next-steps.md",sourceDirName:"02-getting-started",slug:"/getting-started/next-steps",permalink:"/fr/docs/0.14/getting-started/next-steps",editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.14/02-getting-started/06-next-steps.md",tags:[],version:"0.14",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.14/docsSidebar",previous:{title:"Uploading and Interacting",permalink:"/fr/docs/0.14/getting-started/interact-with-contract"},next:{title:"What are Multi-Chain Contracts?",permalink:"/fr/docs/0.14/architecture/multichain"}},u=[],m={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"This is a very simple example for the escrow contract we developed, but it should show you what is possible, limited\nonly by the wasm code you upload and the json messages you send. The next step is\n",(0,a.kt)("a",{parentName:"p",href:"/tutorials/hijack-escrow/intro"},"Hijack Escrow tutorial")," where you will edit a smart contract to put a backdoor that\nenables a thief to steal funds. If you want a guided tutorial to build a contract from start to finish, check out\nthe ",(0,a.kt)("a",{parentName:"p",href:"/tutorials/name-service/intro"},"name service tutorial"),"."),(0,a.kt)("p",null,"We curated some video and workshop resources you can take a look at: ",(0,a.kt)("a",{parentName:"p",href:"/tutorials/videos-workshops"},"Videos and Workshops")),(0,a.kt)("p",null,"If you feel you understand enough (and have prior experience with rust), feel free to grab\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template"},(0,a.kt)("inlineCode",{parentName:"a"},"cosmwasm-template"))," and use that as a configured project to start\nmodifying. Do not clone the repo, but rather follow the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template/blob/master/README.md"},"README")," on how to use\n",(0,a.kt)("inlineCode",{parentName:"p"},"cargo-generate")," to generate your skeleton."),(0,a.kt)("p",null,"In either case, there is some documentation in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/go-cosmwasm/blob/master/spec/Index.md"},(0,a.kt)("inlineCode",{parentName:"a"},"go-cosmwasm"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/master/README.md"},(0,a.kt)("inlineCode",{parentName:"a"},"cosmwasm"))," that may be helpful. Any issues (either bugs or\njust confusion), please submit them on\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/issues"},(0,a.kt)("inlineCode",{parentName:"a"},"cosmwasm/issues"))," if they deal with the smart contract,\nand ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/issues"},(0,a.kt)("inlineCode",{parentName:"a"},"wasmd/issues"))," if they have to do with the SDK integration."),(0,a.kt)("p",null,"Happy Hacking!"))}l.isMDXComponent=!0}}]);