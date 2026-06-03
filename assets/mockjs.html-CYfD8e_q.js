import{_ as n,c as a,a as e,o as i}from"./app-DRFRIiL9.js";const l={};function t(o,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="利用mock-js本地批量生成模拟json数据" tabindex="-1"><a class="header-anchor" href="#利用mock-js本地批量生成模拟json数据"><span>利用Mock.js本地批量生成模拟JSON数据</span></a></h1><h3 id="导入mock-js" tabindex="-1"><a class="header-anchor" href="#导入mock-js"><span>导入<code>Mock.js</code></span></a></h3><p>在 HTML 页面里引入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script src=&quot;http://cdn.staticfile.org/Mock.js/1.0.0/mock-min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="批量生成模拟数据" tabindex="-1"><a class="header-anchor" href="#批量生成模拟数据"><span>批量生成模拟数据</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let Random = Mock.Random;</span>
<span class="line">Random.date();</span>
<span class="line">let dataMock = Mock.mock({</span>
<span class="line">    &#39;dataList|50&#39;: [{</span>
<span class="line">        &#39;id|1000001-200000&#39;: 666666,</span>
<span class="line">        &#39;name&#39;: &#39;@cname&#39;,</span>
<span class="line">        &#39;email&#39;: &#39;@email&#39;,</span>
<span class="line">        &#39;date&#39;: &#39;@date&#39;,</span>
<span class="line">        &#39;str&#39;: &#39;@csentence&#39;</span>
<span class="line">    }]</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">console.log(dataMock);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看结果数据" tabindex="-1"><a class="header-anchor" href="#查看结果数据"><span>查看结果数据</span></a></h3><p><img src="http://imgs.devzhangjs.com/2019-07-17-15633540821926.jpg" alt="模拟数据"></p><h3 id="部分数据占位符定义" tabindex="-1"><a class="header-anchor" href="#部分数据占位符定义"><span>部分数据占位符定义</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&quot;中文名字&quot;: &quot;@cname&quot;,</span>
<span class="line">&quot;邮箱&quot;: &quot;@email&quot;,</span>
<span class="line">&quot;网址&quot;: &quot;@url&quot;,</span>
<span class="line">&quot;域名&quot;: &quot;@domain&quot;,</span>
<span class="line">&quot;标题&quot;: &quot;@title&quot;,</span>
<span class="line">&quot;日期&quot;: &quot;@date&quot;,</span>
<span class="line">&quot;时间&quot;: &quot;@time&quot;,</span>
<span class="line">&quot;浮点数&quot;: &quot;@float&quot;,</span>
<span class="line">&quot;自然数&quot;: &quot;@natural&quot;,</span>
<span class="line">&quot;段落&quot;: &quot;@paragraph&quot;,</span>
<span class="line">&quot;句子&quot;: &quot;@sentence&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它们对应输出的数据例子:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&quot;中文名字&quot;: &quot;李飞&quot;,</span>
<span class="line">&quot;邮箱&quot;: &quot;u.womlsumtu@fvq.cg&quot;,</span>
<span class="line">&quot;网址&quot;: &quot;http://tbrsh.uk/qstmkdshc&quot;,</span>
<span class="line">&quot;域名&quot;: &quot;lljn.tn&quot;,</span>
<span class="line">&quot;标题&quot;: &quot;fzgdrg Jyssalp Ivwlvxbu Pmn Unmb&quot;,</span>
<span class="line">&quot;日期&quot;: &quot;2005-04-01&quot;,</span>
<span class="line">&quot;时间&quot;: &quot;10:22:53&quot;,</span>
<span class="line">&quot;浮点数&quot;: &quot;-3209057368417692.5&quot;,</span>
<span class="line">&quot;自然数&quot;: &quot;132154574125730&quot;,</span>
<span class="line">&quot;段落&quot;: &quot;Yovyokkk ympsx kfgbeoko isssxq qetlwkjtw nrll tbcoycv onief ffvixgxyb rntvwu xztkj jrmfkyme xhjdrmr uwljpexy djqgovo mhbvt. Uugrusx xla ...&quot;,</span>
<span class="line">&quot;句子&quot;: &quot;Xqjq fwtnupqn cipi miiajynk qyao tsxiykjj rpdcyvhc aeweyujbdt eahjwrncn duwid rvyoc tsnnsegi kylxmwb cbcdaen vpcxwndyr dublxi&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>更多用法, 请参看官网, 一键直达<a href="http://mockjs.com/" target="_blank" rel="noopener noreferrer">Mock.js</a></p></blockquote>`,13)])])}const c=n(l,[["render",t]]),d=JSON.parse('{"path":"/other/mockjs.html","title":"利用Mock.js本地批量生成模拟JSON数据","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1563355100000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":1,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"7a87ba3b80df86ed51ddbaa255915a2ef913229a","time":1563355100000,"email":"1353815633@qq.com","author":"xiaofan","message":"mock.js"}]},"filePathRelative":"other/mockjs.md"}');export{c as comp,d as data};
