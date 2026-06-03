import{_ as n,c as a,a as e,o as i}from"./app-DRFRIiL9.js";const l={};function t(d,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="用echarts动态显示两组数据图形" tabindex="-1"><a class="header-anchor" href="#用echarts动态显示两组数据图形"><span>用Echarts动态显示两组数据图形</span></a></h1><blockquote><p>最近公司项目需要用到实时数据显示, 所以就了解到了<code>Echarts</code>这个强大的工具, 使用中也遇到了好多坑, 记录一下, 希望也给需要的人提供帮助</p></blockquote><p>要在项目中使用<code>Echarts</code>, 首先需要在页面里引入, 你可以完全下载下来, 或者用<code>npm</code>之类的包管理工具, 或者直接引入<code>cdn</code>加速地址, 我这里用的后者</p><p>在html页面直接引入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script src=&quot;https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts.js&quot;&gt;&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后需要设着一个用来显示折线图的容器, 而且要有宽高</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;div id=&quot;main&quot; style=&quot;width: 600px; height: 500px;&quot;&gt;&lt;/div&gt;   </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接着在js文件里先实例化一个<code>echarts</code>对象出来</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let myChart = echarts.init(document.getElementById(&#39;main&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>为了显示效果, 我提供了一些测试数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let now = new Date();</span>
<span class="line">let datas = {</span>
<span class="line">    upText: &#39;水位图形&#39;,</span>
<span class="line">    upUnit: &#39;单位(m)&#39;,</span>
<span class="line">    upName: &#39;水位&#39;,</span>
<span class="line">	upMark: 2.3,		// 分界值</span>
<span class="line">    upData: [&#39;1.139&#39;],</span>
<span class="line">    downText: &#39;流量图形&#39;,</span>
<span class="line">    downUnit: &#39;单位(m)&#39;,</span>
<span class="line">    downName: &#39;水位&#39;,</span>
<span class="line">	downMark: 3.5,</span>
<span class="line">    downData: [&#39;5.473&#39;],</span>
<span class="line">    date: [now.getHours() + &#39;:&#39; + now.getMinutes() + &#39;:&#39; + now.getSeconds()]</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就是设置配置信息--<code>option</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let option = {</span>
<span class="line">	title: [{</span>
<span class="line">		left: &#39;center&#39;,</span>
<span class="line">		text: datas.upText</span>
<span class="line">	}, {</span>
<span class="line">		top: &#39;50%&#39;,				// 下面的折线图标题位置</span>
<span class="line">		left: &#39;center&#39;,</span>
<span class="line">		text: datas.downText</span>
<span class="line">	}],</span>
<span class="line">	tooltip: {</span>
<span class="line">		trigger: &#39;axis&#39;			// 悬浮到折点时候的上线标记线</span>
<span class="line">	},</span>
<span class="line">	xAxis: [{</span>
<span class="line">		boundaryGap: false,		// 默认为 true，此时刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。</span>
<span class="line">		data: datas.date</span>
<span class="line">	}, {</span>
<span class="line">		boundaryGap: false,</span>
<span class="line">		data: datas.date,</span>
<span class="line">		gridIndex: 1			// 下面的折线图索引, (上面的索引为0)</span>
<span class="line">	}],</span>
<span class="line">	yAxis: [{</span>
<span class="line">		name: datas.upUnit,</span>
<span class="line">		boundaryGap: [0, &#39;50%&#39;]</span>
<span class="line">	}, {</span>
<span class="line">		gridIndex: 1,</span>
<span class="line">		name: datas.downUnit,</span>
<span class="line">		boundaryGap: [0, &#39;50%&#39;]</span>
<span class="line">	}],</span>
<span class="line">	grid: [{</span>
<span class="line">		bottom: &#39;60%&#39;</span>
<span class="line">	}, {</span>
<span class="line">		top: &#39;60%&#39;</span>
<span class="line">	}],</span>
<span class="line">	series: [{</span>
<span class="line">		name: datas.upName,</span>
<span class="line">		data:  datas.date,</span>
<span class="line">		type: &#39;line&#39;,</span>
<span class="line">		smooth: true,			// 是否为平滑曲线</span>
<span class="line">		areaStyle: {			// 折现下是否填充</span>
<span class="line">			normal: {}</span>
<span class="line">        },  </span>
<span class="line">		markLine: {				// 分界线线设置</span>
<span class="line">			silent: true,		// 不响应鼠标点击事件</span>
<span class="line">			lineStyle: {</span>
<span class="line">				width: 2,</span>
<span class="line">				color: &#39;#f00&#39;</span>
<span class="line">			},</span>
<span class="line">			data: [{</span>
<span class="line">				yAxis: datas.upMark</span>
<span class="line">			}]</span>
<span class="line">		}</span>
<span class="line">	}, {</span>
<span class="line">		name: datas.downName,</span>
<span class="line">		data:  datas.date,</span>
<span class="line">		type: &#39;line&#39;,</span>
<span class="line">		smooth: true,</span>
<span class="line">        itemStyle : {  </span>
<span class="line">            normal : {  </span>
<span class="line">                borderColor:&#39;red&#39;	// 折线折点颜色</span>
<span class="line">            }  </span>
<span class="line">        },</span>
<span class="line">		markLine: {</span>
<span class="line">			silent: true,</span>
<span class="line">			lineStyle: {</span>
<span class="line">				width: 2,</span>
<span class="line">				color: &#39;#f00&#39;</span>
<span class="line">			},</span>
<span class="line">			data: [{</span>
<span class="line">				yAxis: datas.downMark</span>
<span class="line">			}]</span>
<span class="line">		},</span>
<span class="line">		xAxisIndex: 1,</span>
<span class="line">		yAxisIndex: 1</span>
<span class="line">	}],</span>
<span class="line">	visualMap: [{				// 视觉映射组件</span>
<span class="line">		seriesIndex: 0,</span>
<span class="line">		top: 20,</span>
<span class="line">		right: 10,</span>
<span class="line">		pieces: [{</span>
<span class="line">			gt: 0,				// 开始值</span>
<span class="line">			lte: datas.upMark,	// 结束值</span>
<span class="line">			color: &#39;#0ff&#39;</span>
<span class="line">		}],</span>
<span class="line">		outOfRange: {			// 超出范围</span>
<span class="line">			color: &#39;#f00&#39;</span>
<span class="line">		},</span>
<span class="line">	},{</span>
<span class="line">		seriesIndex: 1,</span>
<span class="line">		top: &#39;50%&#39;,</span>
<span class="line">		right: 10,</span>
<span class="line">		pieces: [{</span>
<span class="line">			gt: 0,</span>
<span class="line">			lte: datas.downMark,</span>
<span class="line">			color: &#39;orange&#39;</span>
<span class="line">		}],</span>
<span class="line">		outOfRange: {</span>
<span class="line">			color: &#39;#f00&#39;</span>
<span class="line">		},</span>
<span class="line">	}], </span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>有些地方是加了注释的, 因为一开始没搞明白怎么用, 在官方文档里 和 demo 里遨游了好久, 才弄明白各个设置的意思和用处, 文档是个好东西</p></blockquote><p>最后就是把<code>option</code>设置给 <code>echarts</code>实例, 是通过<code>setOption</code>来使用的:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">myChart.setOption(option);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这个时候打开页面其实就能看到效果了</p><p><img src="http://imgs.webxiaofan.com/15476380595216.jpg" alt="只有一个数据"></p><p>目前只有一个数据值, 接着开始启动模拟加载数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 获取数据时间间隔 3秒</span>
<span class="line">let INTERVAL_TIME = 3000;</span>
<span class="line">// 模拟定时加载数据</span>
<span class="line">setInterval(() =&gt; {</span>
<span class="line">	// 最新时间</span>
<span class="line">    let newDate = new Date();</span>
<span class="line">	// 模拟获取数据</span>
<span class="line">    datas.upData.push((Math.random() * 5).toFixed(3));</span>
<span class="line">	datas.downData.push((Math.random() * 5).toFixed(3));</span>
<span class="line">	// 按时间间隔设置时间</span>
<span class="line">    datas.date.push(newDate.getHours() + &#39;:&#39; + newDate.getMinutes() + &#39;:&#39; + newDate.getSeconds())</span>
<span class="line">	// 只取8个数据</span>
<span class="line">    if (datas.upData.length &gt;= 8) {</span>
<span class="line">        datas.upData.shift();</span>
<span class="line">        datas.downData.shift();</span>
<span class="line">        datas.date.shift();</span>
<span class="line">    }</span>
<span class="line">	// 设置最新数据给折线图</span>
<span class="line">    myChart.setOption({</span>
<span class="line">        xAxis: [{</span>
<span class="line">            data: datas.date</span>
<span class="line">        },{</span>
<span class="line">            data:datas.date,</span>
<span class="line">            gridIndex: 1</span>
<span class="line">        }],</span>
<span class="line">        series: [{</span>
<span class="line">            data: datas.upData</span>
<span class="line">        },{</span>
<span class="line">            data: datas.downData,</span>
<span class="line">            xAxisIndex: 1,</span>
<span class="line">            yAxisIndex: 1</span>
<span class="line">        }]</span>
<span class="line">    })</span>
<span class="line"></span>
<span class="line">}, INTERVAL_TIME);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在运行, 代码, 就能看到数据从1个变成最多8个, 并且能实时加载新数据并动态显示出来</p><p><img src="http://imgs.webxiaofan.com/15476381042709.jpg" alt="静态图"></p><p>同时也能看到分界线设置的效果(我这只是截图, 实际是动态显示的)</p><p>几点小提示:</p><ul><li>如果你需要切换数据源, 需要先清除原来的的定时器和<code>Echarts</code>实例, 否则数据会出现混乱, 这里的<code>timer</code>是我给项目里的定时器起的名字</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">//  清除原有定时器</span>
<span class="line">clearInterval(timer);</span>
<span class="line"></span>
<span class="line">//  如果echat实例存在</span>
<span class="line">if (myChart != null &amp;&amp; myChart != &quot;&quot; &amp;&amp; myChart != undefined) {</span>
<span class="line">      //  销毁实例</span>
<span class="line">      myChart.dispose();</span>
<span class="line"> }</span>
<span class="line">//  基于准备好的dom，初始化echarts实例</span>
<span class="line">myChart = echarts.init(document.getElementById(echartId))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最好再调用它一下的<code>resize</code>方法, 原因看注释</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">//  用于使chart自适应高度和宽度, 因为初始隐藏的标签在初始化图表的时候因为获取不到容器的实际高宽，可能会绘制失败</span>
<span class="line">$(window).on(&#39;resize&#39;, function () {</span>
<span class="line">     myChart.resize();</span>
<span class="line"> });</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在会改变窗口大小的地方也调用一下<code>resize()</code>这个方法,以便能自适应.</li></ul><hr><p>以上来自我工作中的总结笔记, 希望对看到的人有所帮助</p><p>源码地址: <a href="https://github.com/dvxiaofan/EchartsDemo" target="_blank" rel="noopener noreferrer">GitHub</a> 也可以直接跳转---&gt;<a href="https://www.echartsjs.com/index.html" target="_blank" rel="noopener noreferrer">Echarts官网</a>查看更多使用技巧</p>`,32)])])}const p=n(l,[["render",t]]),r=JSON.parse('{"path":"/echarts/","title":"用Echarts动态显示两组数据图形","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1561258996000,"contributors":[{"name":"xiaofan","username":"xiaofan","email":"1353815633@qq.com","commits":5,"url":"https://github.com/xiaofan"}],"changelog":[{"hash":"3362afa31a8378f478f69dba2bf690301a86f73f","time":1561258996000,"email":"1353815633@qq.com","author":"xiaofan","message":"添加日期显示在底部"},{"hash":"d482de0afa15194d8eed7c343431239379da42ba","time":1559284823000,"email":"1353815633@qq.com","author":"xiaofan","message":"基于 webpack 搭建 React 脚手架"},{"hash":"f9e93a83218ec74a2663e0dbcece0116ae7fe902","time":1548764462000,"email":"1353815633@qq.com","author":"xiaofan","message":"修改默认文章"},{"hash":"84ddaeac8e95eeae0489aef4dc1ecbf8806e5e51","time":1548635269000,"email":"1353815633@qq.com","author":"xiaofan","message":"修改部分显示标题"},{"hash":"05952515c16fd783e7d238036d01103da9f4a787","time":1548597683000,"email":"1353815633@qq.com","author":"xiaofan","message":"博客上线"}]},"filePathRelative":"echarts/README.md"}');export{p as comp,r as data};
