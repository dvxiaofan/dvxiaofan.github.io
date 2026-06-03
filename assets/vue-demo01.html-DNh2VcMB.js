import{_ as s,c as n,a,o as i}from"./app-DRFRIiL9.js";const l={};function t(d,e){return i(),n("div",null,[...e[0]||(e[0]=[a(`<h1 id="vue-练习-demo-一-动态添加元素到页面" tabindex="-1"><a class="header-anchor" href="#vue-练习-demo-一-动态添加元素到页面"><span>Vue 练习 Demo(一): 动态添加元素到页面</span></a></h1><h3 id="新建一个-index-html-文件-然后完成以下初步编辑" tabindex="-1"><a class="header-anchor" href="#新建一个-index-html-文件-然后完成以下初步编辑"><span>新建一个 index.html 文件,然后完成以下初步编辑</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">    &lt;input v-model=&quot;inputValue&quot; type=&quot;text&quot; /&gt;</span>
<span class="line">    &lt;button v-on:click=&quot;handleAddBtn&quot;&gt;提交&lt;/button&gt;</span>
<span class="line">    &lt;ul&gt;</span>
<span class="line">        &lt;li v-for=&quot;item in list&quot;&gt;{{ item }}&lt;/li&gt;</span>
<span class="line">    &lt;/ul&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过-script-标签引入-vue" tabindex="-1"><a class="header-anchor" href="#通过-script-标签引入-vue"><span>通过 script 标签引入 Vue</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script src=&quot;https://cdn.staticfile.org/vue/2.6.2/vue.js&quot;&gt;&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="编辑-js-内容" tabindex="-1"><a class="header-anchor" href="#编辑-js-内容"><span>编辑 js 内容</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let app = new Vue({</span>
<span class="line">    el: &#39;#app&#39;,</span>
<span class="line">    data: {</span>
<span class="line">        list: [&#39;1&#39;, &#39;2&#39;],	// 初识值, 也可以不填</span>
<span class="line">        inputValue: &#39;&#39;		// 和 input 的 inputValue 双向绑定</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line">    		// 添加事件</span>
<span class="line">        handleAddBtn() {</span>
<span class="line">            this.list.push(this.inputValue)</span>
<span class="line">            this.inputValue = &#39;&#39;</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示"><span>效果展示</span></a></h3><p><img src="http://note.youdao.com/yws/public/resource/e5aee210dd5c7810b6553debfbfe7c1d/WEBRESOURCEf605d3654309b4e88491c5cc0206e895?ynotemdtimestamp=1561188602710" alt="效果展示"></p>`,9)])])}const p=s(l,[["render",t]]),r=JSON.parse('{"path":"/vue/vue-demo01.html","title":"Vue 练习 Demo(一): 动态添加元素到页面","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561258531000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":1,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"3bceff4ddfc3ca1593793643df837749535f1853","time":1561258531000,"email":"1353815633@qq.com","author":"xiaofan","message":"test"}]},"filePathRelative":"vue/vue-demo01.md"}');export{p as comp,r as data};
