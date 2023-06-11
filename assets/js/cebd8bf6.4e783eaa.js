"use strict";(self.webpackChunkaisdkdocumentation=self.webpackChunkaisdkdocumentation||[]).push([[777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,title:"First Test Run - Open AI",description:"Testing the installation with Models Demo Program."},o="Testing the Installation.",s={unversionedId:"sdk-installation/smoke-testing-openai",id:"sdk-installation/smoke-testing-openai",title:"First Test Run - Open AI",description:"Testing the installation with Models Demo Program.",source:"@site/docs/2-sdk-installation/3-smoke-testing-openai.md",sourceDirName:"2-sdk-installation",slug:"/sdk-installation/smoke-testing-openai",permalink:"/aisdkforsapabap/docs/sdk-installation/smoke-testing-openai",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"First Test Run - Open AI",description:"Testing the installation with Models Demo Program."},sidebar:"tutorialSidebar",previous:{title:"First Test Run - Azure Open AI",permalink:"/aisdkforsapabap/docs/sdk-installation/smoke-testing-azoai"},next:{title:"Working With SDK",permalink:"/aisdkforsapabap/docs/category/working-with-sdk"}},l={},p=[],c={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-the-installation"},"Testing the Installation."),(0,a.kt)("p",null,"With AI SDK installed in SAP application server, lets run the Models Demo program that was imported into the system as part of SDK demo package.\nThe program name is : ",(0,a.kt)("strong",{parentName:"p"},"ZP_MSAISDKDEMO_MODELS_OAI")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Transaction SE38, and enter program name: ZP_MSAISDKDEMO_MODELS_OAI & execute (F8)\n",(0,a.kt)("img",{alt:"SE38 Screen",src:n(3022).Z,width:"603",height:"369"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the Base URL and previously generated authentication key (",(0,a.kt)("a",{parentName:"p",href:"/aisdkforsapabap/docs/Initial%20Setup/open-ai/oai-initial-setup"},(0,a.kt)("strong",{parentName:"a"},"Open AI Initial Setup"))," ). Additionally, enter the version string as ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"v1"))," exactly."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Initial Screen",src:n(8042).Z,width:"755",height:"328"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the program by pressing F8 or clicking on the \u201cExecute\u201d button on toolbar.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the parameters are entered correctly, AND, ",(0,a.kt)("strong",{parentName:"p"},"certificates are set up for secure communication to the end point"),", the program should stop at the first break point like so:\n",(0,a.kt)("img",{alt:"Break Point Screen",src:n(5711).Z,width:"1585",height:"1006"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Double-Click on ",(0,a.kt)("strong",{parentName:"p"},"model_list")," variable, and inspect it in debugger. Double-Click on \u201cDATA\u201d field to see the list of models available in your Azure Open AI resource.\n",(0,a.kt)("img",{alt:"Model List in SAP",src:n(6248).Z,width:"1326",height:"828"})))))}m.isMDXComponent=!0},3022:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Models_DemoProgram_SE38Screen_openai-b27ece5a84e82213c7ffd857c0dd3a52.png"},8042:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Models_Demo_InitialScreen_openai-9dac776bbf766446f3f607b70a8e5310.png"},5711:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Models_demo_debugscreen1_openai-185f3068a89d936a87af0ddc9619fe1c.png"},6248:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Models_demo_sap_listmodels_openai-5c507e6eef182386cc69dc0cabbec23c.png"}}]);