import{d as a,o as d,e,E as n,n as o}from"./vendor.2e4d4237.js";var s=a({props:{addons:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:a=>-1!==[void 0,"centered","right"].indexOf(a)||(console.warn(`V-Buttons: invalid "${a}" align. Should be centered, right or undefined`),!1)}},setup(a){const s=a;return(a,t)=>(d(),e("div",{class:o(["buttons",[s.addons&&"has-addons",s.align&&`is-${s.align}`]])},[n(a.$slots,"default")],2))}});export{s as _};