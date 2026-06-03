import{_ as s,c as a,a as e,o as i}from"./app-DRFRIiL9.js";const l={};function d(c,n){return i(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="javascript-作用域是什么" tabindex="-1"><a class="header-anchor" href="#javascript-作用域是什么"><span>JavaScript-作用域是什么</span></a></h1><h2 id="理解作用域" tabindex="-1"><a class="header-anchor" href="#理解作用域"><span>理解作用域</span></a></h2><ul><li>引擎 <ul><li>从头到尾负责整个JavaScript程序的编译和执行过程</li></ul></li><li>编译器 <ul><li>负责语法分析及代码生成</li></ul></li><li>作用域 <ul><li>负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符有访问权限。</li></ul></li></ul><p><img src="http://imgs.devzhangjs.com/15522056452246.jpg" alt=""></p><h2 id="作用域嵌套" tabindex="-1"><a class="header-anchor" href="#作用域嵌套"><span>作用域嵌套</span></a></h2><p>当一个块或者函数嵌套在另一个函数或函数中时，就发生了作用域嵌套。</p><p>遍历嵌套作用域规则：引擎从当前的执行作用域开始查找变量，如果找不到，就向上一级继续查找。直到抵达最外层的全局作用域， 无论找到还是没找到，查找过程都会停止。</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3><p>作用域是一套规则，用于确定在何处以及如何查找变量（标志符）。 如果查找目的是对变量进行赋值，就是执行LHS查询 如果查找目的是获取变量的值，就是执行RHS查询</p><h2 id="词法作用域" tabindex="-1"><a class="header-anchor" href="#词法作用域"><span>词法作用域</span></a></h2><p>作用域主要两种工作模式：词法作用域和动态作用域</p><h3 id="词法阶段" tabindex="-1"><a class="header-anchor" href="#词法阶段"><span>词法阶段</span></a></h3><ul><li>大部分标准语言编译器的第一个工作阶段叫做词法化（也叫单词化）。</li><li>简单的说， 词法作用域就是定义在词法阶段的作用域。换句话说，词法作用域是由你在写代码的时候将变量和块作用域写在哪里来决定的，因此当词法分析器处理代码时会保持作用域不变。</li><li>作用域查找会在找到第一个匹配的标识符时停止。在多层的嵌套作用域中可以定义同名的标识符，叫做“遮蔽效应”</li><li>作用域查找始终是从运行时所处的最内部作用域开始，逐级向外或者向上查找， 知道遇见第一个匹配的标识符为止。</li><li>全局变量会自动成为全局对象（例如浏览器中的window对象）的属性，因此可以不直接通过全局对象的词法名称， 而是间接的通过对全局对象属性的引用来对其进行访问。 例如<code>window.a</code>。通过这种技术可以访问那些被同名变量锁遮蔽的全局变量。但非全局变量如果被遮蔽了，无论如何都无法被访问到。</li><li>无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。</li></ul><h3 id="小结-1" tabindex="-1"><a class="header-anchor" href="#小结-1"><span>小结</span></a></h3><p>词法作用域意味着作用域是由代码书写时候函数声明的位置来决定的。</p><h2 id="函数作用域和块作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域和块作用域"><span>函数作用域和块作用域</span></a></h2><h3 id="函数中的作用域" tabindex="-1"><a class="header-anchor" href="#函数中的作用域"><span>函数中的作用域</span></a></h3><p>函数作用域是指，属于这个函数的全部变量都可以在整个函数的范围内使用以及复用（事实上在嵌套的作用域中也可以使用）。</p><h3 id="隐藏内部实现" tabindex="-1"><a class="header-anchor" href="#隐藏内部实现"><span>隐藏内部实现</span></a></h3><p>不应该这样：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function doSomething(a) {</span>
<span class="line"> b = a + doSomethingElse(a * 2);</span>
<span class="line"></span>
<span class="line"> console.log(b * 3);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function doSomethingElse(a) {</span>
<span class="line"> return a - 1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">var b;</span>
<span class="line"></span>
<span class="line">doSomething(2);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而是应该这样， 隐藏变量：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function doSomething(a) {</span>
<span class="line"> function doSomethingElse(a) {</span>
<span class="line">   return a - 1;</span>
<span class="line"> }</span>
<span class="line"> var b;</span>
<span class="line"></span>
<span class="line"> b = a + doSomethingElse(a * 2);</span>
<span class="line"></span>
<span class="line"> console.log(b * 3);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">doSomething(2);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="规避冲突" tabindex="-1"><a class="header-anchor" href="#规避冲突"><span>规避冲突</span></a></h4><p>“隐藏”作用域中的变量和函数所带来的另一个好处，是可以避免同名标识符之间的冲突，两个标识符可能具有相同的名字但是用途却不一样，无意间可能造成命名冲突。 冲突会导致变量的值被意外覆盖。</p><h3 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域"><span>函数作用域</span></a></h3><h4 id="匿名和具名" tabindex="-1"><a class="header-anchor" href="#匿名和具名"><span>匿名和具名</span></a></h4><p>例如如下函数：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">setTimeout(function() {</span>
<span class="line"> console.log(&#39;I waited 1 second&#39;);</span>
<span class="line"> </span>
<span class="line">}, 1000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这叫做匿名函数表达式。 匿名函数表达式书写起来简单快捷，但是有几个缺点：</p><ol><li>匿名函数在栈追踪中不会显示出有意义的函数名，使得调试很困难</li><li>如果没有函数名，当函数需要引用自身时只能使用已经过期的<code>arguments.callee</code>引用。</li><li>匿名函数省略了对于代码可读性/可理解性很重要的函数名。</li></ol><p>行内函数表达式非常强大且有用----匿名和具名之间的区别并不会对这一点有任何影响。给函数表达式指定一个函数名可以有效解决以上问题。所以，最好始终给函数表达式命名。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">setTimeout(function timeoutHandler() { // 有名字了</span>
<span class="line">  console.log(&#39;I waited 1 second&#39;);</span>
<span class="line">  </span>
<span class="line">}, 1000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="立即执行函数表达式" tabindex="-1"><a class="header-anchor" href="#立即执行函数表达式"><span>立即执行函数表达式</span></a></h4><p><code>(function(){})()</code> 和 <code>(function(){}())</code></p><h2 id="提升" tabindex="-1"><a class="header-anchor" href="#提升"><span>提升</span></a></h2><ul><li>函数会首先别提升，然后才是变量。</li><li>出现在后面的函数声明还是可以覆盖前面的。</li><li>一个普通块内部的函数声明通常会被提升到所在作用域的顶部。</li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><ul><li>所有的声明（变量和函数）都会被“移动”到各自作用域的最顶端， 这个过程被称为 提升。</li><li>声明本身会被提升，而包含函数表达式的赋值在内的赋值操作并不会被提升。</li><li>要注意避免重复声明，特别是当普通的var声明和函数声明混合在一起的时候， 否则会引起很多危险的问题。</li></ul><h2 id="作用域闭包" tabindex="-1"><a class="header-anchor" href="#作用域闭包"><span>作用域闭包</span></a></h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><p>当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在所在词法作用域以外被执行，这个引用，就叫做闭包。</p><ul><li>无论通过何种手段将内部函数传递到所在词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包</li><li>本质上讲，无论何时何地，如果将函数当作第一级的值类型并到处传递，你就会看到闭包在这些函数中的应用。</li><li>例如在一些定时器、事件监听器、Ajax请求等，只要使用了回调函数，实际上就是在使用闭包</li></ul><h3 id="循环和闭包" tabindex="-1"><a class="header-anchor" href="#循环和闭包"><span>循环和闭包</span></a></h3><ul><li>let声明可以用来劫持块作用域，并且在这个作用域中声明一个变量。</li><li>for循环头部的let声明还会有一个特殊的行为。这个行为指出变量在循环过程中不止被声明一次，每次迭代都会声明。随后每个迭代都会使用上一个迭代结束时的值来初始化这个变量。</li></ul><h3 id="模块" tabindex="-1"><a class="header-anchor" href="#模块"><span>模块</span></a></h3><p>模块模式需要具备两个必要条件：</p><ol><li>必须有外部的封闭函数，该函数必须至少别调用一次（每次调用都会创建一个新的模块实例）</li><li>封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有得状态。</li></ol><p>一个具有函数属性的对系那个本身并不是真正的模块。从方便观察的角度看，一个从函数调用锁返回的，只有数据属性而没有闭包函数得对象并不是真正的模块。</p><h3 id="现代的模块机制" tabindex="-1"><a class="header-anchor" href="#现代的模块机制"><span>现代的模块机制</span></a></h3><p>大多数模块依赖加载器/管理器本质上都是将这种模块定义封装进一个友好的API。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">var MyModules = (function Manager() {</span>
<span class="line">  var modules = {};</span>
<span class="line"></span>
<span class="line">  function define(name, deps, impl) {</span>
<span class="line">    for (var i = 0; i &lt; deps.length; i++) {</span>
<span class="line">      deps[i] = modules[deps[i]];</span>
<span class="line">    }</span>
<span class="line">    modules[name] = impl.apply(impl, deps);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function get(name) {</span>
<span class="line">    return modules[name];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  return {</span>
<span class="line">    define: define,</span>
<span class="line">    get: get</span>
<span class="line">  };</span>
<span class="line">})();</span>
<span class="line"></span>
<span class="line">MyModules.define(&#39;bar&#39;, [], function() {</span>
<span class="line">  function hello(who) {</span>
<span class="line">    return &#39;let me introduce: &#39; + who;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  return {</span>
<span class="line">    hello: hello</span>
<span class="line">  };</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">MyModules.define(&#39;foo&#39;, [&#39;bar&#39;], function(bar) {</span>
<span class="line">  var hungry = &#39;xiaofan&#39;;</span>
<span class="line"></span>
<span class="line">  function awesome() {</span>
<span class="line">    console.log(bar.hello(hungry).toUpperCase());</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  return {</span>
<span class="line">    awesome: awesome</span>
<span class="line">  };</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">var bar = MyModules.get(&#39;bar&#39;);</span>
<span class="line">var foo = MyModules.get(&#39;foo&#39;);</span>
<span class="line"></span>
<span class="line">console.log(bar.hello(&#39;xiaofan&#39;));</span>
<span class="line"></span>
<span class="line">foo.awesome();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>foo</code>和<code>bar</code>模块都是通过一个返回公共API的函数来定义的。foo甚至接受bar的实例作为依赖参数，并能响相应的使用它。</p><h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span>总结</span></a></h3><p>当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域以外执行，这时就产生了闭包。</p><p>模块有两个主要特征：</p><ol><li>为创建内部作用域而调用了一个包装函数</li><li>包装函数的返回值必须包含至少一个对内部函数的引用，这样就会创建涵盖整个包装函数内部作用域的闭包</li></ol>`,57)])])}const r=s(l,[["render",d]]),v=JSON.parse('{"path":"/js/js06.html","title":"JavaScript-作用域是什么","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561258996000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":4,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"3362afa31a8378f478f69dba2bf690301a86f73f","time":1561258996000,"email":"1353815633@qq.com","author":"xiaofan","message":"添加日期显示在底部"},{"hash":"d482de0afa15194d8eed7c343431239379da42ba","time":1559284823000,"email":"1353815633@qq.com","author":"xiaofan","message":"基于 webpack 搭建 React 脚手架"},{"hash":"b27bf1126df9be0d5ea97cf88ed6c0250b4637e2","time":1552214392000,"email":"1353815633@qq.com","author":"xiaofan","message":"修复文章问题"},{"hash":"defb0539358e7341d562560f839f933a3660d55b","time":1552210993000,"email":"1353815633@qq.com","author":"xiaofan","message":"JavaScript-作用域是什么"}]},"filePathRelative":"js/js06.md"}');export{r as comp,v as data};
