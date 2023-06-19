"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(f,s(s({ref:t},l),{},{components:r})):o.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8642:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(7462),a=(r(7294),r(4137));const n={pagination_prev:"install-prerequisites",pagination_next:"create-azure-services"},s="GitHub Codespaces",i={unversionedId:"install-prerequisites/codespaces",id:"install-prerequisites/codespaces",title:"GitHub Codespaces",description:"GitHub Codespaces is a cloud-based development environment that allows you to code from anywhere. It's a great way to get started with the workshop. Follow these steps to create a codespace.",source:"@site/docs/17-install-prerequisites/05-codespaces.md",sourceDirName:"17-install-prerequisites",slug:"/install-prerequisites/codespaces",permalink:"/docs/install-prerequisites/codespaces",draft:!1,editUrl:"https://github.com/build-your-own-copilot/docs/tree/main/docs/17-install-prerequisites/05-codespaces.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{pagination_prev:"install-prerequisites",pagination_next:"create-azure-services"},sidebar:"tutorialSidebar",previous:{title:"Install prerequisites",permalink:"/docs/install-prerequisites"},next:{title:"Create Azure services",permalink:"/docs/create-azure-services"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"github-codespaces"},"GitHub Codespaces"),(0,a.kt)("p",null,"GitHub Codespaces is a cloud-based development environment that allows you to code from anywhere. It's a great way to get started with the workshop. Follow these steps to create a codespace."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/newpatiente2e/Contoso-New-Patient-App"},"Contoso New Patient App")," repo and click the ",(0,a.kt)("strong",{parentName:"p"},"Code")," button, then select ",(0,a.kt)("strong",{parentName:"p"},"Codespaces"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If prompted, select the smallest size VM to use for the codespace. As at Feburary 2023, this will be 2 vCPUs and 4GB of RAM.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"+")," button to create a new codespace. It will take a few minutes to create the codespace."),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Note, if you already have an active codespace running for the repo, you can select it from the list of active codespaces.")),(0,a.kt)("admonition",{parentName:"li",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"As at Feburary 2023, GitHub personal accounts have up to 120 core hours per month of free codespaces usage. When you have completed the workshop, be sure to stop the current codespace to preserve your usage."),(0,a.kt)("p",{parentName:"admonition"},'A "core hour" is a measure used for included compute usage. On a 2-core machine, you would get 60 hours free. On a 4-core machine, you would get 30 hours free, etc. ',(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces"},"Learn more")," "),(0,a.kt)("p",{parentName:"admonition"},"To stop a codespace, from VS Code in your web browser, select ",(0,a.kt)("kbd",null,"F1")," to open the command palette, then type and select ",(0,a.kt)("strong",{parentName:"p"},"Codespaces: Stop Codespace"),".")))),(0,a.kt)("p",null,"Congratulations! You've created a codespace. Now you can now continue with the next section of the workshop."))}d.isMDXComponent=!0}}]);