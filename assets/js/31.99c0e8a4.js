(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{183:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"查看git代码提交行数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看git代码提交行数","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看git代码提交行数")]),s._v(" "),a("h3",{attrs:{id:"查看当前用户一定时间内提交的代码行数（不加时间则为全部时间段内的统计）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看当前用户一定时间内提交的代码行数（不加时间则为全部时间段内的统计）","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看当前用户一定时间内提交的代码行数（不加时间则为全部时间段内的统计）")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" log --author"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"'),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[s._v("$(")]),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" config --get user.name"),a("span",{attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" --since"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"2021-06-20"')]),s._v(" --before"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"2022-12-12"')]),s._v(" --pretty"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("tformat: --numstat "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf \"added lines: %s removed lines : %s total lines: %s\\n\",add,subs,loc }'")]),s._v("\n")])])]),a("h3",{attrs:{id:"查看指定用户代码提交行数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看指定用户代码提交行数","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看指定用户代码提交行数")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" log --author"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"username"')]),s._v(" --pretty"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("tformat: --numstat "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf \"added lines: %s removed lines : %s total lines: %s\\n\",add,subs,loc }'")]),s._v("\n")])])]),a("h3",{attrs:{id:"查看当前项目git提交前5名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看当前项目git提交前5名","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看当前项目git提交前5名")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v("'%aN'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -c "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("sort")]),s._v(" -k1 -n -r "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),a("span",{attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])])]),a("h3",{attrs:{id:"提交次数统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交次数统计","aria-hidden":"true"}},[s._v("#")]),s._v(" 提交次数统计")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n")])])])])}],!1,null,null,null);t.default=r.exports}}]);