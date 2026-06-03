import{_ as s,c as n,a,o as l}from"./app-DRFRIiL9.js";const i={};function c(d,e){return l(),n("div",null,[...e[0]||(e[0]=[a(`<h1 id="手写promise" tabindex="-1"><a class="header-anchor" href="#手写promise"><span>手写Promise</span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为更好的理解， 推荐阅读<a href="https://link.juejin.im/?target=http%3A%2F%2Fwww.ituring.com.cn%2Farticle%2F66566" target="_blank" rel="noopener noreferrer">Promise/A+ 规范</a> :::</p><h2 id="实现一个简易版-promise" tabindex="-1"><a class="header-anchor" href="#实现一个简易版-promise"><span>实现一个简易版 Promise</span></a></h2><p>在完成符合 <code>Promise/A+</code> 规范的代码之前，我们可以先来实现一个简易版 <code>Promise</code>，因为在面试中，如果你能实现出一个简易版的 <code>Promise</code> 基本可以过关了。</p><p>那么我们先来搭建构建函数的大体框架</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const PENDING = &#39;pending&#39;</span>
<span class="line">const RESOLVED = &#39;resolved&#39;</span>
<span class="line">const REJECTED = &#39;rejected&#39;</span>
<span class="line"></span>
<span class="line">function MyPromise(fn) {</span>
<span class="line">  const that = this</span>
<span class="line">  that.state = PENDING</span>
<span class="line">  that.value = null</span>
<span class="line">  that.resolvedCallbacks = []</span>
<span class="line">  that.rejectedCallbacks = []</span>
<span class="line">  // 待完善 resolve 和 reject 函数</span>
<span class="line">  // 待完善执行 fn 函数</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>首先我们创建了三个常量用于表示状态，对于经常使用的一些值都应该通过常量来管理，便于开发及后期维护</li><li>在函数体内部首先创建了常量 <code>that</code>，因为代码可能会异步执行，用于获取正确的 <code>this</code> 对象</li><li>一开始 <code>Promise</code> 的状态应该是 <code>pending</code></li><li><code>value</code> 变量用于保存 <code>resolve</code> 或者 <code>reject</code> 中传入的值</li><li><code>resolvedCallbacks</code> 和 <code>rejectedCallbacks</code> 用于保存 <code>then</code> 中的回调，因为当执行完 <code>Promise</code> 时状态可能还是等待中，这时候应该把 <code>then</code> 中的回调保存起来用于状态改变时使用</li></ul><p>接下来我们来完善 resolve 和 reject 函数，添加在 MyPromise 函数体内部</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function resolve(value) {</span>
<span class="line">  if (that.state === PENDING) {</span>
<span class="line">    that.state = RESOLVED</span>
<span class="line">    that.value = value</span>
<span class="line">    that.resolvedCallbacks.map(cb =&gt; cb(that.value))</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function reject(value) {</span>
<span class="line">  if (that.state === PENDING) {</span>
<span class="line">    that.state = REJECTED</span>
<span class="line">    that.value = value</span>
<span class="line">    that.rejectedCallbacks.map(cb =&gt; cb(that.value))</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个函数代码类似，就一起解析了</p><ul><li>首先两个函数都得判断当前状态是否为等待中，因为规范规定只有等待态才可以改变状态</li><li>将当前状态更改为对应状态，并且将传入的值赋值给 <code>value</code></li><li>遍历回调数组并执行</li></ul><p>完成以上两个函数以后，我们就该实现如何执行 <code>Promise</code> 中传入的函数了</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">try {</span>
<span class="line">  fn(resolve, reject)</span>
<span class="line">} catch (e) {</span>
<span class="line">  reject(e)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实现很简单，执行传入的参数并且将之前两个函数当做参数传进去</li><li>要注意的是，可能执行函数过程中会遇到错误，需要捕获错误并且执行 <code>reject</code> 函数</li></ul><p>最后我们来实现较为复杂的 <code>then</code> 函数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">MyPromise.prototype.then = function(onFulfilled, onRejected) {</span>
<span class="line">  const that = this</span>
<span class="line">  onFulfilled = typeof onFulfilled === &#39;function&#39; ? onFulfilled : v =&gt; v</span>
<span class="line">  onRejected =</span>
<span class="line">    typeof onRejected === &#39;function&#39;</span>
<span class="line">      ? onRejected</span>
<span class="line">      : r =&gt; {</span>
<span class="line">          throw r</span>
<span class="line">        }</span>
<span class="line">  if (that.state === PENDING) {</span>
<span class="line">    that.resolvedCallbacks.push(onFulfilled)</span>
<span class="line">    that.rejectedCallbacks.push(onRejected)</span>
<span class="line">  }</span>
<span class="line">  if (that.state === RESOLVED) {</span>
<span class="line">    onFulfilled(that.value)</span>
<span class="line">  }</span>
<span class="line">  if (that.state === REJECTED) {</span>
<span class="line">    onRejected(that.value)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>首先判断两个参数是否为函数类型，因为这两个参数是可选参数</p></li><li><p>当参数不是函数类型时，需要创建一个函数赋值给对应的参数，同时也实现了透传，比如如下代码</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 该代码目前在简单版中会报错</span>
<span class="line">// 只是作为一个透传的例子</span>
<span class="line">Promise.resolve(4).then().then((value) =&gt; console.log(value))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>接下来就是一系列判断状态的逻辑，当状态不是等待态时，就去执行相对应的函数。如果状态是等待态的话，就往回调函数中 <code>push</code> 函数，比如如下代码就会进入等待态的逻辑</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">new MyPromise((resolve, reject) =&gt; {</span>
<span class="line">  setTimeout(() =&gt; {</span>
<span class="line">    resolve(1)</span>
<span class="line">  }, 0)</span>
<span class="line">}).then(value =&gt; {</span>
<span class="line">  console.log(value)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是简单版 <code>Promise</code> 实现</p><h2 id="实现一个符合-promise-a-规范的-promise" tabindex="-1"><a class="header-anchor" href="#实现一个符合-promise-a-规范的-promise"><span>实现一个符合 Promise/A+ 规范的 Promise</span></a></h2><blockquote><p>接下来大部分代码都是根据规范去实现的。</p></blockquote><p>我们先来改造一下 <code>resolve</code> 和 <code>reject</code> 函数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function resolve(value) {</span>
<span class="line">  if (value instanceof MyPromise) {</span>
<span class="line">    return value.then(resolve, reject)</span>
<span class="line">  }</span>
<span class="line">  setTimeout(() =&gt; {</span>
<span class="line">    if (that.state === PENDING) {</span>
<span class="line">      that.state = RESOLVED</span>
<span class="line">      that.value = value</span>
<span class="line">      that.resolvedCallbacks.map(cb =&gt; cb(that.value))</span>
<span class="line">    }</span>
<span class="line">  }, 0)</span>
<span class="line">}</span>
<span class="line">function reject(value) {</span>
<span class="line">  setTimeout(() =&gt; {</span>
<span class="line">    if (that.state === PENDING) {</span>
<span class="line">      that.state = REJECTED</span>
<span class="line">      that.value = value</span>
<span class="line">      that.rejectedCallbacks.map(cb =&gt; cb(that.value))</span>
<span class="line">    }</span>
<span class="line">  }, 0)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于 <code>resolve</code> 函数来说，首先需要判断传入的值是否为 <code>Promise</code> 类型</li><li>为了保证函数执行顺序，需要将两个函数体代码使用 <code>setTimeout</code> 包裹起来</li></ul><p>接下来继续改造 <code>then</code> 函数中的代码，首先我们需要新增一个变量 <code>promise2</code>，因为每个 <code>then</code> 函数都需要返回一个新的 <code>Promise</code> 对象，该变量用于保存新的返回对象，然后我们先来改造判断等待态的逻辑</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">if (that.state === PENDING) {</span>
<span class="line">  return (promise2 = new MyPromise((resolve, reject) =&gt; {</span>
<span class="line">    that.resolvedCallbacks.push(() =&gt; {</span>
<span class="line">      try {</span>
<span class="line">        const x = onFulfilled(that.value)</span>
<span class="line">        resolutionProcedure(promise2, x, resolve, reject)</span>
<span class="line">      } catch (r) {</span>
<span class="line">        reject(r)</span>
<span class="line">      }</span>
<span class="line">    })</span>
<span class="line"></span>
<span class="line">    that.rejectedCallbacks.push(() =&gt; {</span>
<span class="line">      try {</span>
<span class="line">        const x = onRejected(that.value)</span>
<span class="line">        resolutionProcedure(promise2, x, resolve, reject)</span>
<span class="line">      } catch (r) {</span>
<span class="line">        reject(r)</span>
<span class="line">      }</span>
<span class="line">    })</span>
<span class="line">  }))</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>首先我们返回了一个新的 <code>Promise</code> 对象，并在 <code>Promise</code> 中传入了一个函数</li><li>函数的基本逻辑还是和之前一样，往回调数组中 <code>push</code> 函数</li><li>同样，在执行函数的过程中可能会遇到错误，所以使用了 <code>try...catch</code> 包裹</li><li>规范规定，执行 <code>onFulfilled</code> 或者 <code>onRejected</code> 函数时会返回一个 x，并且执行 <code>Promise</code> 解决过程，这是为了不同的 <code>Promise</code> 都可以兼容使用，比如 <code>JQuery</code> 的 <code>Promise</code> 能兼容 <code>ES6</code> 的 <code>Promise</code></li></ul><p>接下来我们改造判断执行态的逻辑</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">if (that.state === RESOLVED) {</span>
<span class="line">  return (promise2 = new MyPromise((resolve, reject) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      try {</span>
<span class="line">        const x = onFulfilled(that.value)</span>
<span class="line">        resolutionProcedure(promise2, x, resolve, reject)</span>
<span class="line">      } catch (reason) {</span>
<span class="line">        reject(reason)</span>
<span class="line">      }</span>
<span class="line">    })</span>
<span class="line">  }))</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>其实大家可以发现这段代码和判断等待态的逻辑基本一致，无非是传入的函数的函数体需要异步执行，这也是规范规定的</li><li>对于判断拒绝态的逻辑这里就不一一赘述了，留给大家自己完成这个作业</li></ul><p>最后，当然也是最难的一部分，也就是实现兼容多种 <code>Promise</code> 的 <code>resolutionProcedure</code> 函数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function resolutionProcedure(promise2, x, resolve, reject) {</span>
<span class="line">  if (promise2 === x) {</span>
<span class="line">    return reject(new TypeError(&#39;Error&#39;))</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先规范规定了 <code>x</code> 不能与 <code>promise2</code> 相等，这样会发生循环引用的问题，比如如下代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let p = new MyPromise((resolve, reject) =&gt; {</span>
<span class="line">  resolve(1)</span>
<span class="line">})</span>
<span class="line">let p1 = p.then(value =&gt; {</span>
<span class="line">  return p1</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后需要判断 <code>x</code> 的类型</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">if (x instanceof MyPromise) {</span>
<span class="line">    x.then(function(value) {</span>
<span class="line">        resolutionProcedure(promise2, value, resolve, reject)</span>
<span class="line">    }, reject)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的代码是完全按照规范实现的。如果 <code>x</code> 为 <code>Promise</code> 的话，需要判断以下几个情况：</p><ol><li>如果 x 处于等待态，Promise 需保持为等待态直至 x 被执行或拒绝</li><li>如果 x 处于其他状态，则用相同的值处理 Promise</li></ol><p>当然以上这些是规范需要我们判断的情况，实际上我们不判断状态也是可行的。</p><p>接下来我们继续按照规范来实现剩余的代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let called = false</span>
<span class="line">if (x !== null &amp;&amp; (typeof x === &#39;object&#39; || typeof x === &#39;function&#39;)) {</span>
<span class="line">  try {</span>
<span class="line">    let then = x.then</span>
<span class="line">    if (typeof then === &#39;function&#39;) {</span>
<span class="line">      then.call(</span>
<span class="line">        x,</span>
<span class="line">        y =&gt; {</span>
<span class="line">          if (called) return</span>
<span class="line">          called = true</span>
<span class="line">          resolutionProcedure(promise2, y, resolve, reject)</span>
<span class="line">        },</span>
<span class="line">        e =&gt; {</span>
<span class="line">          if (called) return</span>
<span class="line">          called = true</span>
<span class="line">          reject(e)</span>
<span class="line">        }</span>
<span class="line">      )</span>
<span class="line">    } else {</span>
<span class="line">      resolve(x)</span>
<span class="line">    }</span>
<span class="line">  } catch (e) {</span>
<span class="line">    if (called) return</span>
<span class="line">    called = true</span>
<span class="line">    reject(e)</span>
<span class="line">  }</span>
<span class="line">} else {</span>
<span class="line">  resolve(x)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>首先创建一个变量 <code>called</code> 用于判断是否已经调用过函数</li><li>然后判断 x 是否为对象或者函数，如果都不是的话，将 x 传入 <code>resolve</code> 中</li><li>如果 x 是对象或者函数的话，先把 <code>x.then</code> 赋值给 <code>then</code>，然后判断 <code>then</code> 的类型，如果不是函数类型的话，就将 x 传入 <code>resolve</code> 中</li><li>如果 <code>then</code> 是函数类型的话，就将 x 作为函数的作用域 this 调用之，并且传递两个回调函数作为参数，第一个参数叫做 <code>resolvePromise</code> ，第二个参数叫做 <code>rejectPromise</code>，两个回调函数都需要判断是否已经执行过函数，然后进行相应的逻辑</li><li>以上代码在执行的过程中如果抛错了，将错误传入 <code>reject</code> 函数中</li></ul><p>以上就是符合 <code>Promise/A+</code> 规范的实现</p></div>`,2)])])}const t=s(i,[["render",c]]),p=JSON.parse('{"path":"/js/js04.html","title":"手写Promise","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561258996000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":3,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"3362afa31a8378f478f69dba2bf690301a86f73f","time":1561258996000,"email":"1353815633@qq.com","author":"xiaofan","message":"添加日期显示在底部"},{"hash":"d482de0afa15194d8eed7c343431239379da42ba","time":1559284823000,"email":"1353815633@qq.com","author":"xiaofan","message":"基于 webpack 搭建 React 脚手架"},{"hash":"05952515c16fd783e7d238036d01103da9f4a787","time":1548597683000,"email":"1353815633@qq.com","author":"xiaofan","message":"博客上线"}]},"filePathRelative":"js/js04.md"}');export{t as comp,p as data};
