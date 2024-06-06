"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[602],{9129:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(2988),c=n(2265),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},o=n(5636),r=c.forwardRef(function(e,t){return c.createElement(o.Z,(0,a.Z)({},e,{ref:t,icon:l}))})},7728:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(2265);function c(){let[,e]=a.useReducer(e=>e+1,0);return e}},5588:function(e,t,n){n.d(t,{default:function(){return Y}});var a=n(2265),c=n(7728),l=n(6415),o=n(6800),r=n.n(o),i=n(8884),s=n(8750),u=n(8474),d=e=>{let{prefixCls:t,className:n,style:c,size:l,shape:o}=e,i=r()({["".concat(t,"-lg")]:"large"===l,["".concat(t,"-sm")]:"small"===l}),s=r()({["".concat(t,"-circle")]:"circle"===o,["".concat(t,"-square")]:"square"===o,["".concat(t,"-round")]:"round"===o}),u=a.useMemo(()=>"number"==typeof l?{width:l,height:l,lineHeight:"".concat(l,"px")}:{},[l]);return a.createElement("span",{className:r()(t,i,s,n),style:Object.assign(Object.assign({},u),c)})},g=n(8110),m=n(8179),p=n(3204);let b=new g.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),f=e=>({height:e,lineHeight:(0,g.bf)(e)}),h=e=>Object.assign({width:e},f(e)),v=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:b,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),O=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},f(e)),j=e=>{let{skeletonAvatarCls:t,gradientFromColor:n,controlHeight:a,controlHeightLG:c,controlHeightSM:l}=e;return{["".concat(t)]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},h(a)),["".concat(t).concat(t,"-circle")]:{borderRadius:"50%"},["".concat(t).concat(t,"-lg")]:Object.assign({},h(c)),["".concat(t).concat(t,"-sm")]:Object.assign({},h(l))}},E=e=>{let{controlHeight:t,borderRadiusSM:n,skeletonInputCls:a,controlHeightLG:c,controlHeightSM:l,gradientFromColor:o,calc:r}=e;return{["".concat(a)]:Object.assign({display:"inline-block",verticalAlign:"top",background:o,borderRadius:n},O(t,r)),["".concat(a,"-lg")]:Object.assign({},O(c,r)),["".concat(a,"-sm")]:Object.assign({},O(l,r))}},k=e=>Object.assign({width:e},f(e)),y=e=>{let{skeletonImageCls:t,imageSizeBase:n,gradientFromColor:a,borderRadiusSM:c,calc:l}=e;return{["".concat(t)]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:a,borderRadius:c},k(l(n).mul(2).equal())),{["".concat(t,"-path")]:{fill:"#bfbfbf"},["".concat(t,"-svg")]:Object.assign(Object.assign({},k(n)),{maxWidth:l(n).mul(4).equal(),maxHeight:l(n).mul(4).equal()}),["".concat(t,"-svg").concat(t,"-svg-circle")]:{borderRadius:"50%"}}),["".concat(t).concat(t,"-circle")]:{borderRadius:"50%"}}},w=(e,t,n)=>{let{skeletonButtonCls:a}=e;return{["".concat(n).concat(a,"-circle")]:{width:t,minWidth:t,borderRadius:"50%"},["".concat(n).concat(a,"-round")]:{borderRadius:t}}},x=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},f(e)),C=e=>{let{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:a,controlHeightLG:c,controlHeightSM:l,gradientFromColor:o,calc:r}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({["".concat(n)]:Object.assign({display:"inline-block",verticalAlign:"top",background:o,borderRadius:t,width:r(a).mul(2).equal(),minWidth:r(a).mul(2).equal()},x(a,r))},w(e,a,n)),{["".concat(n,"-lg")]:Object.assign({},x(c,r))}),w(e,c,"".concat(n,"-lg"))),{["".concat(n,"-sm")]:Object.assign({},x(l,r))}),w(e,l,"".concat(n,"-sm")))},N=e=>{let{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:a,skeletonParagraphCls:c,skeletonButtonCls:l,skeletonInputCls:o,skeletonImageCls:r,controlHeight:i,controlHeightLG:s,controlHeightSM:u,gradientFromColor:d,padding:g,marginSM:m,borderRadius:p,titleHeight:b,blockRadius:f,paragraphLiHeight:O,controlHeightXS:k,paragraphMarginTop:w}=e;return{["".concat(t)]:{display:"table",width:"100%",["".concat(t,"-header")]:{display:"table-cell",paddingInlineEnd:g,verticalAlign:"top",["".concat(n)]:Object.assign({display:"inline-block",verticalAlign:"top",background:d},h(i)),["".concat(n,"-circle")]:{borderRadius:"50%"},["".concat(n,"-lg")]:Object.assign({},h(s)),["".concat(n,"-sm")]:Object.assign({},h(u))},["".concat(t,"-content")]:{display:"table-cell",width:"100%",verticalAlign:"top",["".concat(a)]:{width:"100%",height:b,background:d,borderRadius:f,["+ ".concat(c)]:{marginBlockStart:u}},["".concat(c)]:{padding:0,"> li":{width:"100%",height:O,listStyle:"none",background:d,borderRadius:f,"+ li":{marginBlockStart:k}}},["".concat(c,"> li:last-child:not(:first-child):not(:nth-child(2))")]:{width:"61%"}},["&-round ".concat(t,"-content")]:{["".concat(a,", ").concat(c," > li")]:{borderRadius:p}}},["".concat(t,"-with-avatar ").concat(t,"-content")]:{["".concat(a)]:{marginBlockStart:m,["+ ".concat(c)]:{marginBlockStart:w}}},["".concat(t).concat(t,"-element")]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},C(e)),j(e)),E(e)),y(e)),["".concat(t).concat(t,"-block")]:{width:"100%",["".concat(l)]:{width:"100%"},["".concat(o)]:{width:"100%"}},["".concat(t).concat(t,"-active")]:{["\n        ".concat(a,",\n        ").concat(c," > li,\n        ").concat(n,",\n        ").concat(l,",\n        ").concat(o,",\n        ").concat(r,"\n      ")]:Object.assign({},v(e))}}};var S=(0,m.I$)("Skeleton",e=>{let{componentCls:t,calc:n}=e;return[N((0,p.TS)(e,{skeletonAvatarCls:"".concat(t,"-avatar"),skeletonTitleCls:"".concat(t,"-title"),skeletonParagraphCls:"".concat(t,"-paragraph"),skeletonButtonCls:"".concat(t,"-button"),skeletonInputCls:"".concat(t,"-input"),skeletonImageCls:"".concat(t,"-image"),imageSizeBase:n(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:"linear-gradient(90deg, ".concat(e.gradientFromColor," 25%, ").concat(e.gradientToColor," 37%, ").concat(e.gradientFromColor," 63%)"),skeletonLoadingMotionDuration:"1.4s"}))]},e=>{let{colorFillContent:t,colorFill:n}=e;return{color:t,colorGradientEnd:n,gradientFromColor:t,gradientToColor:n,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),q=n(2988),z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},R=n(5636),M=a.forwardRef(function(e,t){return a.createElement(R.Z,(0,q.Z)({},e,{ref:t,icon:z}))}),I=n(7111);let B=(e,t)=>{let{width:n,rows:a=2}=t;return Array.isArray(n)?n[e]:a-1===e?n:void 0};var H=e=>{let{prefixCls:t,className:n,style:c,rows:l}=e,o=(0,I.Z)(Array(l)).map((t,n)=>a.createElement("li",{key:n,style:{width:B(n,e)}}));return a.createElement("ul",{className:r()(t,n),style:c},o)},T=e=>{let{prefixCls:t,className:n,width:c,style:l}=e;return a.createElement("h3",{className:r()(t,n),style:Object.assign({width:c},l)})};function A(e){return e&&"object"==typeof e?e:{}}let Z=e=>{let{prefixCls:t,loading:n,className:c,rootClassName:l,style:o,children:i,avatar:u=!1,title:g=!0,paragraph:m=!0,active:p,round:b}=e,{getPrefixCls:f,direction:h,skeleton:v}=a.useContext(s.E_),O=f("skeleton",t),[j,E,k]=S(O);if(n||!("loading"in e)){let e,t;let n=!!u,i=!!g,s=!!m;if(n){let t=Object.assign(Object.assign({prefixCls:"".concat(O,"-avatar")},i&&!s?{size:"large",shape:"square"}:{size:"large",shape:"circle"}),A(u));e=a.createElement("div",{className:"".concat(O,"-header")},a.createElement(d,Object.assign({},t)))}if(i||s){let e,c;if(i){let t=Object.assign(Object.assign({prefixCls:"".concat(O,"-title")},!n&&s?{width:"38%"}:n&&s?{width:"50%"}:{}),A(g));e=a.createElement(T,Object.assign({},t))}if(s){let e=Object.assign(Object.assign({prefixCls:"".concat(O,"-paragraph")},function(e,t){let n={};return e&&t||(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}(n,i)),A(m));c=a.createElement(H,Object.assign({},e))}t=a.createElement("div",{className:"".concat(O,"-content")},e,c)}let f=r()(O,{["".concat(O,"-with-avatar")]:n,["".concat(O,"-active")]:p,["".concat(O,"-rtl")]:"rtl"===h,["".concat(O,"-round")]:b},null==v?void 0:v.className,c,l,E,k);return j(a.createElement("div",{className:f,style:Object.assign(Object.assign({},null==v?void 0:v.style),o)},e,t))}return null!=i?i:null};Z.Button=e=>{let{prefixCls:t,className:n,rootClassName:c,active:l,block:o=!1,size:i="default"}=e,{getPrefixCls:g}=a.useContext(s.E_),m=g("skeleton",t),[p,b,f]=S(m),h=(0,u.Z)(e,["prefixCls"]),v=r()(m,"".concat(m,"-element"),{["".concat(m,"-active")]:l,["".concat(m,"-block")]:o},n,c,b,f);return p(a.createElement("div",{className:v},a.createElement(d,Object.assign({prefixCls:"".concat(m,"-button"),size:i},h))))},Z.Avatar=e=>{let{prefixCls:t,className:n,rootClassName:c,active:l,shape:o="circle",size:i="default"}=e,{getPrefixCls:g}=a.useContext(s.E_),m=g("skeleton",t),[p,b,f]=S(m),h=(0,u.Z)(e,["prefixCls","className"]),v=r()(m,"".concat(m,"-element"),{["".concat(m,"-active")]:l},n,c,b,f);return p(a.createElement("div",{className:v},a.createElement(d,Object.assign({prefixCls:"".concat(m,"-avatar"),shape:o,size:i},h))))},Z.Input=e=>{let{prefixCls:t,className:n,rootClassName:c,active:l,block:o,size:i="default"}=e,{getPrefixCls:g}=a.useContext(s.E_),m=g("skeleton",t),[p,b,f]=S(m),h=(0,u.Z)(e,["prefixCls"]),v=r()(m,"".concat(m,"-element"),{["".concat(m,"-active")]:l,["".concat(m,"-block")]:o},n,c,b,f);return p(a.createElement("div",{className:v},a.createElement(d,Object.assign({prefixCls:"".concat(m,"-input"),size:i},h))))},Z.Image=e=>{let{prefixCls:t,className:n,rootClassName:c,style:l,active:o}=e,{getPrefixCls:i}=a.useContext(s.E_),u=i("skeleton",t),[d,g,m]=S(u),p=r()(u,"".concat(u,"-element"),{["".concat(u,"-active")]:o},n,c,g,m);return d(a.createElement("div",{className:p},a.createElement("div",{className:r()("".concat(u,"-image"),n),style:l},a.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(u,"-image-svg")},a.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(u,"-image-path")})))))},Z.Node=e=>{let{prefixCls:t,className:n,rootClassName:c,style:l,active:o,children:i}=e,{getPrefixCls:u}=a.useContext(s.E_),d=u("skeleton",t),[g,m,p]=S(d),b=r()(d,"".concat(d,"-element"),{["".concat(d,"-active")]:o},m,n,c,p),f=null!=i?i:a.createElement(M,null);return g(a.createElement("div",{className:b},a.createElement("div",{className:r()("".concat(d,"-image"),n),style:l},f)))};var L=e=>{let t;let{value:n,formatter:c,precision:l,decimalSeparator:o,groupSeparator:r="",prefixCls:i}=e;if("function"==typeof c)t=c(n);else{let e=String(n),c=e.match(/^(-?)(\d*)(\.(\d+))?$/);if(c&&"-"!==e){let e=c[1],n=c[2]||"0",s=c[4]||"";n=n.replace(/\B(?=(\d{3})+(?!\d))/g,r),"number"==typeof l&&(s=s.padEnd(l,"0").slice(0,l>0?l:0)),s&&(s="".concat(o).concat(s)),t=[a.createElement("span",{key:"int",className:"".concat(i,"-content-value-int")},e,n),s&&a.createElement("span",{key:"decimal",className:"".concat(i,"-content-value-decimal")},s)]}else t=e}return a.createElement("span",{className:"".concat(i,"-content-value")},t)},_=n(8170);let D=e=>{let{componentCls:t,marginXXS:n,padding:a,colorTextDescription:c,titleFontSize:l,colorTextHeading:o,contentFontSize:r,fontFamily:i}=e;return{["".concat(t)]:Object.assign(Object.assign({},(0,_.Wf)(e)),{["".concat(t,"-title")]:{marginBottom:n,color:c,fontSize:l},["".concat(t,"-skeleton")]:{paddingTop:a},["".concat(t,"-content")]:{color:o,fontSize:r,fontFamily:i,["".concat(t,"-content-value")]:{display:"inline-block",direction:"ltr"},["".concat(t,"-content-prefix, ").concat(t,"-content-suffix")]:{display:"inline-block"},["".concat(t,"-content-prefix")]:{marginInlineEnd:n},["".concat(t,"-content-suffix")]:{marginInlineStart:n}}})}};var P=(0,m.I$)("Statistic",e=>[D((0,p.TS)(e,{}))],e=>{let{fontSizeHeading3:t,fontSize:n}=e;return{titleFontSize:n,contentFontSize:t}}),F=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,a=Object.getOwnPropertySymbols(e);c<a.length;c++)0>t.indexOf(a[c])&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]]);return n},W=e=>{let{prefixCls:t,className:n,rootClassName:c,style:l,valueStyle:o,value:u=0,title:d,valueRender:g,prefix:m,suffix:p,loading:b=!1,formatter:f,precision:h,decimalSeparator:v=".",groupSeparator:O=",",onMouseEnter:j,onMouseLeave:E}=e,k=F(e,["prefixCls","className","rootClassName","style","valueStyle","value","title","valueRender","prefix","suffix","loading","formatter","precision","decimalSeparator","groupSeparator","onMouseEnter","onMouseLeave"]),{getPrefixCls:y,direction:w,statistic:x}=a.useContext(s.E_),C=y("statistic",t),[N,S,q]=P(C),z=a.createElement(L,{decimalSeparator:v,groupSeparator:O,prefixCls:C,formatter:f,precision:h,value:u}),R=r()(C,{["".concat(C,"-rtl")]:"rtl"===w},null==x?void 0:x.className,n,c,S,q),M=(0,i.Z)(k,{aria:!0,data:!0});return N(a.createElement("div",Object.assign({},M,{className:R,style:Object.assign(Object.assign({},null==x?void 0:x.style),l),onMouseEnter:j,onMouseLeave:E}),d&&a.createElement("div",{className:"".concat(C,"-title")},d),a.createElement(Z,{paragraph:!1,loading:b,className:"".concat(C,"-skeleton")},a.createElement("div",{style:o,className:"".concat(C,"-content")},m&&a.createElement("span",{className:"".concat(C,"-content-prefix")},m),g?g(z):z,p&&a.createElement("span",{className:"".concat(C,"-content-suffix")},p)))))};let G=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];var $=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,a=Object.getOwnPropertySymbols(e);c<a.length;c++)0>t.indexOf(a[c])&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]]);return n};let X=1e3/30;var V=a.memo(e=>{let{value:t,format:n="HH:mm:ss",onChange:o,onFinish:r}=e,i=$(e,["value","format","onChange","onFinish"]),s=(0,c.Z)(),u=a.useRef(null),d=()=>{null==r||r(),u.current&&(clearInterval(u.current),u.current=null)},g=()=>{let e=new Date(t).getTime();e>=Date.now()&&(u.current=setInterval(()=>{s(),null==o||o(e-Date.now()),e<Date.now()&&d()},X))};return a.useEffect(()=>(g(),()=>{u.current&&(clearInterval(u.current),u.current=null)}),[t]),a.createElement(W,Object.assign({},i,{value:t,valueRender:e=>(0,l.Tm)(e,{title:void 0}),formatter:(e,t)=>(function(e,t){let{format:n=""}=t;return function(e,t){let n=e,a=/\[[^\]]*]/g,c=(t.match(a)||[]).map(e=>e.slice(1,-1)),l=t.replace(a,"[]"),o=G.reduce((e,t)=>{let[a,c]=t;if(e.includes(a)){let t=Math.floor(n/c);return n-=t*c,e.replace(RegExp("".concat(a,"+"),"g"),e=>{let n=e.length;return t.toString().padStart(n,"0")})}return e},l),r=0;return o.replace(a,()=>{let e=c[r];return r+=1,e})}(Math.max(new Date(e).getTime()-Date.now(),0),n)})(e,Object.assign(Object.assign({},t),{format:n}))}))});W.Countdown=V;var Y=W}}]);