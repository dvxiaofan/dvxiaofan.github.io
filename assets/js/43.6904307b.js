(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{195:function(e,t,a){"use strict";a.r(t);var r=a(0),v=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"vue-学习笔记-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-学习笔记-生命周期","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue 学习笔记: 生命周期")]),e._v(" "),a("blockquote",[a("p",[e._v("Vue 中很重要的一个知识点,就是生命周期的理解. 搞懂它可以使我们在实际使用中能更好的编写逻辑代码")])]),e._v(" "),a("h3",{attrs:{id:"官网图例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官网图例","aria-hidden":"true"}},[e._v("#")]),e._v(" 官网图例")]),e._v(" "),a("p",[e._v("先来一张官网关于生命周期的图例")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://ww1.sinaimg.cn/large/6b65559dgy1g43xag1r02j20xc2cft9s.jpg",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"生命周期钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子","aria-hidden":"true"}},[e._v("#")]),e._v(" 生命周期钩子")]),e._v(" "),a("ul",[a("li",[e._v("beforeCreate: 实例创建前, 此时不能处理数据")]),e._v(" "),a("li",[e._v("created: 实例已经创建出来, 属性已绑定, 但 DOM 还未完成, $el 属性还不存在 可以进行数据的处理")]),e._v(" "),a("li",[e._v("beforeMounted: 实例挂载前, 如果有 el(容器,例如:"),a("div",{attrs:{id:"app"}}),e._v(") 了, 就准备把创建的实例挂载到 el 上")]),e._v(" "),a("li",[e._v("mounted: 完成挂载实例, 挂载后的 $el 就是渲染后的DOM 元素, 比如: "),a("code",[e._v("<div>hello vue</div>")])]),e._v(" "),a("li",[e._v("beforeUpdated: 更新实例前, 此时数据发生了变化")]),e._v(" "),a("li",[e._v("updated: 实例完成更新")]),e._v(" "),a("li",[e._v("beforeDestroy: 实例销毁前, 销毁组件")]),e._v(" "),a("li",[e._v("destroy: 实例被销毁")])]),e._v(" "),a("blockquote",[a("p",[e._v("因为在实例挂载前, 在生命周期钩子里是取不到el 的,所以我们一般会在 created 和 mounted 这两个钩子里进行一些页面渲染前的数据处理工作.")])])])}],!1,null,null,null);t.default=v.exports}}]);