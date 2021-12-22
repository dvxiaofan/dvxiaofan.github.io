(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{201:function(n,t,e){"use strict";e.r(t);var i=e(0),a=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"vue-学习笔记-三-父子组件通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-学习笔记-三-父子组件通信","aria-hidden":"true"}},[n._v("#")]),n._v(" Vue 学习笔记(三): 父子组件通信")]),n._v(" "),e("h3",{attrs:{id:"父组件通过-props-向子组件传递"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#父组件通过-props-向子组件传递","aria-hidden":"true"}},[n._v("#")]),n._v(" 父组件通过 "),e("code",[n._v("props")]),n._v(" 向子组件传递")]),n._v(" "),e("p",[n._v("父组件：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<template>\n  <div>\n    <child-component :list=\"testList\">\n  </div>\n</template>\n\n<script>\n\nimport ChildComponent from '@/components/ChildComponent.vue'\n\nexport default {\n  name: 'home',\n  components: {\n    ChildComponent\n  },\n  data () {\n    return {\n      testList: ['line-1', 'line-2', 'line-3', 'line-4']\n    }\n  }\n}\n<\/script>\n")])])]),e("p",[n._v("子组件：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<template>\n    <ul>\n      <li v-for="(item, index) in list" :key="index">\n        {{ item }}\n      </li>\n    </ul>\n</template>\n\n<script>\nexport default {\n  name: \'ChildComponent\',\n  props: {\n    list: Array\n  }\n}\n<\/script>\n\n')])])]),e("p",[n._v("这样子组件就能接收并显示父组件传递过来的数据了")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://imgs.devzhangjs.com/2019-07-17-15633336300856.jpg",alt:"效果图"}})]),n._v(" "),e("h3",{attrs:{id:"子组件通过-emit向父组件传递数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#子组件通过-emit向父组件传递数据","aria-hidden":"true"}},[n._v("#")]),n._v(" 子组件通过"),e("code",[n._v("$emit")]),n._v("向父组件传递数据")]),n._v(" "),e("p",[n._v("子组件：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<template>\n    <ul>\n      <li v-for="(item, index) in list" :key="index" @click="handleClick(index)">\n        {{ item }}\n      </li>\n    </ul>\n</template>\n\n<script>\nexport default {\n  name: \'ChildComponent\',\n  props: {\n    list: Array\n  },\n  methods: {\n    handleClick (index) {\n      this.$emit(\'childEvent\', index)\n    }\n  }\n}\n<\/script>\n')])])]),e("p",[n._v("父组件：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<template>\n  <div class=\"home\">\n    <child-component :list=\"testList\" @childEvent=\"childHandleClick\"></child-component>\n    <div>This line's index is {{ num }}</div>\n  </div>\n</template>\n\n<script>\n\nimport ChildComponent from '@/components/ChildComponent.vue'\n\nexport default {\n  name: 'home',\n  components: {\n    ChildComponent\n  },\n  data () {\n    return {\n      testList: ['line-1', 'line-2', 'line-3', 'line-4'],\n      num: 'NAN'\n    }\n  },\n  methods: {\n    childHandleClick (index) {\n      this.num = index\n    }\n  }\n}\n<\/script>\n")])])]),e("p",[e("img",{attrs:{src:"http://imgs.devzhangjs.com/2019-07-17-15633336692363.jpg",alt:"效果图"}})]),n._v(" "),e("p",[n._v("子组件中也可以这样简写：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<template>\n    <ul>\n      <li v-for="(item, index) in list" :key="index" @click="$emit(\'childEvent\', index)">\n        {{ item }}\n      </li>\n    </ul>\n</template>\n\n<script>\nexport default {\n  name: \'ChildComponent\',\n  props: {\n    list: Array\n  }\n}\n<\/script>\n')])])]),e("p",[n._v("这样就不用在逻辑里声明"),e("code",[n._v("methods")]),n._v("方法了, 效果是一样的")])])}],!1,null,null,null);t.default=a.exports}}]);