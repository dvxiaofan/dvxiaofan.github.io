import{_ as s,c as e,a,o as i}from"./app-DRFRIiL9.js";const l={};function t(d,n){return i(),e("div",null,[...n[0]||(n[0]=[a(`<h1 id="vue-练习-demo-二-组件化动态添加和删除元素" tabindex="-1"><a class="header-anchor" href="#vue-练习-demo-二-组件化动态添加和删除元素"><span>Vue 练习 Demo(二): 组件化动态添加和删除元素</span></a></h1><h3 id="在原有基础上修改-div" tabindex="-1"><a class="header-anchor" href="#在原有基础上修改-div"><span>在原有基础上修改 div</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">	&lt;input v-model=&quot;inputValue&quot; type=&quot;text&quot; /&gt;</span>
<span class="line">	&lt;button @click=&quot;handleAddBtn&quot;&gt;提交&lt;/button&gt;</span>
<span class="line">	&lt;ul&gt;</span>
<span class="line">	    &lt;todo-item </span>
<span class="line">	        :content=&quot;item&quot;</span>
<span class="line">	        :index=&quot;index&quot;</span>
<span class="line">	        v-for=&quot;(item,index) in list&quot;</span>
<span class="line">	        @delete=&quot;handleDeleteItem&quot;</span>
<span class="line">	        &gt;</span>
<span class="line">	    &lt;/todo-item&gt;</span>
<span class="line">	&lt;/ul&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建子组件" tabindex="-1"><a class="header-anchor" href="#创建子组件"><span>创建子组件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let TodoItem = {</span>
<span class="line">	// 需要传递的参数</span>
<span class="line">    props: {</span>
<span class="line">        content: this.content,</span>
<span class="line">        index: this.index,</span>
<span class="line">    },</span>
<span class="line">    template: &quot;&lt;li @click=&#39;handleItemClick&#39;&gt;{{content}}&lt;/li&gt;&quot;,</span>
<span class="line">    methods: {</span>
<span class="line">        handleItemClick() {</span>
<span class="line">		       // 向父组件传递事件和参数</span>
<span class="line">            this.$emit(&quot;delete&quot;, this.index)</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let app = new Vue({</span>
<span class="line">    el: &#39;#app&#39;,</span>
<span class="line">    components: {</span>
<span class="line">        TodoItem</span>
<span class="line">    },</span>
<span class="line">    data: {</span>
<span class="line">        list: [111, 222, 333],</span>
<span class="line">        inputValue: &#39;&#39;</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line">        handleAddBtn() {</span>
<span class="line">            this.list.push(this.inputValue)</span>
<span class="line">            this.inputValue = &#39;&#39;</span>
<span class="line">        },</span>
<span class="line">        handleDeleteItem(index) {</span>
<span class="line">            console.log(index)</span>
<span class="line">            this.list.splice(index, 1)</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示"><span>效果展示</span></a></h3><p><img src="https://storage1.cuntuku.com/2019/06/22/cNT8D.gif" alt="效果展示"></p>`,7)])])}const p=s(l,[["render",t]]),v=JSON.parse('{"path":"/vue/vue-demo02.html","title":"Vue 练习 Demo(二): 组件化动态添加和删除元素","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561258531000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":1,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"3bceff4ddfc3ca1593793643df837749535f1853","time":1561258531000,"email":"1353815633@qq.com","author":"xiaofan","message":"test"}]},"filePathRelative":"vue/vue-demo02.md"}');export{p as comp,v as data};
