"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[821],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(4137));const n={},i="Create a project",l={unversionedId:"form-recognizer-studio/create-project",id:"form-recognizer-studio/create-project",title:"Create a project",description:"The Form Recognizer Studio provides and orchestrates all the API calls required to complete your dataset and train your model.",source:"@site/docs/25-form-recognizer-studio/30-create-project.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/create-project",permalink:"/docs/form-recognizer-studio/create-project",draft:!1,editUrl:"https://github.com/build-your-own-copilot/docs/tree/main/docs/25-form-recognizer-studio/30-create-project.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Upload training data",permalink:"/docs/form-recognizer-studio/upload-training-data"},next:{title:"Label your data",permalink:"/docs/form-recognizer-studio/label-data"}},c={},p=[],s={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-project"},"Create a project"),(0,o.kt)("p",null,"The Form Recognizer Studio provides and orchestrates all the API calls required to complete your dataset and train your model."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start by navigating to ",(0,o.kt)("a",{parentName:"p",href:"https://formrecognizer.appliedai.azure.com/studio"},"Form Recognizer Studio"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Custom models")," tile, on the custom models page."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"The image shows the custom models tile",src:r(8045).Z,width:"502",height:"613"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, select the ",(0,o.kt)("strong",{parentName:"p"},"Create a project")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the create project dialog, provide a"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Name for your project,"),(0,o.kt)("li",{parentName:"ol"},"Optionally a description,"),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Continue"),".")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"The image shows how to enter project details",src:r(6817).Z,width:"1051",height:"715"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the next page, complete the following steps:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Select your Azure subscription."),(0,o.kt)("li",{parentName:"ol"},"Select the resource group whose name starts with ",(0,o.kt)("strong",{parentName:"li"},"rg-contoso-health-app-NNNNNN"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the Form Recognizer service Resource."),(0,o.kt)("li",{parentName:"ol"},"Select API version ",(0,o.kt)("strong",{parentName:"li"},"2022-08-31 (General Availability)"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Continue"),".")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Select the Form Recognizer resource",src:r(7134).Z,width:"1050",height:"717"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, select the storage account where you uploaded your custom model training dataset."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Select your Azure subscription."),(0,o.kt)("li",{parentName:"ol"},"Select the resource group ",(0,o.kt)("strong",{parentName:"li"},"rg-contoso-health-app-NNNNNN"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the storage account, there should be only one storage account in this resource group."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"trainingdata")," blob container."),(0,o.kt)("li",{parentName:"ol"},"Leave the ",(0,o.kt)("strong",{parentName:"li"},"Folder path")," field empty."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Continue"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Create project"),".")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"The image shows how to select the training data source",src:r(2202).Z,width:"1034",height:"712"})))),(0,o.kt)("p",null,"The form recognizer service will now be created and configured. Once the service is created, the Studio will open the project and display the ",(0,o.kt)("strong",{parentName:"p"},"Label data")," page along with the first pre-labeled document. "),(0,o.kt)("p",null,"Close the ",(0,o.kt)("strong",{parentName:"p"},"Upload a document")," dialogue as you have already uploaded the documents to the Azure Storage account used by this Form Recognizer project."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The image shows the first form",src:r(9132).Z,width:"1151",height:"1147"})))}u.isMDXComponent=!0},2202:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/connect_training_data_source-d98c3a376cfacf0f30373aa0ff3731fa.png"},7134:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-service-resources-a05ec72b45296d76a0658e1152ab6a78.png"},8045:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/custom_models_tile-2a867ee47bd9e719f9fdd56ffcb84c15.png"},9132:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/first_pre_labeled_form-a658952cced8a4dfe1e1b1c2cbbf1d42.png"},6817:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/new_project_wizard-774b51e326358890ce13620b9906f1fe.png"}}]);