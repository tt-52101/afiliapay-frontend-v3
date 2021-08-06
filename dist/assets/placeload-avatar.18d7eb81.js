import{_ as s,a}from"./DocumentationItem.8f0d48ff.js";import{d as n,o as t,a as p,n as r,x as i,y as l,v as e,b as m,E as o,j as c,Y as u,i as k,e as d}from"./vendor.2d2522c6.js";import{_ as v}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.c7b679c0.js";import{u as b,_ as g}from"./useMarkdownToc.85a99535.js";import{p as f}from"./index.e4f9c427.js";var x=n({props:{size:{type:String,default:void 0,validator:s=>-1!==[void 0,"small","medium","large","big","xl"].indexOf(s)||(console.warn(`V-PlaceloadAvatar: invalid "${s}" size. Should be small, medium, large, big, xl or undefined`),!1)},rounded:{type:String,default:"full",validator:s=>-1!==["full","xs","sm","md","lg","xl"].indexOf(s)||(console.warn(`V-PlaceloadAvatar: invalid "${s}" rounded. Should be xs, sm, md, lg, xl or full`),!1)},centered:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(s){const a=s;return(s,n)=>(t(),p("div",{class:r(["placeload-avatar",[!a.disabled&&"loads",a.size&&`is-${a.size}`,a.centered&&"is-centered",a.rounded&&`is-rounded-${a.rounded}`]])},null,2))}});const V=m("h3",{id:"v-placeloadavatar",tabindex:"-1"},"V-PlaceloadAvatar",-1),A=m("p",null,[o("Vuero provides a "),m("code",null,"<V-PlaceloadAvatar />"),o(" component to display avatar skeleton while loading. Check the markup for more details.")],-1),h=m("div",{class:"language-vue line-numbers-mode"},[m("pre",null,[m("code",null,[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),o("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n")])]),m("div",{class:"line-numbers-wrapper"},[m("span",{class:"line-number"},"1"),m("br"),m("span",{class:"line-number"},"2"),m("br"),m("span",{class:"line-number"},"3"),m("br")])],-1);const P={},q={render:function(a,n){const p=x,r=s;return t(),i(r,{frontmatter:a.frontmatter},{code:l((()=>[h])),example:l((()=>[e(p)])),default:l((()=>[V,A])),_:1},8,["frontmatter"])},data:()=>({frontmatter:P})},z=m("h3",{id:"wrapping",tabindex:"-1"},"Wrapping",-1),y=m("p",null,[o("You can set multiple "),m("code",null,"<V-PlaceloadAvatar />"),o(" on a row. Simply wrap them in "),m("code",null,"<V-AvatarStack />")],-1),S=m("div",{class:"language-vue line-numbers-mode"},[m("pre",null,[m("code",null,[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-AvatarStack")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),o("V-AvatarStack")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),o("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n")])]),m("div",{class:"line-numbers-wrapper"},[m("span",{class:"line-number"},"1"),m("br"),m("span",{class:"line-number"},"2"),m("br"),m("span",{class:"line-number"},"3"),m("br"),m("span",{class:"line-number"},"4"),m("br"),m("span",{class:"line-number"},"5"),m("br"),m("span",{class:"line-number"},"6"),m("br"),m("span",{class:"line-number"},"7"),m("br")])],-1);const w={},_={render:function(a,n){const p=x,r=v,m=s;return t(),i(m,{frontmatter:a.frontmatter},{code:l((()=>[S])),example:l((()=>[e(r,null,{default:l((()=>[e(p,{class:"mx-1"}),e(p,{class:"mx-1"}),e(p,{class:"mx-1"})])),_:1})])),default:l((()=>[z,y])),_:1},8,["frontmatter"])},data:()=>({frontmatter:w})},j=m("h3",{id:"size",tabindex:"-1"},"Size",-1),Y=m("p",null,[o("Control the size of "),m("code",null,"<V-PlaceloadAvatar />"),o(" component to match your interface. You can set the "),m("code",null,"size"),o(" properties according your needs")],-1),$=m("div",{class:"language-vue line-numbers-mode"},[m("pre",null,[m("code",null,[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-AvatarStack")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--attr-name"},"size"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("small"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--attr-name"},"size"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("medium"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--attr-name"},"size"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("large"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--attr-name"},"size"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("big"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--attr-name"},"size"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("xl"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),o("V-AvatarStack")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),o("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n")])]),m("div",{class:"line-numbers-wrapper"},[m("span",{class:"line-number"},"1"),m("br"),m("span",{class:"line-number"},"2"),m("br"),m("span",{class:"line-number"},"3"),m("br"),m("span",{class:"line-number"},"4"),m("br"),m("span",{class:"line-number"},"5"),m("br"),m("span",{class:"line-number"},"6"),m("br"),m("span",{class:"line-number"},"7"),m("br"),m("span",{class:"line-number"},"8"),m("br"),m("span",{class:"line-number"},"9"),m("br")])],-1);const C={},E={render:function(a,n){const p=x,r=v,m=s;return t(),i(m,{frontmatter:a.frontmatter},{code:l((()=>[$])),example:l((()=>[e(r,null,{default:l((()=>[e(p,{class:"mx-1",size:"small"}),e(p,{class:"mx-1",size:"medium"}),e(p,{class:"mx-1",size:"large"}),e(p,{class:"mx-1",size:"big"}),e(p,{class:"mx-1",size:"xl"})])),_:1})])),default:l((()=>[j,Y])),_:1},8,["frontmatter"])},data:()=>({frontmatter:C})},B=m("h3",{id:"radius",tabindex:"-1"},"Radius",-1),D=m("p",null,[o("Control the radius of "),m("code",null,"<V-PlaceloadAvatar />"),o(" component to match your interface. You can set the "),m("code",null,"rounded"),o(" properties according your needs")],-1),O=m("div",{class:"language-vue line-numbers-mode"},[m("pre",null,[m("code",null,[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-AvatarStack")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--attr-name"},"rounded"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("xs"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--attr-name"},"rounded"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("sm"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--attr-name"},"rounded"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("md"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--attr-name"},"rounded"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("lg"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--attr-name"},"rounded"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("xl"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),o("V-PlaceloadAvatar")]),o(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),o("mx-1"),m("span",{class:"prism--token prism--punctuation"},'"')]),o(),m("span",{class:"prism--token prism--punctuation"},"/>")]),o("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),o("V-AvatarStack")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),o("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),o("\n")])]),m("div",{class:"line-numbers-wrapper"},[m("span",{class:"line-number"},"1"),m("br"),m("span",{class:"line-number"},"2"),m("br"),m("span",{class:"line-number"},"3"),m("br"),m("span",{class:"line-number"},"4"),m("br"),m("span",{class:"line-number"},"5"),m("br"),m("span",{class:"line-number"},"6"),m("br"),m("span",{class:"line-number"},"7"),m("br"),m("span",{class:"line-number"},"8"),m("br"),m("span",{class:"line-number"},"9"),m("br"),m("span",{class:"line-number"},"10"),m("br")])],-1);const T={},H={render:function(a,n){const p=x,r=v,m=s;return t(),i(m,{frontmatter:a.frontmatter},{code:l((()=>[O])),example:l((()=>[e(r,null,{default:l((()=>[e(p,{class:"mx-1",rounded:"xs"}),e(p,{class:"mx-1",rounded:"sm"}),e(p,{class:"mx-1",rounded:"md"}),e(p,{class:"mx-1",rounded:"lg"}),e(p,{class:"mx-1",rounded:"xl"}),e(p,{class:"mx-1"})])),_:1})])),default:l((()=>[B,D])),_:1},8,["frontmatter"])},data:()=>({frontmatter:T})},I=m("h3",{id:"v-placeloadavatar-props",tabindex:"-1"},"V-PlaceloadAvatar Props",-1),L=m("p",null,[o("Here is the full props available for "),m("code",null,"<V-PlaceloadAvatar />"),o(" component:")],-1),M=m("table",null,[m("thead",null,[m("tr",null,[m("th",null,"Props"),m("th",null,"Default"),m("th",null,"Type")])]),m("tbody",null,[m("tr",null,[m("td",null,"size"),m("td",null,[m("span",{class:"is-undefined"},[m("code",null,"undefined")])]),m("td",null,[m("code",null,"small"),o(", "),m("code",null,"medium"),o(", "),m("code",null,"large"),o(", "),m("code",null,"big"),o(", "),m("code",null,"xl")])]),m("tr",null,[m("td",null,"rounded"),m("td",null,[m("span",{class:"is-string"},[m("code",null,"full")])]),m("td",null,[m("code",null,"full"),o(", "),m("code",null,"xs"),o(", "),m("code",null,"sm"),o(", "),m("code",null,"md"),o(", "),m("code",null,"lg"),o(", "),m("code",null,"xl")])]),m("tr",null,[m("td",null,"width"),m("td",null,[m("span",{class:"is-string"},[m("code",null,"100%")])]),m("td",null,"string")]),m("tr",null,[m("td",null,"disabled"),m("td",null,[m("span",{class:"is-boolean"},[m("code",null,"false")])]),m("td",null,"boolean")]),m("tr",null,[m("td",null,"centered"),m("td",null,[m("span",{class:"is-boolean"},[m("code",null,"false")])]),m("td",null,"boolean")])])],-1);const R={disable_code:!0},W={render:function(a,n){const p=s;return t(),i(p,{frontmatter:a.frontmatter},{default:l((()=>[I,L,M])),_:1},8,["frontmatter"])},data:()=>({frontmatter:R})},F={class:"page-content-inner"},G={class:"columns"},J={key:0,class:"column is-3 toc-column"};var K=n({setup(s){const n=c(null),i=b(n);return f.value="V-PlaceloadAvatar",u({title:"V-PlaceloadAvatar - Elements - Vuero"}),(s,l)=>{const o=a,c=q,u=_,v=E,b=H,f=W,x=g;return t(),p("div",F,[e(o,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"index"}},{label:"Elements",to:{name:"elements"}},{label:"V-PlaceloadAvatar",to:{name:"elements-placeload-avatar"}}]}),m("div",G,[m("div",{ref:n,class:r([[k(i).length>0?"is-9":"is-12"],"column doc-column"])},[e(c),e(u),e(v),e(b),e(f)],2),k(i).length?(t(),p("div",J,[e(x,{toc:k(i)},null,8,["toc"])])):d("",!0)])])}}});export default K;
