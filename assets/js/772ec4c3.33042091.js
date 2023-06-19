/*! For license information please see 772ec4c3.33042091.js.LICENSE.txt */
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[702],{4137:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8471:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>V,contentTitle:()=>W,default:()=>M,frontMatter:()=>B,metadata:()=>D,toc:()=>Q});var n,o=r(7462),i=r(7294),a=r(4137),s=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return s(t,e),t}(Error);function c(e,t){if(!e)throw new l(t)}function u(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(r)))}));return t.length>0?"?".concat(t.join("&")):""}var p=r(4184),h=r.n(p),d=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},f.apply(this,arguments)},w=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(t){i(t)}}function s(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))},m=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r,n,o=t.props,i=o.onShareWindowClose,a=o.windowHeight,s=void 0===a?400:a,l=o.windowPosition,c=void 0===l?"windowCenter":l,u=o.windowWidth,p=void 0===u?550:u;!function(e,t,r){var n=t.height,o=t.width,i=g(t,["height","width"]),a=f({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),s=window.open(e,"",Object.keys(a).map((function(e){return"".concat(e,"=").concat(a[e])})).join(", "));if(r)var l=window.setInterval((function(){try{(null===s||s.closed)&&(window.clearInterval(l),r(s))}catch(e){console.error(e)}}),1e3)}(e,f({height:s,width:p},"windowCenter"===c?(r=p,n=s,{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-r/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-n/2}):function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}}(p,s)),i)},t.handleClick=function(e){return w(t,void 0,void 0,(function(){var t,r,n,o,i,a,s,l,c,u;return m(this,(function(p){switch(p.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,s=t.openShareDialogOnClick,l=t.opts,c=o(a,l),n?[2]:(e.preventDefault(),r?(u=r(),!(h=u)||"object"!=typeof h&&"function"!=typeof h||"function"!=typeof h.then?[3,2]:[4,u]):[3,2]);case 1:p.sent(),p.label=2;case 2:return s&&this.openShareDialog(c),i&&i(e,c),[2]}var h}))}))},t}return d(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,o=e.disabledStyle,a=e.forwardedRef,s=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),c=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,g(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=h()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),d=f(f(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},c),n&&o);return i.createElement("button",f({},u,{"aria-label":u["aria-label"]||s,className:p,onClick:this.handleClick,ref:a,style:d}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(i.Component);var v=function(){return v=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},v.apply(this,arguments)};const y=function(e,t,r,n){function o(o,a){var s=r(o),l=v({},o);return Object.keys(s).forEach((function(e){delete l[e]})),i.createElement(b,v({},n,l,{forwardedRef:a,networkName:e,networkLink:t,opts:r(o)}))}return o.displayName="ShareButton-".concat(e),(0,i.forwardRef)(o)};const k=y("twitter",(function(e,t){var r=t.title,n=t.via,o=t.hashtags,i=void 0===o?[]:o,a=t.related,s=void 0===a?[]:a;return c(e,"twitter.url"),c(Array.isArray(i),"twitter.hashtags is not an array"),c(Array.isArray(s),"twitter.related is not an array"),"https://twitter.com/share"+u({url:e,text:r,via:n,hashtags:i.length>0?i.join(","):void 0,related:s.length>0?s.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});var A=function(){return A=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},A.apply(this,arguments)},O=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function C(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,o=t.iconFillColor,a=t.round,s=t.size,l=O(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return i.createElement("svg",A({viewBox:"0 0 64 64",width:s,height:s},l),a?i.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):i.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),i.createElement("path",{d:e.path,fill:o}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}const P=C({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});const j=y("weibo",(function(e,t){var r=t.title,n=t.image;return c(e,"weibo.url"),"http://service.weibo.com/share/share.php"+u({url:e,title:r,pic:n})}),(function(e){return{title:e.title,image:e.image}}),{windowWidth:660,windowHeight:550,windowPosition:"screenCenter"});const N=C({color:"#CD201F",networkName:"weibo",path:"M40.9756152,15.0217119 C40.5000732,15.0546301 39.9999314,15.1204666 39.5325878,15.2192213 C38.6634928,15.4085016 38.0977589,16.2643757 38.2863368,17.1284787 C38.4667163,18.0008129 39.3194143,18.5686519 40.1885094,18.3793715 C42.8613908,17.8115326 45.7720411,18.6427174 47.7316073,20.8153207 C49.6911735,22.996153 50.2077122,25.975254 49.3714112,28.5840234 C49.1008441,29.4316684 49.5763861,30.3533789 50.4208857,30.6249537 C51.2653852,30.8965286 52.1754769,30.4192153 52.4542425,29.5715703 C53.6349013,25.9011885 52.9133876,21.7699494 50.1585171,18.7085538 C48.0923641,16.4042776 45.2063093,15.1533848 42.3530505,15.0217119 C41.8775084,14.9970227 41.4511594,14.9887937 40.9756152,15.0217119 Z M27.9227762,19.8277737 C24.9957268,20.140498 20.863421,22.4365431 17.2312548,26.0822378 C13.2711279,30.0571148 11,34.2871065 11,37.9328012 C11,44.9032373 19.8713401,49.125 28.5786978,49.125 C39.9917329,49.125 47.600423,42.4261409 47.600423,37.1427636 C47.600423,33.9496952 44.9603397,32.1638816 42.549827,31.4149913 C41.9594976,31.2339421 41.5167516,31.1434164 41.8283133,30.3616079 C42.5006339,28.66632 42.6236176,27.1932286 41.8939054,26.1480742 C40.5328692,24.1894405 36.7203236,24.2881952 32.448635,26.0822378 C32.448635,26.0822378 31.1203949,26.6912261 31.4647526,25.6213825 C32.1206742,23.4981576 32.0304845,21.712342 31.0056075,20.6836478 C30.2840938,19.9512176 29.2510184,19.6878718 27.9227762,19.8277737 Z M42.0906819,20.6836478 C41.6233383,20.6589586 41.1723917,20.716566 40.7132466,20.8153207 C39.9671353,20.9716828 39.4997917,21.7781784 39.6637721,22.5270687 C39.8277525,23.275959 40.5574647,23.7450433 41.303576,23.5804521 C42.1972686,23.3911718 43.2057485,23.6380596 43.8616701,24.3704897 C44.5175916,25.1029198 44.6733735,26.0657797 44.3864073,26.9381118 C44.1486363,27.6705419 44.5093932,28.4770397 45.2391054,28.7156963 C45.9688176,28.9461239 46.780521,28.5922524 47.0100936,27.8598223 C47.584026,26.0740087 47.2396661,24.0248493 45.8950269,22.5270687 C44.886547,21.4078489 43.4845162,20.7494842 42.0906819,20.6836478 Z M29.496988,29.9665891 C35.3100922,30.1723275 39.9917329,33.0691319 40.3852858,37.0769272 C40.8362324,41.6607904 35.5970585,45.9319315 28.6442899,46.6232144 C21.6915214,47.3144973 15.6488446,44.154347 15.197898,39.5787128 C14.7469514,34.9948495 20.059916,30.7237084 27.004486,30.0324256 C27.8735831,29.950131 28.6688875,29.9336709 29.496988,29.9665891 Z M25.5614586,34.3776322 C23.183744,34.5916017 20.9372116,35.9577073 19.9205332,37.9328012 C18.5348994,40.6238672 19.9041362,43.6029661 23.0689567,44.582284 C26.340366,45.5945202 30.1857056,44.0638213 31.5303448,41.1587879 C32.8503864,38.3195909 31.1613894,35.3734082 27.9227762,34.5751416 C27.1438688,34.3776322 26.356763,34.3035667 25.5614586,34.3776322 Z M24.052839,38.7228388 C24.3316067,38.7310678 24.5857748,38.8215935 24.8399449,38.9203482 C25.8648218,39.3400561 26.1845841,40.4428158 25.5614586,41.4221338 C24.9219361,42.3932227 23.5690963,42.8623069 22.5442194,42.4096807 C21.5357395,41.9652856 21.2487754,40.8542948 21.8882979,39.9078951 C22.3638421,39.2001542 23.2247386,38.7146097 24.052839,38.7228388 Z"});const x=y("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return c(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+u({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});const F=C({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});const H=y("email",(function(e,t){var r=t.subject,n=t.body,o=t.separator;return"mailto:"+u({subject:r,body:n?n+o+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}});const z=C({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"});const R=y("linkedin",(function(e,t){var r=t.title,n=t.summary,o=t.source;return c(e,"linkedin.url"),"https://linkedin.com/shareArticle"+u({url:e,mini:"true",title:r,summary:n,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600});const E=C({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});function S(e){let{page_url:t,image_url:r,title:n,hashtags:o,hashtag:a,description:s}=e;return i.createElement("div",null,i.createElement(k,{url:t,title:s,hashtags:[o]},i.createElement(P,{size:32,round:!0})),"\xa0",i.createElement(j,{url:t,image:r},i.createElement(N,{size:32,round:!0})),"\xa0",i.createElement(x,{url:t,quote:n,hashtag:a},i.createElement(F,{size:32,round:!0})),"\xa0",i.createElement(R,{title:n,url:t},i.createElement(E,{size:32,round:!0})),"\xa0",i.createElement(H,{subject:n,body:s,url:t},i.createElement(z,{size:32,round:!0})))}const B={sidebar_position:1,slug:"/",image:"https://newpatiente2e.github.io/docs/assets/images/registration_process-43dca5d4795ea05a0b16a2046696e41e.png",description:"\ud83c\udfed Learn how to build a new patient registration system using Azure Form Recognizer"},W="Workshop Introduction",D={unversionedId:"introduction",id:"introduction",title:"Workshop Introduction",description:"\ud83c\udfed Learn how to build a new patient registration system using Azure Form Recognizer",source:"@site/docs/10-introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/build-your-own-copilot/docs/tree/main/docs/10-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",image:"https://newpatiente2e.github.io/docs/assets/images/registration_process-43dca5d4795ea05a0b16a2046696e41e.png",description:"\ud83c\udfed Learn how to build a new patient registration system using Azure Form Recognizer"},sidebar:"tutorialSidebar",next:{title:"Install prerequisites",permalink:"/docs/install-prerequisites"}},V={},Q=[{value:"Please share",id:"please-share",level:2},{value:"Workshop problem statement",id:"workshop-problem-statement",level:2},{value:"Workshop goals",id:"workshop-goals",level:2},{value:"Introduction to Form Recognizer",id:"introduction-to-form-recognizer",level:2},{value:"Workshop Personas",id:"workshop-personas",level:2},{value:"Workshop outline",id:"workshop-outline",level:2},{value:"Solution overview",id:"solution-overview",level:2}],Z={toc:Q},T="wrapper";function M(e){let{components:t,...n}=e;return(0,a.kt)(T,(0,o.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"workshop-introduction"},"Workshop Introduction"),(0,a.kt)("p",null,"Most of the forms we complete nowadays are online but there are still times when we need to complete paper-based forms. There are plenty of examples, for this workshop, we've chosen a patient registration for a doctor's surgery as it's something we've all had to do at some point."),(0,a.kt)("h2",{id:"please-share"},"Please share"),(0,a.kt)(S,{page_url:"https://aka.ms/PatientRegistration",image_url:"https://newpatiente2e.github.io/docs/assets/images/registration_process-43dca5d4795ea05a0b16a2046696e41e.png",title:"New Patient Azure Form Recognizer Workshop",description:"\ud83c\udfed Learn how to build a new patient registration system using Azure Form Recognizer @dglover",hashtags:"AzureFormRecognizer",hashtag:"",mdxType:"Social"}),(0,a.kt)("h2",{id:"workshop-problem-statement"},"Workshop problem statement"),(0,a.kt)("p",null,"This solution aims to address data issues that creep in with paper-based systems, plus the overhead associated with entering the new patient information into the surgery system."),(0,a.kt)("p",null,"For this doctor's surgery, patient registration is still a paper-based process and will continue to be so for the foreseeable future. The surgery wants to improve the patient experience by automating the paper based registration process."),(0,a.kt)("h2",{id:"workshop-goals"},"Workshop goals"),(0,a.kt)("p",null,"The goal of this workshop is for you to learn how to infuse AI technologies into a web based patient registration system."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The workshop solution is a simplified version of a real-world scenario, simple enough to be completed in a workshop but complex enough to demonstrate the power of AI technologies."),(0,a.kt)("li",{parentName:"ol"},"The workshop provides a step-by-step guide, taking you through the process of deploying the solution to Azure. You'll learn a little about Azure Static Web Apps, Azure Functions, Azure Cognitive Services, Azure Storage, and Azure Cosmos DB.")),(0,a.kt)("h2",{id:"introduction-to-form-recognizer"},"Introduction to Form Recognizer"),(0,a.kt)("p",null,"The solution will build on Azure Form Recognizer. Azure Form Recognizer is a new Cognitive Service that uses machine learning to extract text and table data from form documents. You can train custom models to extract data specific to your forms, or use the prebuilt models to extract common fields from receipts, invoices, and business cards."),(0,a.kt)("h2",{id:"workshop-personas"},"Workshop Personas"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Persona"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Surgery admin: Drew"),(0,a.kt)("td",{parentName:"tr",align:null},"Drew's role is to ensure new patients register in the surgery system. Drew also verifies new patient data before committing to the patient data in the surgery system."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"The image shows the picture of an admin",src:r(3093).Z,width:"101",height:"117"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nurse: Alex"),(0,a.kt)("td",{parentName:"tr",align:null},"Alex uses new patient registration to understand any existing allergies or medicine reactions."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"The image shows the picture of a nurse",src:r(971).Z,width:"101",height:"102"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Doctor: Anthony"),(0,a.kt)("td",{parentName:"tr",align:null},"Anthony uses new patient registration to understand any existing allergies or medicine reactions."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"The image shows the photo of a doctor",src:r(6118).Z,width:"100",height:"100"}))))),(0,a.kt)("h2",{id:"workshop-outline"},"Workshop outline"),(0,a.kt)("p",null,"The following is an outline of the workshop:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Learn about and create the Azure services for the app."),(0,a.kt)("li",{parentName:"ol"},"Train a custom Azure Form Recognizer model."),(0,a.kt)("li",{parentName:"ol"},"Create a web app that integrates with Form Recognizer."),(0,a.kt)("li",{parentName:"ol"},"Define application roles that map to the workshop roles."),(0,a.kt)("li",{parentName:"ol"},"Implement app functions to support surgery admin, nurse, and doctor roles.")),(0,a.kt)("h2",{id:"solution-overview"},"Solution overview"),(0,a.kt)("p",null,"The following outlines the process of the solution:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A new patient completes the patient registration form."),(0,a.kt)("li",{parentName:"ol"},"The patient then uploads the form to the web app."),(0,a.kt)("li",{parentName:"ol"},"The web app uses Form Recognizer to extract the data from the form."),(0,a.kt)("li",{parentName:"ol"},"The app returns the extracted data to the patient."),(0,a.kt)("li",{parentName:"ol"},"The patient submits the verified new data."),(0,a.kt)("li",{parentName:"ol"},"The surgery admin verifies registration and adds it to the doctor's surgery system."),(0,a.kt)("li",{parentName:"ol"},"Data is stored in the surgery system."),(0,a.kt)("li",{parentName:"ol"},"New patient registration records are available to the surgery's nurse and doctor.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The image shows the registration process",src:r(9182).Z,width:"1280",height:"720"})))}M.isMDXComponent=!0},4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},971:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/alex-c3e6492dba94a67c99afce20f3e5b4b0.png"},6118:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n="data:image/jpeg;base64,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"},3093:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/drew-660de00db7dbbbcb1e790eb2a0044721.png"},9182:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/registration_process-43dca5d4795ea05a0b16a2046696e41e.png"}}]);