(()=>{var e={};e.id=102,e.ids=[102],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5118:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>o,routeModule:()=>p,tree:()=>d});var l=a(482),t=a(9108),i=a(2563),r=a.n(i),n=a(8300),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);a.d(s,c);let d=["",{children:["(objects)",{children:["purchase",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,7246)),"C:\\Users\\user\\Desktop\\finson\\finson\\app\\(objects)\\purchase\\[slug]\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,2505)),"C:\\Users\\user\\Desktop\\finson\\finson\\app\\(objects)\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,9544)),"C:\\Users\\user\\Desktop\\finson\\finson\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9361,23)),"next/dist/client/components/not-found-error"]}],o=["C:\\Users\\user\\Desktop\\finson\\finson\\app\\(objects)\\purchase\\[slug]\\page.js"],u="/(objects)/purchase/[slug]/page",m={require:a,loadChunk:()=>Promise.resolve()},p=new l.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/(objects)/purchase/[slug]/page",pathname:"/purchase/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5121:(e,s,a)=>{Promise.resolve().then(a.bind(a,7564)),Promise.resolve().then(a.t.bind(a,1900,23)),Promise.resolve().then(a.t.bind(a,1476,23))},7564:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var l=a(5344),t=a(3729);function i({date:e}){let[s,a]=(0,t.useState)({fullName:"",phoneNumber:"",email:"",messenger:"",date:e}),[i,r]=(0,t.useState)(!1),[n,c]=(0,t.useState)(""),d=e=>{let{name:s,value:l}=e.target;a(e=>({...e,[s]:l}))};return(0,t.useEffect)(()=>{if(i){let e=setTimeout(()=>{r(!1)},2e3);return()=>clearTimeout(e)}},[i]),(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{className:"form",onSubmit:l=>{l.preventDefault(),s.fullName&&s.phoneNumber&&s.email&&s.messenger?(a({fullName:"",phoneNumber:"",email:"",messenger:"",date:e}),r(!0),c("Заявка подана успешно!")):(r(!0),c("Заполните все поля!"))},children:[l.jsx("h5",{children:"Оставить заявку"}),l.jsx("input",{placeholder:"Фамилия Имя Отчество",name:"fullName",value:s.fullName,onChange:d}),l.jsx("input",{placeholder:"Номер телефона",name:"phoneNumber",value:s.phoneNumber,onChange:d}),l.jsx("input",{placeholder:"Email",name:"email",value:s.email,onChange:d}),l.jsx("input",{placeholder:"WhatsApp, Telegram",name:"messenger",value:s.messenger,onChange:d}),l.jsx("input",{placeholder:e,name:"datesr",value:s.datesr,onChange:d}),l.jsx("button",{type:"submit",children:"Отправить"})]}),i&&(0,l.jsxs)("div",{className:"popup",children:[l.jsx("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsxs)("g",{children:[l.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),l.jsx("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"})]})}),l.jsx("span",{children:n})]})]})}},7246:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p,metadata:()=>u});var l=a(5036);a(2);var t=a(4218),i=a(9270),r=a(4742),n=a(2813),c=a(7812);function d({title:e,textDescr:s,price:a,tableType:d,data:o,selectedItemSlug:u}){return(0,l.jsxs)("div",{className:"ItemPageComp",children:[(0,l.jsxs)("div",{className:"col",children:[(0,l.jsxs)("div",{className:"title-adapt",children:[l.jsx("h1",{className:"title",children:e}),(0,l.jsxs)("div",{className:"row-price-adapt",children:[l.jsx("span",{children:"Цена:"}),(0,l.jsxs)("span",{children:[a," бат"]})]})]}),l.jsx(n.default,{src:"",alt:"",className:"col__image"}),(0,l.jsxs)("div",{className:"gallery",children:[l.jsx(n.default,{src:"",alt:"",className:"gallery__img"}),l.jsx(n.default,{src:"",alt:"",className:"gallery__img"}),l.jsx(n.default,{src:"",alt:"",className:"gallery__img"}),l.jsx(n.default,{src:"",alt:"",className:"gallery__img"}),l.jsx(n.default,{src:"",alt:"",className:"gallery__img"}),l.jsx(n.default,{src:"",alt:"",className:"gallery__img"}),l.jsx(n.default,{src:"",alt:"",className:"gallery__img"})]}),l.jsx(i.Z,{type:"Описание",description:s}),l.jsx(c.Z,{tableType:d,data:o,selectedItemSlug:u}),l.jsx("div",{className:"col2 coladapt",children:l.jsx(r.ZP,{date:"Дата встречи"})}),l.jsx(t.Z,{})]}),(0,l.jsxs)("div",{className:"col2",children:[(0,l.jsxs)("div",{className:"rowPrice",children:[l.jsx("span",{children:"Цена:"}),(0,l.jsxs)("span",{children:[a," бат"]})]}),l.jsx(r.ZP,{date:"Дата встречи"})]})]})}var o=a(4083);let u={title:"FINSON PROPERTY"},m=["Статус недвижимости","Район","Артикул","Дата строительства","Площадь","Количество спален","Количество ванных комнат","Инфраструктура комплекса","Платежи","Привелегии от застройщика","Тип собственности","Что поблизости"];function p({params:e}){let s=o.Z.purchase.find(s=>s.slug===e.slug);return s?(u.title=s.name,l.jsx("div",{children:l.jsx(d,{textDescr:s.description,title:s.name,price:s.price.toLocaleString(),tableType:m,data:o.Z.purchase,selectedItemSlug:e.slug})})):l.jsx("h1",{children:"Объект не найден"})}},9270:(e,s,a)=>{"use strict";a.d(s,{Z:()=>t});var l=a(5036);function t({type:e,description:s}){return(0,l.jsxs)("div",{className:"description",children:[l.jsx("h5",{className:"description__title",children:e}),l.jsx("div",{className:"line"}),l.jsx("p",{className:"description__text",children:s})]})}a(2)},4742:(e,s,a)=>{"use strict";a.d(s,{ZP:()=>r});let l=(0,a(6843).createProxy)(String.raw`C:\Users\user\Desktop\finson\finson\components\form.jsx`),{__esModule:t,$$typeof:i}=l,r=l.default},7812:(e,s,a)=>{"use strict";a.d(s,{Z:()=>t});var l=a(5036);function t({tableType:e,data:s,selectedItemSlug:a}){let t=s.find(e=>e.slug===a);return t?(0,l.jsxs)("div",{className:"table",children:[l.jsx("h3",{className:"table__title",children:"Характеристики"}),e.map((e,s)=>(0,l.jsxs)(l.Fragment,{children:[l.jsx("div",{className:"table__line"}),(0,l.jsxs)("div",{className:"table__row",children:[l.jsx("span",{className:"table__row__type",children:e}),l.jsx("span",{className:"table__row__objData",children:t.table&&t.table[s]})]},s)]}))]}):l.jsx("div",{children:"Object not found"})}},4218:(e,s,a)=>{"use strict";a.d(s,{Z:()=>c});var l=a(5036);a(2);var t=a(4083),i=a(6274),r=a(2813);let n=({item:e})=>(0,l.jsxs)("div",{className:"item",children:[(0,l.jsxs)("div",{className:"card",children:[l.jsx(r.default,{src:"",alt:"",className:"itemServiceImage"}),(0,l.jsxs)("div",{className:"row",children:[l.jsx("h3",{className:"name",children:e.name}),(0,l.jsxs)("span",{className:"price",children:[e.price.toLocaleString()," THB"]})]}),(0,l.jsxs)("div",{className:"character",children:[(0,l.jsxs)("div",{className:"section",children:[(0,l.jsxs)("svg",{width:"14.000000",height:"11.000000",viewBox:"0 0 14 11",fill:"none",children:[l.jsx("path",{id:"Path",d:"M6.04 0.93L7.95 0.93C8.83 0.93 9.6 1.54 9.8 2.4C9.82 2.47 9.88 2.52 9.96 2.52L12.88 2.52C12.92 2.52 12.96 2.5 12.99 2.47C13.02 2.45 13.04 2.4 13.04 2.36L13.04 0.77C13.04 0.43 12.91 0.11 12.67 -0.13C12.43 -0.37 12.11 -0.5 11.77 -0.5L2.22 -0.5C1.88 -0.5 1.56 -0.37 1.32 -0.13C1.08 0.11 0.95 0.43 0.95 0.77L0.95 2.36C0.95 2.4 0.97 2.45 1 2.47C1.03 2.5 1.07 2.52 1.11 2.52L4.03 2.52C4.11 2.52 4.17 2.47 4.19 2.4C4.39 1.54 5.16 0.93 6.04 0.93Z",fill:"#000000",fillOpacity:"1.000000",fillRule:"nonzero"}),l.jsx("path",{id:"Path",d:"M0.63 3.48C0.46 3.48 0.3 3.54 0.18 3.66C0.06 3.78 0 3.94 0 4.11L0 7.45C0 7.76 0.21 8.02 0.5 8.08C0.58 8.09 0.63 8.16 0.63 8.23L0.63 9.52C0.63 9.87 0.92 10.16 1.27 10.16C1.62 10.16 1.9 9.87 1.9 9.52L1.9 8.25C1.9 8.21 1.92 8.17 1.95 8.14C1.98 8.11 2.02 8.09 2.06 8.09L11.93 8.09C11.97 8.09 12.01 8.11 12.04 8.14C12.07 8.17 12.09 8.21 12.09 8.25L12.09 9.52C12.09 9.87 12.37 10.16 12.72 10.16C13.07 10.16 13.36 9.87 13.36 9.52L13.36 8.23C13.36 8.16 13.41 8.09 13.49 8.08C13.78 8.02 14 7.76 14 7.45L14 4.11C14 3.94 13.93 3.78 13.81 3.66C13.69 3.54 13.53 3.48 13.36 3.48L0.63 3.48Z",fill:"#000000",fillOpacity:"1.000000",fillRule:"nonzero"})]}),l.jsx("span",{children:e.bedroom})]}),l.jsx("div",{className:"line"}),(0,l.jsxs)("div",{className:"section",children:[(0,l.jsxs)("svg",{width:"17.000000",height:"16.000000",viewBox:"0 0 17 16",fill:"none",children:[l.jsx("path",{id:"Shape",d:"M15.8193 8.54688C15.6934 8.41211 15.5176 8.33496 15.333 8.3335L15.1665 8.3335C14.9824 8.3335 14.833 8.18457 14.833 8.00049L14.833 1.00049C14.832 0.206055 14.3613 -0.512207 13.6338 -0.830078C12.9062 -1.14844 12.0591 -1.00537 11.4756 -0.466309L11.167 -0.157715C11.0791 -0.0698242 10.9492 -0.0380859 10.8306 -0.0756836C10.147 -0.297852 9.39648 -0.126953 8.87646 0.369629L8.73975 0.506348C8.47949 0.766602 8.47949 1.18848 8.73975 1.44873L10.5029 3.21289C10.7637 3.47314 11.1855 3.47314 11.4458 3.21289L11.5791 3.07617C12.0903 2.5625 12.2671 1.80371 12.0347 1.1167C11.9941 0.99707 12.0249 0.865234 12.1138 0.775391L12.3872 0.502441C12.583 0.326172 12.8647 0.282227 13.105 0.390137C13.3452 0.497559 13.5 0.736816 13.499 1.00049L13.499 8.00049C13.499 8.18457 13.3501 8.3335 13.166 8.3335L9.58789 8.3335C9.44189 8.3335 9.31348 8.23877 9.27002 8.09961C9.0957 7.5459 8.5835 7.16846 8.00293 7.16602L4.6665 7.16602C4.08594 7.16846 3.57373 7.5459 3.3999 8.09961C3.35596 8.23975 3.22559 8.33496 3.07861 8.3335L0.666504 8.3335C0.481445 8.33301 0.304688 8.41064 0.179688 8.54688C0.0561523 8.68066 -0.00878906 8.8584 0 9.04004C0.200195 12.3877 2.97314 15 6.32666 15.0005L9.67334 15.0005C13.0264 15 15.7993 12.3877 16 9.04004C16.0107 8.85791 15.9453 8.6792 15.8193 8.54688ZM7.6665 12.5005C7.85059 12.5005 8 12.3511 8 12.167L8 8.8335C8 8.64941 7.85059 8.50049 7.6665 8.50049L5 8.50049C4.81592 8.50049 4.6665 8.64941 4.6665 8.8335L4.6665 12.167C4.6665 12.3511 4.81592 12.5005 5 12.5005L7.6665 12.5005Z",clipRule:"evenodd",fill:"#000000",fillOpacity:"1.000000",fillRule:"evenodd"}),l.jsx("path",{id:"Path",d:"M6 3.05C6.09 3.05 6.19 3.03 6.27 3L7.48 2.44C7.7 2.34 7.85 2.13 7.87 1.89C7.89 1.66 7.79 1.42 7.59 1.29C7.4 1.15 7.14 1.12 6.93 1.22L5.72 1.78C5.43 1.91 5.28 2.22 5.34 2.53C5.41 2.84 5.68 3.05 6 3.05Z",fill:"#000000",fillOpacity:"1.000000",fillRule:"nonzero"}),l.jsx("path",{id:"Path",d:"M9.41 6.67C9.75 6.81 10.14 6.65 10.28 6.32L10.81 5.09C10.94 4.75 10.79 4.37 10.45 4.23C10.12 4.09 9.73 4.24 9.58 4.57L9.06 5.79C8.92 6.13 9.07 6.52 9.41 6.67Z",fill:"#000000",fillOpacity:"1.000000",fillRule:"nonzero"}),l.jsx("path",{id:"Path",d:"M6.99 5.05C7.25 5.31 7.67 5.31 7.93 5.05L8.88 4.11C9.13 3.85 9.13 3.44 8.87 3.18C8.62 2.92 8.2 2.91 7.94 3.16L6.99 4.1C6.73 4.36 6.73 4.78 6.99 5.05Z",fill:"#000000",fillOpacity:"1.000000",fillRule:"nonzero"})]}),l.jsx("span",{children:e.bathroom})]}),l.jsx("div",{className:"line"}),l.jsx("span",{className:"type",children:e.type})]})]}),l.jsx(i.default,{href:`/${e.category}/${e.slug}`,className:"link",children:l.jsx("button",{children:"Перейти"})})]});function c(){return(0,l.jsxs)("div",{className:"like",children:[l.jsx("div",{className:"line"}),l.jsx("h2",{className:"titleLike",children:"Вам может понравиться"}),l.jsx("div",{className:"row",children:t.Z.rent.map(e=>l.jsx(n,{item:e},e.name)).slice(0,3)})]})}}};var s=require("../../../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),l=s.X(0,[340,813,81,333],()=>a(5118));module.exports=l})();