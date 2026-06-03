import{_ as s,c as n,a,o as l}from"./app-DRFRIiL9.js";const i={};function d(c,e){return l(),n("div",null,[...e[0]||(e[0]=[a(`<h1 id="js异步相关" tabindex="-1"><a class="header-anchor" href="#js异步相关"><span>JS异步相关</span></a></h1><h2 id="并发-concurrency-和并行-parallelism-区别" tabindex="-1"><a class="header-anchor" href="#并发-concurrency-和并行-parallelism-区别"><span>并发（concurrency）和并行（parallelism）区别</span></a></h2><p>并发是宏观概念，我分别有任务 A 和任务 B，在一段时间内通过任务间的切换完成了这两个任务，这种情况就可以称之为并发。</p><p>并行是微观概念，假设 CPU 中存在两个核心，那么我就可以同时完成任务 A、B。同时完成多个任务的情况就可以称之为并行。</p><h2 id="回调函数-callback" tabindex="-1"><a class="header-anchor" href="#回调函数-callback"><span>回调函数（Callback）</span></a></h2><p>回调函数应该是大家经常使用到的，以下代码就是一个回调函数的例子：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ajax(url, () =&gt; {</span>
<span class="line">    // 处理逻辑</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是回调函数有一个致命的弱点，就是容易写出回调地狱<code>（Callback hell）</code>。假设多个请求存在依赖性，你可能就会写出如下代码：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ajax(url, () =&gt; {</span>
<span class="line">    // 处理逻辑</span>
<span class="line">    ajax(url1, () =&gt; {</span>
<span class="line">        // 处理逻辑</span>
<span class="line">        ajax(url2, () =&gt; {</span>
<span class="line">            // 处理逻辑</span>
<span class="line">        })</span>
<span class="line">    })</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码看起来不利于阅读和维护，当然，你可能会想说解决这个问题还不简单，把函数分开来写不就得了</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function firstAjax() {</span>
<span class="line">  ajax(url1, () =&gt; {</span>
<span class="line">    // 处理逻辑</span>
<span class="line">    secondAjax()</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line">function secondAjax() {</span>
<span class="line">  ajax(url2, () =&gt; {</span>
<span class="line">    // 处理逻辑</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line">ajax(url, () =&gt; {</span>
<span class="line">  // 处理逻辑</span>
<span class="line">  firstAjax()</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上的代码虽然看上去利于阅读了，但是还是没有解决根本问题。</p><p>回调地狱的根本问题就是：</p><ul><li>嵌套函数存在耦合性，一旦有所改动，就会牵一发而动全身</li><li>嵌套函数一多，就很难处理错误</li></ul><p>当然，回调函数还存在着别的几个缺点，比如不能使用 <code>try catch</code> 捕获错误，不能直接 <code>return</code>。</p><h2 id="generator" tabindex="-1"><a class="header-anchor" href="#generator"><span>Generator</span></a></h2><p><code>Generator</code> 算是 <code>ES6</code> 中难理解的概念之一了，<code>Generator</code> 最大的特点就是可以控制函数的执行。在这一小节中我们不会去讲什么是 <code>Generator</code>，而是把重点放在 <code>Generator</code> 的一些容易困惑的地方。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function *foo(x) {</span>
<span class="line">  let y = 2 * (yield (x + 1))</span>
<span class="line">  let z = yield (y / 3)</span>
<span class="line">  return (x + y + z)</span>
<span class="line">}</span>
<span class="line">let it = foo(5)</span>
<span class="line">console.log(it.next())   // =&gt; {value: 6, done: false}</span>
<span class="line">console.log(it.next(12)) // =&gt; {value: 8, done: false}</span>
<span class="line">console.log(it.next(13)) // =&gt; {value: 42, done: true}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也许会疑惑为什么会产生与你预想不同的值，接下来就让我为你逐行代码分析原因</p><ul><li>首先 Generator 函数调用和普通函数不同，它会返回一个迭代器</li><li>当执行第一次 next 时，传参会被忽略，并且函数暂停在 yield (x + 1) 处，所以返回 5 + 1 = 6</li><li>当执行第二次 next 时，传入的参数等于上一个 yield 的返回值，如果你不传参，yield 永远返回 undefined。此时 let y = 2 * 12，所以第二个 yield 等于 2 * 12 / 3 = 8</li><li>当执行第三次 next 时，传入的参数会传递给 z，所以 z = 13, x = 5, y = 24，相加等于 42</li></ul><p><code>Generator</code> 函数一般见到的不多，其实也于他有点绕有关系，并且一般会配合 <code>co</code> 库去使用。当然，我们可以通过 <code>Generator</code> 函数解决回调地狱的问题，可以把之前的回调地狱例子改写为如下代码：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function *fetch() {</span>
<span class="line">    yield ajax(url, () =&gt; {})</span>
<span class="line">    yield ajax(url1, () =&gt; {})</span>
<span class="line">    yield ajax(url2, () =&gt; {})</span>
<span class="line">}</span>
<span class="line">let it = fetch()</span>
<span class="line">let result1 = it.next()</span>
<span class="line">let result2 = it.next()</span>
<span class="line">let result3 = it.next()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise"><span>Promise</span></a></h2><p><code>Promise</code> 翻译过来就是承诺的意思，这个承诺会在未来有一个确切的答复，并且该承诺有三种状态，分别是：</p><ul><li>等待中（pending）</li><li>完成了 （resolved）</li><li>拒绝了（rejected）</li></ul><p>这个承诺一旦从等待状态变成为其他状态就永远不能更改状态了，也就是说一旦状态变为 <code>resolved</code> 后，就不能再次改变</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">new Promise((resolve, reject) =&gt; {</span>
<span class="line">  resolve(&#39;success&#39;)</span>
<span class="line">  // 无效</span>
<span class="line">  reject(&#39;reject&#39;)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们在构造 <code>Promise</code> 的时候，构造函数内部的代码是立即执行的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">new Promise((resolve, reject) =&gt; {</span>
<span class="line">  console.log(&#39;new Promise&#39;)</span>
<span class="line">  resolve(&#39;success&#39;)</span>
<span class="line">})</span>
<span class="line">console.log(&#39;finifsh&#39;)</span>
<span class="line">// new Promise -&gt; finifsh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Promise</code> 实现了链式调用，也就是说每次调用 <code>then</code> 之后返回的都是一个 <code>Promise</code>，并且是一个全新的 <code>Promise</code>，原因也是因为状态不可变。如果你在 <code>then</code> 中 使用了 <code>return</code>，那么 <code>return</code> 的值会被 <code>Promise.resolve()</code> 包装</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Promise.resolve(1)</span>
<span class="line">  .then(res =&gt; {</span>
<span class="line">    console.log(res) // =&gt; 1</span>
<span class="line">    return 2 // 包装成 Promise.resolve(2)</span>
<span class="line">  })</span>
<span class="line">  .then(res =&gt; {</span>
<span class="line">    console.log(res) // =&gt; 2</span>
<span class="line">  })</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然了，Promise 也很好地解决了回调地狱的问题，可以把之前的回调地狱例子改写为如下代码：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ajax(url)</span>
<span class="line">  .then(res =&gt; {</span>
<span class="line">      console.log(res)</span>
<span class="line">      return ajax(url1)</span>
<span class="line">  }).then(res =&gt; {</span>
<span class="line">      console.log(res)</span>
<span class="line">      return ajax(url2)</span>
<span class="line">  }).then(res =&gt; console.log(res))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面都是在讲述 <code>Promise</code> 的一些优点和特点，其实它也是存在一些缺点的，比如无法取消 <code>Promise</code>，错误需要通过回调函数捕获。</p><h2 id="async-及-await" tabindex="-1"><a class="header-anchor" href="#async-及-await"><span>async 及 await</span></a></h2><p>一个函数如果加上 <code>async</code> ，那么该函数就会返回一个 <code>Promise</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">async function test() {</span>
<span class="line">  return &quot;1&quot;</span>
<span class="line">}</span>
<span class="line">console.log(test()) // -&gt; Promise {&lt;resolved&gt;: &quot;1&quot;}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>async</code> 就是将函数返回值使用 <code>Promise.resolve()</code> 包裹了下，和 <code>then</code> 中处理返回值一样，并且 <code>await</code> 只能配套 <code>async</code> 使用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">async function test() {</span>
<span class="line">  let value = await sleep()</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>async</code> 和 <code>await</code> 可以说是异步终极解决方案了，相比直接使用 <code>Promise</code> 来说，优势在于处理 <code>then</code> 的调用链，能够更清晰准确的写出代码，毕竟写一大堆 <code>then</code> 也很恶心，并且也能优雅地解决回调地狱问题。当然也存在一些缺点，因为 <code>await</code> 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 <code>await</code> 会导致性能上的降低。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">async function test() {</span>
<span class="line">  // 以下代码没有依赖性的话，完全可以使用 Promise.all 的方式</span>
<span class="line">  // 如果有依赖性的话，其实就是解决回调地狱的例子了</span>
<span class="line">  await fetch(url)</span>
<span class="line">  await fetch(url1)</span>
<span class="line">  await fetch(url2)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面来看一个使用 <code>await</code> 的例子：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let a = 0</span>
<span class="line">let b = async () =&gt; {</span>
<span class="line">  a = a + await 10</span>
<span class="line">  console.log(&#39;2&#39;, a) // -&gt; &#39;2&#39; 10</span>
<span class="line">}</span>
<span class="line">b()</span>
<span class="line">a++</span>
<span class="line">console.log(&#39;1&#39;, a) // -&gt; &#39;1&#39; 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于以上代码你可能会有疑惑，让我来解释下原因</p><ul><li>首先函数 <code>b</code> 先执行，在执行到 <code>await 10</code> 之前变量 <code>a</code> 还是 <code>0</code>，因为 <code>await</code> 内部实现了 <code>generator</code> ，<code>generator</code> 会保留堆栈中东西，所以这时候 <code>a = 0</code> 被保存了下来</li><li>因为 await 是异步操作，后来的表达式不返回 <code>Promise</code> 的话，就会包装成 <code>Promise.reslove(返回值)</code>，然后会去执行函数外的同步代码</li><li>同步代码执行完毕后开始执行异步代码，将保存下来的值拿出来使用，这时候 <code>a = 0 + 10</code> 上述解释中提到了 <code>await</code> 内部实现了 <code>generator</code>，其实 <code>await</code> 就是 <code>generator</code> 加上 <code>Promise</code> 的语法糖，且内部实现了自动执行 <code>generator</code>。如果你熟悉 <code>co</code> 的话，其实自己就可以实现这样的语法糖。</li></ul>`,45)])])}const t=s(i,[["render",d]]),p=JSON.parse('{"path":"/js/js03.html","title":"JS异步相关","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561258996000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":3,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"3362afa31a8378f478f69dba2bf690301a86f73f","time":1561258996000,"email":"1353815633@qq.com","author":"xiaofan","message":"添加日期显示在底部"},{"hash":"d482de0afa15194d8eed7c343431239379da42ba","time":1559284823000,"email":"1353815633@qq.com","author":"xiaofan","message":"基于 webpack 搭建 React 脚手架"},{"hash":"05952515c16fd783e7d238036d01103da9f4a787","time":1548597683000,"email":"1353815633@qq.com","author":"xiaofan","message":"博客上线"}]},"filePathRelative":"js/js03.md"}');export{t as comp,p as data};
