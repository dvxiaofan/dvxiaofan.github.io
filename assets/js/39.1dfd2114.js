(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{191:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"react相关热点问题笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react相关热点问题笔记","aria-hidden":"true"}},[t._v("#")]),t._v(" React相关热点问题笔记")]),t._v(" "),s("h2",{attrs:{id:"_1-setstate是异步还是同步？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-setstate是异步还是同步？","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. setState是异步还是同步？")]),t._v(" "),s("ol",[s("li",[t._v("合成事件中是异步")]),t._v(" "),s("li",[t._v("钩子函数中是异步")]),t._v(" "),s("li",[t._v("原生事件中是同步")]),t._v(" "),s("li",[t._v("setTimeout中是同步")])]),t._v(" "),s("h2",{attrs:{id:"_2-react16-4-生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-react16-4-生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. React16.4+ 生命周期")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.ccyou.icu/20210716/image-20210409171026160.png",alt:"image-20210409171026160"}})]),t._v(" "),s("h2",{attrs:{id:"_3-useeffect-fn-和componentdidmount-有什么差异？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-useeffect-fn-和componentdidmount-有什么差异？","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. useEffect(fn, [])和componentDidMount 有什么差异？")]),t._v(" "),s("p",[s("code",[t._v("useEffect")]),t._v("会捕获"),s("code",[t._v("props")]),t._v("和"),s("code",[t._v("state")]),t._v("。所以即便在回调函数里，你拿到的还是初识的props和state。如果想得到最新的值，可以使用ref")]),t._v(" "),s("h2",{attrs:{id:"_4-hooks为什么不能放在条件判断里"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-hooks为什么不能放在条件判断里","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. hooks为什么不能放在条件判断里")]),t._v(" "),s("p",[t._v("已setState为例，在React内部，每个组件的hooks都是以链表的形式存在memoizeState属性中：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.ccyou.icu/20210716/image-20210409171523230.png",alt:"image-20210409171523230"}})]),t._v(" "),s("p",[t._v("update阶段，每次调用setState，链表就会执行next向后移动一步。如果将setState写在条件判断语句中，假设条件判断不成立，么有执行里面setState方法，会导致接下来所有的setState的取值出现偏移，从而导致异常发生。")]),t._v(" "),s("h2",{attrs:{id:"_5-fiber是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-fiber是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.  fiber是什么")]),t._v(" "),s("p",[t._v("React Filber 是一种基于浏览器的单线程调度算法。")]),t._v(" "),s("p",[t._v("React Fiber是类似 requestIdleCallback 的机制来做异步diff。但是之前数据结构不支持这样实现异步diff，浴室React实现了一个类似链表的数据结构，将原来的递归diff变成了现在的遍历diff， 这样就能做到异步可更新了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.ccyou.icu/20210716/image-20210409171924246.png",alt:"image-20210409171924246"}})]),t._v(" "),s("h2",{attrs:{id:"_6-diff算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-diff算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. diff算法")]),t._v(" "),s("p",[t._v("传统diff算法的时间复杂度是O(n^3)，这在前端render中是不可接受的。为了降低时间复杂度，React的diff算法做了一些妥协，放弃了最优解，最终将时间复杂度降到了O(n)。")]),t._v(" "),s("p",[t._v("主要妥协：")]),t._v(" "),s("ol",[s("li",[t._v("tree diff： 只对比同一层的dom节点， 忽略 dom  节点的夸层级移动")]),t._v(" "),s("li",[t._v("component diff： 如果不是同一类型组件，就会删除旧组件，创建新的组件。")]),t._v(" "),s("li",[t._v("element diff： 对于同一级的一组子节点，需要通过唯一 id 进行区分，如果么有唯一id， 一旦有插入动作，会导致插入位置之后的列表全部重新渲染。这也是为什么渲染列表时为什么要使用唯一的key")])]),t._v(" "),s("h2",{attrs:{id:"_7-调用setstate之后发生了什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-调用setstate之后发生了什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 7. 调用setState之后发生了什么")]),t._v(" "),s("ol",[s("li",[t._v("在 setState 的时候，React会为当前节点创建一个 updateQueue的更新队列")]),t._v(" "),s("li",[t._v("然后会触发 reconciliation 过程，在这个过程中，会使用名为 Fiber 的调度算法，开始生成新的Fiber 树，Fiber 算法的最大特点是可以做到异步可中断的执行。")]),t._v(" "),s("li",[t._v("然后 React Scheduler 会根据优先级高低，先执行优先级高的节点，具体是执行 doWork 方法")]),t._v(" "),s("li",[t._v("在 doWork 方法中， React会执行一遍 updateQueue 中的方法， 以获得新的节点。 然后对比新旧节点， 为老节点打上 更新、插入、替换 等tag")]),t._v(" "),s("li",[t._v("当前节点 doWork 完成后，会执行performUnitOfWork 方法获得新节点，然后再重复上面的过程。")]),t._v(" "),s("li",[t._v("当素有节点都 doWork 完成后， 会触发 commitRoot 方法， React进入commit 阶段")]),t._v(" "),s("li",[t._v("在commit阶段汇总， React会根据前面为各个节点打的tag， 一次性更新整个DOM元素")])]),t._v(" "),s("h2",{attrs:{id:"_8-为什么虚拟dom会提高性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-为什么虚拟dom会提高性能","aria-hidden":"true"}},[t._v("#")]),t._v(" 8. 为什么虚拟DOM会提高性能")]),t._v(" "),s("p",[t._v("虚拟DOM相当于在JS和真是DOM之间加了一个缓存，利用diff算法避免了没有必要的DOM操作，从而提高性能")]),t._v(" "),s("h2",{attrs:{id:"_9-错误边界是什么？有什么用？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-错误边界是什么？有什么用？","aria-hidden":"true"}},[t._v("#")]),t._v(" 9. 错误边界是什么？有什么用？")]),t._v(" "),s("p",[t._v("在React中，如果任何一个组件发生错误， 它将破坏整个组件树，导致整页白屏。这时候我们可以用错误边界优雅地降级处理这些错误")]),t._v(" "),s("p",[t._v("举例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ErrorBoundary")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("React"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("IProps"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IState"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("constructor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token parameter"}},[t._v("props")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("super")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hasError"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("getDerivedStateFromError")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hasError"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{attrs:{class:"token function"}},[t._v("componentDidCatch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token parameter"}},[t._v("error"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errorInfo")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'组件崩溃 Error: '")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'组件崩溃 Error: '")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errorInfo"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{attrs:{class:"token function"}},[t._v("render")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasError"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_10-什么是portals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-什么是portals","aria-hidden":"true"}},[t._v("#")]),t._v(" 10. 什么是Portals")]),t._v(" "),s("p",[t._v("Portal 提供了一种将子节点渲染到存在于父组件以外的DOM节点的优秀方案")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("ReactDOM"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createPortal")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container\t"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"_11-react组件间有哪些通信方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-react组件间有哪些通信方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 11. React组件间有哪些通信方式")]),t._v(" "),s("ul",[s("li",[t._v("父组件向子组件通信\n"),s("ul",[s("li",[t._v("通过props")])])]),t._v(" "),s("li",[t._v("子组件向父组件通信\n"),s("ul",[s("li",[t._v("主动调用通过props传过来的方法，并将想要传递的信息，作为参数，传递到父组件的作用域中")])])]),t._v(" "),s("li",[t._v("夸层级 通信\n"),s("ul",[s("li",[t._v("使用React自带的Context进行通信，createContext创建上下文，useContext使用上下文"),s("img",{attrs:{src:"http://img.ccyou.icu/20210716/code.png",alt:"code"}})]),t._v(" "),s("li",[t._v("使用Redux或者Mobox等状态管理库")]),t._v(" "),s("li",[t._v("使用订阅发布模式")])])])]),t._v(" "),s("h2",{attrs:{id:"_12-react父组件如何调用子组件中的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-react父组件如何调用子组件中的方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 12. React父组件如何调用子组件中的方法")]),t._v(" "),s("ol",[s("li",[t._v("如果是在方法组件中调用子组件，可以使用useRef和useImperativeHandle"),s("img",{attrs:{src:"http://img.ccyou.icu/20210716/code-8193235.png",alt:"code"}})]),t._v(" "),s("li",[t._v("如果实在类组件中调用子组件，可以使用createRef"),s("img",{attrs:{src:"http://img.ccyou.icu/20210716/code-8193492.png",alt:"code"}})])]),t._v(" "),s("h2",{attrs:{id:"_13-react有哪些优化性能的手段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-react有哪些优化性能的手段","aria-hidden":"true"}},[t._v("#")]),t._v(" 13. React有哪些优化性能的手段")]),t._v(" "),s("ul",[s("li",[t._v("类组件中的优化手段\n"),s("ul",[s("li",[t._v("使用纯组件 PureComponent 作为基类")]),t._v(" "),s("li",[t._v("使用 React.memo 高阶函数包装组件")]),t._v(" "),s("li",[t._v("使用 shouldComonentUpdate 声明周期函数来自定义渲染逻辑")])])]),t._v(" "),s("li",[t._v("方法组件中的优化手段\n"),s("ul",[s("li",[t._v("使用 useMemo")]),t._v(" "),s("li",[t._v("使用useCallBack")])])]),t._v(" "),s("li",[t._v("其他方式\n"),s("ul",[s("li",[t._v("在列表需要频繁变动时，使用唯一 id 作为 key， 而不是数组下标")]),t._v(" "),s("li",[t._v("必要时通过改变 CSS 样式隐藏显示组件，而不是通过条件判断显示隐藏组件。")]),t._v(" "),s("li",[t._v("使用 Suspense 和 lazy 进行懒加载，例如："),s("img",{attrs:{src:"http://img.ccyou.icu/20210716/code-8194072.png",alt:"code"}})])])])]),t._v(" "),s("h2",{attrs:{id:"_14-为什么react元素有一个-typeof属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-为什么react元素有一个-typeof属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 14. 为什么React元素有一个 $$typeof属性")]),t._v(" "),s("p",[t._v("为了防止XSS攻击，因为 Synbol 无法被序列化，所以React可以通过有没有这个属性来判断当前的 element 对象是从数据库来的还是自己生成的。")]),t._v(" "),s("p",[t._v("如果没有这个属性， React 会拒绝处理该元素")]),t._v(" "),s("h2",{attrs:{id:"_15-react如何区分-class组件-和-function组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-react如何区分-class组件-和-function组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 15. React如何区分  Class组件 和 FUnction组件")]),t._v(" "),s("p",[t._v("一般的方式是借助 typeof 和 Function。prototype。toString 来判断当前是不是class，但存在弊端，因为如果使用了babel 等编译工具，会将clas 写法全部转换为function  写法， 判断就回失效")]),t._v(" "),s("p",[t._v("React 区分 Class 组件 和 Function 组件的方式很巧妙，由于素有的类组件都要继承 React.Component， 所以只要判断原型链上是否有 React.Component 就可以了。")]),t._v(" "),s("h2",{attrs:{id:"_16-html-和-react-事件处理有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-html-和-react-事件处理有什么区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 16. HTML 和 React 事件处理有什么区别")]),t._v(" "),s("p",[t._v("在HTML中事件名必须小写： "),s("code",[t._v("<button onclick='activateLasers()'>")])]),t._v(" "),s("p",[t._v("而在React中药遵循驼峰写法： "),s("code",[t._v("<button onClick={activateLasers}>")])]),t._v(" "),s("p",[t._v("在HTML中阻止默认的行为可以使用返回 false")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'#'")]),t._v(" onclick"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'console.log(\"The link was clicked.\"); return false;'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("而在React中必须明确调用 "),s("code",[t._v("preventDefault")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("handleClick")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token parameter"}},[t._v("event")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("preventDefault")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'The link was clicked.'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_17-什么是-suspense-组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-什么是-suspense-组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 17. 什么是 suspense 组件")]),t._v(" "),s("p",[t._v("Suspense 让组件 “等待” 某个异步操作，直到该异步操作结束后才可渲染；")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.ccyou.icu/20210716/image-20210412113232908.png",alt:"image-20210412113232908"}})]),t._v(" "),s("p",[t._v("Suspense 也可以用于懒加载")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.ccyou.icu/20210716/image-20210412113412174.png",alt:"image-20210412113412174"}})]),t._v(" "),s("h2",{attrs:{id:"_18-为什么-jsx-中组件名要以大写字母开头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18-为什么-jsx-中组件名要以大写字母开头","aria-hidden":"true"}},[t._v("#")]),t._v(" 18. 为什么 JSX 中组件名要以大写字母开头")]),t._v(" "),s("p",[t._v("因为React要知道当前渲染的是组件还是HTML元素")]),t._v(" "),s("h2",{attrs:{id:"_19-redux是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_19-redux是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 19. redux是什么")]),t._v(" "),s("p",[t._v("Redux 是一个为JavaScript应用设计的，可预测的状态容器。")]),t._v(" "),s("p",[t._v("解决的问题：")]),t._v(" "),s("ul",[s("li",[t._v("跨层级之间传递数据变得容易")]),t._v(" "),s("li",[t._v("所有对状态的改变都需要dispatch，使得整个数据的改变可追踪")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("概念偏多，理解起来不容易")]),t._v(" "),s("li",[t._v("样板代码太多")])]),t._v(" "),s("h2",{attrs:{id:"_20-react-redux-的实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20-react-redux-的实现原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 20. react-redux 的实现原理")]),t._v(" "),s("p",[t._v("通过redux 和 react context 配合使用，并借助高阶函数， 实现了 react-redux")]),t._v(" "),s("h2",{attrs:{id:"_21-redux-和-mobx-的却别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_21-redux-和-mobx-的却别","aria-hidden":"true"}},[t._v("#")]),t._v(" 21. Redux 和 mobx 的却别")]),t._v(" "),s("p",[t._v("得益于 mobx 的 observable， 会用mobx可以做到精准更新， 对应的Redux 是用dispatch 进行广播，通过Provider 和connect 来对比前后差别控制更新粒度")])])}],!1,null,null,null);a.default=e.exports}}]);