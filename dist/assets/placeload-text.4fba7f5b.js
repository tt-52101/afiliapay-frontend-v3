import{_ as s,a as n}from"./DocumentationItem.8f0d48ff.js";import{_ as t}from"./V-Placeload.59bf2920.js";import{d as a,o as e,a as l,G as r,N as i,x as p,v as o,y as c,b as u,E as m,j as d,Y as h,n as k,i as f,e as b}from"./vendor.2d2522c6.js";import{u as v,_ as g}from"./useMarkdownToc.85a99535.js";import{p as x}from"./index.e4f9c427.js";const w={class:"content-shape-group"},V=/(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;var P=a({props:{width:{type:String,default:"100%",validator:s=>(null===s.match(V)&&console.warn(`V-PlaceloadText: invalid "${s}" placeload. Should be a valid css unit value.`),!0)},lastLineWidth:{type:String,default:"100%",validator:s=>(null===s.match(V)&&console.warn(`V-PlaceloadText: invalid "${s}" placeload. Should be a valid css unit value.`),!0)},lines:{type:Number,default:2},centered:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(s){const n=s;return(s,a)=>{const c=t;return e(),l("div",w,[(e(!0),l(r,null,i(n.lines-1,(s=>(e(),p(c,{key:s,width:n.width,centered:n.centered},null,8,["width","centered"])))),128)),o(c,{width:n.lastLineWidth,centered:n.centered},null,8,["width","centered"])])}}});const T=u("h3",{id:"v-placeloadtext",tabindex:"-1"},"V-PlaceloadText",-1),y=u("p",null,[m("Vuero provides a "),u("code",null,"<V-PlaceloadText />"),m(" component to display text skeleton while loading. Check the markup for more details.")],-1),_=u("div",{class:"language-vue line-numbers-mode"},[u("pre",null,[u("code",null,[u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--punctuation"},"<"),m("template")]),u("span",{class:"prism--token prism--punctuation"},">")]),m("\n  "),u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--punctuation"},"<"),m("V-PlaceloadText")]),m(),u("span",{class:"prism--token prism--punctuation"},"/>")]),m("\n"),u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--punctuation"},"</"),m("template")]),u("span",{class:"prism--token prism--punctuation"},">")]),m("\n")])]),u("div",{class:"line-numbers-wrapper"},[u("span",{class:"line-number"},"1"),u("br"),u("span",{class:"line-number"},"2"),u("br"),u("span",{class:"line-number"},"3"),u("br")])],-1);const j={},S={render:function(n,t){const a=P,l=s;return e(),p(l,{frontmatter:n.frontmatter},{code:c((()=>[_])),example:c((()=>[o(a)])),default:c((()=>[T,y])),_:1},8,["frontmatter"])},data:()=>({frontmatter:j})},L=u("h3",{id:"size",tabindex:"-1"},"Size",-1),q=u("p",null,[m("Control the size of "),u("code",null,"<V-PlaceloadText />"),m(" component to match your interface. You can set the "),u("code",null,"height"),m(" and the "),u("code",null,"width"),m(" properties according your needs")],-1),z=u("div",{class:"language-vue line-numbers-mode"},[u("pre",null,[u("code",null,[u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--punctuation"},"<"),m("template")]),u("span",{class:"prism--token prism--punctuation"},">")]),m("\n  "),u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--punctuation"},"<"),m("V-PlaceloadText")]),m(),u("span",{class:"prism--token prism--attr-name"},":lines"),u("span",{class:"prism--token prism--attr-value"},[u("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),u("span",{class:"prism--token prism--punctuation"},'"'),m("5"),u("span",{class:"prism--token prism--punctuation"},'"')]),m(),u("span",{class:"prism--token prism--attr-name"},"width"),u("span",{class:"prism--token prism--attr-value"},[u("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),u("span",{class:"prism--token prism--punctuation"},'"'),m("75%"),u("span",{class:"prism--token prism--punctuation"},'"')]),m(),u("span",{class:"prism--token prism--attr-name"},"last-line-width"),u("span",{class:"prism--token prism--attr-value"},[u("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),u("span",{class:"prism--token prism--punctuation"},'"'),m("25%"),u("span",{class:"prism--token prism--punctuation"},'"')]),m(),u("span",{class:"prism--token prism--punctuation"},"/>")]),m("\n"),u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--tag"},[u("span",{class:"prism--token prism--punctuation"},"</"),m("template")]),u("span",{class:"prism--token prism--punctuation"},">")]),m("\n")])]),u("div",{class:"line-numbers-wrapper"},[u("span",{class:"line-number"},"1"),u("br"),u("span",{class:"line-number"},"2"),u("br"),u("span",{class:"line-number"},"3"),u("br")])],-1);const E={},W={render:function(n,t){const a=P,l=s;return e(),p(l,{frontmatter:n.frontmatter},{code:c((()=>[z])),example:c((()=>[o(a,{lines:5,width:"75%","last-line-width":"25%"})])),default:c((()=>[L,q])),_:1},8,["frontmatter"])},data:()=>({frontmatter:E})},B=u("h3",{id:"v-placeloadtext-props",tabindex:"-1"},"V-PlaceloadText Props",-1),C=u("p",null,[m("Here is the full props available for "),u("code",null,"<V-PlaceloadText />"),m(" component:")],-1),D=u("table",null,[u("thead",null,[u("tr",null,[u("th",null,"Props"),u("th",null,"Default"),u("th",null,"Type")])]),u("tbody",null,[u("tr",null,[u("td",null,"width"),u("td",null,[u("span",{class:"is-string"},[u("code",null,"100%")])]),u("td",null,"string")]),u("tr",null,[u("td",null,"lastLineWidth"),u("td",null,[u("span",{class:"is-string"},[u("code",null,"100%")])]),u("td",null,"string")]),u("tr",null,[u("td",null,"lines"),u("td",null,[u("span",{class:"is-number"},[u("code",null,"2")])]),u("td",null,"number")]),u("tr",null,[u("td",null,"disabled"),u("td",null,[u("span",{class:"is-boolean"},[u("code",null,"false")])]),u("td",null,"boolean")]),u("tr",null,[u("td",null,"centered"),u("td",null,[u("span",{class:"is-boolean"},[u("code",null,"false")])]),u("td",null,"boolean")])])],-1);const N={disable_code:!0},Y={render:function(n,t){const a=s;return e(),p(a,{frontmatter:n.frontmatter},{default:c((()=>[B,C,D])),_:1},8,["frontmatter"])},data:()=>({frontmatter:N})},$={class:"page-content-inner"},G={class:"columns"},H={key:0,class:"column is-3 toc-column"};var I=a({setup(s){const t=d(null),a=v(t);return x.value="V-PlaceloadText",h({title:"V-PlaceloadText - Elements - Vuero"}),(s,r)=>{const i=n,p=S,c=W,m=Y,d=g;return e(),l("div",$,[o(i,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"index"}},{label:"Elements",to:{name:"elements"}},{label:"V-PlaceloadText",to:{name:"elements-placeload-text"}}]}),u("div",G,[u("div",{ref:t,class:k([[f(a).length>0?"is-9":"is-12"],"column doc-column"])},[o(p),o(c),o(m)],2),f(a).length?(e(),l("div",H,[o(d,{toc:f(a)},null,8,["toc"])])):b("",!0)])])}}});export default I;
