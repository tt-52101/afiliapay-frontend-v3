import{d as s,L as a,f as e,o as t,a as l,b as i,r,n,i as o,G as c}from"./vendor.2d2522c6.js";const d={class:"navbar-navbar-inner"},v={class:"left"},f=i("h1",{class:"title is-5"},"Page Title",-1),p={class:"center"},u=i("div",{class:"centered-links"},[i("a",{href:"/",class:"centered-link centered-link-toggle"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"}),i("span",null,"Homepage")])],-1),h={class:"right"};var b=s({props:{theme:{type:String,default:"default"}},setup(s){const b=s,{y:g}=a(),m=e((()=>g.value>30));return(s,a)=>(t(),l(c,null,[i("div",{class:n(["navbar-navbar",[o(m)&&"is-scrolled","fade"===b.theme&&"is-transparent","colored"===b.theme&&"is-colored"]])},[i("div",d,[i("div",v,[r(s.$slots,"title",{},(()=>[f]))]),i("div",p,[r(s.$slots,"links",{},(()=>[u]))]),i("div",h,[r(s.$slots,"toolbar")])])],2),r(s.$slots,"subnav")],64))}});export{b as _};
