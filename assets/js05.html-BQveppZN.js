import{_ as s,c as n,a,o as i}from"./app-DRFRIiL9.js";const l={};function c(d,e){return i(),n("div",null,[...e[0]||(e[0]=[a(`<h1 id="event-loop" tabindex="-1"><a class="header-anchor" href="#event-loop"><span>Event Loop</span></a></h1><h2 id="进程与线程" tabindex="-1"><a class="header-anchor" href="#进程与线程"><span>进程与线程</span></a></h2><p>相信大家经常会听到 JS 是单线程执行的，但是你是否疑惑过什么是线程？</p><p>讲到线程，那么肯定也得说一下进程。本质上来说，两个名词都是 CPU 工作时间片的一个描述。</p><p>进程描述了 CPU 在运行指令及加载和保存上下文所需的时间，放在应用上来说就代表了一个程序。线程是进程中的更小单位，描述了执行一段指令所需的时间。</p><p>把这些概念拿到浏览器中来说，当你打开一个 Tab 页时，其实就是创建了一个进程，一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等。当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。</p><p>上文说到了 JS 引擎线程和渲染线程，大家应该都知道，在 JS 运行的时候可能会阻止 UI 渲染，这说明了两个线程是互斥的。这其中的原因是因为 JS 可以修改 DOM，如果在 JS 执行的时候 UI 线程还在工作，就可能导致不能安全的渲染 UI。这其实也是一个单线程的好处，得益于 JS 是单线程运行的，可以达到节省内存，节约上下文切换时间，没有锁的问题的好处。当然前面两点在服务端中更容易体现，对于锁的问题，形象的来说就是当我读取一个数字 15 的时候，同时有两个操作对数字进行了加减，这时候结果就出现了错误。解决这个问题也不难，只需要在读取的时候加锁，直到读取完毕之前都不能进行写入操作。</p><h2 id="执行栈" tabindex="-1"><a class="header-anchor" href="#执行栈"><span>执行栈</span></a></h2><p>可以把执行栈认为是一个存储函数调用的<strong>栈结构</strong>，遵循先进后出的原则</p><p><img src="https://user-gold-cdn.xitu.io/2018/11/13/1670d2d20ead32ec?imageslim" alt="执行栈可视化"></p><p>当开始执行 JS 代码时，首先会执行一个 main 函数，然后执行我们的代码。根据先进后出的原则，后执行的函数会先弹出栈，在图中我们也可以发现，foo 函数后执行，当执行完毕后就从栈中弹出了。</p><p>平时在开发中，大家也可以在报错中找到执行栈的痕迹</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function foo() {</span>
<span class="line">  throw new Error(&#39;error&#39;)</span>
<span class="line">}</span>
<span class="line">function bar() {</span>
<span class="line">  foo()</span>
<span class="line">}</span>
<span class="line">bar()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://imgs.webxiaofan.com/15470421882329.jpg" alt=""></p><p>大家可以在上图清晰的看到报错在 <code>foo</code> 函数，<code>foo</code> 函数又是在 bar 函数中调用的。</p><p>当我们使用递归的时候，因为栈可存放的函数是有限制的，一旦存放了过多的函数且没有得到释放的话，就会出现爆栈的问题</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function bar() {</span>
<span class="line">  bar()</span>
<span class="line">}</span>
<span class="line">bar()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://imgs.webxiaofan.com/15470422917943.jpg" alt=""></p><h2 id="浏览器中的-event-loop" tabindex="-1"><a class="header-anchor" href="#浏览器中的-event-loop"><span>浏览器中的 Event Loop</span></a></h2><p>当遇到异步的代码时，会被挂起并在需要执行的时候加入到 <code>Task</code>（有多种 Task） 队列中。一旦执行栈为空，<code>Event Loop</code> 就会从 <code>Task</code> 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 <code>JS</code> 中的异步还是同步行为。</p><p><img src="http://imgs.webxiaofan.com/15470423866945.jpg" alt=""></p><p>不同的任务源会被分配到不同的 <code>Task</code> 队列中，任务源可以分为 微任务<code>（microtask）</code> 和 宏任务<code>（macrotask）</code>。在 <code>ES6</code> 规范中，<code>microtask</code> 称为 <code>jobs</code>，<code>macrotask</code> 称为 <code>task</code>。下面来看以下代码的执行顺序：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">console.log(&#39;script start&#39;)</span>
<span class="line"></span>
<span class="line">async function async1() {</span>
<span class="line">  await async2()</span>
<span class="line">  console.log(&#39;async1 end&#39;)</span>
<span class="line">}</span>
<span class="line">async function async2() {</span>
<span class="line">  console.log(&#39;async2 end&#39;)</span>
<span class="line">}</span>
<span class="line">async1()</span>
<span class="line"></span>
<span class="line">setTimeout(function() {</span>
<span class="line">  console.log(&#39;setTimeout&#39;)</span>
<span class="line">}, 0)</span>
<span class="line"></span>
<span class="line">new Promise(resolve =&gt; {</span>
<span class="line">  console.log(&#39;Promise&#39;)</span>
<span class="line">  resolve()</span>
<span class="line">})</span>
<span class="line">  .then(function() {</span>
<span class="line">    console.log(&#39;promise1&#39;)</span>
<span class="line">  })</span>
<span class="line">  .then(function() {</span>
<span class="line">    console.log(&#39;promise2&#39;)</span>
<span class="line">  })</span>
<span class="line"></span>
<span class="line">console.log(&#39;script end&#39;)</span>
<span class="line">// script start =&gt; async2 end =&gt; Promise =&gt; script end =&gt; promise1 =&gt; promise2 =&gt; async1 end =&gt; setTimeout</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先先来解释下上述代码的 <code>async</code> 和 <code>await</code> 的执行顺序。当我们调用 <code>async1</code> 函数时，会马上输出 <code>async2 end</code>，并且函数返回一个 <code>Promise</code>，接下来在遇到 <code>await</code>的时候会就让出线程开始执行 <code>async1</code> 外的代码，所以我们完全可以把 <code>await</code> 看成是让出线程的标志。</p><p>然后当同步代码全部执行完毕以后，就会去执行所有的异步代码，那么又会回到 <code>await</code> 的位置执行返回的 <code>Promise</code> 的 <code>resolve</code> 函数，这又会把 <code>resolve</code> 丢到微任务队列中，接下来去执行 <code>then</code> 中的回调，当两个 <code>then</code> 中的回调全部执行完毕以后，又会回到 <code>await</code> 的位置处理返回值，这时候你可以看成是 <code>Promise.resolve(返回值).then()</code>，然后 <code>await</code> 后的代码全部被包裹进了 <code>then</code> 的回调中，所以 <code>console.log(&#39;async1 end&#39;)</code> 会优先执行于 <code>setTimeout</code>。</p><p>如果你觉得上面这段解释还是有点绕，那么我把 <code>async</code> 的这两个函数改造成你一定能理解的代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">new Promise((resolve, reject) =&gt; {</span>
<span class="line">  console.log(&#39;async2 end&#39;)</span>
<span class="line">  // Promise.resolve() 将代码插入微任务队列尾部</span>
<span class="line">  // resolve 再次插入微任务队列尾部</span>
<span class="line">  resolve(Promise.resolve())</span>
<span class="line">}).then(() =&gt; {</span>
<span class="line">  console.log(&#39;async1 end&#39;)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，如果 <code>await</code> 后面跟着 <code>Promise</code> 的话，<code>async1 end</code> 需要等待三个 <code>tick</code> 才能执行到。那么其实这个性能相对来说还是略慢的，所以 V8 团队借鉴了 <code>Node 8</code> 中的一个 <code>Bug</code>，在引擎底层将三次 <code>tick</code> 减少到了二次 <code>tick</code>。但是这种做法其实是违法了规范的，当然规范也是可以更改的，这是 <code>V8</code> 团队的一个 <code>PR</code>，目前已被同意这种做法。</p><p>所以 <code>Event Loop</code> 执行顺序如下所示：</p><ul><li>首先执行同步代码，这属于宏任务</li><li>当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行</li><li>执行所有微任务</li><li>当执行完所有微任务后，如有必要会渲染页面</li><li>然后开始下一轮 Event Loop，执行宏任务中的异步代码，也就是 <code>setTimeout</code> 中的回调函数</li></ul><p>所以以上代码虽然 <code>setTimeout</code> 写在 <code>Promise</code> 之前，但是因为 <code>Promise</code> 属于微任务而 <code>setTimeout</code> 属于宏任务，所以会有以上的打印。</p><p>微任务包括 <code>process.nextTick</code> ，<code>promise</code> ，<code>MutationObserver</code>。</p><p>宏任务包括 <code>script</code> ， <code>setTimeout</code> ，<code>setInterval</code> ，<code>setImhttp://imgs.webxiaofan.comte</code> ，<code>I/O</code> ，<code>UI rendering</code>。</p><p>这里很多人会有个误区，认为微任务快于宏任务，其实是错误的。因为宏任务中包括了 <code>script</code> ，浏览器会<strong>先执行一个宏任务</strong>，接下来有异步代码的话才会先执行微任务。</p><h2 id="node-中的-event-loop" tabindex="-1"><a class="header-anchor" href="#node-中的-event-loop"><span>Node 中的 Event Loop</span></a></h2><p>Node 中的 Event Loop 和浏览器中的是完全不相同的东西。</p><p>Node 的 Event Loop 分为 6 个阶段，它们会按照顺序反复运行。每当进入某一个阶段的时候，都会从对应的回调队列中取出函数去执行。当队列为空或者执行的回调函数数量到达系统设定的阈值，就会进入下一阶段。</p><p><img src="http://imgs.webxiaofan.com/15470428580464.jpg" alt=""></p><h4 id="timer" tabindex="-1"><a class="header-anchor" href="#timer"><span>timer</span></a></h4><p><code>timers</code> 阶段会执行 <code>setTimeout</code> 和 <code>setInterval</code> 回调，并且是由 <code>poll</code> 阶段控制的。</p><p>同样，在 Node 中定时器指定的时间也不是准确时间，只能是尽快执行。</p><h4 id="i-o" tabindex="-1"><a class="header-anchor" href="#i-o"><span>I/O</span></a></h4><p>I/O 阶段会处理一些上一轮循环中的少数未执行的 I/O 回调</p><h4 id="idle-prepare" tabindex="-1"><a class="header-anchor" href="#idle-prepare"><span>idle, prepare</span></a></h4><p>idle, prepare 阶段内部实现，这里就忽略不讲了。</p><h4 id="poll" tabindex="-1"><a class="header-anchor" href="#poll"><span>poll</span></a></h4><p>poll 是一个至关重要的阶段，这一阶段中，系统会做两件事情</p><ul><li>回到 timer 阶段执行回调</li><li>执行 I/O 回调</li></ul><p>并且在进入该阶段时如果没有设定了 timer 的话，会发生以下两件事情</p><ul><li><p>如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者达到系统限制</p></li><li><p>如果 poll 队列为空时，会有两件事发生</p><ul><li>如果有 setImhttp://imgs.webxiaofan.comte 回调需要执行，poll 阶段会停止并且进入到 check 阶段执行回调</li><li>如果没有 setImhttp://imgs.webxiaofan.comte 回调需要执行，会等待回调被加入到队列中并立即执行回调，这里同样会有个超时时间设置防止一直等待下去</li></ul></li></ul><p>当然设定了 timer 的话且 poll 队列为空，则会判断是否有 timer 超时，如果有的话会回到 timer 阶段执行回调。</p><h4 id="check" tabindex="-1"><a class="header-anchor" href="#check"><span>check</span></a></h4><p>check 阶段执行 <code>setImhttp://imgs.webxiaofan.comte</code></p><h4 id="close-callbacks" tabindex="-1"><a class="header-anchor" href="#close-callbacks"><span>close callbacks</span></a></h4><p>close callbacks 阶段执行 close 事件</p><p>在以上的内容中，我们了解了 Node 中的 Event Loop 的执行顺序，接下来我们将会通过代码的方式来深入理解这块内容。</p><p>首先在有些情况下，定时器的执行顺序其实是随机的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">setTimeout(() =&gt; {</span>
<span class="line">    console.log(&#39;setTimeout&#39;)</span>
<span class="line">}, 0)</span>
<span class="line">setImhttp://imgs.webxiaofan.comte(() =&gt; {</span>
<span class="line">    console.log(&#39;setImhttp://imgs.webxiaofan.comte&#39;)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于以上代码来说，<code>setTimeout</code> 可能执行在前，也可能执行在后</p><ul><li>首先 setTimeout(fn, 0) === setTimeout(fn, 1)，这是由源码决定的</li><li>进入事件循环也是需要成本的，如果在准备时候花费了大于 1ms 的时间，那么在 timer 阶段就会直接执行 setTimeout 回调</li><li>那么如果准备时间花费小于 1ms，那么就是 setImhttp://imgs.webxiaofan.comte 回调先执行了</li></ul><p>当然在某些情况下，他们的执行顺序一定是固定的，比如以下代码：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const fs = require(&#39;fs&#39;)</span>
<span class="line"></span>
<span class="line">fs.readFile(__filename, () =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">        console.log(&#39;timeout&#39;);</span>
<span class="line">    }, 0)</span>
<span class="line">    setImhttp://imgs.webxiaofan.comte(() =&gt; {</span>
<span class="line">        console.log(&#39;imhttp://imgs.webxiaofan.comte&#39;)</span>
<span class="line">    })</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，<code>setImhttp://imgs.webxiaofan.comte</code> 永远先执行。因为两个代码写在 IO 回调中，IO 回调是在 poll 阶段执行，当回调执行完毕后队列为空，发现存在 <code>setImhttp://imgs.webxiaofan.comte</code> 回调，所以就直接跳转到 <code>check</code> 阶段去执行回调了。</p><p>上面介绍的都是 <code>macrotask</code> 的执行情况，对于 <code>microtask</code> 来说，它会在以上每个阶段完成前清空 <code>microtask</code> 队列，下图中的 <code>Tick</code> 就代表了 microtask</p><p><img src="http://imgs.webxiaofan.com/15470431080962.jpg" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">setTimeout(() =&gt; {</span>
<span class="line">  console.log(&#39;timer21&#39;)</span>
<span class="line">}, 0)</span>
<span class="line"></span>
<span class="line">Promise.resolve().then(function() {</span>
<span class="line">  console.log(&#39;promise1&#39;)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于以上代码来说，其实和浏览器中的输出是一样的，<code>microtask</code> 永远执行在 macrotask 前面。</p><p>最后我们来讲讲 Node 中的 <code>process.nextTick</code>，这个函数其实是独立于 Event Loop 之外的，它有一个自己的队列，当每个阶段完成后，如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优先于其他 microtask 执行。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">setTimeout(() =&gt; {</span>
<span class="line"> console.log(&#39;timer1&#39;)</span>
<span class="line"></span>
<span class="line"> Promise.resolve().then(function() {</span>
<span class="line">   console.log(&#39;promise1&#39;)</span>
<span class="line"> })</span>
<span class="line">}, 0)</span>
<span class="line"></span>
<span class="line">process.nextTick(() =&gt; {</span>
<span class="line"> console.log(&#39;nextTick&#39;)</span>
<span class="line"> process.nextTick(() =&gt; {</span>
<span class="line">   console.log(&#39;nextTick&#39;)</span>
<span class="line">   process.nextTick(() =&gt; {</span>
<span class="line">     console.log(&#39;nextTick&#39;)</span>
<span class="line">     process.nextTick(() =&gt; {</span>
<span class="line">       console.log(&#39;nextTick&#39;)</span>
<span class="line">     })</span>
<span class="line">   })</span>
<span class="line"> })</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于以上代码，大家可以发现无论如何，永远都是先把 <code>nextTick</code> 全部打印出来。</p>`,70)])])}const p=s(l,[["render",c]]),t=JSON.parse('{"path":"/js/js05.html","title":"Event Loop","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561258996000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":3,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"3362afa31a8378f478f69dba2bf690301a86f73f","time":1561258996000,"email":"1353815633@qq.com","author":"xiaofan","message":"添加日期显示在底部"},{"hash":"d482de0afa15194d8eed7c343431239379da42ba","time":1559284823000,"email":"1353815633@qq.com","author":"xiaofan","message":"基于 webpack 搭建 React 脚手架"},{"hash":"05952515c16fd783e7d238036d01103da9f4a787","time":1548597683000,"email":"1353815633@qq.com","author":"xiaofan","message":"博客上线"}]},"filePathRelative":"js/js05.md"}');export{p as comp,t as data};
