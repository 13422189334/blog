(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{605:function(t,e,n){},730:function(t,e,n){"use strict";n(605)},752:function(t,e,n){"use strict";n.r(e);var r={name:"Container",props:{title:{type:String,default:""},subTitle:{type:String,default:""},arrData:{type:Array,default:function(){return[]},remark:"地址数据源"}},computed:{},data:function(){return{}},mounted:function(){},beforeDestroy:function(){}},a=(n(730),n(5)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-box"},[n("div",{staticClass:"container-title"},[t._v("\n    "+t._s(t.title)+" "+t._s(t.subTitle?"  -  "+t.subTitle:"")+"\n  ")]),t._v(" "),t.arrData.length?[n("el-row",{attrs:{gutter:20}},t._l(t.arrData,(function(e,r){return n("el-col",{key:e.url,staticStyle:{"line-height":"2rem"},attrs:{lg:8,sm:24}},[n("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(r+1)+" - "+t._s(e.name))])])})),1)]:[t._t("default")]],2)}),[],!1,null,null,null);e.default=i.exports}}]);