"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[811],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const r={pagination_prev:"install-prerequisites",pagination_next:"create-azure-services"},i="Azure Container Instance",l={unversionedId:"install-prerequisites/container-instances",id:"install-prerequisites/container-instances",title:"Azure Container Instance",description:"If you can't use GitHub Codespaces or run Docker on your machine, you can use a Developer Container Instance to use for the workshop. We'll be connecting to the container instance using VS Code Remote SSH.",source:"@site/docs/17-install-prerequisites/10-container-instances.md",sourceDirName:"17-install-prerequisites",slug:"/install-prerequisites/container-instances",permalink:"/docs/install-prerequisites/container-instances",draft:!1,editUrl:"https://github.com/build-your-own-copilot/docs/tree/main/docs/17-install-prerequisites/10-container-instances.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{pagination_prev:"install-prerequisites",pagination_next:"create-azure-services"},sidebar:"tutorialSidebar",previous:{title:"Install prerequisites",permalink:"/docs/install-prerequisites"},next:{title:"Create Azure services",permalink:"/docs/create-azure-services"}},s={},p=[{value:"Install the development tools",id:"install-the-development-tools",level:2},{value:"Sign in to Azure and start the Azure Cloud Shell",id:"sign-in-to-azure-and-start-the-azure-cloud-shell",level:2},{value:"Create an Azure resource group",id:"create-an-azure-resource-group",level:2},{value:"Create an Developer Container Instance",id:"create-an-developer-container-instance",level:2},{value:"Test the connection to the container",id:"test-the-connection-to-the-container",level:3},{value:"Connect to the container using VS Code Remote SSH",id:"connect-to-the-container-using-vs-code-remote-ssh",level:3},{value:"Clone the workshop repository",id:"clone-the-workshop-repository",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"azure-container-instance"},"Azure Container Instance"),(0,o.kt)("p",null,"If you can't use GitHub Codespaces or run Docker on your machine, you can use a ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/container-instances?WT.mc_id=aiml-99397-cxa"},"Developer Container Instance")," to use for the workshop. We'll be connecting to the container instance using VS Code Remote SSH."),(0,o.kt)("h2",{id:"install-the-development-tools"},"Install the development tools"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/?WT.mc_id=aiml-99397-cxa"},"Visual Studio Code"),"."),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For chromebooks, review ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/blogs/2020/12/03/chromebook-get-started?WT.mc_id=aiml-99397-cxa"},"learning with VS Code on Chromebooks"))))),(0,o.kt)("h2",{id:"sign-in-to-azure-and-start-the-azure-cloud-shell"},"Sign in to Azure and start the Azure Cloud Shell"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign in to the ",(0,o.kt)("a",{parentName:"li",href:"https://portal.azure.com/?WT.mc_id=aiml-99397-cxa"},"Azure portal")," using your Azure account."),(0,o.kt)("li",{parentName:"ol"},"Start the Azure Cloud Shell by clicking the ",(0,o.kt)("strong",{parentName:"li"},"Cloud Shell")," button in the Azure portal.\n",(0,o.kt)("img",{alt:"The image shows the cloud shell",src:n(8516).Z,width:"1214",height:"40"})),(0,o.kt)("li",{parentName:"ol"},"You may be prompted to create a storage account. If so, select ",(0,o.kt)("strong",{parentName:"li"},"Create storage"),".")),(0,o.kt)("p",null,"You will be presented with a bash terminal window in the Azure portal."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The image shows the cloud shell prompt",src:n(4740).Z,width:"1342",height:"787"})),(0,o.kt)("h2",{id:"create-an-azure-resource-group"},"Create an Azure resource group"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a resource group using your preferred location. The following example creates a resource group named ",(0,o.kt)("inlineCode",{parentName:"p"},"rg-globalai")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"eastus")," location."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az group create --name rg-globalai --location eastus\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"List the Azure locations by running the following command:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az account list-locations --output table\n"))))),(0,o.kt)("h2",{id:"create-an-developer-container-instance"},"Create an Developer Container Instance"),(0,o.kt)("p",null,"Next, create a developer Azure Container Instance (ACI) that will host the development environment for the workshop."),(0,o.kt)("p",null,"The command will take approximately 2 minutes to complete and will return the IP address of the container instance. You will use this IP address to connect to the container instance using VS Code Remote SSH. Be sure to copy the IP address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'az container create -g rg-globalai --name newpatient --image ghcr.io/newpatiente2e/contoso-new-patient-app:main --cpu 1 --memory 1.5 --ports 22 --protocol tcp --ip-address public --os-type linux --output jsonc --query "ipAddress.ip"\n')),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The container instance costs approximately $US35 per month (as at Oct 2022). Be sure to follow the instructions to ",(0,o.kt)("a",{parentName:"p",href:"/docs/clean-up"},"delete the container instance")," when you are done with the workshop.")),(0,o.kt)("h3",{id:"test-the-connection-to-the-container"},"Test the connection to the container"),(0,o.kt)("p",null,"From the Azure Cloud Shell, run the following command to test the connection to the container. The password is ",(0,o.kt)("inlineCode",{parentName:"p"},"back2gether"),". Type ",(0,o.kt)("inlineCode",{parentName:"p"},"exit")," to close the SSH session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh globalai@xx.xxx.xx.xx\n")),(0,o.kt)("h3",{id:"connect-to-the-container-using-vs-code-remote-ssh"},"Connect to the container using VS Code Remote SSH"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open VS Code."),(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh"},"Remote - SSH")," extension."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Remote-SSH: Connect to Host")," from the Command Palette (Ctrl+Shift+P)."),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("a",{parentName:"li",href:"mailto:globalai@xx.xxx.xx.xx"},"globalai@xx.xxx.xx.xx")," the container instance. The password is ",(0,o.kt)("inlineCode",{parentName:"li"},"back2gether"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Linux")," when prompted for the operating system."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Continue")," to verify the fingerprint."),(0,o.kt)("li",{parentName:"ol"},"Enter the password for the container instance. The password is ",(0,o.kt)("inlineCode",{parentName:"li"},"back2gether"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Don't show again")," to disable the warning about the operating system.")),(0,o.kt)("h3",{id:"clone-the-workshop-repository"},"Clone the workshop repository"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Clone Git Repository"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"The image shows hwo to select clone a repo",src:n(2009).Z,width:"1122",height:"636"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following URL:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://github.com/newpatiente2e/Contoso-New-Patient-App.git\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"The image shows how to enter the repo url",src:n(3081).Z,width:"1124",height:"307"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose a folder to clone the repository in to. Select the default folder, ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/ubuntu/"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"OK")," to clone the repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will be prompted to open the cloned repository. Select ",(0,o.kt)("strong",{parentName:"p"},"Open"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will be prompted for the password. Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"back2gether"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Trust the authors of the files"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, select ",(0,o.kt)("strong",{parentName:"p"},"Yes, I trust the authors"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A number of notifications will appear."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Don't Show Again")," to disable ",(0,o.kt)("strong",{parentName:"li"},"Reopen in Container"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Install")," for ",(0,o.kt)("strong",{parentName:"li"},"Install Recommended Extensions"),"."),(0,o.kt)("li",{parentName:"ol"},"Close the remaining notifications."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Restore")," to restore the app dependencies. Note, it may take approximately 20 seconds for the ",(0,o.kt)("strong",{parentName:"p"},"Restore")," notification to appear.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Explorer")," view from the VS Code ",(0,o.kt)("strong",{parentName:"p"},"Activity Bar"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"DON'T")," close VS Code, as you'll need it open for the rest of the workshop."))),(0,o.kt)("p",null,"Congratulations! You have successfully created a developer container instance and connected to it utilizing VS Code Remote SSH."))}m.isMDXComponent=!0},3081:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/clone_repo_url-3059e0c4eaba6c3737d5a9d6e96d362d.png"},2009:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/clone_repository-3db0d0678d91668a3a12d7ffc7aacde6.png"},8516:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABL4AAAAoCAMAAADHTMNzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuUExURRwcHP8AAFhXV8fFw+Hf3SoqKsbGxv///3FxcdTU1GNjY5ubmzg4OLi4uOPj48fHx4CAgFVVVaqqqtXV1UdHR/Hx8bm5ufLy8pycnI6Ojn59fEBAQE1MTD8/P3JxcNTS0FRUVFlYV5aVlDw8O8C+vZ+enF5dXUhIR7+/v0JCQs7Ozvv7+3t7e2VkY42NjaamptPT0/n5+e3t7by8vP39/aKiosLCwrq6ulpaWru7u8jGxK6urtvb28zMzPf397Gxsebm5ujo6PPz88rKyouLizMzM8TExHR0dE5OTvr6+rKysoGBgX5+fuXl5ZSUlOrq6qysrNHR0ZCQkNnZ2YqJiMjIyPT09ODg4IqKioWFhbOzs+7u7vDw8KCgoJqamoSEhOTk5Ovr69bW1igoKH9+fX9/f97e3tDQ0J2dnby6uE1NTHFwb+/v76SkpG9vb76+vm5ubtra2rW1tefn55aWlnh4ePX19YyMjKGhocnJydyK/SsAAAAJcEhZcwAADsIAAA7CARUoSoAAAAqzSURBVHhe7Z2Ne9PGGcCvgHK2Y+RItiPbg5WSjzVkS5pUeGFsKYRCYBlQ2jEGZWywrYV9f3Uf//3er1Mkx5LllFIrvL+Hxzqd7qRzTvd73jvJD0ZRFEVRFEVRFEVRFEVRFEVRFEVRlK/DOxORgkplOXX6jKJUmtOn5GbOIo4qQAoqlUXtpVSe03IzZ5mkJ9VX9ZEbQFEqjNzMWVRfJx/pf0WpMHIzZ1F9nXyk/xWlwsjNnEX1dfKR/leUCiM3c5Zj6cubsykk87Xg1eoN49Xnm7JfSO2sb22psi1pKiF5bw/S/4pSYeRmzuL0JEP7EM4er68FPwjbAbNQQgfgmblSRup0F2uR1wv7fk9y8gl82+71+4vWzktOPq2+JICWbN8epP8dg++cO//dd2VHUaqB3MxZEn2JjRxtzh6vr34L/zHBRH159VYtCHp+TfaLiODkfuSZfso346nZdkAJr2/rHqXymV5fnQsZSkWDs4r0v/DeANR18VzWX1BqSZLjWFqWxDfJipnyKsupJqfTRxjgwQH+KQackbD6vdEcZUbB7jtCoi/eJLhBPk5f/Tk/mEJfrZA2nahD23zgeKtjvABc0QpMs9BJHRvC8eYFPGfDnuXMXNJXLqevzHTT2ok2zeN9y9++FGuX1u33Jf0akf5nLvJ4vfgD2gg4rAcF8ngj+pqa0vrCv4BZhY9l/EixbGb0qylHkJs5S0pftbQvivTV8qNaeX0FviRqi5LIwetGc76EOWHdjxY4OR6/Da1tdC3ZYcE2ODePYGOeQzWgnL6Ozaa1H1BibctuG/NhfJn2SjG0/g+z+tqJ7RVJHh/pf+bcj3h7njcEjOJiqq2vAch5NS2uFbcDR/CgUgHkZs6S0lfPTwUpRfqabvLYc5GLN6Ek6K0D9upsoEcDL9HeOGoWdRS1mwsWLdeqU24eYdTv+y4K+ub1Fe9g4qpFfU3Fjy3W/Mku7yFXbQzz6a+J9D/j9s7JlnCTKii8grM4g/O4JdjCJ55gafnwNJzNJXFChlk89cQkmiFVMVuOkR0+gmVX8eowwcPc3FquUa4lsKE5YTot7eCTHNYG+S5nJqaJvvBIgfeUGQK68ygpfZladLg8VVpfzUnzqlZyUlJOPm0qGPr90Kc4sGjcLuLaXBNPSIv8tUIz1vB8Hp/+Dehr236EiWvbU+trm74GfzLX927YjyV9bKT/GbfodZM3DDgBN0vgERjn8LkCg3qJjAAjfQA+OIxfOJtKYtSGCsIykIvnIH2lKqbLMa4SXwvLrmDFpRWsn1sraRRkYkuwyCpeB3Bp1w7apmpjSooyTl+UC0eVCiA3c5a0vkwj2qAdoIS+mhsOyR5PK5HWBH3Vog0PppqgGpxmBvWiuSY/mYRosUPLUs1CfbFAay0TXDDNC8WBmqM3l+HQ65PYtLe2rsN2315BfQ3tpjG363fsnZ9C+taePTA/uxvbXZwS3rtv7X3YfgJz4Pv3zAEusm3Tp/s6B/bBpzQXHVJuzKc7sJ+h5M6uw/k/2bV3hlw4F+l/5ucw1oHs2hcMfwjAaDRTKESDGoTCZoEkxC4uTKFsLskxDYqCiuCWoy9XMVNO4B13LSyLH3h2U1CLgKPSErqmtMilXTv4JIe1sRidEuIx2GD4BuB1V+nio1dRZhLuthEy+gIZuAWnEvoKbLtFFLqjvL5M0w/kkSOcMf2w8ChuLd2rRxSpFeuLVsYaLdOynW67XPTVkSewQvknj5t2+BADpofxjtPXzi/so/DSh5COf2nM43h9+ORzOzT78dMnT55ikc+fDNfjxzvhng1/RZ9uovvQPjN7W2vG/DoMw99AVJfW1/PbWLcevrDvS/EcpP+Zd3/7uzFPHnFUr+D8DB/O0QDncU3DPpFGkk6VXJEykI0XIn0lFTPlHFxJjmDZM4NVsiboq7CWaxS0hApKi1zatYO3h7WxGKstqSHRF2VSC5SZh26KUTL68sK2G6cl9OX5/MCvV7w6U1pf3nzUNAs4cj0fztr9PWePxelrUR5nFuqrR+1chIDNdqd4Dng8QF/7EDCtbX1gnL4egquQob0Bn1/YT3FdP167bL+EhNmJI/DTS1YSFjucPK5tbRnzwF6lnU0skdYXnGYnxtBsb48K5CL9T7w6/2pw8w/n/zhqLxjGAxn3FL2IKSRLpJGkJRtB6+EWsnE7oq90OUkgUCl1NpQLXzO/VrpRqCq6FpdzadeOw+pSG/NxgjmqL7AmQLWUmUdu5ixpfXl1fJzHFOnLvTjRoYeDjQmP/Urrq42vQnhRDdqBc7VGkRXbMrMUjRU/P/Ci+U5nHsO0ad5iOCagL/NFvHMVIjCnr2u0Ii/uMfGfMP2ZPVh7aneHt81lewszsPCovl7ixPGZfYTpxhZaLq0vyLxMc8pJPySQ/kde3XwlqTTLMLZxsgURD4DDfwCVyCyYxTFSWl+uJOgBJn601oTagkxMpyqmy0kEJJX4CJc9s0oLa3A8v1aqUdgSLEJrbIBLu3bQSeQyCNXhFye4huiLru2+ljLjyM2cJaWvTvJwDijSV/LiBD7/a3YLZ3lT6CukE3mLES+ye0X66lkW7QJHi8UBoBfiEEc5lrdXTZb1hOKWp0F9vbQfXb/ORkLfbFsQDzCiL7P25+d2t1Ggry/ITdbuQyD2PH4MOSP62rQ3/oJQ6Vyk/4Hx9uJbA4c6l16CmZuYgrKWEmkgSbbB+RlZgcqgIqAi7KcqpsuJNFKVkovwG6vYUMgcWyvdKGwJHnRhVpKGLWXh1l0G4Hcj8HFkZjWNv5C+OFERsPuOkNLXIsZSHRovXpnJIxB2zcS1pNL66vgbc84vNT88W/S7oSaHXd4GRX6yl0PHxyY0Wun3QibS42U9xzRL9zBTjHZxxuf09YAfRYq+rlnw0Nre1tpt2PmrPfs3uw12u4eB1oi+dmzcBp7jGW/xq7khzj9pGkmluO4kpP/z7fVmWE27ozTHq5VBArhR+CEF+1OZeeRmzpLSV4ZifdVFX1BtgpOyr68Xl+31A/khkPEXgn7hcnmPpqyBxWa49fsc2uLB3sTfFr0OSF9X6N0vp6/92P49rOPSPerrWUxL9/8wm/8Mw6f2X+YSLd2vQ4jF4npkX3yJWzgLvQD7sY3grN0QMPs2Hg7XE32ZF1A3fDThzVjp/zNnvlV7fYskL4hloL+LPGhVZh65mbMcS1/NiG3UKqEvfITX84O+jw/wJvrD90wwNw9RxsRwp21xaX8BIqpm3RbFVbUkPGwVvsf/miB98ZK605f56m5s//1M9EXvS+AjhP90eWuu7Nr47leQYCU93rO8Fh/JK1/X7cst/oPDH+aOff7fQ32t/e+Oje8fULFcpP8VpcLIzZwl0Ze84OTocvZ4fRkPXRQEnRL6Qrx2vdQPtk2zG5j2QrvhFc4cCW/RztUgQAvmbfGPKfm1CaRR7pWvE4f0v6JUGLmZszg9sY9ScHaOvhLsXBl9ge7KrTt5C3530XQiG5Y4a6NNEUnUL47pbDIJLX659eQi/a8oFUZu5iwT9DTxuDL7SP8rSoWRmzmL6uvkI/2vKBVGbuYsqq+Tj/S/olQYuZmzqL5OPvrf1CqVR/+b2reVU+ovpeKcPiU3c5Z3JiIFFUVRZgtxVAFSUFEURVEURVEURVEURVEURVEU5Q1hzP8BzzYqnnBUk8YAAAAASUVORK5CYII="},4740:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud_shell_prompt-277a56287b9492a3004d572fd2bb2dc7.png"}}]);