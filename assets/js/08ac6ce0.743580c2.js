"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[639],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const a={},i="Clean up",c={unversionedId:"clean-up",id:"clean-up",title:"Clean up",description:"Deleting Azure resources",source:"@site/docs/45-clean-up.md",sourceDirName:".",slug:"/clean-up",permalink:"/docs/clean-up",draft:!1,editUrl:"https://github.com/build-your-own-copilot/docs/tree/main/docs/45-clean-up.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Azure services",permalink:"/docs/create-azure-services"},next:{title:"Summary",permalink:"/docs/summary"}},s={},u=[{value:"Deleting Azure resources",id:"deleting-azure-resources",level:2},{value:"Stop the GitHub Codespace",id:"stop-the-github-codespace",level:2},{value:"Deleted the Azure Container Instance",id:"deleted-the-azure-container-instance",level:2},{value:"Purging the Form Recognizer resource",id:"purging-the-form-recognizer-resource",level:2},{value:"Social",id:"social",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clean-up"},"Clean up"),(0,o.kt)("h2",{id:"deleting-azure-resources"},"Deleting Azure resources"),(0,o.kt)("p",null,"To delete the resources from Azure, from a VS Code terminal, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"azd down\n")),(0,o.kt)("p",null,"This will prompt you to confirm that you want to delete the resources. Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," to confirm."),(0,o.kt)("h2",{id:"stop-the-github-codespace"},"Stop the GitHub Codespace"),(0,o.kt)("p",null,"If you are using a GitHub Codespace, you will need to stop the codespace. To stop a codespace, from VS Code in your web browser, select ",(0,o.kt)("kbd",null,"F1")," to open the command palette, then type and select ",(0,o.kt)("strong",{parentName:"p"},"Codespaces: Stop Codespace"),"."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"As at Feburary 2023, GitHub personal accounts have up to 120 core hours per month of free codespaces usage. When you have completed the workshop, be sure to stop the current codespace to preserve your usage."),(0,o.kt)("p",{parentName:"admonition"},'A "core hour" is a measure used for included compute usage. On a 2-core machine, you would get 60 hours free. On a 4-core machine, you would get 30 hours free, etc. ',(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces"},"Learn more")," ")),(0,o.kt)("h2",{id:"deleted-the-azure-container-instance"},"Deleted the Azure Container Instance"),(0,o.kt)("p",null,"If you created an Azure Container Instance, you will need to delete it manually. To do this, from the Azure portal, open a Cloud Shell terminal and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az container delete -g rg-globalai --name newpatient\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The container instance costs approximately $US35 per month (as at Oct 2022). So, be sure to delete the container instance when you are done with the workshop.")),(0,o.kt)("h2",{id:"purging-the-form-recognizer-resource"},"Purging the Form Recognizer resource"),(0,o.kt)("p",null,"When deleting an Azure Form Recognizer resource, it's ",(0,o.kt)("em",{parentName:"p"},"soft deleted")," so you can recover it in the event of an accidental deletion. You have a 48hrs to recover a Form Recognizer resource. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/cognitive-services/manage-resources?WT.mc_id=aiml-99397-cxa"},"Recover deleted Cognitive Services resources")),(0,o.kt)("p",null,"This is optional, as Azure will perform a hard delete after 48hrs. You can force an immediate ",(0,o.kt)("em",{parentName:"p"},"hard delete")," using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$region=<Azure Region selected>\n$resourceName=<Form Recognizer resource name>\n$resourceGroupName=<Resource group name>\naz cognitiveservices account purge -l $region -n $resourceName -g $resourceGroupName\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The resource group name and region were specified when you setup the project during the ",(0,o.kt)("a",{parentName:"p",href:"/docs/create-azure-services"},"Create Azure resources")," step. The name of the Form Recognizer resource is prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"form-recognizer-")," and then a unique hash, that will be present in the logs when you cleaned up the resources in the previous step.")),(0,o.kt)("h2",{id:"social"},"Social"),(0,o.kt)("p",null,"Please tweet your questions, comments, and successes including hashtag #AzureFormRecognizer, the workshop link ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/PatientRegistration"},"https://aka.ms/PatientRegistration"),", and tag @dglover. Thank you."))}d.isMDXComponent=!0}}]);