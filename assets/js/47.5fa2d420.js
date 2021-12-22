(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{199:function(t,e,n){"use strict";n.r(e);var a=n(0),i=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"vue-练习-demo-二-组件化动态添加和删除元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-练习-demo-二-组件化动态添加和删除元素","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 练习 Demo(二): 组件化动态添加和删除元素")]),t._v(" "),n("h3",{attrs:{id:"在原有基础上修改-div"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在原有基础上修改-div","aria-hidden":"true"}},[t._v("#")]),t._v(" 在原有基础上修改 div")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div id="app">\n\t<input v-model="inputValue" type="text" />\n\t<button @click="handleAddBtn">提交</button>\n\t<ul>\n\t    <todo-item \n\t        :content="item"\n\t        :index="index"\n\t        v-for="(item,index) in list"\n\t        @delete="handleDeleteItem"\n\t        >\n\t    </todo-item>\n\t</ul>\n</div>\n')])])]),n("h3",{attrs:{id:"创建子组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建子组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建子组件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let TodoItem = {\n\t// 需要传递的参数\n    props: {\n        content: this.content,\n        index: this.index,\n    },\n    template: \"<li @click='handleItemClick'>{{content}}</li>\",\n    methods: {\n        handleItemClick() {\n\t\t       // 向父组件传递事件和参数\n            this.$emit(\"delete\", this.index)\n        }\n    },\n}\n\nlet app = new Vue({\n    el: '#app',\n    components: {\n        TodoItem\n    },\n    data: {\n        list: [111, 222, 333],\n        inputValue: ''\n    },\n    methods: {\n        handleAddBtn() {\n            this.list.push(this.inputValue)\n            this.inputValue = ''\n        },\n        handleDeleteItem(index) {\n            console.log(index)\n            this.list.splice(index, 1)\n        }\n    },\n})\n")])])]),n("h3",{attrs:{id:"效果展示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#效果展示","aria-hidden":"true"}},[t._v("#")]),t._v(" 效果展示")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://storage1.cuntuku.com/2019/06/22/cNT8D.gif",alt:"效果展示"}})])])}],!1,null,null,null);e.default=i.exports}}]);