import{_ as s,c as a,a as n,o as i}from"./app-DRFRIiL9.js";const l={};function t(r,e){return i(),a("div",null,[...e[0]||(e[0]=[n(`<h1 id="使用filesaver-js把base64数据转成表格并下载" tabindex="-1"><a class="header-anchor" href="#使用filesaver-js把base64数据转成表格并下载"><span>使用FileSaver.js把base64数据转成表格并下载</span></a></h1><blockquote><p>最近公司项目有一个需求， 是按行业要求的一个“怪异”格式表格下载下来，后端通过表格设计器搞了一个模板，然后填充数据， 前端通过接口获取到返回的base64格式的数据，转成表格提供下载，就用到了这个FileSaver.js</p></blockquote><h3 id="引入-filesaver-js" tabindex="-1"><a class="header-anchor" href="#引入-filesaver-js"><span>引入 <code>FileSaver.js</code></span></a></h3><p>在HTML页面引入， 我采用的是cdn引入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script src=&quot;http://cdn.staticfile.org/FileSaver.js/1.3.8/FileSaver.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="把base64-转成能下载的文件" tabindex="-1"><a class="header-anchor" href="#把base64-转成能下载的文件"><span>把base64 转成能下载的文件</span></a></h3><p>先实现这个转换方法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function b64toFile(b64Data, filename, contentType) {</span>
<span class="line">    let sliceSize = 512;</span>
<span class="line">    let byteCharacters = atob(b64Data);</span>
<span class="line">    let byteArrays = [];</span>
<span class="line"></span>
<span class="line">    for (let offset = 0; offset &lt; byteCharacters.length; offset += sliceSize) {</span>
<span class="line">        let slice = byteCharacters.slice(offset, offset + sliceSize);</span>
<span class="line">        let byteNumbers = new Array(slice.length);</span>
<span class="line"></span>
<span class="line">        for (let i = 0; i &lt; slice.length; i++) {</span>
<span class="line">            byteNumbers[i] = slice.charCodeAt(i);</span>
<span class="line">        }</span>
<span class="line">        let byteArray = new Uint8Array(byteNumbers);</span>
<span class="line">        byteArrays.push(byteArray);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    let file = new File(byteArrays, filename, {type: contentType});</span>
<span class="line">    return file;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转换并下载表格数据" tabindex="-1"><a class="header-anchor" href="#转换并下载表格数据"><span>转换并下载表格数据</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// base64Data 是服务器获取到的数据</span>
<span class="line">let file = b64toFile(base64Data, &#39;test&#39;, &#39;application/vnd.ms-excel;charset=utf-8&#39;);</span>
<span class="line"></span>
<span class="line">// 利用FileSaver.js 下载文件为Excel文件</span>
<span class="line">saveAs(file, &quot;fileName.xls&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是so easy 呢？</p>`,11)])])}const d=s(l,[["render",t]]),p=JSON.parse('{"path":"/js/fileSave.html","title":"使用FileSaver.js把base64数据转成表格并下载","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561258996000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":2,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"3362afa31a8378f478f69dba2bf690301a86f73f","time":1561258996000,"email":"1353815633@qq.com","author":"xiaofan","message":"添加日期显示在底部"},{"hash":"688381ddd169d0b4f4c6d2a7584494fddfd38e5f","time":1560589129000,"email":"1353815633@qq.com","author":"xiaofan","message":"fileSave 把 base64 数据转成表格下载"}]},"filePathRelative":"js/fileSave.md"}');export{d as comp,p as data};
