import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as i,a as s,d as l,b as c}from"./app.e0b07838.js";const r={},d=s("h2",{id:"\u8FDC\u7A0B\u8FDE\u63A5\u95EE\u9898",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u8FDC\u7A0B\u8FDE\u63A5\u95EE\u9898","aria-hidden":"true"},"#"),l(" \u8FDC\u7A0B\u8FDE\u63A5\u95EE\u9898")],-1),t=["src"],p=c(`<p>\u4FEE\u6539\u767B\u5F55\u5BA2\u6237\u7AEF\uFF0C\u5373\u672C\u5730\u8BA1\u7B97\u673A\u7684\u8BBE\u7F6E\u3002 \u8FD0\u884Cgpedit.msc\u6253\u5F00\u672C\u5730\u7EC4\u7B56\u7565\u7F16\u8F91\u5668\uFF0C\u4F9D\u6B21\u5C55\u5F00\u201C\u8BA1\u7B97\u673A\u914D\u7F6E\u201D-&gt;\u201C\u7BA1\u7406\u6A21\u677F\u201D-&gt;\u201C\u7CFB\u7EDF\u201D-&gt;\u201C\u51ED\u636E\u5206\u914D\u201D\uFF0C\u9009\u62E9\u8BBE\u7F6E\u9879\uFF1A \u52A0\u5BC6 Oracle \u4FEE\u6B63 \u7136\u540E\u53F3\u952E\u7F16\u8F91\uFF0C\u6539\u4E3A \u542F\u7528\uFF0C\u4FDD\u62A4\u7EA7\u522B\u4E3A \u6613\u53D7\u653B\u51FB\uFF0C\u786E\u5B9A\u3002\u8BBE\u7F6E\u5B8C\u6210\u540E\u5373\u53EF\u6B63\u5E38\u8FDC\u7A0B\u3002</p><h2 id="\u67E5\u770B\u7F51\u5361\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u7F51\u5361\u914D\u7F6E" aria-hidden="true">#</a> \u67E5\u770B\u7F51\u5361\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/sysconfig/network-scripts/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6309\u65F6\u95F4\u663E\u793A\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6309\u65F6\u95F4\u663E\u793A\u6587\u4EF6" aria-hidden="true">#</a> \u6309\u65F6\u95F4\u663E\u793A\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-lrt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u5177\u4F53\u7F51\u5361\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5177\u4F53\u7F51\u5361\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u5177\u4F53\u7F51\u5361\u4FE1\u606F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ifconfig</span> -a\uFF5Cmore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770Beth0\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770Beth0\u7684\u914D\u7F6E" aria-hidden="true">#</a> \u67E5\u770Beth0\u7684\u914D\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> ifcfg-eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u914D\u7F6Eip\u3001\u5B50\u7F51\u63A9\u7801\u3001\u7F51\u5173" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Eip\u3001\u5B50\u7F51\u63A9\u7801\u3001\u7F51\u5173" aria-hidden="true">#</a> \u914D\u7F6EIP\u3001\u5B50\u7F51\u63A9\u7801\u3001\u7F51\u5173</h2><h3 id="\u91CD\u542F\u7F51\u5361" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542F\u7F51\u5361" aria-hidden="true">#</a> \u91CD\u542F\u7F51\u5361</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> network restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>static        
<span class="token comment">#static\u9759\u6001\u3001dhcp\u52A8\u6001\u83B7\u53D6\u3001none\u4E0D\u6307\u5B9A\uFF08\u53EF\u80FD\u51FA\u73B0\u95EE\u9898\uFF09</span>

<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes              
<span class="token comment">#\u7279\u522B\u6CE8\u610F \u8FD9\u4E2A\u662F\u5F00\u673A\u542F\u52A8,\u9700\u8981\u8BBE\u7F6E\u6210yes</span>

<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token number">8.8</span>.8.8            
<span class="token comment">#DNS\u57DF\u540D\u89E3\u6790\u670D\u52A1\u5668\u7684IP\u5730\u5740</span>

<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.1.2      
<span class="token comment">#\u7F51\u5361\u7684IP\u5730\u5740</span>

<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.1.1     
<span class="token comment">#\u7F51\u5173\u5730\u5740</span>

<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0   
<span class="token comment">#\u5B50\u7F51\u63A9\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>ens33                         
<span class="token comment"># \u7F51\u5361\u7684\u8BBE\u5907\u540D\u79F0</span>

<span class="token assign-left variable">NAME</span><span class="token operator">=</span>ens33                           
<span class="token comment"># \u7F51\u5361\u8BBE\u5907\u7684\u522B\u540D</span>

<span class="token assign-left variable">TYPE</span><span class="token operator">=</span>Ethernet                        
<span class="token comment"># \u7F51\u7EDC\u7C7B\u578B\uFF1AEthernet\u4EE5\u592A\u7F51</span>

<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>none                       
<span class="token comment">#\u5F15\u5BFC\u534F\u8BAE\uFF1Astatic\u9759\u6001\u3001dhcp\u52A8\u6001\u83B7\u53D6\u3001none\u4E0D\u6307\u5B9A\uFF08\u53EF\u80FD\u51FA\u73B0\u95EE\u9898\uFF09</span>

<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span>yes                         
<span class="token comment"># \u542F\u52A8\u9ED8\u8BA4\u8DEF\u7531</span>

<span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span>no                
<span class="token comment"># \u4E0D\u542F\u7528IPV4\u9519\u8BEF\u68C0\u6D4B\u529F\u80FD</span>

<span class="token assign-left variable">IPV6INIT</span><span class="token operator">=</span>yes                         
<span class="token comment"># \u542F\u7528IPV6\u534F\u8BAE</span>

<span class="token assign-left variable">IPV6_AUTOCONF</span><span class="token operator">=</span>yes                    
<span class="token comment"># \u81EA\u52A8\u914D\u7F6EIPV6\u5730\u5740</span>

<span class="token assign-left variable">IPV6_DEFROUTE</span><span class="token operator">=</span>yes                    
<span class="token comment"># \u542F\u7528IPV6\u9ED8\u8BA4\u8DEF\u7531</span>

<span class="token assign-left variable">IPV6_FAILURE_FATAL</span><span class="token operator">=</span>no                
<span class="token comment"># \u4E0D\u542F\u7528IPV6\u9519\u8BEF\u68C0\u6D4B\u529F\u80FD</span>

<span class="token assign-left variable">UUID</span><span class="token operator">=</span>sjdfga-asfd-asdf-asdf-f82b      
<span class="token comment"># \u7F51\u5361\u8BBE\u5907\u7684UUID\u552F\u4E00\u6807\u8BC6\u53F7</span>

<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes                           
<span class="token comment"># \u5F00\u673A\u81EA\u52A8\u542F\u52A8\u7F51\u5361</span>

<span class="token assign-left variable">DNS</span><span class="token operator">=</span><span class="token number">114.114</span>.114.114                  
<span class="token comment"># DNS\u57DF\u540D\u89E3\u6790\u670D\u52A1\u5668\u7684IP\u5730\u5740 \u53EF\u4EE5\u591A\u8BBE\u7F6E\u4E00\u4E2ADNS1</span>

<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.1.22                  
<span class="token comment"># \u7F51\u5361\u7684IP\u5730\u5740</span>

<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token number">24</span>                            
<span class="token comment"># \u5B50\u7F51\u524D\u7F00\u957F\u5EA6</span>

<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.1.1                  
<span class="token comment"># \u9ED8\u8BA4\u7F51\u5173IP\u5730\u5740</span>

<span class="token assign-left variable">IPV6_PEERDNS</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_PEERROUTES</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.1.22                  
<span class="token comment"># \u4F60\u60F3\u8981\u8BBE\u7F6E\u7684\u56FA\u5B9AIP\uFF0C\u7406\u8BBA\u4E0A192.168.2.2-255\u4E4B\u95F4\u90FD\u53EF\u4EE5\uFF0C\u8BF7\u81EA\u884C\u9A8C\u8BC1\uFF1B\u5982\u679C\u662Fdhcp\u53EF\u4EE5\u4E0D\u586B\u5199</span>

<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0                
<span class="token comment"># \u5B50\u7F51\u63A9\u7801\uFF0C\u4E0D\u9700\u8981\u4FEE\u6539\uFF1B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function o(n,v){return e(),i("div",null,[d,s("img",{src:n.$withBase("/assets/server/001.jpg")},null,8,t),p])}const u=a(r,[["render",o],["__file","index.html.vue"]]);export{u as default};
