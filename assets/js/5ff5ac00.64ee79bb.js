"use strict";(self.webpackChunkaisdkdocumentation=self.webpackChunkaisdkdocumentation||[]).push([[865],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:e},c),{},{components:n})):a.createElement(g,o({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1624:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,title:"Installing AI SDK",description:"Installing AI SDK in your SAP Application Server."},o="Installing the AI SDK in SAP Application Server",l={unversionedId:"sdk-installation/installing-sdk",id:"sdk-installation/installing-sdk",title:"Installing AI SDK",description:"Installing AI SDK in your SAP Application Server.",source:"@site/docs/2-sdk-installation/1-installing-sdk.md",sourceDirName:"2-sdk-installation",slug:"/sdk-installation/installing-sdk",permalink:"/aisdkforsapabap/docs/sdk-installation/installing-sdk",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installing AI SDK",description:"Installing AI SDK in your SAP Application Server."},sidebar:"tutorialSidebar",previous:{title:"Installing the SDK",permalink:"/aisdkforsapabap/docs/category/installing-the-sdk"},next:{title:"Installing Certificates",permalink:"/aisdkforsapabap/docs/sdk-installation/install-certificate"}},s={},p=[],c={toc:p},d="wrapper";function u(t){let{components:e,...i}=t;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-the-ai-sdk-in-sap-application-server"},"Installing the AI SDK in SAP Application Server"),(0,r.kt)("p",null,"The AI SDK is available as a public Git Repository here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/aisdkforsapabap"},"AI SDK for SAP ABAP"),"."),(0,r.kt)("p",null,"We will use ABAPGit (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/abapGit/abapGit/graphs/contributors"},"Thank you Lars Hvam & Other Contributors")," for such an awesome capability) to install AI SDK to the SAP Application Server. If not done so already, install the latest version of ABAP Git.  Installation instructions can be found at : ",(0,r.kt)("a",{parentName:"p",href:"https://docs.abapgit.org/guide-install.html"},"abapGit documentation - Installation"),". "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Useful Links"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/microsoft/aisdkforsapabap"},"AI SDK Git Repository"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://abapgit.org/"},"ABAP Git "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.abapgit.org/guide-install.html"},"ABAP Git Installation "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.abapgit.org/guide-online-install.html"},"ABAP Git - Installing an Online Repo "))))),(0,r.kt)("p",null,"Once installed, run ABAPgit and pull the code from ",(0,r.kt)("strong",{parentName:"p"},"main")," branch to your system:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Folder Logic should be set to ",(0,r.kt)("strong",{parentName:"p"},"FULL"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pull from main branch",src:n(4168).Z,width:"1339",height:"818"})),(0,r.kt)("p",null,"If required, activate the objects in the package. In above screenshot, we chose the package as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ZPENGG_ARTIFICIAL_INTELLIGENCE")),". You can name the package as per your organization guidelines.\nFor an excellent Step-By-Step guide on using ABAP Git for installing an Online Repo, see : ",(0,r.kt)("a",{parentName:"p",href:"https://docs.abapgit.org/guide-online-install.html"},"abapGit documentation - Installing Online Repo"),". "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Folder Logic should be set to ",(0,r.kt)("strong",{parentName:"p"},"FULL"),".")))}u.isMDXComponent=!0},4168:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pull-from_main-a4f6781b0929d04a15366fde8a1cfd7f.jpg"}}]);