import{_ as s,c as i,a as e,o as l}from"./app-DRFRIiL9.js";const a={};function d(p,n){return l(),i("div",null,[...n[0]||(n[0]=[e(`<h1 id="vue-学习笔记-三-父子组件通信" tabindex="-1"><a class="header-anchor" href="#vue-学习笔记-三-父子组件通信"><span>Vue 学习笔记(三): 父子组件通信</span></a></h1><h3 id="父组件通过-props-向子组件传递" tabindex="-1"><a class="header-anchor" href="#父组件通过-props-向子组件传递"><span>父组件通过 <code>props</code> 向子组件传递</span></a></h3><p>父组件：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;child-component :list=&quot;testList&quot;&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line"></span>
<span class="line">import ChildComponent from &#39;@/components/ChildComponent.vue&#39;</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">  name: &#39;home&#39;,</span>
<span class="line">  components: {</span>
<span class="line">    ChildComponent</span>
<span class="line">  },</span>
<span class="line">  data () {</span>
<span class="line">    return {</span>
<span class="line">      testList: [&#39;line-1&#39;, &#39;line-2&#39;, &#39;line-3&#39;, &#39;line-4&#39;]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;ul&gt;</span>
<span class="line">      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;index&quot;&gt;</span>
<span class="line">        {{ item }}</span>
<span class="line">      &lt;/li&gt;</span>
<span class="line">    &lt;/ul&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">  name: &#39;ChildComponent&#39;,</span>
<span class="line">  props: {</span>
<span class="line">    list: Array</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样子组件就能接收并显示父组件传递过来的数据了</p><p><img src="http://imgs.devzhangjs.com/2019-07-17-15633336300856.jpg" alt="效果图"></p><h3 id="子组件通过-emit向父组件传递数据" tabindex="-1"><a class="header-anchor" href="#子组件通过-emit向父组件传递数据"><span>子组件通过<code>$emit</code>向父组件传递数据</span></a></h3><p>子组件：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;ul&gt;</span>
<span class="line">      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;index&quot; @click=&quot;handleClick(index)&quot;&gt;</span>
<span class="line">        {{ item }}</span>
<span class="line">      &lt;/li&gt;</span>
<span class="line">    &lt;/ul&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">  name: &#39;ChildComponent&#39;,</span>
<span class="line">  props: {</span>
<span class="line">    list: Array</span>
<span class="line">  },</span>
<span class="line">  methods: {</span>
<span class="line">    handleClick (index) {</span>
<span class="line">      this.$emit(&#39;childEvent&#39;, index)</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;home&quot;&gt;</span>
<span class="line">    &lt;child-component :list=&quot;testList&quot; @childEvent=&quot;childHandleClick&quot;&gt;&lt;/child-component&gt;</span>
<span class="line">    &lt;div&gt;This line&#39;s index is {{ num }}&lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line"></span>
<span class="line">import ChildComponent from &#39;@/components/ChildComponent.vue&#39;</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">  name: &#39;home&#39;,</span>
<span class="line">  components: {</span>
<span class="line">    ChildComponent</span>
<span class="line">  },</span>
<span class="line">  data () {</span>
<span class="line">    return {</span>
<span class="line">      testList: [&#39;line-1&#39;, &#39;line-2&#39;, &#39;line-3&#39;, &#39;line-4&#39;],</span>
<span class="line">      num: &#39;NAN&#39;</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  methods: {</span>
<span class="line">    childHandleClick (index) {</span>
<span class="line">      this.num = index</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://imgs.devzhangjs.com/2019-07-17-15633336692363.jpg" alt="效果图"></p><p>子组件中也可以这样简写：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;ul&gt;</span>
<span class="line">      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;index&quot; @click=&quot;$emit(&#39;childEvent&#39;, index)&quot;&gt;</span>
<span class="line">        {{ item }}</span>
<span class="line">      &lt;/li&gt;</span>
<span class="line">    &lt;/ul&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">  name: &#39;ChildComponent&#39;,</span>
<span class="line">  props: {</span>
<span class="line">    list: Array</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就不用在逻辑里声明<code>methods</code>方法了, 效果是一样的</p>`,17)])])}const c=s(a,[["render",d]]),v=JSON.parse('{"path":"/vue/vue-props.html","title":"Vue 学习笔记(三): 父子组件通信","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1563334119000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":1,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"78a4e8e5b78689cc2b5725a30bd5f6ea6805350e","time":1563334119000,"email":"1353815633@qq.com","author":"xiaofan","message":"vue-props"}]},"filePathRelative":"vue/vue-props.md"}');export{c as comp,v as data};
