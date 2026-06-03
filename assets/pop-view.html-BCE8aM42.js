import{_ as s,c as a,a as i,o as e}from"./app-DRFRIiL9.js";const l={};function t(d,n){return e(),a("div",null,[...n[0]||(n[0]=[i(`<h1 id="动态的给容器添加蒙版效果的弹出层" tabindex="-1"><a class="header-anchor" href="#动态的给容器添加蒙版效果的弹出层"><span>动态的给容器添加蒙版效果的弹出层</span></a></h1><h3 id="创建测试html-结构" tabindex="-1"><a class="header-anchor" href="#创建测试html-结构"><span>创建测试HTML 结构</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div class=&quot;content&quot;&gt;</span>
<span class="line">	&lt;div class=&quot;btn-content&quot;&gt;</span>
<span class="line">		&lt;button class=&quot;show-btn&quot; onclick=&quot;showPopView()&quot;&gt;显示蒙版&lt;/button&gt;</span>
<span class="line">		&lt;button class=&quot;hide-btn&quot; onclick=&quot;hidePopView()&quot;&gt;隐藏蒙版&lt;/button&gt;</span>
<span class="line">	&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">	&lt;div class=&quot;view-content&quot;&gt;</span>
<span class="line">		&lt;div class=&quot;pop-view&quot; id=&quot;pop_view&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">		&lt;div class=&quot;input-view&quot;&gt;</span>
<span class="line">			&lt;div&gt;</span>
<span class="line">				&lt;label&gt;</span>
<span class="line">					&lt;input type=&quot;text&quot; class=&quot;demo&quot; placeholder=&quot;在这里输入内容&quot;&gt;</span>
<span class="line">				&lt;/label&gt;</span>
<span class="line">			&lt;/div&gt;</span>
<span class="line">			&lt;div&gt;</span>
<span class="line">				&lt;label&gt;</span>
<span class="line">					&lt;input type=&quot;text&quot; class=&quot;demo&quot; placeholder=&quot;在这里输入内容&quot;&gt;</span>
<span class="line">				&lt;/label&gt;</span>
<span class="line">			&lt;/div&gt;</span>
<span class="line">			&lt;div&gt;</span>
<span class="line">				&lt;label&gt;</span>
<span class="line">					&lt;input type=&quot;text&quot; class=&quot;demo&quot; placeholder=&quot;在这里输入内容&quot;&gt;</span>
<span class="line">				&lt;/label&gt;</span>
<span class="line">			&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">		&lt;/div&gt;</span>
<span class="line">	&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-样式编写" tabindex="-1"><a class="header-anchor" href="#css-样式编写"><span>CSS 样式编写</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.content {</span>
<span class="line">	width: 800px;</span>
<span class="line">	height: 600px;</span>
<span class="line">	margin: 0 auto;</span>
<span class="line">	text-align: center;</span>
<span class="line">	position: relative;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.btn-content {</span>
<span class="line">	height: 50px;</span>
<span class="line">	line-height: 50px;</span>
<span class="line">}</span>
<span class="line">	</span>
<span class="line">.view-content {</span>
<span class="line">	position: absolute;</span>
<span class="line">	top: 50px;</span>
<span class="line">	width: 100%;</span>
<span class="line">	height: 100%;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.input-view {</span>
<span class="line">	width: 100%;</span>
<span class="line">	height: 100%;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.pop-view {</span>
<span class="line">	position: absolute;</span>
<span class="line">	left: 0;</span>
<span class="line">	top: 0;</span>
<span class="line">	z-index: 1;</span>
<span class="line">	opacity: 0.5;</span>
<span class="line">	width: 100%;</span>
<span class="line">	height: 100%;</span>
<span class="line">	background-color: #999;</span>
<span class="line">	filter: alpha(opacity=50);</span>
<span class="line">	display: none;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现-js-切换方法" tabindex="-1"><a class="header-anchor" href="#实现-js-切换方法"><span>实现 JS 切换方法</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function showPopView() {</span>
<span class="line">	let popView = document.getElementById(&#39;pop_view&#39;);</span>
<span class="line">	popView.style.display = &#39;block&#39;;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function hidePopView() {</span>
<span class="line">	let popView = document.getElementById(&#39;pop_view&#39;);</span>
<span class="line">	popView.style.display = &#39;none&#39;;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始隐藏蒙版的效果" tabindex="-1"><a class="header-anchor" href="#初始隐藏蒙版的效果"><span>初始隐藏蒙版的效果</span></a></h3><p><img src="http://ww1.sinaimg.cn/large/6b65559dgy1g4a9zsn7hkj20qi0l1dgh.jpg" alt="可以编辑输入框文字"></p><h3 id="显示蒙版后的效果" tabindex="-1"><a class="header-anchor" href="#显示蒙版后的效果"><span>显示蒙版后的效果</span></a></h3><p><img src="http://ww1.sinaimg.cn/large/6b65559dgy1g4a9zsq7abj20p20kb3yz.jpg" alt="不可编辑输入框文字"></p>`,11)])])}const c=s(l,[["render",t]]),v=JSON.parse('{"path":"/other/pop-view.html","title":"动态的给容器添加蒙版效果的弹出层","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561258373000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":1,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"b0691bad7fe787212fe0eb10cadef75f034e1572","time":1561258373000,"email":"1353815633@qq.com","author":"xiaofan","message":"更新时间测试"}]},"filePathRelative":"other/pop-view.md"}');export{c as comp,v as data};
