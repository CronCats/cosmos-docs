"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5562],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8914:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},p="CW4 Stake",l={unversionedId:"cw4/cw4-stake-spec",id:"cw4/cw4-stake-spec",isDocsHomePage:!1,title:"CW4 Stake",description:"cw4-stake source",source:"@site/cw-plus/cw4/cw4-stake-spec.md",sourceDirName:"cw4",slug:"/cw4/cw4-stake-spec",permalink:"/cw-plus/0.9.0/cw4/cw4-stake-spec",editUrl:"https://github.com/InterWasm/docs/edit/main/cw-plus/cw4/cw4-stake-spec.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"cwPlus",previous:{title:"CW4 Group",permalink:"/cw-plus/0.9.0/cw4/cw4-group-spec"},next:{title:"cw721 Spec",permalink:"/cw-plus/0.9.0/cw721/spec"}},c=[{value:"Init",id:"init",children:[],level:2},{value:"Messages",id:"messages",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cw4-stake"},"CW4 Stake"),(0,i.kt)("p",null,"cw4-stake source\ncode: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/master/contracts/cw4-stake"},"https://github.com/CosmWasm/cw-plus/tree/master/contracts/cw4-stake")),(0,i.kt)("p",null,"This is a second implementation of the ",(0,i.kt)("a",{parentName:"p",href:"/cw-plus/0.9.0/cw4/spec"},"cw4 spec"),". It fulfills all elements of the spec, including the raw\nquery lookups, and is designed to be used as a backing storage for\n",(0,i.kt)("a",{parentName:"p",href:"/cw-plus/0.9.0/cw3/spec"},"cw3 compliant contracts"),"."),(0,i.kt)("p",null,"It provides a similar API to ","[",(0,i.kt)("inlineCode",{parentName:"p"},"cw4-group"),"]"," (which handles elected membership), but rather than appointing members (by\nadmin or multisig), their membership and weight are based on the number of tokens they have staked. This is similar to\nmany DAOs."),(0,i.kt)("p",null,"Only one denom can be bonded with both ",(0,i.kt)("inlineCode",{parentName:"p"},"min_bond")," as the minimum amount that must be sent by one address to enter, as\nwell as ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens_per_weight"),", which can be used to normalize the weight (eg. if the token is uatom and you want 1 weight\nper ATOM, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens_per_weight = 1_000_000"),")."),(0,i.kt)("p",null,"There is also an unbonding period (",(0,i.kt)("inlineCode",{parentName:"p"},"Duration"),') which sets how long the tokens are frozen before being released. These\nfrozen tokens can neither be used for voting, nor claimed by the original owner. Only after the period can you get your\ntokens back. This liquidity loss is the "skin in the game"\nprovided by staking to this contract.'),(0,i.kt)("h2",{id:"init"},"Init"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TODO")),(0,i.kt)("p",null,"To create it, you must pass in a list of members, as well as an optional\n",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),", if you wish it to be mutable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct InitMsg {\n  /// denom of the token to stake\n  pub stake: String,\n  pub tokens_per_weight: u64,\n  pub min_bond: Uint128,\n  pub unbonding_period: Duration,\n}\n")),(0,i.kt)("p",null,"Members are defined by an address and a weight. This is transformed and stored under their ",(0,i.kt)("inlineCode",{parentName:"p"},"CanonicalAddr"),", in a format\ndefined in\n",(0,i.kt)("a",{parentName:"p",href:"/cw-plus/0.9.0/cw4/spec#raw"},"cw4 raw queries"),"."),(0,i.kt)("p",null,"Note that 0 ",(0,i.kt)("em",{parentName:"p"},"is an allowed weight"),". This doesn't give any voting rights, but it does define this address is part of the\ngroup, which may be meaningful in some circumstances."),(0,i.kt)("p",null,"The weights of the members will be computed as the funds they send\n(in tokens) divided by ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens_per_weight"),", rounded down to the nearest whole number (i.e. using integer division). If\nthe total sent is less than\n",(0,i.kt)("inlineCode",{parentName:"p"},"min_bond"),", the stake will remain, but they will not be counted as a member. If ",(0,i.kt)("inlineCode",{parentName:"p"},"min_bond")," is higher\nthan ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens_per_weight"),", you cannot have any member with 0 weight."),(0,i.kt)("h2",{id:"messages"},"Messages"),(0,i.kt)("p",null,"Most messages and queries are defined by the\n",(0,i.kt)("a",{parentName:"p",href:"/cw-plus/0.9.0/cw4/spec"},"cw4 spec"),". Please refer to it for more info."),(0,i.kt)("p",null,"The following messages have been added to handle un/staking tokens:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Bond{}")," - bond all staking tokens sent with the message and update membership weight"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Unbond{tokens}")," - starts the unbonding process for the given number of tokens. The sender immediately loses weight from\nthese tokens, and can claim them back to his wallet after ",(0,i.kt)("inlineCode",{parentName:"p"},"unbonding_period")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Claim{}"),' - used to claim your native tokens that you previously "unbonded"\nafter the contract-defined waiting period (eg. 1 week)'),(0,i.kt)("p",null,"And the corresponding queries:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Claims{address}")," - Claims shows the tokens in process of unbonding for this address"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Staked{address}")," - Show the number of tokens currently staked by this address."))}d.isMDXComponent=!0}}]);