(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{5013:function(e,s,l){Promise.resolve().then(l.bind(l,3745))},3745:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return o}});var n=l(7437),t=l(5459),i=l(5873),c=l(9454),r=l(2265),d=l(1611);let a={"Тип жилья":["Вилла","Бунгало","Дом","Аппартамены","Отель","Таунхаус"],Район:["Банг Тао","Камала","Карон","Ката","Катху","Маи Кхао","Най Харн","Панва","Патонг","Пхукет Таун","Равай","Сурин","Таланг","Чалонг"],Спальни:[2,4,6],Ванные:[2,4,6],Построено:["Да","Нет"],"Тип недвижимости":["Земля","Жилье","Нежилые помещения"],"Доступность к морю":["Да","Нет"],Стоимость:[]};function o(){let[e,s]=(0,r.useState)(i.Z.purchase),l=e=>{let l=i.Z.purchase.filter(s=>0===e["Тип жилья"].length&&e["Тип жилья"].includes(s.type)||!e["Тип жилья"].includes(s.type)||0===e["Район"].length&&e["Район"].includes(s.district)||!e["Район"].includes(s.district)||0===e["Спальни"].length&&e["Спальни"].includes(s.bedroom)||!e["Спальни"].includes(s.bedroom)||0===e["Ванные"].length&&e["Ванные"].includes(s.bathroom)||!e["Ванные"].includes(s.bathroom)||0===e["Построено"].length&&e["Построено"].includes(s.ready)||!e["Построено"].includes(s.ready)||0===e["Тип недвижимости"].length&&e["Тип недвижимости"].includes(s.typeProperty)||!e["Тип недвижимости"].includes(s.typeProperty)||0===e["Доступность к морю"].length&&e["Доступность к морю"].includes(s.sea)||!e["Доступность к морю"].includes(s.sea));0==document.querySelectorAll("input:checked").length&&(l=i.Z.purchase),s(l)},[o,u]=(0,r.useState)(!1),h=()=>{u(!o);let e=document.querySelector(".overlay");o&&(e.classList.add("hidden"),document.body.classList.remove("no-scroll"),e.classList.remove("hidden"),document.body.classList.add("no-scroll"))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{className:"title",children:"Все объекты на продажу"}),(0,n.jsxs)("div",{className:"pageRow",children:[(0,n.jsx)("div",{className:"wrap",children:e.map(e=>(0,n.jsx)(t.q,{item:e},e.slug))}),(0,n.jsx)(c.Z,{handleFilterChange:l,filterOptions:a,data:i.Z.purchase,handlePrice:e=>{s(e)}})]}),(0,n.jsxs)("button",{onClick:h,className:"filter-adapt",children:[(0,n.jsx)(d.Z,{}),(0,n.jsx)("span",{className:"name-filter",children:"Фильтры"})]}),o&&(0,n.jsxs)("div",{className:"overlay",children:[(0,n.jsxs)("div",{className:"block",children:[(0,n.jsx)("button",{onClick:h,children:(0,n.jsx)("svg",{width:"30px",height:"30px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M19 5L4.99998 19M5.00001 5L19 19",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})}),(0,n.jsx)(c.Z,{handleFilterChange:l,filterOptions:a})]}),(0,n.jsxs)("div",{className:"filter-adapt",children:[(0,n.jsx)(d.Z,{}),(0,n.jsx)("span",{className:"name-filter",children:"Фильтры"})]})]})]})}}},function(e){e.O(0,[749,250,916,971,69,744],function(){return e(e.s=5013)}),_N_E=e.O()}]);