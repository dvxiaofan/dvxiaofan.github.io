import{_ as s,c as n,a,o as i}from"./app-DRFRIiL9.js";const l={};function d(c,e){return i(),n("div",null,[...e[0]||(e[0]=[a(`<h1 id="js重点基础知识记录" tabindex="-1"><a class="header-anchor" href="#js重点基础知识记录"><span>JS重点基础知识记录</span></a></h1><h2 id="原始类型-primitive" tabindex="-1"><a class="header-anchor" href="#原始类型-primitive"><span>原始类型（Primitive）</span></a></h2><p>在 JS 中， 有6种原始类型值：</p><ul><li>boolean</li><li>null</li><li>undefined</li><li>number</li><li>string</li><li>symbol</li></ul><p>原始类型存储的都是值， 是没有函数可以调用的， 比如不能这样： <code>null.toString()</code>;</p><p>可能会有<code>&#39;1&#39;.toString()</code>这样使用的，那是要因为 <code>1</code> 已经转换成了 <code>String</code>类型，也就是对象类型。所以可以调用函数</p><p>JS 的<code>number</code> 类型是浮点类型的，在使用中会遇到某些 Bug，比如 <code>0.1 + 0.2 !== 0.3</code>。<code>string</code>类型是不可变的，无论你在<code>string</code> 类型上调用何种方法，都不会对值有改变。</p><p>另外对于<code>null</code> 来说，很多人会认为他是个对象类型，其实这是错误的。虽然 <code>typeof null</code> 会输出<code>object</code>，但是这只是 <code>JS</code> 存在的一个悠久 <code>Bug</code>。在 <code>JS</code> 的最初版本中使用的是 <code>32</code> 位系统，为了性能考虑使用低位存储变量的类型信息，<code>000</code> 开头代表是对象，然而 <code>null</code> 表示为全零，所以将它错误的判断为 <code>object</code> 。虽然现在的内部类型判断代码已经改变了，但是对于这个 <code>Bug</code> 却是一直流传下来。</p><h2 id="对象类型-object" tabindex="-1"><a class="header-anchor" href="#对象类型-object"><span>对象类型(Object)</span></a></h2><p>在 <code>JS</code> 中，除了原始类型那么其他的都是对象类型了。对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址（指针）。当你创建了一个对象类型的时候，计算机会在内存中帮我们开辟一个空间来存放值，但是我们需要找到这个空间，这个空间会拥有一个地址（指针）。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const a = []</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对于常量 <code>a</code> 来说，假设内存地址（指针）为 <code>#001</code>，那么在地址 <code>#001</code> 的位置存放了值 <code>[]</code>，常量 <code>a</code> 存放了地址（指针） <code>#001</code>，再看以下代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const a = []</span>
<span class="line">const b = a</span>
<span class="line">b.push(1)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们将变量赋值给另外一个变量时，复制的是原本变量的地址（指针），也就是说当前变量 <code>b</code> 存放的地址（指针）也是 <code>#001</code>，当我们进行数据修改的时候，就会修改存放在地址（指针） <code>#001</code> 上的值，也就导致了两个变量的值都发生了改变。</p><p>接下来我们来看函数参数是对象的情况</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function test(person) {</span>
<span class="line">  person.age = 26</span>
<span class="line">  person = {</span>
<span class="line">    name: &#39;yyy&#39;,</span>
<span class="line">    age: 30</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  return person</span>
<span class="line">}</span>
<span class="line">const p1 = {</span>
<span class="line">  name: &#39;yck&#39;,</span>
<span class="line">  age: 25</span>
<span class="line">}</span>
<span class="line">const p2 = test(p1)</span>
<span class="line">console.log(p1) 	// -&gt; ?</span>
<span class="line">console.log(p2) 	// -&gt; ?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于以上代码，你是否能正确的写出结果呢？接下来让我为了解析一番：</p><ul><li>首先，函数传参是传递对象指针的副本</li><li>到函数内部修改参数的属性这步，我相信大家都知道，当前 <code>p1</code> 的值也被修改了</li><li>但是当我们重新为了 <code>person</code> 分配了一个对象时就出现了分歧，请看下图</li></ul><p><img src="http://imgs.webxiaofan.com/15467573688503.jpg" alt=""></p><p>所以最后 <code>person</code> 拥有了一个新的地址（指针），也就和 <code>p1</code> 没有任何关系了，导致了最终两个变量的值是不相同的。</p><h2 id="typeof-vs-instanceof" tabindex="-1"><a class="header-anchor" href="#typeof-vs-instanceof"><span>typeof vs instanceof</span></a></h2><p><code>typeof</code> 对于原始类型来说，除了 <code>null</code> 都可以显示正确的类型</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">typeof 1 				// &#39;number&#39;</span>
<span class="line">typeof &#39;1&#39; 				// &#39;string&#39;</span>
<span class="line">typeof undefined 			// &#39;undefined&#39;</span>
<span class="line">typeof true 				// &#39;boolean&#39;</span>
<span class="line">typeof Symbol() 			// &#39;symbol&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>typeof</code> 对于对象来说，除了函数都会显示 <code>object</code>，所以说 <code>typeof</code> 并不能准确判断变量到底是什么类型</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">typeof [] // &#39;object&#39;</span>
<span class="line">typeof {} // &#39;object&#39;</span>
<span class="line">typeof console.log // &#39;function&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想判断一个对象的正确类型，这时候可以考虑使用 <code>instanceof</code>，因为内部机制是通过原型链来判断的，在后面的章节中我们也会自己去实现一个 <code>instanceof</code>。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const Person = function() {}</span>
<span class="line">const p1 = new Person()</span>
<span class="line">p1 instanceof Person 		// true</span>
<span class="line"></span>
<span class="line">var str = &#39;hello world&#39;</span>
<span class="line">str instanceof String 		// false</span>
<span class="line"></span>
<span class="line">var str1 = new String(&#39;hello world&#39;)</span>
<span class="line">str1 instanceof String 	// true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于原始类型来说，你想直接通过 <code>instanceof</code> 来判断类型是不行的，当然我们还是有办法让 <code>instanceof</code> 判断原始类型的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class PrimitiveString {</span>
<span class="line">  static [Symbol.hasInstance](x) {</span>
<span class="line">    return typeof x === &#39;string&#39;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">console.log(&#39;hello world&#39; instanceof PrimitiveString) 	// true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Symbol.hasInstance</code> 就是一个能让我们自定义 <code>instanceof</code> 行为的东西，以上代码等同于 <code>typeof &#39;hello world&#39; === &#39;string&#39;</code>，所以结果自然是 <code>true</code> 了。这其实也侧面反映了一个问题， <code>instanceof</code> 也不是百分之百可信的。</p><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换"><span>类型转换</span></a></h2><p>首先我们要知道，在 <code>JS</code> 中类型转换只有三种情况，分别是：</p><ul><li>转换为布尔值</li><li>转换为数字</li><li>转换为字符串</li></ul><p>我们先来看一个类型转换表格，然后再进入正题</p><p><img src="http://imgs.webxiaofan.com/15467576662698.jpg" alt=""></p><h3 id="转boolean" tabindex="-1"><a class="header-anchor" href="#转boolean"><span>转Boolean</span></a></h3><p>在条件判断时，除了 <code>undefined</code>， <code>null</code>， <code>false</code>， <code>NaN</code>， <code>&#39;&#39;</code>， <code>0</code>， <code>-0</code>，其他所有值都转为 <code>true</code>，包括所有对象。</p><h3 id="对象转原始类型" tabindex="-1"><a class="header-anchor" href="#对象转原始类型"><span>对象转原始类型</span></a></h3><p>对象在转换类型的时候，会调用内置的 <code>[[ToPrimitive]]</code> 函数，对于该函数来说，算法逻辑一般来说如下：</p><ul><li>如果已经是原始类型了，那就不需要转换了</li><li>调用 <code>x.valueOf()</code>，如果转换为基础类型，就返回转换的值</li><li>调用 <code>x.toString()</code>，如果转换为基础类型，就返回转换的值</li><li>如果都没有返回原始类型，就会报错</li></ul><p>当然你也可以重写 <code>Symbol.toPrimitive</code> ，该方法在转原始类型时调用优先级最高。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let a = {</span>
<span class="line">  valueOf() {</span>
<span class="line">    return 0</span>
<span class="line">  },</span>
<span class="line">  toString() {</span>
<span class="line">    return &#39;1&#39;</span>
<span class="line">  },</span>
<span class="line">  [Symbol.toPrimitive]() {</span>
<span class="line">    return 2</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">1 + a 		// =&gt; 3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四则运算符" tabindex="-1"><a class="header-anchor" href="#四则运算符"><span>四则运算符</span></a></h3><p>加法运算符不同于其他几个运算符，它有以下几个特点：</p><ul><li>运算中其中一方为字符串，那么就会把另一方也转换为字符串</li><li>如果一方不是字符串或者数字，那么会将它转换为数字或者字符串</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">1 + &#39;1&#39; 		// &#39;11&#39;</span>
<span class="line">true + true 	// 2</span>
<span class="line">4 + [1,2,3] 	// &quot;41,2,3&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你对于答案有疑问的话，请看解析：</p><ul><li>对于第一行代码来说，触发特点一，所以将数字 <code>1</code> 转换为字符串，得到结果 <code>&#39;11&#39;</code></li><li>对于第二行代码来说，触发特点二，所以将 <code>true</code> 转为数字 <code>1</code></li><li>对于第三行代码来说，触发特点二，所以将数组通过 <code>toString</code> 转为字符串 <code>1,2,3</code>，得到结果 <code>41,2,3</code></li></ul><p>另外对于加法还需要注意这个表达式 <code>&#39;a&#39; + + &#39;b&#39;</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&#39;a&#39; + + &#39;b&#39; 	// -&gt; &quot;aNaN&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>因为 <code>+ &#39;b&#39;</code> 等于 <code>NaN</code>，所以结果为 <code>&quot;aNaN&quot;</code>，你可能也会在一些代码中看到过 <code>+ &#39;1&#39;</code> 的形式来快速获取 <code>number</code> 类型。</p><p>那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">4 * &#39;3&#39; // 12</span>
<span class="line">4 * [] // 0</span>
<span class="line">4 * [1, 2] // NaN</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符"><span>比较运算符</span></a></h3><ol><li>如果是对象，就通过 <code>toPrimitive</code> 转换对象</li><li>如果是字符串，就通过 <code>unicode</code> 字符索引来比较</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let a = {</span>
<span class="line">  valueOf() {</span>
<span class="line">    return 0</span>
<span class="line">  },</span>
<span class="line">  toString() {</span>
<span class="line">    return &#39;1&#39;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">a &gt; -1 	// true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上代码中，因为 <code>a</code> 是对象，所以会通过 <code>valueOf</code> 转换为原始类型再比较值。</p><h2 id="this" tabindex="-1"><a class="header-anchor" href="#this"><span>this</span></a></h2><p><code>this</code> 是很多人会混淆的概念，但是其实它一点都不难，只是网上很多文章把简单的东西说复杂了。</p><p>我们先来看几个函数调用的场景</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function foo() {</span>
<span class="line">  console.log(this.a)</span>
<span class="line">}</span>
<span class="line">var a = 1</span>
<span class="line">foo()</span>
<span class="line"></span>
<span class="line">const obj = {</span>
<span class="line">  a: 2,</span>
<span class="line">  foo: foo</span>
<span class="line">}</span>
<span class="line">obj.foo()</span>
<span class="line"></span>
<span class="line">const c = new foo()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们一个个分析上面几个场景</p><ul><li>对于直接调用 <code>foo</code> 来说，不管 <code>foo</code> 函数被放在了什么地方，<code>this</code> 一定是 <code>window</code></li><li>对于 <code>obj.foo()</code> 来说，我们只需要记住，谁调用了函数，谁就是 <code>this</code>，所以在这个场景下 <code>foo</code> 函数中的 <code>this</code> 就是 <code>obj</code> 对象</li><li>对于 <code>new</code> 的方式来说，<code>this</code> 被永远绑定在了 <code>c</code> 上面，不会被任何方式改变 <code>this</code></li></ul><p>说完了以上几种情况，其实很多代码中的 <code>this</code> 应该就没什么问题了，下面让我们看看箭头函数中的 <code>this</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function a() {</span>
<span class="line">  return () =&gt; {</span>
<span class="line">    return () =&gt; {</span>
<span class="line">      console.log(this)</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">console.log(a()()())</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先箭头函数其实是没有 <code>this</code> 的，箭头函数中的 <code>this</code> 只取决包裹箭头函数的第一个普通函数的 <code>this</code>。在这个例子中，因为包裹箭头函数的第一个普通函数是 <code>a</code>，所以此时的 <code>this</code> 是 <code>window</code>。另外对箭头函数使用 <code>bind</code> 这类函数是无效的。</p><p>最后种情况也就是 <code>bind</code> 这些改变上下文的 <code>API</code> 了，对于这些函数来说，<code>this</code> 取决于第一个参数，如果第一个参数为空，那么就是 <code>window</code>。</p><p>如果对一个函数进行多次 <code>bind</code>，那么上下文会是什么呢？</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let a = {}</span>
<span class="line">let fn = function () { console.log(this) }</span>
<span class="line">fn.bind().bind(a)() // =&gt; ?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你认为输出结果是 <code>a</code>，那么你就错了，其实我们可以把上述代码转换成另一种形式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// fn.bind().bind(a) 等于</span>
<span class="line">let fn2 = function fn1() {</span>
<span class="line">  return function() {</span>
<span class="line">    return fn.apply()</span>
<span class="line">  }.apply(a)</span>
<span class="line">}</span>
<span class="line">fn2()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以从上述代码中发现，不管我们给函数 <code>bind</code> 几次，<code>fn</code> 中的 <code>this</code> 永远由第一次 <code>bind</code> 决定，所以结果永远是 <code>window</code>。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let a = { name: &#39;yck&#39; }</span>
<span class="line">function foo() {</span>
<span class="line">  console.log(this.name)</span>
<span class="line">}</span>
<span class="line">foo.bind(a)() 	// =&gt; &#39;yck&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是 <code>this</code> 的规则了，但是可能会发生多个规则同时出现的情况，这时候不同的规则之间会根据优先级最高的来决定 <code>this</code> 最终指向哪里。</p><p>首先，<code>new</code> 的方式优先级最高，接下来是 <code>bind</code> 这些函数，然后是 <code>obj.foo()</code> 这种调用方式，最后是 <code>foo</code> 这种调用方式，同时，箭头函数的 <code>this</code> 一旦被绑定，就不会再被任何方式所改变。</p><p>为更好理解,我们来看以下的这张流程图，图中的流程只针对于单个规则。</p><p><img src="http://imgs.webxiaofan.com/15467584630250.jpg" alt=""></p><h2 id="vs" tabindex="-1"><a class="header-anchor" href="#vs"><span>== vs ===</span></a></h2><p>对于 <code>==</code> 来说，如果对比双方的类型不一样的话，就会进行类型转换。</p><p>假如我们需要对比 <code>x</code> 和 <code>y</code> 是否相同，就会进行如下判断流程：</p><p>1.首先会判断两者类型是否相同。相同的话就是比大小了 2.类型不相同的话，那么就会进行类型转换 3.会先判断是否在对比 <code>null</code> 和 <code>undefined</code>，是的话就会返回 <code>true</code> 4.判断两者类型是否为 <code>string</code> 和 <code>number</code>，是的话就会将字符串转换为 <code>number</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">1 == &#39;1&#39;</span>
<span class="line">      ↓</span>
<span class="line">1 ==  1</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.判断其中一方是否为 <code>boolean</code>，是的话就会把 <code>boolean</code> 转为 <code>number</code> 再进行判断</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">‘1’ == true</span>
<span class="line">        ↓</span>
<span class="line">‘1’ ==  1</span>
<span class="line">        ↓</span>
<span class="line"> 1  ==  1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.判断其中一方是否为 <code>object</code> 且另一方为 <code>string</code>、<code>number</code> 或者 <code>symbol</code>，是的话就会把 <code>object</code> 转为原始类型再进行判断</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">‘1’ == { name: ‘yck’ }</span>
<span class="line">        ↓</span>
<span class="line">‘1’ == ‘[object Object]’</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可参考流程图： <img src="http://imgs.webxiaofan.com/15467590884353.jpg" alt=""></p><p>当然了，这个流程图并没有将所有的情况都列举出来，我这里只将常用到的情况列举了，如果你想了解更多的内容可以参考 标准文档。</p><p>对于 <code>===</code> 来说就简单多了，就是判断两者类型和值是否相同。</p><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包"><span>闭包</span></a></h2><p>闭包的定义其实很简单：函数 <code>A</code> 内部有一个函数 <code>B</code>，函数 <code>B</code> 可以访问到函数 <code>A</code> 中的变量，那么函数 <code>B</code> 就是闭包。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function A() {</span>
<span class="line">  let a = 1</span>
<span class="line">  window.B = function () {</span>
<span class="line">      console.log(a)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">A()</span>
<span class="line">B() // 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很多人对于闭包的解释可能是函数嵌套了函数，然后返回一个函数。其实这个解释是不完整的，就比如我上面这个例子就可以反驳这个观点。</p><p>在 <code>JS</code> 中，闭包存在的意义就是让我们可以间接访问函数内部的变量。</p><blockquote><p>举例:循环中使用闭包解决 <code>var</code> 定义函数的问题</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">for (var i = 1; i &lt;= 5; i++) {</span>
<span class="line">  setTimeout(function timer() {</span>
<span class="line">    console.log(i)</span>
<span class="line">  }, i * 1000)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先因为 <code>setTimeout</code> 是个异步函数，所以会先把循环全部执行完毕，这时候 <code>i</code> 就是 <code>6</code> 了，所以会输出一堆 <code>6</code>。</p><p>解决办法有三种，第一种是使用闭包的方式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">for (var i = 1; i &lt;= 5; i++) {</span>
<span class="line">  ;(function(j) {</span>
<span class="line">    setTimeout(function timer() {</span>
<span class="line">      console.log(j)</span>
<span class="line">    }, j * 1000)</span>
<span class="line">  })(i)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，我们首先使用了立即执行函数将 <code>i</code> 传入函数内部，这个时候值就被固定在了参数 <code>j</code> 上面不会改变，当下次执行 <code>timer</code> 这个闭包的时候，就可以使用外部函数的变量 <code>j</code>，从而达到目的。</p><p>第二种就是使用 <code>setTimeout</code> 的第三个参数，这个参数会被当成 <code>timer</code> 函数的参数传入。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">for (var i = 1; i &lt;= 5; i++) {</span>
<span class="line">  setTimeout(</span>
<span class="line">    function timer(j) {</span>
<span class="line">      console.log(j)</span>
<span class="line">    },</span>
<span class="line">    i * 1000,</span>
<span class="line">    i</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三种就是使用 <code>let</code> 定义 <code>i</code> 了来解决问题了，这个也是最为推荐的方式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">for (let i = 1; i &lt;= 5; i++) {</span>
<span class="line">  setTimeout(function timer() {</span>
<span class="line">    console.log(i)</span>
<span class="line">  }, i * 1000)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="深浅拷贝" tabindex="-1"><a class="header-anchor" href="#深浅拷贝"><span>深浅拷贝</span></a></h2><p>我们之前了解了对象类型在赋值的过程中其实是复制了地址，从而会导致改变了一方其他也都被改变的情况。通常在开发中我们不希望出现这样的问题，我们可以使用浅拷贝来解决这个情况。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let a = {</span>
<span class="line">  age: 1</span>
<span class="line">}</span>
<span class="line">let b = a</span>
<span class="line">a.age = 2</span>
<span class="line">console.log(b.age) // 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝"><span>浅拷贝</span></a></h3><p>首先可以通过 <code>Object.assign</code> 来解决这个问题，很多人认为这个函数是用来深拷贝的。其实并不是，<code>Object.assign</code>只会拷贝所有的属性值到新的对象中，如果属性值是对象的话，拷贝的是地址，所以并不是深拷贝。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let a = {</span>
<span class="line">  age: 1</span>
<span class="line">}</span>
<span class="line">let b = Object.assign({}, a)</span>
<span class="line">a.age = 2</span>
<span class="line">console.log(b.age) // 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外我们还可以通过展开运算符 <code>...</code> 来实现浅拷贝</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let a = {</span>
<span class="line">  age: 1</span>
<span class="line">}</span>
<span class="line">let b = { ...a }</span>
<span class="line">a.age = 2</span>
<span class="line">console.log(b.age) // 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常浅拷贝就能解决大部分问题了，但是当我们遇到如下情况就可能需要使用到深拷贝了</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let a = {</span>
<span class="line">  age: 1,</span>
<span class="line">  jobs: {</span>
<span class="line">    first: ‘FE’</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">let b = { ...a }</span>
<span class="line">a.jobs.first = ‘native’</span>
<span class="line">console.log(b.jobs.first) // native</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话，那么就又回到最开始的话题了，两者享有相同的地址。要解决这个问题，我们就得使用深拷贝了。</p><h3 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝"><span>深拷贝</span></a></h3><p>这个问题通常可以通过 <code>JSON.parse(JSON.stringify(object))</code> 来解决。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let a = {</span>
<span class="line">  age: 1,</span>
<span class="line">  jobs: {</span>
<span class="line">    first: ‘FE’</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">let b = JSON.parse(JSON.stringify(a))</span>
<span class="line">a.jobs.first = ‘native’</span>
<span class="line">console.log(b.jobs.first) // FE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是该方法也是有局限性的：</p><ul><li>会忽略 undefined</li><li>会忽略 symbol</li><li>不能序列化函数</li><li>不能解决循环引用的对象</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let obj = {</span>
<span class="line">  a: 1,</span>
<span class="line">  b: {</span>
<span class="line">    c: 2,</span>
<span class="line">    d: 3,</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line">obj.c = obj.b</span>
<span class="line">obj.e = obj.a</span>
<span class="line">obj.b.c = obj.c</span>
<span class="line">obj.b.d = obj.b</span>
<span class="line">obj.b.e = obj.b.c</span>
<span class="line">let newObj = JSON.parse(JSON.stringify(obj))</span>
<span class="line">console.log(newObj)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你有这么一个循环引用对象，你会发现并不能通过该方法实现深拷贝</p><p><img src="http://imgs.webxiaofan.com/15467596557702.jpg" alt=""></p><p>在遇到函数、 <code>undefined</code> 或者 <code>symbol</code> 的时候，该对象也不能正常的序列化</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let a = {</span>
<span class="line">  age: undefined,</span>
<span class="line">  sex: Symbol(‘male’),</span>
<span class="line">  jobs: function() {},</span>
<span class="line">  name: ‘yck’</span>
<span class="line">}</span>
<span class="line">let b = JSON.parse(JSON.stringify(a))</span>
<span class="line">console.log(b) // {name: “yck”}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你会发现在上述情况中，该方法会忽略掉函数和 <code>undefined</code> 。</p><p>但是在通常情况下，复杂数据都是可以序列化的，所以这个函数可以解决大部分问题。</p><p>如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 <code>MessageChannel</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function structuralClone(obj) {</span>
<span class="line">  return new Promise(resolve =&gt; {</span>
<span class="line">    const { port1, port2 } = new MessageChannel()</span>
<span class="line">    port2.onmessage = ev =&gt; resolve(ev.data)</span>
<span class="line">    port1.postMessage(obj)</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">var obj = {</span>
<span class="line">  a: 1,</span>
<span class="line">  b: {</span>
<span class="line">    c: 2</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">obj.b.d = obj.b</span>
<span class="line"></span>
<span class="line">// 注意该方法是异步的</span>
<span class="line">// 可以处理 undefined 和循环引用对象</span>
<span class="line">const test = async () =&gt; {</span>
<span class="line">  const clone = await structuralClone(obj)</span>
<span class="line">  console.log(clone)</span>
<span class="line">}</span>
<span class="line">test()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然你可能想自己来实现一个深拷贝，但是其实实现一个深拷贝是很困难的，需要我们考虑好多种边界情况，比如原型链如何处理、<code>DOM</code> 如何处理等等，所以这里我们实现的深拷贝只是简易版，并且我其实更推荐使用 <code>lodash</code> 的深拷贝函数。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function deepClone(obj) {</span>
<span class="line">  function isObject(o) {</span>
<span class="line">    return (typeof o === ‘object’ || typeof o === ‘function’) &amp;&amp; o !== null</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  if (!isObject(obj)) {</span>
<span class="line">    throw new Error(‘非对象’)</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  let isArray = Array.isArray(obj)</span>
<span class="line">  let newObj = isArray ? [...obj] : { ...obj }</span>
<span class="line">  Reflect.ownKeys(newObj).forEach(key =&gt; {</span>
<span class="line">    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]</span>
<span class="line">  })</span>
<span class="line"></span>
<span class="line">  return newObj</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let obj = {</span>
<span class="line">  a: [1, 2, 3],</span>
<span class="line">  b: {</span>
<span class="line">    c: 2,</span>
<span class="line">    d: 3</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">let newObj = deepClone(obj)</span>
<span class="line">newObj.b.c = 1</span>
<span class="line">console.log(obj.b.c) // 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原型" tabindex="-1"><a class="header-anchor" href="#原型"><span>原型</span></a></h2><p>当我们创建一个对象时 <code>let obj = { age: 28 }</code>，我们可以发现能使用很多种函数，但是我们明明没有定义过它们，对于这种情况你是否有过疑惑？</p><p>当我们在浏览器中打印 <code>obj</code> 时你会发现，在 <code>obj</code> 上居然还有一个 <code>__proto__</code> 属性，那么看来之前的疑问就和这个属性有关系了。</p><p>其实每个 <code>JS</code> 对象都有 <code>__proto__</code> 属性，这个属性指向了原型。这个属性在现在来说已经不推荐直接去使用它了，这只是浏览器在早期为了让我们访问到内部属性 <code>[[prototype]]</code> 来实现的一个东西。</p><p>讲到这里好像还是没有弄明白什么是原型，接下来让我们再看看 <code>__proto__</code> 里面有什么吧。</p><p><img src="http://imgs.webxiaofan.com/15467598786701.jpg" alt=""></p><p>看到这里你应该明白了，原型也是一个对象，并且这个对象中包含了很多函数，所以我们可以得出一个结论：</p><blockquote><p>对于 <code>obj</code> 来说，可以通过 <code>__proto__</code> 找到一个原型对象，在该对象中定义了很多函数让我们来使用。</p></blockquote><p>在上面的图中我们还可以发现一个 <code>constructor</code> 属性，也就是构造函数</p><p><img src="http://imgs.webxiaofan.com/15467599943517.jpg" alt=""></p><p>打开 <code>constructor</code> 属性我们又可以发现其中还有一个 <code>prototype</code> 属性，并且这个属性对应的值和先前我们在 <code>__proto__</code> 中看到的一模一样。所以我们又可以得出一个结论：</p><blockquote><p>原型的 <code>constructor</code> 属性指向构造函数，构造函数又通过 <code>prototype</code> 属性指回原型，但是并不是所有函数都具有这个属性，<code>Function.prototype.bind()</code> 就没有这个属性。</p></blockquote><p>接下来我们再来看一张图，来帮助我们更好的理解原型和原型链</p><p><img src="http://imgs.webxiaofan.com/15467601230948.jpg" alt=""></p><p>看完这张图，我再来解释下什么是原型链吧。其实原型链就是多个对象通过 <code>__proto__</code> 的方式连接了起来。为什么 <code>obj</code> 可以访问到 <code>valueOf</code> 函数，就是因为 <code>obj</code> 通过原型链找到了 <code>valueOf</code> 函数。</p><p>总结起来就是以下几点：</p><ul><li><code>Object</code> 是所有对象的爸爸，所有对象都可以通过 <code>__proto__</code> 找到它</li><li><code>Function</code> 是所有函数的爸爸，所有函数都可以通过 <code>__proto__</code> 找到它</li><li>函数的 <code>prototype</code> 是一个对象</li><li>对象的 <code>__proto__</code> 属性指向原型， <code>__proto__</code> 将对象和原型连接起来组成了原型链</li></ul>`,148)])])}const o=s(l,[["render",d]]),t=JSON.parse('{"path":"/js/","title":"JS重点基础知识记录","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561258996000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":6,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"3362afa31a8378f478f69dba2bf690301a86f73f","time":1561258996000,"email":"1353815633@qq.com","author":"xiaofan","message":"添加日期显示在底部"},{"hash":"d482de0afa15194d8eed7c343431239379da42ba","time":1559284823000,"email":"1353815633@qq.com","author":"xiaofan","message":"基于 webpack 搭建 React 脚手架"},{"hash":"f9e93a83218ec74a2663e0dbcece0116ae7fe902","time":1548764462000,"email":"1353815633@qq.com","author":"xiaofan","message":"修改默认文章"},{"hash":"84ddaeac8e95eeae0489aef4dc1ecbf8806e5e51","time":1548635269000,"email":"1353815633@qq.com","author":"xiaofan","message":"修改部分显示标题"},{"hash":"0a7cf0618f0dfb56cf36579c80bbac93f377fbee","time":1548600771000,"email":"1353815633@qq.com","author":"xiaofan","message":"修改主页显示"},{"hash":"05952515c16fd783e7d238036d01103da9f4a787","time":1548597683000,"email":"1353815633@qq.com","author":"xiaofan","message":"博客上线"}]},"filePathRelative":"js/README.md"}');export{o as comp,t as data};
