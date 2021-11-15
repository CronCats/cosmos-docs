"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8453],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3730:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],s={title:"Advanced Tips",sidebar_position:2},c="Advanced REPL tips",l={unversionedId:"tips",id:"tips",isDocsHomePage:!1,title:"Advanced Tips",description:"You must read cw20 tutorial first. This section builds on top of it.",source:"@site/cw-plus/tips.md",sourceDirName:".",slug:"/tips",permalink:"/cw-plus/0.9.0/tips",editUrl:"https://github.com/InterWasm/docs/edit/main/cw-plus/tips.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Advanced Tips",sidebar_position:2},sidebar:"cwPlus",previous:{title:"Overview",permalink:"/cw-plus/0.9.0/overview"},next:{title:"Spec",permalink:"/cw-plus/0.9.0/cw1/intro"}},u=[{value:"Interactive Discovery",id:"interactive-discovery",children:[],level:2},{value:"Multiple Wallets",id:"multiple-wallets",children:[],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-repl-tips"},"Advanced REPL tips"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must read ",(0,o.kt)("a",{parentName:"p",href:"/cw-plus/0.9.0/cw20/cw20-base-tutorial"},"cw20 tutorial")," first. This section builds on top of it."))),(0,o.kt)("p",null,"You got your hands dirty with Node REPL. Now let's dig in a bit deeper of some advanced functions you can use."),(0,o.kt)("h2",{id:"interactive-discovery"},"Interactive Discovery"),(0,o.kt)("p",null,"So far you have been cut-and-pasting commands in the tutorials when using node repl. But what else can you do with this\ncontract? Luckily Javascript has some nice introspection. And, we added some extra bonuses there. Just type\n",(0,o.kt)("inlineCode",{parentName:"p"},"mine")," in the REPL and see the list of methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},">> mine\n{ contractAddress: 'cosmos1jatwj0hq5qxrmd6y4qnfrg5lstmdk26akcrasl',\n  balance: [AsyncFunction: balance],\n  allowance: [AsyncFunction: allowance],\n  tokenInfo: [AsyncFunction: tokenInfo],\n  minter: [AsyncFunction: minter],\n  mint: [AsyncFunction: mint],\n  transfer: [AsyncFunction: transfer],\n  burn: [AsyncFunction: burn],\n  increaseAllowance: [AsyncFunction: increaseAllowance],\n  decreaseAllowance: [AsyncFunction: decreaseAllowance],\n  transferFrom: [AsyncFunction: transferFrom] }\n")),(0,o.kt)("p",null,"But how do I call them? What arguments do they take? You can always go look up the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/master/contracts/cw20-base/helpers.ts#L151-L167"},"original helper file on the web"),"\nand see all the types defined there."),(0,o.kt)("p",null,"But why switch to a browser and get distracted by something else? There is a great ",(0,o.kt)("inlineCode",{parentName:"p"},".type")," operator to show you this\nwithout ever leaving the REPL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},">>\nconst _i = mine.increaseAllowance\nundefined\n>>\n.\ntype\n_i\nconst _i: (recipient: string, amount: string) => Promise<string>\n\n>>\nconst _a = mine.allowance\nundefined\n>>\n.\ntype\n_a\nconst _a: (owner: string, spender: string) => Promise<string>\n")),(0,o.kt)("p",null,"One note, ",(0,o.kt)("inlineCode",{parentName:"p"},".type")," is a bit finicky and stops at the first dot, so this simpler version doesn't work, just describes\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"mine")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},">> .type mine.increaseAllowance\nconst mine: cw20Instance\n>> .type mine\nconst mine: cw20Instance\n")),(0,o.kt)("p",null,"Armed with that knowledge, let's try to add an allowance and query it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"mine.increaseAllowance(other, \"5000\")\nmine.allowance(client.senderAddress, other)\n'5000'\n")),(0,o.kt)("h2",{id:"multiple-wallets"},"Multiple Wallets"),(0,o.kt)("p",null,"You know how we keep starting every session with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const client = await useOptions(hackatomOptions).setup(YOUR_PASSWORD_HERE);\n")),(0,o.kt)("p",null,"What if I told you there was more you could do here? Don't believe me, just explore for yourself:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {setup} = useOptions(hackatomOptions);\n.\ntype\nsetup\n// this gives:\nconst setup: (password: string, filename?\n:\nstring\n) =>\nPromise < SigningCosmWasmClient >\n")),(0,o.kt)("p",null,"Yup... it takes a second argument. You don't HAVE to store your keys in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.coral.key"),". That's just a default. It also\nmeans we could make 2 clients using different key files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const client = await setup(YOUR_PASSWORD_HERE)\nconst partner = await setup(OTHER_PASSWORD, \"/home/user/.test2.key\")\n\n// let's make sure they are unique\nclient.getAccount()\npartner.getAccount()\n\n// and move some tokens around\npartner.sendTokens(client.senderAddress, [{denom: 'ucosm', amount: '200000'}])\n\nclient.getAccount()\npartner.getAccount()\n")),(0,o.kt)("p",null,"This let's us then try more complex use cases with the cw20 contract. Sending back and forth, ",(0,o.kt)("inlineCode",{parentName:"p"},"transferFrom"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"burnFrom"),"\n, etc"),(0,o.kt)("p",null,"That's enough hints from me. Time for you to go play with the contract on your own..."))}d.isMDXComponent=!0}}]);