import{_ as s,c as a,a as e,o as i}from"./app-DRFRIiL9.js";const l={};function d(t,n){return i(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="vue-基础练习-demo-一个-input-number-组件" tabindex="-1"><a class="header-anchor" href="#vue-基础练习-demo-一个-input-number-组件"><span>Vue 基础练习 demo: 一个 input-number 组件</span></a></h1><blockquote><p>最近在学习 Vue,看完官方文档基础部分做了一个小 demo, 提供一个输入框和可供加减操作的按钮, 旨在联系 Vue 的相关基础知识. 本文主要以代码为主</p></blockquote><h3 id="创建相关文件" tabindex="-1"><a class="header-anchor" href="#创建相关文件"><span>创建相关文件</span></a></h3><p>一个 index.html 文件, 一个 index.js 文件, 还有一个输入框组件文件: input-number.js 文件</p><h3 id="编辑-input-number-js-组件" tabindex="-1"><a class="header-anchor" href="#编辑-input-number-js-组件"><span>编辑 input-number.js 组件</span></a></h3><p>直接上代码:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">// 判断是否为数字</span>
<span class="line">function isValueNumber(value) {</span>
<span class="line">    return (/(^-?[0-9]+\\.{1}\\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + &#39;&#39;);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 数字输入框组件</span>
<span class="line">Vue.component(&#39;input-number&#39;, {</span>
<span class="line">    template: \`</span>
<span class="line">        &lt;div class=&quot;input-number&quot;&gt;</span>
<span class="line">            &lt;input</span>
<span class="line">                type=&quot;text&quot;</span>
<span class="line">                @keyup.down=&quot;handleDown&quot;</span>
<span class="line">                @keyup.up=&quot;handleUp&quot;</span>
<span class="line">                :value=&quot;currentValue&quot;</span>
<span class="line">                @change=&quot;handleChange&quot;&gt;</span>
<span class="line">            &lt;button</span>
<span class="line">                @click=&quot;handleDown&quot;</span>
<span class="line">                :disabled=&quot;currentValue &lt;= min&quot;&gt;-&lt;/button&gt;</span>
<span class="line">            &lt;button</span>
<span class="line">                @click.down=&quot;handleUp&quot;</span>
<span class="line">                :disabled=&quot;currentValue &gt;= max&quot;&gt;+&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;\`,</span>
<span class="line">        // 组件 props</span>
<span class="line">        props: {</span>
<span class="line">            max: {	// 最大值</span>
<span class="line">                type: Number,</span>
<span class="line">                default: Infinity</span>
<span class="line">            },</span>
<span class="line">            min: {	// 最小值</span>
<span class="line">                type: Number,</span>
<span class="line">                default: -Infinity</span>
<span class="line">            },</span>
<span class="line">            value: {	// 当前值</span>
<span class="line">                type: Number,</span>
<span class="line">                default: 0</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        data() {</span>
<span class="line">            return {</span>
<span class="line">                currentValue: this.value</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        // 观察探测当前值是否变化</span>
<span class="line">        watch: {</span>
<span class="line">            currentValue(val) {</span>
<span class="line">                this.$emit(&#39;input&#39;, val);</span>
<span class="line">                this.$emit(&#39;on-change&#39;, val);</span>
<span class="line">            },</span>
<span class="line">            value(val) {</span>
<span class="line">                this.updateValue(val);</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        methods: {</span>
<span class="line">            // 更新当前值</span>
<span class="line">            updateValue(val) {</span>
<span class="line">                if (val &gt; this.max) val = this.max;</span>
<span class="line">                if (val &lt; this.min) val = this.min;</span>
<span class="line">                this.currentValue = val;</span>
<span class="line">            },</span>
<span class="line">            // 按下减号或者方向键下的事件</span>
<span class="line">            handleDown() {</span>
<span class="line">                if (this.currentValue &lt;= this.min) return;</span>
<span class="line">                this.currentValue -= 1;</span>
<span class="line">            },</span>
<span class="line">            // 按下加号或者方向键上的事件</span>
<span class="line">            handleUp() {</span>
<span class="line">                if (this.currentValue &gt;= this.max) return;</span>
<span class="line">                this.currentValue += 1;</span>
<span class="line">            },</span>
<span class="line">            // 监听input变化事件</span>
<span class="line">            handleChange(event) {</span>
<span class="line">                let val = event.target.value.trim();</span>
<span class="line">                let max = this.max;</span>
<span class="line">                let min = this.min;</span>
<span class="line"></span>
<span class="line">                if (isValueNumber(val)) {</span>
<span class="line">                    val = Number(val);</span>
<span class="line">                    this.currentValue = val;</span>
<span class="line"></span>
<span class="line">                    if (val &gt; max) {</span>
<span class="line">                        this.currentValue = max;</span>
<span class="line">                    } else if (val &lt; min) {</span>
<span class="line">                        this.currentValue = min;</span>
<span class="line">                    }</span>
<span class="line">                } else {</span>
<span class="line">                    event.target.value = this.currentValue;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        mounted () {</span>
<span class="line">            // 更新当前值</span>
<span class="line">            this.updateValue(this.value);</span>
<span class="line">        }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件"><span>使用组件</span></a></h3><p>在页面引用组件, 并设置最大值和最小值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span>
<span class="line">    &lt;title&gt;Document&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div id=&quot;app&quot;&gt;</span>
<span class="line">        &lt;!-- 引用组件 --&gt;</span>
<span class="line">        &lt;input-number v-model=&quot;value&quot; :max=&quot;10&quot; :min=&quot;0&quot;&gt;&lt;/input-numbe&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">    &lt;script src=&quot;https://cdn.staticfile.org/vue/2.6.2/vue.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;script src=&quot;./input-number.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;script src=&quot;./index.js&quot;&gt;&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-vue-实例" tabindex="-1"><a class="header-anchor" href="#创建-vue-实例"><span>创建 Vue 实例</span></a></h3><p>在 index.js 里创建Vue 实例并设置初始值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">// 创建 Vue 实例</span>
<span class="line">let app = new Vue({</span>
<span class="line">    el: &#39;#app&#39;,</span>
<span class="line">    data: {</span>
<span class="line">        value: 0	// 最初的默认值</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现效果" tabindex="-1"><a class="header-anchor" href="#实现效果"><span>实现效果</span></a></h3><p>如下所示, 可以点击加减号进行数值的增减, 也可以在 input 聚焦的时候使用键盘上下方向键进行同样操作, 超过最大值或者小于最小值的时候不变化</p><p><img src="http://ww1.sinaimg.cn/large/6b65559dgy1g40mxzefexj20k80cn3yn.jpg" alt=""></p>`,16)])])}const c=s(l,[["render",d]]),u=JSON.parse('{"path":"/vue/input-number.html","title":"Vue 基础练习 demo: 一个 input-number 组件","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1614479809000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":2,"url":"https://github.com/xiaofan"},{"name":"devxiaofan","username":"devxiaofan","email":"1353815633@qq.com","commits":1,"url":"https://github.com/devxiaofan"}],"changelog":[{"hash":"0a3ec5a83ffe506bf08b28e0654ae1f799f230c4","time":1614479809000,"email":"1353815633@qq.com","author":"devxiaofan","message":"git-nums"},{"hash":"3362afa31a8378f478f69dba2bf690301a86f73f","time":1561258996000,"email":"1353815633@qq.com","author":"xiaofan","message":"添加日期显示在底部"},{"hash":"542cffcb3665a0e24216ae180eb10446631d1106","time":1560491876000,"email":"1353815633@qq.com","author":"xiaofan","message":"vue demo: input-number"}]},"filePathRelative":"vue/input-number.md"}');export{c as comp,u as data};
