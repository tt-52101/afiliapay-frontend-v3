import{_ as s,a as n}from"./DocumentationItem.8f0d48ff.js";import{d as a,o as t,a as p,t as e,e as r,b as i,ag as l,n as m,x as o,y as c,v as u,E as k,j as d,Y as b,i as g}from"./vendor.2d2522c6.js";import{d as f,e as h,p as v}from"./index.e4f9c427.js";import{u as V,_ as w}from"./useMarkdownToc.85a99535.js";const S={class:"switch-segment"},y=["checked"],_=i("i",{"aria-hidden":"true"},null,-1);let C=0;var x=a({props:{modelValue:{type:Boolean,default:!1},labelTrue:{type:String,default:void 0},labelFalse:{type:String,default:void 0},color:{type:String,default:void 0,validator:s=>-1!==[void 0,"primary","info","success","warning","danger"].indexOf(s)||(console.warn(`V-SwitchSegment: invalid "${s}" color. Should be primary, info, success, warning, danger or undefined`),!1)}},emits:["update:modelValue"],setup(s,{emit:n}){const a="segment-switch-"+ ++C;return(o,c)=>(t(),p("div",S,[s.labelFalse?(t(),p("label",{key:0,class:"is-label",for:a},e(s.labelFalse),1)):r("",!0),i("label",{for:a,class:m(["form-switch",[s.color&&`is-${s.color}`]])},[i("input",l({id:a,checked:s.modelValue},o.$attrs,{type:"checkbox",class:"is-switch",onChange:c[0]||(c[0]=a=>n("update:modelValue",!s.modelValue))}),null,16,y),_],2),s.labelTrue?(t(),p("label",{key:1,class:"is-label",for:a},e(s.labelTrue),1)):r("",!0)]))}});const F=i("h3",{id:"v-switchsegment",tabindex:"-1"},"V-SwitchSegment",-1),q=i("p",null,[k("Vuero provides nicely styled switch segment when you need to display such control in your forms. Vuero "),i("code",null,"V-SwitchSegment"),k(" component have several color modififers. Available modifiers are "),i("code",null,"primary"),k(", "),i("code",null,"success"),k(", "),i("code",null,"info"),k(", "),i("code",null,"warning"),k(" and "),i("code",null,"danger"),k(". Please refer to the markup for more details about usage.")],-1),T=i("div",{class:"language-vue line-numbers-mode"},[i("pre",null,[i("code",null,[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("template")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n  "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-Field")]),k(),i("span",{class:"prism--token prism--attr-name"},"grouped"),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-SwitchSegment")]),k(),i("span",{class:"prism--token prism--punctuation"},"/>")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-SwitchSegment")]),k(),i("span",{class:"prism--token prism--attr-name"},"color"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),k("primary"),i("span",{class:"prism--token prism--punctuation"},'"')]),k(),i("span",{class:"prism--token prism--attr-name"},"checked"),k(),i("span",{class:"prism--token prism--punctuation"},"/>")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-SwitchSegment")]),k(),i("span",{class:"prism--token prism--attr-name"},"color"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),k("success"),i("span",{class:"prism--token prism--punctuation"},'"')]),k(),i("span",{class:"prism--token prism--attr-name"},"checked"),k(),i("span",{class:"prism--token prism--punctuation"},"/>")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-SwitchSegment")]),k(),i("span",{class:"prism--token prism--attr-name"},"color"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),k("info"),i("span",{class:"prism--token prism--punctuation"},'"')]),k(),i("span",{class:"prism--token prism--attr-name"},"checked"),k(),i("span",{class:"prism--token prism--punctuation"},"/>")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-SwitchSegment")]),k(),i("span",{class:"prism--token prism--attr-name"},"color"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),k("warning"),i("span",{class:"prism--token prism--punctuation"},'"')]),k(),i("span",{class:"prism--token prism--attr-name"},"checked"),k(),i("span",{class:"prism--token prism--punctuation"},"/>")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-SwitchSegment")]),k(),i("span",{class:"prism--token prism--attr-name"},"color"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),k("danger"),i("span",{class:"prism--token prism--punctuation"},'"')]),k(),i("span",{class:"prism--token prism--attr-name"},"checked"),k(),i("span",{class:"prism--token prism--punctuation"},"/>")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n  "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("V-Field")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("template")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n")])]),i("div",{class:"line-numbers-wrapper"},[i("span",{class:"line-number"},"1"),i("br"),i("span",{class:"line-number"},"2"),i("br"),i("span",{class:"line-number"},"3"),i("br"),i("span",{class:"line-number"},"4"),i("br"),i("span",{class:"line-number"},"5"),i("br"),i("span",{class:"line-number"},"6"),i("br"),i("span",{class:"line-number"},"7"),i("br"),i("span",{class:"line-number"},"8"),i("br"),i("span",{class:"line-number"},"9"),i("br"),i("span",{class:"line-number"},"10"),i("br"),i("span",{class:"line-number"},"11"),i("br"),i("span",{class:"line-number"},"12"),i("br"),i("span",{class:"line-number"},"13"),i("br"),i("span",{class:"line-number"},"14"),i("br"),i("span",{class:"line-number"},"15"),i("br"),i("span",{class:"line-number"},"16"),i("br"),i("span",{class:"line-number"},"17"),i("br"),i("span",{class:"line-number"},"18"),i("br"),i("span",{class:"line-number"},"19"),i("br"),i("span",{class:"line-number"},"20"),i("br"),i("span",{class:"line-number"},"21"),i("br"),i("span",{class:"line-number"},"22"),i("br")])],-1);const j={},E={render:function(n,a){const p=x,e=f,r=h,i=s;return t(),o(i,{frontmatter:n.frontmatter},{code:c((()=>[T])),example:c((()=>[u(r,{grouped:""},{default:c((()=>[u(e,null,{default:c((()=>[u(p)])),_:1}),u(e,null,{default:c((()=>[u(p,{color:"primary",checked:""})])),_:1}),u(e,null,{default:c((()=>[u(p,{color:"success",checked:""})])),_:1}),u(e,null,{default:c((()=>[u(p,{color:"info",checked:""})])),_:1}),u(e,null,{default:c((()=>[u(p,{color:"warning",checked:""})])),_:1}),u(e,null,{default:c((()=>[u(p,{color:"danger",checked:""})])),_:1})])),_:1})])),default:c((()=>[F,q])),_:1},8,["frontmatter"])},data:()=>({frontmatter:j})},O=i("h3",{id:"label",tabindex:"-1"},"Label",-1),D=i("p",null,[k("You might have to add a label to your switches in some cases. If so, use the "),i("code",null,"V-SwitchSegment"),k(" component, which provides "),i("code",null,"labelTrue"),k(" and "),i("code",null,"labelFalse"),k(" attributes. See the code example for more details about usage.")],-1),P=i("div",{class:"language-vue line-numbers-mode"},[i("pre",null,[i("code",null,[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("script")]),k(),i("span",{class:"prism--token prism--attr-name"},"setup"),k(),i("span",{class:"prism--token prism--attr-name"},"lang"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),k("ts"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),i("span",{class:"prism--token prism--script"},[i("span",{class:"prism--token prism--language-javascript"},[k("\n"),i("span",{class:"prism--token prism--keyword"},"import"),k(),i("span",{class:"prism--token prism--punctuation"},"{"),k(" ref "),i("span",{class:"prism--token prism--punctuation"},"}"),k(),i("span",{class:"prism--token prism--keyword"},"from"),k(),i("span",{class:"prism--token prism--string"},"'vue'"),k("\n\n"),i("span",{class:"prism--token prism--keyword"},"const"),k(" value "),i("span",{class:"prism--token prism--operator"},"="),k(),i("span",{class:"prism--token prism--function"},"ref"),i("span",{class:"prism--token prism--punctuation"},"("),i("span",{class:"prism--token prism--boolean"},"true"),i("span",{class:"prism--token prism--punctuation"},")"),k("\n")])]),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("script")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n\n"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("template")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n  "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-Field")]),k(),i("span",{class:"prism--token prism--attr-name"},"grouped"),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),k("V-SwitchSegment")]),k("\n        "),i("span",{class:"prism--token prism--attr-name"},"v-model"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),k("value"),i("span",{class:"prism--token prism--punctuation"},'"')]),k("\n        "),i("span",{class:"prism--token prism--attr-name"},"label-true"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),k("ON"),i("span",{class:"prism--token prism--punctuation"},'"')]),k("\n        "),i("span",{class:"prism--token prism--attr-name"},"label-false"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),k("OFF"),i("span",{class:"prism--token prism--punctuation"},'"')]),k("\n        "),i("span",{class:"prism--token prism--attr-name"},"color"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),k("primary"),i("span",{class:"prism--token prism--punctuation"},'"')]),k("\n      "),i("span",{class:"prism--token prism--punctuation"},"/>")]),k("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n  "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("V-Field")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),k("template")]),i("span",{class:"prism--token prism--punctuation"},">")]),k("\n")])]),i("div",{class:"line-numbers-wrapper"},[i("span",{class:"line-number"},"1"),i("br"),i("span",{class:"line-number"},"2"),i("br"),i("span",{class:"line-number"},"3"),i("br"),i("span",{class:"line-number"},"4"),i("br"),i("span",{class:"line-number"},"5"),i("br"),i("span",{class:"line-number"},"6"),i("br"),i("span",{class:"line-number"},"7"),i("br"),i("span",{class:"line-number"},"8"),i("br"),i("span",{class:"line-number"},"9"),i("br"),i("span",{class:"line-number"},"10"),i("br"),i("span",{class:"line-number"},"11"),i("br"),i("span",{class:"line-number"},"12"),i("br"),i("span",{class:"line-number"},"13"),i("br"),i("span",{class:"line-number"},"14"),i("br"),i("span",{class:"line-number"},"15"),i("br"),i("span",{class:"line-number"},"16"),i("br"),i("span",{class:"line-number"},"17"),i("br"),i("span",{class:"line-number"},"18"),i("br")])],-1);const $={state:{value:!0}},H={render:function(n,a){const p=x,e=f,r=h,i=s;return t(),o(i,{frontmatter:n.frontmatter},{code:c((()=>[P])),example:c((()=>[u(r,{grouped:""},{default:c((()=>[u(e,null,{default:c((()=>[u(p,{modelValue:n.frontmatter.state.value,"onUpdate:modelValue":a[0]||(a[0]=s=>n.frontmatter.state.value=s),"label-true":"ON","label-false":"OFF",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})])),default:c((()=>[O,D])),_:1},8,["frontmatter"])},data:()=>({frontmatter:$})},I=i("h3",{id:"v-switchsegment-props",tabindex:"-1"},"V-SwitchSegment Props",-1),L=i("p",null,[k("Here is the full props available for "),i("code",null,"<V-SwitchSegment />"),k(" component:")],-1),N=i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"Props"),i("th",null,"Default"),i("th",null,"Type")])]),i("tbody",null,[i("tr",null,[i("td",null,"labelTrue"),i("td",null,[i("span",{class:"is-undefined"},[i("code",null,"undefined")])]),i("td",null,"string")]),i("tr",null,[i("td",null,"labelFalse"),i("td",null,[i("span",{class:"is-undefined"},[i("code",null,"undefined")])]),i("td",null,"string")]),i("tr",null,[i("td",null,"modelValue"),i("td",null,[i("span",{class:"is-boolean"},[i("code",null,"false")])]),i("td",null,"boolean")]),i("tr",null,[i("td",null,"color"),i("td",null,[i("span",{class:"is-undefined"},[i("code",null,"undefined")])]),i("td",null,[i("code",null,"primary"),k(", "),i("code",null,"info"),k(", "),i("code",null,"success"),k(", "),i("code",null,"warning"),k(", "),i("code",null,"danger")])])])],-1);const U={disable_code:!0},Y={render:function(n,a){const p=s;return t(),o(p,{frontmatter:n.frontmatter},{default:c((()=>[I,L,N])),_:1},8,["frontmatter"])},data:()=>({frontmatter:U})},A=i("h3",{id:"v-switchsegment-events",tabindex:"-1"},"V-SwitchSegment Events",-1),B=i("p",null,[k("Here is the full events available for "),i("code",null,"<V-SwitchSegment />"),k(" component:")],-1),M=i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"Event"),i("th",null,"Callback"),i("th",null,"Description")])]),i("tbody",null,[i("tr",null,[i("td",null,"@update:modelValue"),i("td",null,[i("span",{class:"is-function"},[i("code",null,"(value: boolean) => void")])]),i("td",null,[k("Raised when the switch value changed"),i("br"),k("Use "),i("code",null,"v-model"),k(" directive to bind values")])])])],-1);const R={disable_code:!0},z={render:function(n,a){const p=s;return t(),o(p,{frontmatter:n.frontmatter},{default:c((()=>[A,B,M])),_:1},8,["frontmatter"])},data:()=>({frontmatter:R})},G={class:"page-content-inner"},J={class:"columns"},K={key:0,class:"column is-3 toc-column"};var Q=a({setup(s){const a=d(null),e=V(a);return v.value="V-SwitchSegment",b({title:"V-SwitchSegment - Switches Elements - Vuero"}),(s,l)=>{const o=n,c=E,k=H,d=Y,b=z,f=w;return t(),p("div",G,[u(o,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"index"}},{label:"Elements",to:{name:"elements"}},{label:"Switches"},{label:"V-SwitchSegment",to:{name:"elements-switch-segment"}}]}),i("div",J,[i("div",{ref:a,class:m([[g(e).length>0?"is-9":"is-12"],"column doc-column"])},[u(c),u(k),u(d),u(b)],2),g(e).length?(t(),p("div",K,[u(f,{toc:g(e)},null,8,["toc"])])):r("",!0)])])}}});export default Q;
