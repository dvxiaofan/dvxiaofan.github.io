import{_ as n,c as a,a as e,o as l}from"./app-DRFRIiL9.js";const i={};function p(d,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="vue-学习笔记-二-计算属性-computed" tabindex="-1"><a class="header-anchor" href="#vue-学习笔记-二-计算属性-computed"><span>Vue 学习笔记(二): 计算属性-computed</span></a></h1><h3 id="computed-与缓存" tabindex="-1"><a class="header-anchor" href="#computed-与缓存"><span>computed 与缓存</span></a></h3><p>html 部分</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">    {{fullName}}</span>
<span class="line">    &lt;span&gt;{{age}}&lt;/span&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js 部分</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let app = new Vue({</span>
<span class="line">    el: &#39;#app&#39;,</span>
<span class="line">    data: {</span>
<span class="line">        firstName: &#39;dev&#39;,</span>
<span class="line">        lastName: &#39;zhang&#39;,</span>
<span class="line">        age: 88</span>
<span class="line">    },</span>
<span class="line">    computed: {</span>
<span class="line">        fullName() {</span>
<span class="line">            console.log(&#39;计算一次&#39;);</span>
<span class="line">            return this.firstName + &quot; &quot; + this.lastName</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现效果</p><p><img src="http://imgs.devzhangjs.com/15614706983022.jpg" alt=""></p><p>动态修改 age 的值, 计算属性不会触发更改, 修改两个参考值中的一个, 计算属性会触发重新计算. 所以计算属性是有缓存的, 在参考值没有发生变化的情况下是不会重复计算和更新 DOM 的, 对性能提升有好处.</p><p><img src="http://imgs.devzhangjs.com/15614708416808.jpg" alt=""></p><h3 id="computed-与-function" tabindex="-1"><a class="header-anchor" href="#computed-与-function"><span>computed 与 function</span></a></h3><p>html 修改为</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">    {{fullName()}}</span>
<span class="line">    &lt;span&gt;{{age}}&lt;/span&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js 代码修改为</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let app = new Vue({</span>
<span class="line">    el: &#39;#app&#39;,</span>
<span class="line">    data: {</span>
<span class="line">        firstName: &#39;dev&#39;,</span>
<span class="line">        lastName: &#39;zhang&#39;,</span>
<span class="line">        age: 29</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line">        fullName() {</span>
<span class="line">            console.log(&#39;执行一次方法&#39;);</span>
<span class="line">            return this.firstName + &#39; &#39; + this.lastName</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图</p><p><img src="http://imgs.devzhangjs.com/15614715728040.jpg" alt=""></p><p>这时候虽然效果能实现, 但是每次更新元素里的任何一项, 都会触发方法进行计算, 并更新 DOM,对性能有不必要的浪费</p><h3 id="computed-与-watch" tabindex="-1"><a class="header-anchor" href="#computed-与-watch"><span>computed 与 watch</span></a></h3><p>js 代码修改</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let app = new Vue({</span>
<span class="line">    el: &#39;#app&#39;,</span>
<span class="line">    data: {</span>
<span class="line">        firstName: &#39;dev&#39;,</span>
<span class="line">        lastName: &#39;zhang&#39;,</span>
<span class="line">        fullName: &#39;dev zhang&#39;,</span>
<span class="line">    },</span>
<span class="line">    watch: {</span>
<span class="line">        firstName(val) {</span>
<span class="line">            this.fullName = val + &#39; &#39; + this.lastName</span>
<span class="line">        },</span>
<span class="line">        lastName(val) {</span>
<span class="line">            this.fullName = this.firstName + &#39; &#39; + val</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">    },</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://imgs.devzhangjs.com/15614713168297.jpg" alt=""></p><p>watch 会监听对应的要素值变化, 这样也能实现和 computed 一样的效果, 但代码量会比 computed 多.</p>`,23)])])}const t=n(i,[["render",p]]),m=JSON.parse('{"path":"/vue/vue-computed.html","title":"Vue 学习笔记(二): 计算属性-computed","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561473320000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":1,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"b8f652755cc6d5c251419b55ab68d5cc4142201f","time":1561473320000,"email":"1353815633@qq.com","author":"xiaofan","message":"vue-computed"}]},"filePathRelative":"vue/vue-computed.md"}');export{t as comp,m as data};
