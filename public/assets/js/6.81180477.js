(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{461:function(e,t,n){var i=n(2),o=n(462);i({global:!0,forced:parseInt!=o},{parseInt:o})},462:function(e,t,n){var i=n(0),o=n(3),a=n(1),s=n(13),r=n(250).trim,l=n(251),c=i.parseInt,h=i.Symbol,d=h&&h.iterator,m=/^[+-]?0x/i,u=a(m.exec),g=8!==c(l+"08")||22!==c(l+"0x16")||d&&!o((function(){c(Object(d))}));e.exports=g?function(e,t){var n=r(s(e));return c(n,t>>>0||(u(m,n)?16:10))}:c},510:function(e,t,n){},629:function(e,t,n){var i=n(2),o=n(630),a=n(106);i({target:"Array",proto:!0},{fill:o}),a("fill")},630:function(e,t,n){"use strict";var i=n(17),o=n(108),a=n(28);e.exports=function(e){for(var t=i(this),n=a(t),s=arguments.length,r=o(s>1?arguments[1]:void 0,n),l=s>2?arguments[2]:void 0,c=void 0===l?n:o(l,n);c>r;)t[r++]=e;return t}},631:function(e,t,n){"use strict";n(510)},646:function(e,t,n){"use strict";n.r(t);n(103),n(104),n(76),n(54),n(629),n(39),n(5),n(40),n(23),n(461);function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e3,a=document.querySelectorAll(".index-tip"),s=(new Date).getTime(),r=0==a.length?0:a[a.length-1].getAttribute("data-top"),l=parseInt(r)+(0!=a.length?a[a.length-1].offsetHeight+17:n),c=document.createElement("div");c.className="index-tip tip-".concat(t," ").concat(s),c.style.top=parseInt(r)+"px",c.setAttribute("data-top",l),"info"==t||1==t?c.innerHTML='<i class="iconfont icon-info icon"></i><p class="tip-info-content">'.concat(e,"</p>"):"success"==t||2==t?c.innerHTML='<i class="iconfont icon-dagouyouquan icon"></i><p class="tip-success-content">'.concat(e,"</p>"):"danger"==t||3==t?c.innerHTML='<i class="iconfont icon-cuowu icon"></i><p class="tip-danger-content">'.concat(e,"</p>"):"warning"!=t&&4!=t||(c.innerHTML='<i class="iconfont icon-gantanhao icon"></i><p class="tip-warning-content">'.concat(e,"</p>")),document.body.appendChild(c);var h=document.getElementsByClassName(s)[0];setTimeout((function(){h.style.top=parseInt(l)+"px",h.style.opacity="1"}),10),setTimeout((function(){h.style.top="0px",h.style.opacity="0";for(var e=o(h),t=0;t<e.length;t++){var n=e[t],i=parseInt(n.getAttribute("data-top"))-n.offsetHeight-17;n.setAttribute("data-top",i),n.style.top=i+"px"}setTimeout((function(){h.remove()}),500)}),i)}function o(e){for(var t=[],n=e;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t}var a={data:function(){return{navColor:2,switchNavColor:!0,bgTimeColor:!0,bgTimeColorArray:["transparent","rgba(255, 148, 48, .2)","rgba(0, 0, 0, .3)","rgba(0, 0, 0, .5)"],descFade:!0,desc:["Web前端技术博客，积跬步以至千里，致敬每个爱学习的你","故事由我书写，旅程由你见证，传奇由她聆听"],descFontSize:"1.4rem",descFadeInTime:300,descFadeOutTime:100,descNextTime:800,bubble:!0,bubblePosition:0,bubbleNum:200}},mounted:function(){var e=this,t=document.getElementById("banner-arrow");t&&t.parentNode.removeChild(t);var n=document.createElement("a");if(n.id="banner-arrow",n.className="banner-arrow",document.getElementsByClassName("banner")[0].append(n),document.getElementById("banner-arrow").addEventListener("click",(function(t){e.scrollFn()})),this.initConfig(),this.bgTimeColor&&this.bgTimeColorAndTip(),setTimeout((function(){e.noBgBlur()}),100),this.blurText(),this.watchScroll(),this.descFade&&this.textFadeInAndOut(),this.bubble){var i=document.createElement("canvas");i.id="canvas",i.style.top=this.bubblePosition+"%",document.getElementsByClassName("banner")[0].append(i),this.canvasBubble()}},watch:{$route:function(e,t){var n=this;"/"==e.path&&Object.keys(this.$route.query).length>0&&setTimeout((function(){n.clickArrow()}),200)}},methods:{initConfig:function(){this.$themeConfig.indexImg&&Object.keys(this.$themeConfig.indexImg).length>0&&(this.navColor=null==this.$themeConfig.indexImg.navColor?this.navColor:this.$themeConfig.indexImg.navColor,this.switchNavColor=null==this.$themeConfig.indexImg.switchNavColor?this.switchNavColor:this.$themeConfig.indexImg.switchNavColor,this.bgTimeColor=null==this.$themeConfig.indexImg.bgTimeColor?this.bgTimeColor:this.$themeConfig.indexImg.bgTimeColor,this.bgTimeColorArray=null==this.$themeConfig.indexImg.bgTimeColorArray?this.bgTimeColorArray:this.$themeConfig.indexImg.bgTimeColorArray,this.descFade=null==this.$themeConfig.indexImg.descFade?this.descFade:this.$themeConfig.indexImg.descFade,this.desc=null==this.$themeConfig.indexImg.desc?this.desc:this.$themeConfig.indexImg.desc,this.descFontSize=null==this.$themeConfig.indexImg.descFontSize?this.descFontSize:this.$themeConfig.indexImg.descFontSize,this.descFadeInTime=null==this.$themeConfig.indexImg.descFadeInTime?this.descFadeInTime:this.$themeConfig.indexImg.descFadeInTime,this.descNextTime=null==this.$themeConfig.indexImg.descNextTime?this.descNextTime:this.$themeConfig.indexImg.descNextTime,this.bubble=null==this.$themeConfig.indexImg.bubble?this.bubble:this.$themeConfig.indexImg.bubble,this.bubblePosition=null==this.$themeConfig.indexImg.bubblePosition?this.bubblePosition:this.$themeConfig.indexImg.bubblePosition,this.bubbleNum=null==this.$themeConfig.indexImg.bubbleNum?this.bubbleNum:this.$themeConfig.indexImg.bubbleNum)},scrollFn:function(){var e=document.getElementsByClassName("banner")[0].clientHeight;window.scrollTo({top:e,behavior:"smooth"})},clickArrow:function(){document.getElementById("banner-arrow").click()},watchScroll:function(){var e=this,t=document.getElementsByClassName("banner")[0].clientHeight;window.onscroll=function(){document.documentElement.scrollTop<t?(e.blurText(e.navColor),e.noBgBlur()):(e.switchNavColor&&1==e.navColor?e.blurText(2):e.switchNavColor&&2==e.navColor&&e.blurText(1),e.bgBlur())}},bgBlur:function(){document.getElementsByClassName("navbar")[0].className="navbar blur"},noBgBlur:function(){document.getElementsByClassName("navbar")[0].className="navbar navbar1 blur"},blurText:function(){var e=document.getElementsByClassName("site-name")[0],t=document.getElementsByClassName("search-box")[0],n=document.getElementsByClassName("nav-links")[0];1==this.navColor?(e.className="site-name can-hide",n.className="nav-links can-hide",t.className="search-box"):2==this.navColor&&(e.className="site-name site-name1 can-hide",n.className="nav-links nav-links1 can-hide",t.className="search-box search-box1")},bgTimeColorAndTip:function(){var e=(new Date).getHours(),t=(new Date).getMinutes(),n=(new Date).getSeconds();e=e<10?"0"+e:e,t=t<10?"0"+t:t,n=n<10?"0"+n:n;var o=document.createElement("div");o.className="banner-color",e>=6&&e<11?(o.style.backgroundColor=this.bgTimeColorArray[0],i("早上好呀~~，现在是 ".concat(e,":").concat(t,":").concat(n,"，吃早餐了吗？😊🤭"),"info",50,4e3)):e>=12&&e<=16?(o.style.backgroundColor=this.bgTimeColorArray[0],i("下午好呀~~，现在是 ".concat(e,":").concat(t,":").concat(n,"，繁忙的下午也要适当休息哦🥤🏀~~"),"info",50,4e3)):e>=16&&e<=19?(o.style.backgroundColor=this.bgTimeColorArray[1],i("到黄昏了~~，现在是 ".concat(e,":").concat(t,":").concat(n,"，该准备吃饭啦🥗🍖~~"),"info",50,4e3)):e>=19&&e<24?(o.style.backgroundColor=this.bgTimeColorArray[2],i("晚上好呀~~，现在是 ".concat(e,":").concat(t,":").concat(n,"，该准备洗漱睡觉啦🥱😪~~"),"info",50,4e3)):e>=0&&e<6&&(o.style.backgroundColor=this.bgTimeColorArray[3],i("别再熬夜了~~，现在是 ".concat(e,":").concat(t,":").concat(n,"，早点睡吧，让我们一起欣赏早上的太阳~~😇🛏"),"info",50,4e3)),document.getElementsByClassName("banner")[0].parentNode.append(o)},textFadeInAndOut:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.desc,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.descFontSize,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.descFadeInTime,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.descFadeOutTime,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.descNextTime,a=document.getElementsByClassName("description")[0];document.getElementsByClassName("hero")[0];if(a){a.style.fontSize=t;var s=document.createElement("span");s.className="typed",s.innerHTML="|";var r=0,l=0,c=a.innerText;a.innerText="",a.appendChild(document.createElement("span")),s&&a.appendChild(s);var h,d=setInterval(u,n)}else{var m=document.getElementsByClassName("hero")[0];(a=document.createElement("p"))&&(a.className="description"),a&&m.appendChild(a)}function u(){a&&(s.style.animation="none",e instanceof Array&&e.length>0&&(c=e[l]),a.firstChild.innerText=c.substring(0,r++),r>c.length&&(clearInterval(d),s.style.animation="typedBlink 1s infinite",setTimeout((function(){h=setInterval(g,i)}),o)))}function g(){r>=0?(s.style.animation="none",a.firstChild.innerText=c.substring(0,r--)):(clearInterval(h),s.style.animation="typedBlink 1s infinite",setTimeout((function(){++l>=e.length&&(l=0),d=setInterval(u,n)}),o))}},canvasBubble:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.bubbleNum,t=document.getElementById("canvas"),n=t.getContext("2d");function i(){this.alive=!0,this.x=Math.round(Math.random()*t.width),this.y=Math.round(Math.random()*t.height),this.diameter=10.8*Math.random(),this.ColorData={Red:Math.round(255*Math.random()),Green:Math.round(255*Math.random()),Blue:Math.round(255*Math.random())},this.alpha=.5,this.color="rgba("+this.ColorData.Red+", "+this.ColorData.Green+","+this.ColorData.Blue+","+this.alpha+")",this.velocity={x:Math.round(Math.random()<.5?-1:1)*Math.random()*.7,y:Math.round(Math.random()<.5?-1:1)*Math.random()*.7}}i.prototype={Draw:function(){n.fillStyle=this.color,n.beginPath(),n.arc(this.x,this.y,this.diameter,0,2*Math.PI,!1),n.fill()},Update:function(){this.alpha<.8&&(this.alpha+=.01,this.color="rgba("+this.ColorData.Red+", "+this.ColorData.Green+","+this.ColorData.Blue+","+this.alpha+")"),this.x+=this.velocity.x,this.y+=this.velocity.y,(this.x>t.width+5||this.x<-5||this.y>t.height+5||this.y<-5)&&(this.alive=!1)}};var o={rArray:[],Init:function(){t.width=window.innerWidth,t.height=window.innerHeight;for(var n=0;n<e;n++)this.rArray.push(new i);this.Update()},Draw:function(){n.clearRect(0,0,t.width,t.height),this.rArray.forEach((function(e){e.Draw()}))},Update:function(){if(o.rArray.length<e)for(var t=o.rArray.length;t<e;t++)o.rArray.push(new i);o.rArray.forEach((function(e){e.Update()})),o.rArray=o.rArray.filter((function(e){return e.alive})),o.Draw(),requestAnimationFrame(o.Update)}};window.onresize=function(){o.rArray=[],t.width=window.innerWidth,t.height=window.innerHeight},o.Init()}}},s=(n(631),n(4)),r=Object(s.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"index-bigimg",staticStyle:{display:"none"}})}),[],!1,null,null,null);t.default=r.exports}}]);