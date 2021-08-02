import{_ as a}from"./V-IconBox.vue_vue&type=script&setup=true&lang.855d9e99.js";import{_ as s}from"./V-Progress.vue_vue&type=script&setup=true&lang.3ba17b4a.js";import{_ as e}from"./ContactWidget.vue_vue&type=script&setup=true&lang.88445dcb.js";import{_ as t}from"./UIWidget.vue_vue&type=script&setup=true&lang.27139ca2.js";import{_ as l}from"./UIWidgetToolbarFollowers.vue_vue&type=script&setup=true&lang.11c52b30.js";import{_ as i}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.3e6c449a.js";import{n as r,_ as n}from"./notificationList.24a9cd2c.js";import{t as o}from"./index.799c8018.js";import{f as d}from"./followers.e3e24733.js";import{d as c,i as p,o as u,e as h,f as v,s as g,t as f,q as m,C as y,z as b,A as w}from"./vendor.2e4d4237.js";const k={series:[{name:"Revenue",data:[10835,40214,36257,51411,45697,61221,65295,91512,75648]}],chart:{height:250,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:[o.green],dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.5}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(a){return"$"+a}}}},x={series:[57,86],chart:{height:220,type:"radialBar",offsetY:-10},colors:[o.accent,o.green],plotOptions:{radialBar:{startAngle:-135,endAngle:135,inverseOrder:!0,dataLabels:{show:!0,name:{show:!0,fontSize:"14px",fontWeight:500,offsetY:-10},value:{show:!0,fontWeight:600,color:o.lightText,fontSize:"16px",offsetY:-5},total:{show:!0,fontSize:"14px",fontWeight:500,color:o.lightText}},hollow:{margin:15,size:"75%"},track:{strokeWidth:"100%"}}},stroke:{lineCap:"round"},labels:["Efficiency","Productivity"]},_=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}].map((a=>({name:a.name,data:a.data.map((a=>a-70))}))),z={chart:{height:250,type:"bar",toolbar:{show:!1}},colors:[o.accent,o.purple,o.green],legend:{position:"top"},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},series:_,xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{labels:{formatter:function(a){return a+70}}},fill:{opacity:1},tooltip:{y:{formatter:function(a){return a+70}}}},j={series:[65],chart:{height:160,type:"radialBar",toolbar:{show:!1}},colors:[o.accent],plotOptions:{radialBar:{hollow:{size:"75%"},dataLabels:{show:!0,name:{show:!0,fontSize:"14px",fontWeight:500,offsetY:-10,color:o.lightText},value:{show:!0,fontWeight:600,color:o.purple,fontSize:"16px",offsetY:-5}}}},labels:["Growth"]},S={class:"finance-dashboard analytics-dashboard"},W={class:"columns"},T={class:"column is-9"},A={class:"columns is-multiline"},L={class:"column is-4"},M={class:"dashboard-tile"},O={class:"tile-head"},F=v("h3",{class:"dark-inverted"},"Transactions",-1),C=v("i",{"aria-hidden":"true",class:"fas fa-gem"},null,-1),P=b('<div class="tile-body"><span class="dark-inverted">8,637</span></div><div class="tile-foot"><span class="text-h-green">+6.4% <i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i></span><span>since last month</span></div>',2),B={class:"column is-4"},I={class:"dashboard-tile"},Y={class:"tile-head"},J=v("h3",{class:"dark-inverted"},"Subscriptions",-1),N=v("i",{"aria-hidden":"true",class:"fas fa-user-plus"},null,-1),R=b('<div class="tile-body"><span class="dark-inverted">1,378</span></div><div class="tile-foot"><span class="text-h-red">-2.1% <i aria-hidden="true" class="iconify" data-icon="feather:trending-down"></i></span><span>going down</span></div>',2),G={class:"column is-4"},U={class:"dashboard-tile"},V={class:"tile-head"},$=v("h3",{class:"dark-inverted"},"Referals",-1),q=v("i",{"aria-hidden":"true",class:"fas fa-bullhorn"},null,-1),E=b('<div class="tile-body"><span class="dark-inverted">1,911</span></div><div class="tile-foot"><span class="text-h-green">+4.2% <i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i></span><span>going up</span></div>',2),D={class:"column is-8"},K={class:"dashboard-card"},H=b('<div class="card-head"><h3 class="dark-inverted">Revenue</h3></div><div class="revenue-stats"><div class="revenue-stat"><span>This Month</span><span class="current">$75,648.43</span></div><div class="revenue-stat"><span>Last Month</span><span class="dark-inverted">$91,512.18</span></div></div>',2),Q={class:"column is-4"},X={class:"dashboard-card"},Z=v("div",{class:"card-head"},[v("h3",{class:"dark-inverted"},"Goal Overview")],-1),aa={class:"radial-wrap"},sa=b('<div class="radial-stats is-dark-bordered-12"><div class="radial-stat is-dark-bordered-12"><span>Completed</span><span class="dark-inverted">1,223</span></div><div class="radial-stat"><span>In Progress</span><span class="dark-inverted">467</span></div></div>',1),ea={class:"column is-4"},ta={class:"dashboard-card"},la=v("div",{class:"card-head"},[v("h3",{class:"dark-inverted"},"Sales")],-1),ia={class:"progress-block"},ra=v("div",{class:"value"},[v("span",{class:"dark-inverted"},"78%")],-1),na=v("div",{class:"progress-foot"},[v("span",{class:"text-h-green"},[w("+6.4% "),v("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:trending-up"})]),v("span",null,"since last month")],-1),oa={class:"column is-8"},da={class:"dashboard-card"},ca=v("div",{class:"card-head"},[v("h3",{class:"dark-inverted"},"Profit")],-1),pa={class:"column is-3"},ua=v("div",{class:"widget-toolbar"},[v("div",{class:"left"},[v("a",{class:"action-icon"},[v("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"})])]),v("div",{class:"center"},[v("h3",null,"October 2020")]),v("div",{class:"right"},[v("a",{class:"action-icon"},[v("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})])])],-1),ha=v("table",{class:"calendar"},[v("thead",null,[v("tr",null,[v("th",{scope:"col"},"Mon"),v("th",{scope:"col"},"Tue"),v("th",{scope:"col"},"Wed"),v("th",{scope:"col"},"Thu"),v("th",{scope:"col"},"Fri"),v("th",{scope:"col"},"Sat"),v("th",{scope:"col"},"Sun")])]),v("tbody",null,[v("tr",null,[v("td",{class:"prev-month"},"29"),v("td",{class:"prev-month"},"30"),v("td",{class:"prev-month"},"31"),v("td",null,"1"),v("td",null,"2"),v("td",null,"3"),v("td",null,"4")]),v("tr",null,[v("td",null,"5"),v("td",null,"6"),v("td",null,"7"),v("td",null,"8"),v("td",null,"9"),v("td",null,"10"),v("td",null,"11")]),v("tr",null,[v("td",null,"12"),v("td",null,"13"),v("td",null,"14"),v("td",null,"15"),v("td",null,"16"),v("td",null,"17"),v("td",{class:"current-day"},"18")]),v("tr",null,[v("td",null,"19"),v("td",null,"20"),v("td",null,"21"),v("td",null,"22"),v("td",null,"23"),v("td",null,"24"),v("td",null,"25")]),v("tr",null,[v("td",null,"26"),v("td",null,"27"),v("td",null,"28"),v("td",null,"29"),v("td",null,"30"),v("td",null,"31"),v("td",{class:"next-month"},"1")])])],-1),va={class:"widget-content"},ga=w(" Great News! "),fa=w(", "),ma=w(" and "),ya=w(" are now following you. Take some time to look at their profile. ");var ba=c({setup:o=>(o,c)=>{const b=a,w=p("apexchart"),_=s,ba=e,wa=t,ka=l,xa=i,_a=n;return u(),h("div",S,[v("div",W,[v("div",T,[v("div",A,[v("div",L,[v("div",M,[v("div",O,[F,g(b,{color:"primary",size:"small",rounded:""},{default:f((()=>[C])),_:1})]),P])]),v("div",B,[v("div",I,[v("div",Y,[J,g(b,{color:"orange",size:"small",rounded:""},{default:f((()=>[N])),_:1})]),R])]),v("div",G,[v("div",U,[v("div",V,[$,g(b,{color:"green",size:"small",rounded:""},{default:f((()=>[q])),_:1})]),E])]),v("div",D,[v("div",K,[H,g(w,{id:"revenue-chart",height:m(k).chart.height,type:m(k).chart.type,series:m(k).series,options:m(k)},null,8,["height","type","series","options"])])]),v("div",Q,[v("div",X,[Z,v("div",aa,[g(w,{id:"goal-gauge",height:m(x).chart.height,type:m(x).chart.type,series:m(x).series,options:m(x)},null,8,["height","type","series","options"]),sa])])]),v("div",ea,[v("div",ta,[la,v("div",ia,[ra,g(_,{size:"tiny",value:78}),na,g(w,{id:"radial-circle",class:"circle-chart-wrapper",height:m(j).chart.height,type:m(j).chart.type,series:m(j).series,options:m(j)},null,8,["height","type","series","options"])])])]),v("div",oa,[v("div",da,[ca,g(w,{id:"profit-chart",height:m(z).chart.height,type:m(z).chart.type,series:m(z).series,options:m(z)},null,8,["height","type","series","options"])])])])]),v("div",pa,[g(ba,{picture:"https://vuero.cssninja.io/demo/avatars/8.jpg",username:"Erik K.",email:"erikkovalsky@vuero.io",company:"Vuero Ltd.",position:"Product Manager",location:"Los Angeles, CA",phone:"+1 444-5156",squared:"",reversed:"",straight:""}),g(wa,{class:"picker-widget",straight:""},{header:f((()=>[ua])),body:f((()=>[ha])),_:1}),g(wa,{class:"text-widget",straight:""},{header:f((()=>[g(ka,{title:"New Followers",avatars:m(d)},null,8,["avatars"])])),body:f((()=>[v("div",va,[v("p",null,[ga,v("span",null,y(m(d)[0].name),1),fa,v("span",null,y(m(d)[1].name),1),ma,v("span",null,y(m(d)[2].name),1),ya])])])),_:1}),g(wa,{class:"list-widget",straight:""},{header:f((()=>[g(xa,{title:"Notifications"})])),body:f((()=>[g(_a,{notifications:m(r)},null,8,["notifications"])])),_:1})])])])}});export{ba as _};
