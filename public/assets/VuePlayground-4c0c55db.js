import{g as e,a,_ as t}from"./app-31e5eb21.js";import{c as s,r as l,A as o,h as r,o as i,j as u}from"./framework-6cf4f5ec.js";var n=s({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(s){const n=l(!0),p=o(),v=l(),d=r((()=>(e=>a({},{showCompileOutput:!0,clearConsole:!1,ssr:!1,autoResize:!0,showImportMap:!0,layout:"horizontal"},JSON.parse(decodeURIComponent(e))))(s.settings)));return i((async()=>{await(async()=>{const{ReplStore:e,Repl:a}=await t((()=>import("./vue-repl-1c28e240.js")),["assets/vue-repl-1c28e240.js","assets/app-31e5eb21.js","assets/framework-6cf4f5ec.js"]);p.value=a,v.value=new e({serializedState:decodeURIComponent(s.files)}),d.value.vueVersion&&await v.value.setVueVersion(d.value.vueVersion)})(),n.value=!1})),()=>[u("div",{class:"vue-playground-wrapper"},[s.title?u("div",{class:"header"},decodeURIComponent(s.title)):null,u("div",{class:"repl-container"},[n.value?u(e,{class:"preview-loading",height:192}):null,p.value?u(p.value,{store:v.value,autoResize:!0,...d.value,layout:"horizontal"}):null])])]}});export{n as default};
