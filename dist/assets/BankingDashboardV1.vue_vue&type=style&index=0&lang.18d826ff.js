import{_ as s}from"./GraphDropdown.4cac22b5.js";import{_ as a}from"./V-IconBox.vue_vue&type=script&setup=true&lang.81d7ae28.js";import{_ as e}from"./V-Block.vue_vue&type=script&setup=true&lang.bdf2e24f.js";import{_ as l}from"./V-Control.99a0e082.js";import{_ as i}from"./V-Field.vue_vue&type=script&setup=true&lang.5d22eff5.js";import{_ as t}from"./V-Progress.vue_vue&type=script&setup=true&lang.8afd4efc.js";import{_ as n}from"./V-Avatar.vue_vue&type=script&setup=true&lang.76ef855d.js";import{_ as c}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6e734e3d.js";import{t as o,a as r}from"./index.6333da36.js";import{p as d}from"./userPopovers.002ce52c.js";import{r as u,d as p,i as v,o as m,e as h,f as g,s as f,t as b,q as k,y,C as _,z as x,A as w}from"./vendor.f636d161.js";var j="/images/icons/dashboards/banking/visa-squared-white.svg";const T={series:[{name:"Expenses",data:[318,150,49,152.13,421,1009,1220,418,113,45]},{name:"Earnings",data:[192,263,459,312,349,527,397,351,618,511]}],chart:{height:300,type:"area",toolbar:{show:!1}},colors:[o.green,o.info,o.orange],title:{text:"History",align:"left"},legend:{position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-10-19T00:00:00.000Z","2020-10-20T01:30:00.000Z","2020-10-21T02:30:00.000Z","2020-10-22T03:30:00.000Z","2020-10-23T04:30:00.000Z","2020-10-24T05:30:00.000Z","2020-10-25T06:30:00.000Z","2020-10-26T06:30:00.000Z","2020-10-27T06:30:00.000Z","2020-10-28T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"},y:{formatter:function(s){return"$"+s}}}},V=["default"],C=[{value:"default",name:"Select an account",icon:"https://vuero.cssninja.io/demo/avatars/8.jpg"},{value:"4156 1000 56565 17",name:"4156 1000 56565 17",icon:"/images/icons/dashboards/banking/bank-1.svg"},{value:"2247 2427 89975 12",name:"2247 2427 89975 12",icon:"/images/icons/dashboards/banking/bank-2.svg"},{value:"2247 2427 89975 19",name:"2247 2427 89975 19",icon:"/images/icons/dashboards/banking/bank-3.svg"}],Z=u(0),S=["Last 10 days","Last month","Last 3 months","Last 6 months"],z={class:"banking-dashboard banking-dashboard-v1"},A={class:"columns is-multiline"},L={class:"column is-4"},M={class:"dashboard-card is-credit-cards"},$=x('<div class="title-wrap"><h3 class="dark-inverted">My Cards</h3><button class="button is-circle is-dark-outlined"><span class="icon is-small"><i aria-hidden="true" class="iconify" data-icon="feather:plus"></i></span></button></div>',1),O={class:"card-block"},B={class:"card-block-inner is-dark-bordered-12"},D=g("div",{class:"credit-card is-theme-1"},[g("div",{class:"shape"}),g("div",{class:"top"},[g("div",{class:"card-number"},[g("span",null,"** 4628"),g("img",{src:j,alt:""})])]),g("div",{class:"bottom"},[g("span",null,"Credit Card")])],-1),E=g("div",{class:"credit-card-meta"},[g("span",null,"Card Balance"),g("span",{class:"dark-inverted"},"$2,834.31")],-1),P={class:"credit-card-end"},U=g("div",{class:"info-block-inner"},[g("div",{class:"title-wrap"},[g("h3",{class:"dark-inverted"},"Information"),g("a",{class:"action-link"},"Edit")]),g("div",{class:"info-block-line"},[g("h4",{class:"dark-inverted"},"Status"),g("span",null,[g("i",{"aria-hidden":"true",class:"fas fa-circle text-success"}),w(" Active ")])]),g("div",{class:"info-block-line"},[g("h4",{class:"dark-inverted"},"Expires in"),g("span",null,"134 days")]),g("div",{class:"info-block-line"},[g("h4",{class:"dark-inverted"},"Type"),g("span",{class:"has-image"},[g("img",{src:"/images/icons/dashboards/banking/visa-squared-color.svg",alt:""}),w(" Credit card ")])])],-1),q={class:"card-block-inner is-dark-bordered-12"},F=g("div",{class:"credit-card is-theme-2"},[g("div",{class:"shape"}),g("div",{class:"top"},[g("div",{class:"card-number"},[g("span",null,"** 2649"),g("img",{src:j,alt:""})])]),g("div",{class:"bottom"},[g("span",null,"Debit Card")])],-1),H=g("div",{class:"credit-card-meta"},[g("span",null,"Card Balance"),g("span",{class:"dark-inverted"},"$10,563.18")],-1),I={class:"credit-card-end"},G={class:"dashboard-card is-transactions"},J=g("div",{class:"title-wrap"},[g("h3",{class:"dark-inverted"},"Transactions"),g("a",{class:"action-link"},"View All")],-1),K={class:"transactions"},Q=g("i",{"aria-hidden":"true",class:"lnil lnil-service"},null,-1),R=g("span",{class:"dark-inverted"},"- $41.49",-1),Y=g("i",{"aria-hidden":"true",class:"lnil lnil-analytics-alt-1"},null,-1),N=g("span",{class:"dark-inverted"},"+ $263.39",-1),W=g("i",{"aria-hidden":"true",class:"lnil lnil-cart-alt"},null,-1),X=g("span",{class:"dark-inverted"},"- $92.00",-1),ss={class:"column is-8"},as={class:"columns is-multiline"},es={class:"column is-6"},ls={class:"dashboard-card"},is=g("div",{class:"title-wrap"},[g("h3",{class:"dark-inverted"},"Quick Transfer")],-1),ts={class:"multiselect-single-label"},ns=["src"],cs={class:"select-label-text"},os=["src"],rs={class:"select-label-text"},ds=x('<p class="context-text"> Select one of your bank accounts to transfer some funds. The transfer cannot exceed 20% of your balance. </p><div class="level is-mobile"><div class="level-left"></div><div class="level-right"><div class="level-item"><a class="action-link">Confirm</a></div></div></div>',2),us={class:"dashboard-card","data-toggle":"popover","data-pop-mode":"hover","data-pop-width":"220","data-pop-title":"Level 3","data-pop-content":"Awesome! You're already a level 3 customer. Keep up for more.","data-pop-position":"auto","data-pop-icon":"lnil lnil-crown-alt-1","data-pop-iconbg":"green"},ps=g("div",{class:"title-wrap"},[g("h3",{class:"dark-inverted"},"Overall Progress"),g("span",{class:"title-meta dark-inverted"},"Lvl 3")],-1),vs={class:"progress-wrap m-b-10 m-t-10"},ms=x('<p class="context-text"> This is your Vuero customer level. Reach out higher levels to unlock achievements, special gifts, and more. </p><div class="level is-mobile"><div class="level-left"></div><div class="level-right"><div class="level-item"><a class="action-link">Details</a></div></div></div>',2),hs={class:"column is-6"},gs={class:"dashboard-card is-contacts"},fs=g("div",{class:"title-wrap"},[g("h3",{class:"dark-inverted"},"Send Money To")],-1),bs={class:"people-wrap"},ks={class:"people"},ys=g("div",{class:"actions"},[g("span",null,"See all Contacts"),g("a",{class:"is-dark-primary-hover"},[g("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})])],-1),_s={class:"transfer-form"},xs={class:"multiselect-single-label"},ws=["src"],js={class:"select-label-text"},Ts=["src"],Vs={class:"select-label-text"},Cs=x('<div class="field"><label>Amount</label><div class="field has-addons"><div class="control"><span class="select currency-select"><select><option>$</option><option>£</option><option>€</option></select></span></div><div class="control is-expanded"><input class="input" type="text" placeholder="Amount of money"></div></div></div><p class="context-text"> Funds will reach destination tomorrow. </p>',2),Zs={class:"submit-wrap"},Ss=w(" Send Money "),zs={class:"column is-12"},As={class:"dashboard-card is-income"};var Ls=p({setup:o=>(o,u)=>{const p=s,x=a,w=e,j=v("Multiselect"),Ls=l,Ms=i,$s=t,Os=n,Bs=c,Ds=v("tippy"),Es=r,Ps=v("apexchart");return m(),h("div",z,[g("div",A,[g("div",L,[g("div",M,[$,g("div",O,[g("div",B,[D,E,g("div",P,[f(p)])]),U,g("div",q,[F,H,g("div",I,[f(p)])])])]),g("div",G,[J,g("div",K,[f(w,{title:"Food Delivery",subtitle:"Oct 23, 2020 - 8:46pm",center:"",lighter:""},{icon:b((()=>[f(x,{color:"green",rounded:""},{default:b((()=>[Q])),_:1})])),action:b((()=>[R])),_:1}),f(w,{title:"Market Earnings",subtitle:"Oct 18, 2020 - 9:11am",center:"",lighter:""},{icon:b((()=>[f(x,{color:"orange",rounded:""},{default:b((()=>[Y])),_:1})])),action:b((()=>[N])),_:1}),f(w,{title:"Online Order",subtitle:"Oct 16, 2020 - 2:13pm",center:"",lighter:""},{icon:b((()=>[f(x,{color:"purple",rounded:""},{default:b((()=>[W])),_:1})])),action:b((()=>[X])),_:1})])])]),g("div",ss,[g("div",as,[g("div",es,[g("div",ls,[is,f(Ms,{class:"is-image-select has-curved-images"},{default:b((()=>[f(Ls,null,{default:b((()=>[f(j,{modelValue:k(V),"onUpdate:modelValue":u[0]||(u[0]=s=>y(V)?V.value=s:null),placeholder:"Select a language",label:"name","max-height":145,options:k(C)},{singlelabel:b((({value:s})=>[g("div",ts,[g("img",{class:"select-label-icon",src:s.icon,alt:""},null,8,ns),g("span",cs,_(s.name),1)])])),option:b((({option:s})=>[g("img",{class:"select-option-icon",src:s.icon,alt:""},null,8,os),g("span",rs,_(s.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1}),ds]),g("div",us,[ps,g("div",vs,[f($s,{size:"tiny",value:65})]),ms])]),g("div",hs,[g("div",gs,[fs,g("div",bs,[g("div",ks,[f(Ds,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:b((()=>[f(Bs,{user:k(d).user122},null,8,["user"])])),default:b((()=>[f(Os,{color:"warning",initials:"BT",size:"small"})])),_:1}),f(Ds,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:b((()=>[f(Bs,{user:k(d).user18},null,8,["user"])])),default:b((()=>[f(Os,{picture:"https://vuero.cssninja.io/demo/avatars/18.jpg",size:"small"})])),_:1}),f(Ds,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:b((()=>[f(Bs,{user:k(d).user123},null,8,["user"])])),default:b((()=>[f(Os,{color:"info",initials:"JD",size:"small"})])),_:1}),f(Ds,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:b((()=>[f(Bs,{user:k(d).user7},null,8,["user"])])),default:b((()=>[f(Os,{picture:"https://vuero.cssninja.io/demo/avatars/7.jpg",size:"small"})])),_:1})]),ys]),g("div",_s,[f(Ms,{class:"is-image-select has-curved-images"},{default:b((()=>[f(Ls,null,{default:b((()=>[f(j,{modelValue:k(V),"onUpdate:modelValue":u[1]||(u[1]=s=>y(V)?V.value=s:null),placeholder:"Select a language",label:"name","max-height":145,options:k(C)},{singlelabel:b((({value:s})=>[g("div",xs,[g("img",{class:"select-label-icon",src:s.icon,alt:""},null,8,ws),g("span",js,_(s.name),1)])])),option:b((({option:s})=>[g("img",{class:"select-option-icon",src:s.icon,alt:""},null,8,Ts),g("span",Vs,_(s.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1}),Cs,g("div",Zs,[f(Es,{color:"primary",size:"big",fullwidth:"",raised:"",bold:""},{default:b((()=>[Ss])),_:1})])])])]),g("div",zs,[g("div",As,[f(Ms,{class:"is-minimal-select"},{default:b((()=>[f(Ls,null,{default:b((()=>[f(j,{modelValue:k(Z),"onUpdate:modelValue":u[2]||(u[2]=s=>y(Z)?Z.value=s:null),options:k(S),placeholder:"Select an option","max-height":145},null,8,["modelValue","options"])])),_:1})])),_:1}),f(Ps,{id:"income-chart",height:k(T).chart.height,type:k(T).chart.type,series:k(T).series,options:k(T)},null,8,["height","type","series","options"])])])])])])])}});export{Ls as _};