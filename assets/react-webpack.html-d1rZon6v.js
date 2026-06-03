import{_ as s,c as a,a as n,o as l}from"./app-DRFRIiL9.js";const i={};function d(c,e){return l(),a("div",null,[...e[0]||(e[0]=[n(`<h1 id="使用-webpack-搭建一个简单的-react-脚手架" tabindex="-1"><a class="header-anchor" href="#使用-webpack-搭建一个简单的-react-脚手架"><span>使用 webpack 搭建一个简单的 React 脚手架</span></a></h1><h2 id="创建项目目录" tabindex="-1"><a class="header-anchor" href="#创建项目目录"><span>创建项目目录</span></a></h2><p>在合适的位置创建一个项目目录, 可以叫做<code>react-webpack-starter</code>,然后使用 <code>npm init</code> 进行初始化,因为我们要用 node 进行包管理</p><h2 id="安装所需依赖" tabindex="-1"><a class="header-anchor" href="#安装所需依赖"><span>安装所需依赖</span></a></h2><h3 id="安装-react" tabindex="-1"><a class="header-anchor" href="#安装-react"><span>安装 React</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install react react-dom</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="安装-webpack" tabindex="-1"><a class="header-anchor" href="#安装-webpack"><span>安装 webpack</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install webpack webpack-cli --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用 <code>webpack-cli</code>方便的可以在命令行中执行<code>webpack</code>命令, 因为是开发环境使用,所以命令后面加上了 <code>--save-dev</code></p><h3 id="安装-webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#安装-webpack-dev-server"><span>安装 webpack-dev-server</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install webpack-dev-server --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用<code>webpack-dev-server</code>可以快速启动一个简易的 web 服务器, 使得我们在修改文件后会自动执行 webpack 的编译操作并且自动刷新浏览器, 不再需要我们手动操作刷新.</p><h3 id="安装插件和其他-loader" tabindex="-1"><a class="header-anchor" href="#安装插件和其他-loader"><span>安装插件和其他 loader</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install webpack-html-plugins style-loader css-loader --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用<code>webpack-html-plugins</code>可以自动生成<code>index.html</code>文件, 并会在<code>index.html</code>中自动添加对 bundle 文件的引用; 使用<code>style-loader</code> 和 <code>css-loader</code> 可以方便加载 CSS 文件</p><h3 id="安装-babel" tabindex="-1"><a class="header-anchor" href="#安装-babel"><span>安装 babel</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>因为 React 中会使用 class, import 等等 ES6 的语法, 为了提高项目浏览器兼容性,我们需要用 babel 打包转换一下; <code>@babel/core</code>是 babel 的核心模块, 具有 babel 的核心功能; <code>@babel/preset-env</code> 用来转换 ES6 以及更新的 js 语法,并且可根据需要兼容的浏览器来自动选加载 plugin 之后精简生产的代码; <code>@babel/preset-react</code> 具有 babel 转换 React 所需plugin; <code>babel-loader</code> 是 webpack 的 babel 加载器;</p><h2 id="配置-webpack" tabindex="-1"><a class="header-anchor" href="#配置-webpack"><span>配置 webpack</span></a></h2><p>安装好所有依赖, 就开始配置 webpack 了; 首先在项目文件夹下创建一个<code>webpack.config.js</code>文件</p><p>cd 到根目录</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">mkdir webpack.config.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以使用 VSCode 打开, 并编辑内容如下</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const path = require(&#39;path&#39;);</span>
<span class="line">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">let config = {</span>
<span class="line">    entry: &#39;./src/index.jsx&#39;,</span>
<span class="line">    output: {</span>
<span class="line">        path: path.resolve(__dirname, &#39;dist&#39;),</span>
<span class="line">        filename: &#39;bundle.js&#39;</span>
<span class="line">    },</span>
<span class="line">    module: {</span>
<span class="line">        rules: [</span>
<span class="line">            {</span>
<span class="line">                test: /\\.jsx$/,</span>
<span class="line">                exclude: /node_module/,</span>
<span class="line">                use: &#39;babel-loader&#39;</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">                test: /\\.css$/,</span>
<span class="line">                // 多个 loader 的时候执行顺序和排列顺序相反</span>
<span class="line">                use: [&#39;style-loader&#39;, &#39;css-loader&#39;] </span>
<span class="line">            }</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">    plugins: [</span>
<span class="line">        new HtmlWebpackPlugin({</span>
<span class="line">        // 使用自定义模板来生成 HTML 文件</span>
<span class="line">            template: &#39;./src/index.html&#39;</span>
<span class="line">        })</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">module.exports = config;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建所使用的 HTML 模板文件, cd 到根目录,然后执行如下命令</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">mkdir src &amp;&amp; cd src &amp;&amp; touch index.html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开<code>index.html</code>文件, 编辑内容如下:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span>
<span class="line">    &lt;title&gt;React-Starter&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-babel" tabindex="-1"><a class="header-anchor" href="#配置-babel"><span>配置 babel</span></a></h2><p>cd 到项目根目录,然后执行如下命令, 新建 <code>.babelrc</code>文件,</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">touch .babelrc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开并编辑配置安装的两个<code>babel preset</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">    &quot;presets&quot;: [</span>
<span class="line">        &quot;@babel/preset-env&quot;,</span>
<span class="line">        &quot;@babel/preset-react&quot;</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成-react-应用的根节点" tabindex="-1"><a class="header-anchor" href="#生成-react-应用的根节点"><span>生成 React 应用的根节点</span></a></h2><h3 id="创建一个-app-组件文件" tabindex="-1"><a class="header-anchor" href="#创建一个-app-组件文件"><span>创建一个 APP 组件文件</span></a></h3><p>cd 到 项目根目录, 然后执行以下命令:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">mkdir components &amp;&amp; cd components &amp;&amp; touch App.jsx App.css</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开 App.jsx 并编辑:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { Component } from &#39;react&#39;;</span>
<span class="line">import &#39;./App.css&#39;;</span>
<span class="line"></span>
<span class="line">export default class App extends Component {</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;div&gt;</span>
<span class="line">                my react-webpack-start</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开 App.css 并编辑:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">body {</span>
<span class="line">    font-size: 30px;</span>
<span class="line">    text-align: center;</span>
<span class="line">    font-weight: bolder;</span>
<span class="line">    color: #00f;</span>
<span class="line">    text-transform: uppercase;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd 到 src 目录,然后执行以下命令:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">touch index.jsx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开并编辑成如下内容:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">import App from &#39;./components/App.jsx&#39;;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">ReactDOM.render( &lt;App /&gt;, document.getElementById(&#39;app&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置package-json" tabindex="-1"><a class="header-anchor" href="#配置package-json"><span>配置<code>package.json</code></span></a></h2><p>在 <code>package.json</code>文件中的<code>scripts</code>配置里添加如下两条语句,(如果没有 scripts 项可以手动添加), 用来快速运行开发服务器和上线打包操作:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&quot;start&quot;: &quot;webpack-dev-server --mode development --open --hot&quot;,</span>
<span class="line">&quot;build&quot;: &quot;webpack --mode production&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>启用了<code>webpack-dev-server</code>的 模块热更新功能, 更加提升开发效率.</p></blockquote><h2 id="预览脚手架项目" tabindex="-1"><a class="header-anchor" href="#预览脚手架项目"><span>预览脚手架项目</span></a></h2><p>cd 到项目根目录, 然后执行</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm run start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>你会看到如下命令执行, 并且自动为你在浏览器打开了项目的预览窗口</p><p><img src="http://ww1.sinaimg.cn/large/6b65559dgy1g3kfu87vaij20pb0fkafa.jpg" alt="终端命令"></p><p>预览窗口</p><p><img src="http://ww1.sinaimg.cn/large/6b65559dgy1g3kfu86f2nj210e0n7myw.jpg" alt="预览窗口"></p><p>至此, 一个机遇 webpack 的 React 项目脚手架就搭建完成了</p><p>本实例源码: <a href="https://github.com/dvxiaofan/react-webapck-starter" target="_blank" rel="noopener noreferrer">GitHub</a></p>`,58)])])}const p=s(i,[["render",d]]),r=JSON.parse('{"path":"/react/react-webpack.html","title":"使用 webpack 搭建一个简单的 React 脚手架","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561258996000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":2,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"3362afa31a8378f478f69dba2bf690301a86f73f","time":1561258996000,"email":"1353815633@qq.com","author":"xiaofan","message":"添加日期显示在底部"},{"hash":"d482de0afa15194d8eed7c343431239379da42ba","time":1559284823000,"email":"1353815633@qq.com","author":"xiaofan","message":"基于 webpack 搭建 React 脚手架"}]},"filePathRelative":"react/react-webpack.md"}');export{p as comp,r as data};
