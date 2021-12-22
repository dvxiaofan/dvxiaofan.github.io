(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{190:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),a("p",[e._v("cd 到根目录")]),e._v(" "),e._m(20),a("p",[e._v("可以使用 VSCode 打开, 并编辑内容如下")]),e._v(" "),e._m(21),a("p",[e._v("创建所使用的 HTML 模板文件, cd 到根目录,然后执行如下命令")]),e._v(" "),e._m(22),e._m(23),e._v(" "),e._m(24),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._m(28),e._v(" "),e._m(29),e._m(30),e._v(" "),e._m(31),e._v(" "),a("p",[e._v("cd 到 项目根目录, 然后执行以下命令:")]),e._v(" "),e._m(32),a("p",[e._v("打开 App.jsx 并编辑:")]),e._v(" "),e._m(33),a("p",[e._v("打开 App.css 并编辑:")]),e._v(" "),e._m(34),a("p",[e._v("cd 到 src 目录,然后执行以下命令:")]),e._v(" "),e._m(35),a("p",[e._v("打开并编辑成如下内容:")]),e._v(" "),e._m(36),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._m(40),e._v(" "),e._m(41),e._v(" "),a("p",[e._v("cd 到项目根目录, 然后执行")]),e._v(" "),e._m(42),a("p",[e._v("你会看到如下命令执行, 并且自动为你在浏览器打开了项目的预览窗口")]),e._v(" "),e._m(43),e._v(" "),a("p",[e._v("预览窗口")]),e._v(" "),e._m(44),e._v(" "),a("p",[e._v("至此, 一个机遇 webpack 的 React 项目脚手架就搭建完成了")]),e._v(" "),a("p",[e._v("本实例源码: "),a("a",{attrs:{href:"https://github.com/dvxiaofan/react-webapck-starter",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"使用-webpack-搭建一个简单的-react-脚手架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-webpack-搭建一个简单的-react-脚手架","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 webpack 搭建一个简单的 React 脚手架")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"创建项目目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建项目目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建项目目录")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在合适的位置创建一个项目目录, 可以叫做"),t("code",[this._v("react-webpack-starter")]),this._v(",然后使用 "),t("code",[this._v("npm init")]),this._v(" 进行初始化,因为我们要用 node 进行包管理")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"安装所需依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装所需依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装所需依赖")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"安装-react"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-react","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 React")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install react react-dom\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"安装-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-webpack","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 webpack")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install webpack webpack-cli --save-dev\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("使用 "),t("code",[this._v("webpack-cli")]),this._v("方便的可以在命令行中执行"),t("code",[this._v("webpack")]),this._v("命令, 因为是开发环境使用,所以命令后面加上了 "),t("code",[this._v("--save-dev")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"安装-webpack-dev-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-webpack-dev-server","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 webpack-dev-server")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install webpack-dev-server --save-dev\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("使用"),t("code",[this._v("webpack-dev-server")]),this._v("可以快速启动一个简易的 web 服务器, 使得我们在修改文件后会自动执行 webpack 的编译操作并且自动刷新浏览器, 不再需要我们手动操作刷新.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"安装插件和其他-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装插件和其他-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装插件和其他 loader")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install webpack-html-plugins style-loader css-loader --save-dev\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("使用"),a("code",[e._v("webpack-html-plugins")]),e._v("可以自动生成"),a("code",[e._v("index.html")]),e._v("文件, 并会在"),a("code",[e._v("index.html")]),e._v("中自动添加对 bundle 文件的引用;\n使用"),a("code",[e._v("style-loader")]),e._v(" 和 "),a("code",[e._v("css-loader")]),e._v(" 可以方便加载 CSS 文件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"安装-babel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-babel","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 babel")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("因为 React 中会使用 class, import 等等 ES6 的语法, 为了提高项目浏览器兼容性,我们需要用 babel 打包转换一下;\n"),a("code",[e._v("@babel/core")]),e._v("是 babel 的核心模块, 具有 babel 的核心功能;\n"),a("code",[e._v("@babel/preset-env")]),e._v(" 用来转换 ES6 以及更新的 js 语法,并且可根据需要兼容的浏览器来自动选加载 plugin 之后精简生产的代码;\n"),a("code",[e._v("@babel/preset-react")]),e._v(" 具有 babel 转换 React 所需plugin;\n"),a("code",[e._v("babel-loader")]),e._v(" 是 webpack 的 babel 加载器;")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"配置-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-webpack","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置 webpack")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("安装好所有依赖, 就开始配置 webpack 了;\n首先在项目文件夹下创建一个"),t("code",[this._v("webpack.config.js")]),this._v("文件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("mkdir webpack.config.js\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\n\n\nlet config = {\n    entry: './src/index.jsx',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'bundle.js'\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.jsx$/,\n                exclude: /node_module/,\n                use: 'babel-loader'\n            },\n            {\n                test: /\\.css$/,\n                // 多个 loader 的时候执行顺序和排列顺序相反\n                use: ['style-loader', 'css-loader'] \n            }\n        ]\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n        // 使用自定义模板来生成 HTML 文件\n            template: './src/index.html'\n        })\n    ]\n}\n\nmodule.exports = config;\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("mkdir src && cd src && touch index.html\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("打开"),t("code",[this._v("index.html")]),this._v("文件, 编辑内容如下:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>React-Starter</title>\n</head>\n<body>\n    <div id="app"></div>\n</body>\n</html>\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"配置-babel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-babel","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置 babel")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("cd 到项目根目录,然后执行如下命令, 新建 "),t("code",[this._v(".babelrc")]),this._v("文件,")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("touch .babelrc\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("打开并编辑配置安装的两个"),t("code",[this._v("babel preset")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{\n    "presets": [\n        "@babel/preset-env",\n        "@babel/preset-react"\n    ]\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"生成-react-应用的根节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成-react-应用的根节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 生成 React 应用的根节点")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"创建一个-app-组件文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个-app-组件文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建一个 APP 组件文件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("mkdir components && cd components && touch App.jsx App.css\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("import React, { Component } from 'react';\nimport './App.css';\n\nexport default class App extends Component {\n    render() {\n        return (\n            <div>\n                my react-webpack-start\n            </div>\n        )\n    }\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("body {\n    font-size: 30px;\n    text-align: center;\n    font-weight: bolder;\n    color: #00f;\n    text-transform: uppercase;\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("touch index.jsx\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './components/App.jsx';\n\n\nReactDOM.render( <App />, document.getElementById('app'));\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"配置package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置package-json","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置"),t("code",[this._v("package.json")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在 "),t("code",[this._v("package.json")]),this._v("文件中的"),t("code",[this._v("scripts")]),this._v("配置里添加如下两条语句,(如果没有 scripts 项可以手动添加), 用来快速运行开发服务器和上线打包操作:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('"start": "webpack-dev-server --mode development --open --hot",\n"build": "webpack --mode production"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("启用了"),t("code",[this._v("webpack-dev-server")]),this._v("的 模块热更新功能, 更加提升开发效率.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"预览脚手架项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预览脚手架项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 预览脚手架项目")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm run start\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"http://ww1.sinaimg.cn/large/6b65559dgy1g3kfu87vaij20pb0fkafa.jpg",alt:"终端命令"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"http://ww1.sinaimg.cn/large/6b65559dgy1g3kfu86f2nj210e0n7myw.jpg",alt:"预览窗口"}})])}],!1,null,null,null);t.default=r.exports}}]);