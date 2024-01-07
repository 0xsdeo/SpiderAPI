---
home: true
heroImage: /img/logo.png
heroText: Spider API
# tagline: 🚀爬虫逆向常用 API
actions:
  - text: 🚀 查看目录
    link: /pages/toc/
  - text: 🌟 点亮 Star
    link: https://github.com/TRHX/SpiderApi

# actionText: ⛵️查看目录
# actionLink: /pages/toc/
# https://github.com/vuepress/vuepress-next/issues/23

bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 网络请求
    details: 各种语言、各种框架、各种库的 GET、POST、添加代理、修改 TLS 指纹等
    link: /pages/requests/
    # imgUrl: https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200122153807.jpg
  - title: 数据处理
    details: 数据解析提取、清洗去重、自然语言处理、分词统计、绘图制表、各种数据库存储等
    link: /pages/re/
  - title: 辅助查询
    details: JS Hook、Frida Api、ADB 命令、ARM 指令集、Linux 命令、浏览器指纹等
    link: /pages/js-hook/

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---

<!-- <br/>
<p align="center">
  <a href="https://www.npmjs.com/package/vuepress-theme-vdoing" target="_blank"><img src="https://img.shields.io/npm/v/vuepress-theme-vdoing" alt="npm" class="no-zoom"></a>
  <a href="https://www.npmjs.com/package/vuepress-theme-vdoing" target="_blank"><img src="https://img.shields.io/npm/dt/vuepress-theme-vdoing" alt="npm" class="no-zoom"></a>
  <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/stars/xugaoyi/vuepress-theme-vdoing' alt='GitHub stars' class="no-zoom"></a>
  <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/forks/xugaoyi/vuepress-theme-vdoing' alt='GitHub forks' class="no-zoom"></a>
</p>

<br/>
<p align="center" style="color: #999;">
  赞助商 (进入注册为主题作者充电)
</p>
<p align="center">
  <a href="http://apifox.cn/a103xugaoyi" target="_blank"><img src="https://cdn.staticaly.com/gh/xugaoyi/blog-gitalk-comment@master/img/441669861566_.2bedplbm21hc.jpg" alt="npm" class="no-zoom" style="width: 300px;border-radius: 2px;"></a>
</p> -->

<br/>

::: cardList 3
```yaml
config:
  target: _blank  # _self

data:
  - name: Spider BOX
    desc: 🚀 SpiderBOX - 虫盒 - 爬虫逆向资源导航站
    link: https://spiderbox.cn/
    bgColor: '#f1f1f1'
    textColor: '#2A3344'
  - name: Spider API
    desc: 🚀 SpiderAPI - 虫术 - 爬虫逆向常用 API
    link: https://spiderapi.cn/
    bgColor: '#F0DFB1'
    textColor: '#2A3344'
  - name: Spider GRC
    desc: 🚀 SpiderGRC - 虫规 - 数据采集合规性建设
    link: https://spidergrc.cn/
    bgColor: '#DFEEE7'
    textColor: '#2A3344'
```
:::

<p align="center">
  <a class="become-sponsor" href="/pages/sponsor/">支持赞助我们</a>
</p>

::: danger ❗❗❗注意
本项目由 <a href="https://www.itbob.cn" target="_blank">BOB</a> 在业余时间完善，仍处于初期建设当中，面向所有工程师征集常用工具/代码，**所有内容未最终确定，随时可能变化！**
:::

<br>

::: details 🏗️ TODO 进度表

<!-- <table border="1" align="center">
  <thead>
    <tr>
      <th>分类</th>
      <th>细分</th>
      <th>状态</th>
    </tr>
  </thead>
  <tbody>
  <tr align="center">
    <td rowspan="2">网络请求</td>
    <td>基本请求<br>(tls/ja3 指纹修改，py/go/js 多语言)</td>
    <td>✅</td>
  </tr>
  <tr align="center">
    <td>异步协程 / 多线程 / 多进程</td>
    <td>✅</td>
  </tr>
  <tr align="center">
    <td rowspan="4">数据处理</td>
    <td>解析提取 / 通用解析</td>
    <td>✅</td>
  </tr>
  <tr align="center">
    <td>数据分析<br>(分词 / 统计 / 科学计算)</td>
    <td>✅</td>
  </tr>
  <tr align="center">
    <td>数据分析<br>(分词 / 统计 / 科学计算)</td>
    <td>✅</td>
  </tr>
  </tbody>
</table> -->

- ✅ **[验证码](/captcha/)**：
  - ✅ **国内验证码**：顶象、数美、易盾、极验、阿里云云盾、腾讯天御、小红书、小盾...
  - ✅️ **国外验证码**：cloudflare、reCAPTCHA、hCaptcha、FunCAPTCHA、DataDome、PerimeterX...

- 🟩 **[辅助查询](/pages/js-hook/)**：
  - ✅️ **辅助脚本**：JS Hook，Frida API，AST Babel...
  - ❌ **命令查询**：Linux 命令、ADB 命令、ARM 指令集、Dalvik 指令集...
  - ✅️ **指纹信息**：<font color=red>浏览器指纹检测、TLS 指纹检测、自动化工具检测</font>...
  - ❌ **加密算法**：MD5、AES、RSA、DES、SHA、RC4...

- 🟩 **[网络请求](/net/requests)**：
  - ❌ **基本请求**：requests、httpx、tls_client、curl_cffi、request_go，TLS / JA3 指纹修改，多语言版本...
  - ❌ **异步协程**：asyncio、gevent...
  - ❌ **多线程**：threading、vthread...
  - ❌ **多进程**：multiprocessing...

- 🟩 **[框架接口](/pages/selenium/)**：
  - ❌ **自动化框架**：selenium、pyppeteer、playwright、splash、DrissionPage、appium、airtest、特征隐藏...
  - ❌ **爬虫框架**：scrapy、feapder、pyspider...
  - ❌ **接口编写**：FastAPI、flask、express...

- 🟩 **[数据处理](/pages/re/)**：
  - ❌ **数据提取**：re、lxml、BeautifulSoup、GeneralNewsExtractor、Newspaper、Protobuf...
  - ❌ **数据分析**：wordcloud、jieba、pandas、NumPy、SciPy...
  - ❌ **制表绘图**：matplotlib、pyecharts、plotly、seaborn...
  - ❌ **数据存储**：文件存储、MySQL、MongoDB、Redis、SQLite...

---

🙃 长期计划（异想天开）：

- 新一代行为特征、生物特征检测方案；
- 新一代前端代码防护解决方案。

:::


<br/>

## 🎉 特别致谢

::: cardList
```yaml
- name: 李玺
  desc: 中科大数据研究院高级工程师
  avatar: /img/lx.jpg
  link: https://blog.csdn.net/weixin_43582101
  bgColor: '#FCDBA0' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
  textColor: '#A05F2C' # 可选，默认var(--textColor)
- name: geekbyte
  desc: 移动安全、tls/ja3指纹，公众号编角料
  avatar: /img/geekbyte.jpg
  link: https://blog.csdn.net/Y_morph
  bgColor: '#CBEAFA'
  textColor: '#6854A1'
- name: 十一姐
  desc: JS 逆向，公众号逆向OneByOne
  avatar: /img/shiyi.jpg
  link: https://blog.csdn.net/weixin_43411585
  bgColor: '#f1f1f1'
  textColor: '#2A3344'
```
:::

<br/>

<!-- ## ⚡️未来...

::: tip
期待 [VuePress v2.0](https://github.com/vuepress/vuepress-next) 以及 [VitePress](https://github.com/vuejs/vitepress) 的正式发布...

届时，VuePress 1.x 编译慢的缺点将得到极大的改善。我将会视情况把主题升级至 VuePress v2.0 或 VitePress。还希望大家多多 [:sparkling_heart:支持](/pages/1b12ed/) 哟，持续关注吧~
::: -->

<!-- <br/> -->

<!-- ## 💎 公众号
`有趣研究社`是本人对各种有趣的、好玩的、沙雕的创意和想法以在线小网站或者文章的形式表达出来，比如：
- [小霸王游戏机](https://game.xugaoyi.com)
- [爱国头像生成器](https://avatar.xugaoyi.com/)
- [到账语音生成器](https://zfb.xugaoyi.com/)

还有更多好玩的等你去探索吧~

::: center
<img src="https://fastly.jsdelivr.net/gh/xugaoyi/image_store@master/blog/qrcode.zdqv9mlfc0g.jpg"  style="width:190px;" />
:::

<br/> -->

## 💡 反馈交流

对本站有任何问题和想法，请给我提 [Issue](https://github.com/TRHX/SpiderApi/issues)。技术交流、商务合作、广告赞助可以通过以下方式联系我们：

<!-- <table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <img src="/img/qrcode/wechat.jpg" alt="站长微信 (备注来意)" style="width:180px;margin: 10px;">
        <p>站长微信 (备注来意)</p>
      </td>
      <td align="center" valign="middle">
          <img src="/img/qrcode/gzh.jpg" alt="站长公众号 (虫技)" style="width:180px;margin: 10px;">
        <p>站长公众号 (虫技)</p>
      </td>
      <td align="center" valign="middle">
          <img src="/img/qrcode/qq.jpg" alt="QQ 群: 694387113" style="width:180px;margin: 10px;">
        <p>QQ 群 (941013658)</p>
      </td>
    </tr>
  </tbody>
</table> -->

| <img :src="$withBase('/img/qrcode/wechat.jpg')" alt="站长微信 (备注来意)" width=180> | <img :src="$withBase('/img/qrcode/gzh.jpg')" alt="站长公众号 (虫技)" width=180>| <img :src="$withBase('/img/qrcode/qq.jpg')" alt="QQ 群: 694387113" width=180> |
| :---: | :---: | :---: |
| 站长微信 (备注来意) | 站长公众号 (虫技) | QQ交流群 (941013658) |


<!-- AD -->
<div class="wwads-cn wwads-horizontal page-wwads" data-id="136"></div>
<style>
  .page-wwads{
    width:100%!important;
    min-height: 0;
    margin: 0;
  }
  .page-wwads .wwads-img img{
    width:80px!important;
  }
  .page-wwads .wwads-poweredby{
    width: 40px;
    position: absolute;
    right: 25px;
    bottom: 3px;
  }
  .wwads-content .wwads-text, .page-wwads .wwads-text{
    height: 100%;
    padding-top: 5px;
    display: block;
  }
</style>
