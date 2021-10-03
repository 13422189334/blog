(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{474:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("文章链接跳转：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"../Jsonp"}},[t._v("Jsonp")])])])]),t._v(" "),a("h2",{attrs:{id:"什么是跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是跨域"}},[t._v("#")]),t._v(" 什么是跨域？")]),t._v(" "),a("p",[t._v("白话解释：所谓跨域其实就是浏览器对我们发送的接口请求进行拦截，不允许我们直接访问，浏览器就像是一个中间桥梁，它说让我们通过就让通过，它说不让通过那就通过不了。")]),t._v(" "),a("h2",{attrs:{id:"发生跨域的三个必要条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发生跨域的三个必要条件"}},[t._v("#")]),t._v(" 发生跨域的三个必要条件：")]),t._v(" "),a("p",[t._v("一般情况，我们己的项目地址和接口地址的域名不同时，如：https://localhost:9527，也许会不假思索的就能回答出："),a("strong",[t._v("不同协议，不同域名，不同端口")]),t._v("。没有问题，但并不准确，我更倾向于把这三个叫 "),a("strong",[t._v("跨域的三要素")]),t._v(" ，那什么是跨域形成的必要条件呢？")]),t._v(" "),a("blockquote",[a("p",[t._v("浏览器限制： 即浏览器对跨域行为进行检测和阻止\n触发跨域的三要素之一： 即协议、域名和端口三个条件满足其一\n发起的是xhr请求： 即发起的是 XMLHttpRequest 类型的请求。")])]),t._v(" "),a("h2",{attrs:{id:"如何解决跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决跨域"}},[t._v("#")]),t._v(" 如何解决跨域？")]),t._v(" "),a("p",[t._v("为了更好的理解这个知识点，我们先回顾一下一个普通项目的交互关系。客户端有各种各样的请求发送给中间服务器Apache / Nginx，中间服务器在接收到请求之后，判断如果是静态资源（img，js插件等）则直接返回客户端，如果是交互资源（例如访问@RequestMapping里的方法）则转发至应用服务器上。")]),t._v(" "),a("p",[t._v("现在大部分公司项目采用前后端分离的开发模式，使得客户端和服务器端通常都在不同服务器上，这种模式解决跨域主要有两种思路：")]),t._v(" "),a("ul",[a("li",[t._v("第一种就是"),a("strong",[t._v("被调用方（即后端）解决")]),t._v("：调用方在浏览器直接将请求发送至被调用方，被调用方处理完成后，在请求响应中添加基于http协议关于跨域请求的一些规定，就是在http响应头中添加Access-Control-Allow-Origin等一些配置允许跨域访问。这种解决方法是基于解决跨域的思路，修改的是被调用方的HTTP服务器，我们在浏览器中能看到有调用方的url，也有被调用方的url。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许跨域的域名，设置*表示允许除带Cookies信息的所有域名")]),t._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Origin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("ul",[a("li",[t._v("第二种就是"),a("strong",[t._v("调用方（即前端）解决")]),t._v("：这是基于隐藏跨域的解决办法。调用方通过一个代理服务器（Nginx）转发请求到被调用方的中间服务器，浏览器看到请求都是来自同一个域，就不会报跨域问题了。这种方式是基于隐藏跨域的思路，修改的是调用方的HTTP服务器(调用方的请求url是经过调用方的 Nginx 做反向代理转换转换的，目的就是为了和‘’被调用方”的域名端口一致)，在浏览器中也就只能看到调用方的url。")])]),t._v(" "),a("h3",{attrs:{id:"补充后端解决跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充后端解决跨域问题"}},[t._v("#")]),t._v(" 补充后端解决跨域问题")]),t._v(" "),a("p",[t._v("如果是在被调用方解决跨域问题，被调用方解决支持跨域办法如下：")]),t._v(" "),a("ol",[a("li",[t._v("在应用服务器端实现")]),t._v(" "),a("li",[t._v("在Ngnix上配置")]),t._v(" "),a("li",[t._v("在Apache上配置")]),t._v(" "),a("li",[t._v("Spring框架解决")])]),t._v(" "),a("p",[t._v("虽然有4种方案，但是这4种方案的本质都是一样的，最终的目的是在响应头增加字段。浏览器在执行跨域请求时，如果遇到是简单请求，则先执行后判断；如果是非简单请求，则先使用OPTION向服务器发起一个预检请求 "),a("strong",[t._v("preflight request")]),t._v(" ，从而获知服务器是否允许该跨域访问，如果允许，就在此发起带真实数据的请求，否则不发起。这就实现了对被调用方的数据安全保护，也是跨域问题设计所在的目的之一。")]),t._v(" "),a("blockquote",[a("p",[t._v("在介绍简单/非简单请求前，我们要了解什么是 Content-Type，"),a("strong",[t._v("Content-Type是指http/https发送信息至服务器时的内容编码类型")])])]),t._v(" "),a("p",[a("strong",[t._v("【常见简单请求】")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("GET")])]),t._v(" "),a("li",[a("p",[t._v("HEAD")])]),t._v(" "),a("li",[a("p",[t._v("POST")])])]),t._v(" "),a("p",[t._v("且它的Content-Type为text/plain（普通文本类型）或multipart/form-data（多媒体数据/表单数据）或application/x-www-form-urlencoded中的一种")]),t._v(" "),a("p",[a("strong",[t._v("【常见非简单请求】")])]),t._v(" "),a("ol",[a("li",[t._v("PUT")]),t._v(" "),a("li",[t._v("DELETE")]),t._v(" "),a("li",[t._v("OPTIONS")]),t._v(" "),a("li",[t._v("发送Json格式的Ajax请求[常为post]")]),t._v(" "),a("li",[t._v("带自定义Header信息的Ajax请求")]),t._v(" "),a("li",[t._v("CONNECT")]),t._v(" "),a("li",[t._v("TRACE")]),t._v(" "),a("li",[t._v("PATCH")])]),t._v(" "),a("p",[t._v("当浏览器发现发起的是一个跨域的请求时，它会向请求头里增加一个Origin字段，当请求被响应时，浏览器会检查响应头里有没有设置允许跨域的信息，如果没有，它就会报错。同理，如果给请求增加头信息，那么加入的信息也会作为跨域检查的信息。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("举个例子")])])]),t._v(" "),a("p",[t._v("我们在本地搭起来了一个后端项目，端口号为8080；同时搭建了一个前端项目，端口号为9527。那这个时候我们直接调用后端接口的时候，前后端分离的原因导致我们需要跨域请求 。因此，在应用服务器端的响应头需要添加允许跨域的设置，即如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterChain")]),t._v(" chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许跨域的域名，设置*表示允许除带Cookies信息的所有域名")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Origin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:9527"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许跨域的方法，可设置*表示所有。GET/POST/OPTIONS等")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Methods"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假如给post请求头设置了contentType字段，则需要添加以下信息")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Headers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 设置预检命令的缓存时效。单位是"秒"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果没有失效，则不会再次发起OPTION预检请求")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Max-Age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3600"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 还可以有其他配置...")]),t._v("\n  chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//让过滤器放行该请求")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这时候，我们就可以在响应头Response Headers里观察到 "),a("strong",[t._v("Access-Control-Allow-Origin")]),t._v(" 和 "),a("strong",[t._v("Access-Control-Allow-Methods")]),t._v(" 信息，这代表跨域就被成功允许了。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("还有一种特殊情况")])])]),t._v(" "),a("p",[t._v("带有Cookie的请求还需要注意一下两点才能实现跨域：")]),t._v(" "),a("ol",[a("li",[t._v("Access-Control-Allow-Origin的值不能为 "),a("strong",[t._v("'*'")]),t._v(" 而是必须是精准匹配，因此需要添上具体的域名")]),t._v(" "),a("li",[t._v("打开允许Cookie的设置，即Access-Control-Allow-Credentials: true")])]),t._v(" "),a("p",[t._v("但是这又带出了另一个问题，就是只能支持一个域名的跨域，怎么办？其实该变量可以通过调用方的请求头信息获取，解决办法如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" req "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("StringUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带cookie的时候origin必须是全匹配，不能使用 *")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Orign"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("对于需要增加请求头信息解决方案与此类似")]),t._v(" "),a("p",[a("strong",[t._v("调用方解决跨域：反向代理")])]),t._v(" "),a("p",[t._v("当被调用方无法帮助解决处理跨域问题时，调用方也可以自己解决处理。其实现的办法就是利用反向代理")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("正向代理：")]),t._v(" 利用代理客户端去请求服务器，从而隐藏了真实的客户端，服务器并不知道客户端是谁，这种代理方式称作正向代理，其代理的对象是客户端")]),t._v(" "),a("p",[a("strong",[t._v("反向代理:")]),t._v(" 反向代理隐藏了真正的服务端。举个例子，我们只知道敲下www.baidu.com时就能访问百度搜索页面，然而背后成千上万的服务器到底是哪一台正在为我们服务我们并不知道，这种隐藏了服务器端的代理方式称作反向代理，其代理的是服务器端。软件层面上常用Ngnix来做反向代理服务器，他的性能很好，用来做负载均衡。")])]),t._v(" "),a("p",[t._v("为了实现反向代理，我们需要在 Ngnix中配置一个代理域名，或者称为一个网址demo.com，就像百度成千上万的服务器使用用一个代理网址www.baidu.com一样。ngnix的配置信息如下")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name:")]),t._v(" demo.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求域名是demo.com，端口是80的，都会被nginx做代理")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http://demo.com/api/test 就会跳转到http://localhost:8080/test/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /api")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8080/test/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http://demo.com/test 就会跳转到http://localhost:8080/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("跨域是由浏览器安全限制造成的，解决跨域的办法有三种，一是 "),a("strong",[t._v("Jsonp")]),t._v(" 绕过浏览器安全检测策略，二是从被调用方配置支持跨域的请求头信息，三是从调用方利用反向代理，在 Ngnix 或 Apache 中配置代理域名隐藏跨域。")])])}),[],!1,null,null,null);s.default=e.exports}}]);