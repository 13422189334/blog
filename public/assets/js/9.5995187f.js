(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{437:function(t,e,a){},556:function(t,e,a){"use strict";var r=a(1),n=a(2),i=a(3)((function(){return 120!==new Date(16e11).getYear()})),o=n(Date.prototype.getFullYear);r({target:"Date",proto:!0,forced:i},{getYear:function(){return o(this)-1900}})},557:function(t,e,a){"use strict";a(437)},574:function(t,e,a){"use strict";a.r(e);a(99),a(556),a(133),a(20),a(72),a(28),a(4),a(137),a(97),a(36),a(37);var r={mounted:function(){this.clearBannerColor(),this.mountedElement(),this.init()},methods:{init:function(){var t=document.getElementById("cvs");if(t){var e=t.getContext("2d"),a=document.getElementById("display"),r=a.getContext("2d"),n=document.getElementById("screenImage"),o=n.getContext("2d"),s=document.getElementById("rili"),l=s.getContext("2d");setInterval(T,36e5);T();var g=new Image;g.src="/fantasy/Screenmask.png";var c=new Image;c.src="/fantasy/screen.png";var m=setInterval((function(){c.complete&&g.complete&&(o.drawImage(c,-300,-50,1280,720),o.globalCompositeOperation="destination-atop",o.drawImage(g,0,0),o.globalCompositeOperation="source-over",clearInterval(m))}),14);window.onresize=function(){a.width=window.innerWidth,window.innerWidth/window.innerHeight>1.8333333333333?a.height=window.innerWidth/1980*1080:a.height=window.innerHeight},window.onresize();var f=new Image;f.src="/fantasy/bg.png";var d=new Image;d.src="/fantasy/mask.png";var h=new Image;h.src="/fantasy/light.png";var u=new Image;u.src="/fantasy/caidai.png";var w=new Image;w.src="/fantasy/22.png";var p=new Image;p.src="/fantasy/screenLight.png";var v=new Image;v.src="/fantasy/phoneLight.png";for(var I=JSON.parse('[{"time":0,"text":"凌晨啦!"},{"time":6,"text":"早上好!"},{"time":8,"text":"上午好!"},{"time":11,"text":"你吃了吗"},{"time":13,"text":"下午好鸭!"},{"time":16,"text":"傍晚咯!"},{"time":19,"text":"晚安!"}]'),b=new Array(128),y=new Array(128),S=0;S<128;S++)b[S]=y[S]=0;var P=1;if(window.wallpaperRegisterAudioListener)window.wallpaperRegisterAudioListener((function(t){for(var e=0,a=0;a<128;a++)t[a]>e&&(e=t[a]);for(P=.99*P+.01*e,i=0;i<64;i++)b[63-i]=t[i]/P;for(i=0;i<64;i++)b[127-i]=t[127-i]}));else{var x,M=document.getElementsByClassName("aplayer-button")[0];M&&(M.onclick=function(){if(document.getElementsByClassName("aplayer-play")[0])x=setInterval((function(){for(i=0;i<64;i++)P=.99*P+.01,b[63-i]=.4*Math.random()/P*Math.random();for(i=0;i<64;i++)b[127-i]=.2*Math.random()*Math.random()}),130);else{clearInterval(x);for(var t=0;t<128;t++)b[t]=y[t]=0}})}var C={r:80,g:120,b:169},A={r:80,g:120,b:169},E={r:0,g:34,b:77,a:0},k=!1;window.requestAnimationFrame((function i(){for(var o=0;o<128;o++)y[o]+=.3*(b[o]-y[o]),y[o]=B(y[o],1);A.r+=.01*(C.r-A.r),A.r=B(A.r,255),A.r=H(A.r,0),A.g+=.01*(C.g-A.g),A.g=B(A.g,255),A.g=H(A.g,0),A.b+=.01*(C.b-A.b),A.b=B(A.b,255),A.b=H(A.b,0),e.clearRect(0,0,1980,1080),e.drawImage(f,0,0),e.drawImage(d,954,99),e.fillStyle="#97adbb",e.font="32pt Impact",e.transform(1,Math.PI/180*2.05,0,1,0,0);var l,g,c=new Date;e.fillText((c.getHours()<10?"0":"")+c.getHours().toString()+":"+(c.getMinutes()<10?"0":"")+c.getMinutes()+":"+(c.getSeconds()<10?"0":"")+c.getSeconds().toString(),725,318),e.resetTransform(),e.transform(.9645,0,Math.PI/180*0,.96,967,100),e.rotate(Math.PI/180*6),e.drawImage(s,0,0),e.resetTransform(),e.transform(.9645,0,Math.PI/180*9,1,825,160),e.rotate(Math.PI/180*7),C={r:80,g:120,b:169},k&&(C={r:255,g:75,b:80}),e.fillStyle="rgba(0,0,0,0.5)",e.fillRect(-10,320,650,2),e.fillStyle="rgb("+(l=A).r.toString()+","+l.g.toString()+","+l.b.toString()+")";for(var m=32;m<95;m++)e.fillRect(10*(m-32),300-300*y[m]+20,4,300*y[m]);e.resetTransform(),e.globalCompositeOperation="overlay",e.drawImage(h,971,197),e.globalCompositeOperation="source-over",e.drawImage(u,949,25),e.drawImage(w,1319,345),k&&E.a<.7?(E.a+=.005,E.a=B(E.a,.7)):k||(E.a-=.005,E.a=H(E.a,0)),E.a>0&&(e.globalCompositeOperation="hard-light",e.fillStyle="rgba("+(g=E).r.toString()+","+g.g.toString()+","+g.b.toString()+","+g.a.toString()+")",e.fillRect(0,0,1980,1080),e.globalCompositeOperation="source-over",e.globalAlpha=E.a/.7,e.drawImage(v,860,437),e.globalAlpha=1),e.drawImage(n,0,0),E.a>0&&(e.globalAlpha=E.a/.7,e.drawImage(p,0,0),e.globalAlpha=1),k=!0;var S="凌晨啦!";I.forEach((function(t){c.getHours()>=t.time&&(S=t.text)})),c.getHours()>=6&&c.getHours()<=18&&(k=!1),k=k,e.fillStyle="#000",e.font="31.02pt SimHei",e.transform(1.0911,Math.PI/180*-35,0,.5868,1132.94,564.07),e.rotate(Math.PI/180*56.5),e.textAlign="center",e.fillStyle="#fff",e.fillText(S,135,100),e.textAlign="start",e.resetTransform(),r.drawImage(t,0,0,a.width,a.height),window.requestAnimationFrame(i)}))}function T(){l.clearRect(0,0,600,600);var t,e=new Date,a=e.getYear(),r=e.getMonth(),n=e.getDate(),i=e.getDay(),o=["SUN","MON","TUES","WED","THUR","FRI","SAT"],s=(n-1)%7;t=i>=s?i-s:i-s+7;var g=1,c=30;c=[4,6,9,11].indexOf(r+1)>-1?30:[1,3,5,7,8,10,12].indexOf(r+1)>-1?31:a%4==0&&a%100!=0||a%400==0?29:28;var m=/^\d+(\d+)?$/;function f(t,e,a){l.textAlign="center",l.fillStyle="rgb(69,68,84)",l.font=40/1.5+"px Impact";0!=a&&6!=a||!m.test(t)||(l.fillStyle="#900"),l.fillText(t.toString(),45+40*a*1.7+40/1.18,50+40*e+40/3*2+3),t==n&&function(t,e){l.save(),l.beginPath(),l.strokeStyle="#900",l.arc(45+40*t*1.7+40/1.18,50+40*e+20,10,-Math.PI,1*Math.PI),l.stroke(),l.closePath(),l.beginPath(),l.arc(45+40*t*1.7+40/1.18,50+40*e+20,11,-Math.PI,.9*Math.PI),l.stroke(),l.closePath(),l.beginPath(),l.arc(45+40*t*1.7+40/1.18,50+40*e+20,12,-Math.PI,.8*Math.PI),l.stroke(),l.closePath(),l.beginPath(),l.arc(45+40*t*1.7+40/1.18,50+40*e+20,13,-Math.PI,.7*Math.PI),l.stroke(),l.closePath(),l.beginPath(),l.arc(45+40*t*1.7+40/1.18,50+40*e+20,14,-Math.PI,.6*Math.PI),l.stroke(),l.closePath(),l.restore()}(a,e)}l.fillStyle="rgb(69,68,84)",l.font="900 26pt SimHei",l.textAlign="center";l.scale(1.1,1),l.fillText(["一","二","三","四","五","六","七","八","九","十","十一","十二"][r]+"月",260,32),l.resetTransform(),l.font="20pt SimHei",l.textAlign="end",l.fillText(n+"日",520,38);for(var d=0;d<6;d++)for(var h=0;h<7;h++)l.strokeRect(45+40*h*1.7,50+40*d,68,40);g=1;for(var u=0;u<6;u++)for(var w=0;w<7;w++)if(0!=u){if(!(1==u&&w<t)){if(g>c)break;f(g++,u,w)}}else f(o[w],u,w)}function B(t,e){return t>e?e:t}function H(t,e){return t>e?t:e}},mountedElement:function(){var t=document.getElementsByClassName("fantasy")[0];document.getElementsByClassName("banner")[0].appendChild(t)},clearBannerColor:function(){var t=document.getElementsByClassName("banner-color")[0];t&&t.parentNode.removeChild(t)}}},n=(a(557),a(14)),o=Object(n.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fantasy"},[e("canvas",{staticClass:"hidden",attrs:{id:"cvs",width:"1980",height:"1080"}}),this._v(" "),e("canvas",{staticClass:"hidden",attrs:{id:"screenImage",width:"234",height:"357"}}),this._v(" "),e("canvas",{staticClass:"hidden",attrs:{id:"rili",width:"600",height:"600"}}),this._v(" "),e("canvas",{attrs:{id:"display"}})])}],!1,null,null,null);e.default=o.exports}}]);