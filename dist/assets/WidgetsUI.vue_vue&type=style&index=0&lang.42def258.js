import{_ as e}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.3e6c449a.js";import{_ as t}from"./V-BillboardJS.vue_vue&type=style&index=0&lang.6154f82f.js";import{_ as a}from"./UIWidget.vue_vue&type=script&setup=true&lang.27139ca2.js";import{_ as s}from"./UIWidgetToolbarFollowers.vue_vue&type=script&setup=true&lang.11c52b30.js";import{d as l,o as i,e as r,f as o,C as n,F as d,D as c,H as u,r as p,n as h,s as g,i as m,t as y,q as v,A as f}from"./vendor.2e4d4237.js";import{_ as b}from"./V-Tag.vue_vue&type=script&setup=true&lang.7d749f45.js";import{i as w,_}from"./menuList.587f9c83.js";import{_ as x}from"./UIWidgetToolbarIcon.vue_vue&type=script&setup=true&lang.87e4a917.js";import{_ as j}from"./V-Avatar.vue_vue&type=script&setup=true&lang.dcb01031.js";import{n as T,_ as S}from"./notificationList.24a9cd2c.js";import{p as k,o as q}from"./personalScoreGauge.3ccc82c7.js";import{f as W}from"./followers.e3e24733.js";import{t as A}from"./index.bd34858d.js";const F={class:"widget-content"},I=["src"],Z={class:"widget-meta"},M=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:play-circle"},null,-1),E={class:"views"},H=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:eye"},null,-1);var L=l({props:{title:{type:String,required:!0,default:"A nice and short little movie"},picture:{type:String,required:!0,default:"https://via.placeholder.com/400x300"},views:{type:String,required:!0,default:""}},setup(e){const t=e;return(e,a)=>(i(),r("div",F,[o("img",{src:t.picture,alt:"",onErrorOnce:a[0]||(a[0]=e=>e.target.src="https://via.placeholder.com/400x300")},null,40,I),o("div",Z,[M,o("h4",null,n(t.title),1),o("span",E,[H,o("span",null,n(t.views),1)])])]))}});const P={class:"widget-content"},U={class:"tags"};var C=l({props:{tags:{type:Array,required:!0}},setup(e){const t=e;return(e,a)=>{const s=b;return i(),r("div",P,[o("div",U,[(i(!0),r(d,null,c(t.tags,(e=>(i(),u(s,{key:e.id,color:e.color,curved:"",outlined:!e.popular,label:e.title},null,8,["color","outlined","label"])))),128))])])}}});const B={class:"icon-toolbar"},D=["onClick"],G=["data-icon"];var N=l({props:{tabs:{type:Array,required:!0},activeTab:{type:Number,default:0}},setup(e){const t=e,a=p(t.activeTab);return(e,s)=>(i(),r("div",B,[(i(!0),r(d,null,c(t.tabs,((e,t)=>(i(),r("div",{key:e.id,class:"toolbar-icon"},[o("a",{class:h(["inner-icon",{"is-active":a.value===t}]),onClick:e=>a.value=t},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":a.value.icon},null,8,G)],10,D)])))),128))]))}});const O={class:"calendar-widget-inner"},V={class:"date"};var Y=l({props:{days:{type:Array,required:!0}},setup(e){const t=e;return(e,a)=>(i(),r("div",O,[(i(!0),r(d,null,c(t.days,(e=>(i(),r("div",{key:e.id,class:"calendar-square"},[o("div",V,[o("span",null,n(e.date),1),o("span",null,n(e.name),1)])])))),128))]))}});const R={class:"widget-content"},J={class:"sender-block"},X={class:"sender-block-inner"},$={class:"meta"},z={class:"exerpt"},K=o("i",{"aria-hidden":"true",class:"fas fa-circle"},null,-1),Q=o("p",null," Where are we in terms of design? We need to review the new screens. ",-1);var ee=l({props:{title:{type:String,required:!0,default:"Design Project"},user:{type:String,required:!0,default:"Alice C."},picture:{type:String,required:!0,default:"https://vuero.cssninja.io/demo/avatars/7.jpg"},time:{type:String,required:!0,default:"28 minutes ago"}},setup(e){const t=e;return(e,a)=>{const s=j;return i(),r("div",R,[o("div",J,[o("div",X,[g(s,{picture:t.picture},null,8,["picture"]),o("div",$,[o("span",null,n(t.user)+" just sent you an inbox message.",1)])]),o("div",z,[o("h5",null,[K,o("span",null,n(t.title),1)]),Q,o("small",null,n(t.time),1)])])])}}});const te=[{id:0,title:"Politics",popular:!1,color:"primary"},{id:1,title:"Economy",popular:!0,color:"primary"},{id:2,title:"Finance",popular:!1,color:"primary"},{id:3,title:"Environment",popular:!1,color:"primary"},{id:4,title:"Food",popular:!1,color:"primary"},{id:5,title:"Technology",popular:!0,color:"primary"}],ae=[{id:0,title:"Family",popular:!1,color:"primary"},{id:1,title:"Home",popular:!0,color:"primary"},{id:2,title:"Health",popular:!1,color:"primary"},{id:3,title:"Business",popular:!1,color:"primary"},{id:4,title:"Personal",popular:!1,color:"primary"},{id:5,title:"Utility",popular:!0,color:"primary"}],se=[{id:0,icon:"feather:activity"},{id:1,icon:"feather:search"},{id:2,icon:"feather:file-text"},{id:3,icon:"feather:home"}],le=[{id:0,name:"Monday",date:"22"},{id:1,name:"Tuesday",date:"23"},{id:2,name:"Wednesday",date:"24"},{id:3,name:"Thursday",date:"25"}],ie={series:[{name:"series1",data:[31,40,28,51,42,109,100]}],chart:{height:"200px",width:"100%",type:"line",toolbar:{show:!1}},colors:[A.accent,A.purple,A.orange],grid:{show:!1,padding:{left:-20,right:0}},padding:{bottom:0,left:0,right:0},legend:{show:!1,position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"],labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!1,offsetX:-40}},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},re={class:"columns is-multiline widget-demo-columns"},oe={class:"column is-3"},ne={class:"gauge-wrap"},de=o("div",{class:"widget-content"},[o("p",null,"Your score has been calculated based on the latest metrics")],-1),ce={class:"widget-content"},ue=f(" Great News! "),pe=f(", "),he=f(" and "),ge=f(" are now following you. Take some time to look at their profile. "),me=o("div",{class:"field"},[o("div",{class:"control"},[o("input",{type:"text",class:"input",placeholder:"Search..."}),o("button",{class:"searcv-button"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:search"})])]),o("div",{class:"topics"},[o("a",null,"#Politics"),o("a",null,"#Movies"),o("a",null,"#Tech")])],-1),ye={class:"column is-3"},ve=o("div",{class:"widget-toolbar"},[o("div",{class:"left"},[o("a",{class:"action-icon"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"})])]),o("div",{class:"center"},[o("h3",null,"October 2020")]),o("div",{class:"right"},[o("a",{class:"action-icon"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})])])],-1),fe=o("table",{class:"calendar"},[o("thead",null,[o("tr",null,[o("th",{scope:"col"},"Mon"),o("th",{scope:"col"},"Tue"),o("th",{scope:"col"},"Wed"),o("th",{scope:"col"},"Thu"),o("th",{scope:"col"},"Fri"),o("th",{scope:"col"},"Sat"),o("th",{scope:"col"},"Sun")])]),o("tbody",null,[o("tr",null,[o("td",{class:"prev-month"},"29"),o("td",{class:"prev-month"},"30"),o("td",{class:"prev-month"},"31"),o("td",null,"1"),o("td",null,"2"),o("td",null,"3"),o("td",null,"4")]),o("tr",null,[o("td",null,"5"),o("td",null,"6"),o("td",null,"7"),o("td",null,"8"),o("td",null,"9"),o("td",null,"10"),o("td",null,"11")]),o("tr",null,[o("td",null,"12"),o("td",null,"13"),o("td",null,"14"),o("td",null,"15"),o("td",null,"16"),o("td",null,"17"),o("td",{class:"current-day"},"18")]),o("tr",null,[o("td",null,"19"),o("td",null,"20"),o("td",null,"21"),o("td",null,"22"),o("td",null,"23"),o("td",null,"24"),o("td",null,"25")]),o("tr",null,[o("td",null,"26"),o("td",null,"27"),o("td",null,"28"),o("td",null,"29"),o("td",null,"30"),o("td",null,"31"),o("td",{class:"next-month"},"1")])])],-1),be={class:"column is-3"},we=o("div",{class:"widget-content"},[o("p",null,[f(" You have an upcoming payment for your recurring subscription fee due on "),o("span",null,"Sept 20, 2020"),f(". ")])],-1),_e=o("div",{class:"progress-wrap"},[o("progress",{class:"progress is-primary is-tiny",max:"100"}," 55% ")],-1),xe={class:"column is-3"},je={class:"widget-content"},Te=o("div",{class:"has-text-centered"},[o("div",{class:"stat-number"},[o("span",null,[f("$1638,42 "),o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:trending-up"})]),o("span",null,"Earned from Sales")])],-1),Se=o("div",{class:"widget-content"},[o("p",null,[f(" You currently have more than "),o("span",null,"10 unread messages"),f(" in your inbox. It could be a good time to check them out. ")])],-1);var ke=l({setup:l=>(l,d)=>{const c=e,u=t,p=a,h=s,f=L,b=C,j=N,A=Y,F=_,I=x,Z=ee,M=S,E=m("apexchart");return i(),r("div",re,[o("div",oe,[g(p,{class:"gauge-widget"},{header:y((()=>[g(c,{title:"Gauge Widget"})])),body:y((()=>[o("div",ne,[g(u,{class:"gauge-holder",options:v(k),onReady:v(q)},null,8,["options","onReady"])]),de])),_:1}),g(p,{class:"text-widget"},{header:y((()=>[g(h,{title:"New Followers",avatars:v(W)},null,8,["avatars"])])),body:y((()=>[o("div",ce,[o("p",null,[ue,o("span",null,n(v(W)[0].name),1),pe,o("span",null,n(v(W)[1].name),1),he,o("span",null,n(v(W)[2].name),1),ge])])])),_:1}),g(p,{class:"search-widget"},{body:y((()=>[me])),_:1}),g(p,{class:"video-widget"},{body:y((()=>[g(f,{picture:"https://vuero.cssninja.io/demo/photos/widgets/1.jpg",views:"38,274"})])),_:1}),g(p,{class:"tags-widget"},{body:y((()=>[g(b,{tags:v(te)},null,8,["tags"])])),_:1})]),o("div",ye,[g(p,{class:"icon-toolbar-widget"},{header:y((()=>[g(j,{tabs:v(se)},null,8,["tabs"])])),_:1}),g(p,{class:"calendar-widget"},{header:y((()=>[g(A,{days:v(le)},null,8,["days"])])),_:1}),g(p,{class:"picker-widget"},{header:y((()=>[ve])),body:y((()=>[fe])),_:1}),g(p,{class:"icon-list-widget"},{body:y((()=>[g(F,{list:v(w)},null,8,["list"])])),_:1})]),o("div",be,[g(p,{class:"text-widget"},{header:y((()=>[g(I,{title:"Payment"})])),body:y((()=>[we])),_:1}),g(p,{class:"image-widget"},{body:y((()=>[o("img",{src:"https://vuero.cssninja.io/demo/photos/widgets/2.jpg",alt:"",onErrorOnce:d[0]||(d[0]=e=>e.target.src="https://via.placeholder.com/400x300")},null,32),_e])),_:1}),g(p,{class:"inbox-widget"},{header:y((()=>[g(c,{title:"Inbox"})])),body:y((()=>[g(Z)])),_:1})]),o("div",xe,[g(p,{class:"tags-widget"},{header:y((()=>[g(c,{title:"Labels"})])),body:y((()=>[g(b,{tags:v(ae)},null,8,["tags"])])),_:1}),g(p,{class:"list-widget"},{header:y((()=>[g(c,{title:"Labels"})])),body:y((()=>[g(M,{notifications:v(T)},null,8,["notifications"])])),_:1}),g(p,{class:"stats-widget"},{header:y((()=>[g(c,{title:""})])),body:y((()=>[o("div",je,[Te,g(E,{id:"trend-chart",class:"stat-chart",height:v(ie).chart.height,type:v(ie).chart.type,series:v(ie).series,options:v(ie)},null,8,["height","type","series","options"])])])),_:1}),g(p,{class:"text-widget"},{header:y((()=>[g(I,{title:"Messages",icon:"feather:message-square"})])),body:y((()=>[Se])),_:1})])])}});export{ke as _};