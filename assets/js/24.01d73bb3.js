(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{176:function(a,t,e){"use strict";e.r(t);var n=e(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"javascript-作用域是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-作用域是什么","aria-hidden":"true"}},[a._v("#")]),a._v(" JavaScript-作用域是什么")]),a._v(" "),e("h2",{attrs:{id:"理解作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解作用域","aria-hidden":"true"}},[a._v("#")]),a._v(" 理解作用域")]),a._v(" "),e("ul",[e("li",[a._v("引擎\n"),e("ul",[e("li",[a._v("从头到尾负责整个JavaScript程序的编译和执行过程")])])]),a._v(" "),e("li",[a._v("编译器\n"),e("ul",[e("li",[a._v("负责语法分析及代码生成")])])]),a._v(" "),e("li",[a._v("作用域\n"),e("ul",[e("li",[a._v("负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符有访问权限。")])])])]),a._v(" "),e("p",[e("img",{attrs:{src:"http://imgs.devzhangjs.com/15522056452246.jpg",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"作用域嵌套"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域嵌套","aria-hidden":"true"}},[a._v("#")]),a._v(" 作用域嵌套")]),a._v(" "),e("p",[a._v("当一个块或者函数嵌套在另一个函数或函数中时，就发生了作用域嵌套。")]),a._v(" "),e("p",[a._v("遍历嵌套作用域规则：引擎从当前的执行作用域开始查找变量，如果找不到，就向上一级继续查找。直到抵达最外层的全局作用域， 无论找到还是没找到，查找过程都会停止。")]),a._v(" "),e("h3",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),e("p",[a._v("作用域是一套规则，用于确定在何处以及如何查找变量（标志符）。\n如果查找目的是对变量进行赋值，就是执行LHS查询\n如果查找目的是获取变量的值，就是执行RHS查询")]),a._v(" "),e("h2",{attrs:{id:"词法作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域","aria-hidden":"true"}},[a._v("#")]),a._v(" 词法作用域")]),a._v(" "),e("p",[a._v("作用域主要两种工作模式：词法作用域和动态作用域")]),a._v(" "),e("h3",{attrs:{id:"词法阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#词法阶段","aria-hidden":"true"}},[a._v("#")]),a._v(" 词法阶段")]),a._v(" "),e("ul",[e("li",[a._v("大部分标准语言编译器的第一个工作阶段叫做词法化（也叫单词化）。")]),a._v(" "),e("li",[a._v("简单的说， 词法作用域就是定义在词法阶段的作用域。换句话说，词法作用域是由你在写代码的时候将变量和块作用域写在哪里来决定的，因此当词法分析器处理代码时会保持作用域不变。")]),a._v(" "),e("li",[a._v("作用域查找会在找到第一个匹配的标识符时停止。在多层的嵌套作用域中可以定义同名的标识符，叫做“遮蔽效应”")]),a._v(" "),e("li",[a._v("作用域查找始终是从运行时所处的最内部作用域开始，逐级向外或者向上查找， 知道遇见第一个匹配的标识符为止。")]),a._v(" "),e("li",[a._v("全局变量会自动成为全局对象（例如浏览器中的window对象）的属性，因此可以不直接通过全局对象的词法名称， 而是间接的通过对全局对象属性的引用来对其进行访问。\n例如"),e("code",[a._v("window.a")]),a._v("。通过这种技术可以访问那些被同名变量锁遮蔽的全局变量。但非全局变量如果被遮蔽了，无论如何都无法被访问到。")]),a._v(" "),e("li",[a._v("无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。")])]),a._v(" "),e("h3",{attrs:{id:"小结-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),e("p",[a._v("词法作用域意味着作用域是由代码书写时候函数声明的位置来决定的。")]),a._v(" "),e("h2",{attrs:{id:"函数作用域和块作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域和块作用域","aria-hidden":"true"}},[a._v("#")]),a._v(" 函数作用域和块作用域")]),a._v(" "),e("h3",{attrs:{id:"函数中的作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数中的作用域","aria-hidden":"true"}},[a._v("#")]),a._v(" 函数中的作用域")]),a._v(" "),e("p",[a._v("函数作用域是指，属于这个函数的全部变量都可以在整个函数的范围内使用以及复用（事实上在嵌套的作用域中也可以使用）。")]),a._v(" "),e("h3",{attrs:{id:"隐藏内部实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隐藏内部实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 隐藏内部实现")]),a._v(" "),e("p",[a._v("不应该这样：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function doSomething(a) {\n b = a + doSomethingElse(a * 2);\n\n console.log(b * 3);\n}\n\nfunction doSomethingElse(a) {\n return a - 1;\n}\n\nvar b;\n\ndoSomething(2);\n")])])]),e("p",[a._v("而是应该这样， 隐藏变量：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function doSomething(a) {\n function doSomethingElse(a) {\n   return a - 1;\n }\n var b;\n\n b = a + doSomethingElse(a * 2);\n\n console.log(b * 3);\n}\n\ndoSomething(2);\n")])])]),e("h4",{attrs:{id:"规避冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规避冲突","aria-hidden":"true"}},[a._v("#")]),a._v(" 规避冲突")]),a._v(" "),e("p",[a._v("“隐藏”作用域中的变量和函数所带来的另一个好处，是可以避免同名标识符之间的冲突，两个标识符可能具有相同的名字但是用途却不一样，无意间可能造成命名冲突。 冲突会导致变量的值被意外覆盖。")]),a._v(" "),e("h3",{attrs:{id:"函数作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域","aria-hidden":"true"}},[a._v("#")]),a._v(" 函数作用域")]),a._v(" "),e("h4",{attrs:{id:"匿名和具名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#匿名和具名","aria-hidden":"true"}},[a._v("#")]),a._v(" 匿名和具名")]),a._v(" "),e("p",[a._v("例如如下函数：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setTimeout(function() {\n console.log('I waited 1 second');\n \n}, 1000);\n")])])]),e("p",[a._v("这叫做匿名函数表达式。\n匿名函数表达式书写起来简单快捷，但是有几个缺点：")]),a._v(" "),e("ol",[e("li",[a._v("匿名函数在栈追踪中不会显示出有意义的函数名，使得调试很困难")]),a._v(" "),e("li",[a._v("如果没有函数名，当函数需要引用自身时只能使用已经过期的"),e("code",[a._v("arguments.callee")]),a._v("引用。")]),a._v(" "),e("li",[a._v("匿名函数省略了对于代码可读性/可理解性很重要的函数名。")])]),a._v(" "),e("p",[a._v("行内函数表达式非常强大且有用----匿名和具名之间的区别并不会对这一点有任何影响。给函数表达式指定一个函数名可以有效解决以上问题。所以，最好始终给函数表达式命名。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setTimeout(function timeoutHandler() { // 有名字了\n  console.log('I waited 1 second');\n  \n}, 1000);\n")])])]),e("h4",{attrs:{id:"立即执行函数表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#立即执行函数表达式","aria-hidden":"true"}},[a._v("#")]),a._v(" 立即执行函数表达式")]),a._v(" "),e("p",[e("code",[a._v("(function(){})()")]),a._v(" 和 "),e("code",[a._v("(function(){}())")])]),a._v(" "),e("h2",{attrs:{id:"提升"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提升","aria-hidden":"true"}},[a._v("#")]),a._v(" 提升")]),a._v(" "),e("ul",[e("li",[a._v("函数会首先别提升，然后才是变量。")]),a._v(" "),e("li",[a._v("出现在后面的函数声明还是可以覆盖前面的。")]),a._v(" "),e("li",[a._v("一个普通块内部的函数声明通常会被提升到所在作用域的顶部。")])]),a._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("ul",[e("li",[a._v("所有的声明（变量和函数）都会被“移动”到各自作用域的最顶端， 这个过程被称为 提升。")]),a._v(" "),e("li",[a._v("声明本身会被提升，而包含函数表达式的赋值在内的赋值操作并不会被提升。")]),a._v(" "),e("li",[a._v("要注意避免重复声明，特别是当普通的var声明和函数声明混合在一起的时候， 否则会引起很多危险的问题。")])]),a._v(" "),e("h2",{attrs:{id:"作用域闭包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域闭包","aria-hidden":"true"}},[a._v("#")]),a._v(" 作用域闭包")]),a._v(" "),e("h3",{attrs:{id:"定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[a._v("#")]),a._v(" 定义")]),a._v(" "),e("p",[a._v("当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在所在词法作用域以外被执行，这个引用，就叫做闭包。")]),a._v(" "),e("ul",[e("li",[a._v("无论通过何种手段将内部函数传递到所在词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包")]),a._v(" "),e("li",[a._v("本质上讲，无论何时何地，如果将函数当作第一级的值类型并到处传递，你就会看到闭包在这些函数中的应用。")]),a._v(" "),e("li",[a._v("例如在一些定时器、事件监听器、Ajax请求等，只要使用了回调函数，实际上就是在使用闭包")])]),a._v(" "),e("h3",{attrs:{id:"循环和闭包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#循环和闭包","aria-hidden":"true"}},[a._v("#")]),a._v(" 循环和闭包")]),a._v(" "),e("ul",[e("li",[a._v("let声明可以用来劫持块作用域，并且在这个作用域中声明一个变量。")]),a._v(" "),e("li",[a._v("for循环头部的let声明还会有一个特殊的行为。这个行为指出变量在循环过程中不止被声明一次，每次迭代都会声明。随后每个迭代都会使用上一个迭代结束时的值来初始化这个变量。")])]),a._v(" "),e("h3",{attrs:{id:"模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块")]),a._v(" "),e("p",[a._v("模块模式需要具备两个必要条件：")]),a._v(" "),e("ol",[e("li",[a._v("必须有外部的封闭函数，该函数必须至少别调用一次（每次调用都会创建一个新的模块实例）")]),a._v(" "),e("li",[a._v("封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有得状态。")])]),a._v(" "),e("p",[a._v("一个具有函数属性的对系那个本身并不是真正的模块。从方便观察的角度看，一个从函数调用锁返回的，只有数据属性而没有闭包函数得对象并不是真正的模块。")]),a._v(" "),e("h3",{attrs:{id:"现代的模块机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现代的模块机制","aria-hidden":"true"}},[a._v("#")]),a._v(" 现代的模块机制")]),a._v(" "),e("p",[a._v("大多数模块依赖加载器/管理器本质上都是将这种模块定义封装进一个友好的API。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var MyModules = (function Manager() {\n  var modules = {};\n\n  function define(name, deps, impl) {\n    for (var i = 0; i < deps.length; i++) {\n      deps[i] = modules[deps[i]];\n    }\n    modules[name] = impl.apply(impl, deps);\n  }\n\n  function get(name) {\n    return modules[name];\n  }\n\n  return {\n    define: define,\n    get: get\n  };\n})();\n\nMyModules.define('bar', [], function() {\n  function hello(who) {\n    return 'let me introduce: ' + who;\n  }\n\n  return {\n    hello: hello\n  };\n});\n\nMyModules.define('foo', ['bar'], function(bar) {\n  var hungry = 'xiaofan';\n\n  function awesome() {\n    console.log(bar.hello(hungry).toUpperCase());\n  }\n\n  return {\n    awesome: awesome\n  };\n});\n\nvar bar = MyModules.get('bar');\nvar foo = MyModules.get('foo');\n\nconsole.log(bar.hello('xiaofan'));\n\nfoo.awesome();\n")])])]),e("p",[e("code",[a._v("foo")]),a._v("和"),e("code",[a._v("bar")]),a._v("模块都是通过一个返回公共API的函数来定义的。foo甚至接受bar的实例作为依赖参数，并能响相应的使用它。")]),a._v(" "),e("h3",{attrs:{id:"总结-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("p",[a._v("当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域以外执行，这时就产生了闭包。")]),a._v(" "),e("p",[a._v("模块有两个主要特征：")]),a._v(" "),e("ol",[e("li",[a._v("为创建内部作用域而调用了一个包装函数")]),a._v(" "),e("li",[a._v("包装函数的返回值必须包含至少一个对内部函数的引用，这样就会创建涵盖整个包装函数内部作用域的闭包")])])])}],!1,null,null,null);t.default=r.exports}}]);