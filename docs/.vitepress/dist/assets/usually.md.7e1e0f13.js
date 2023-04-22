import{_ as a,c as s,o as l,N as e}from"./chunks/framework.0799945b.js";const A=JSON.parse('{"title":"📅日常应用","description":"","frontmatter":{},"headers":[],"relativePath":"usually.md","lastUpdated":1676957251000}'),o={name:"usually.md"},n=e(`<h1 id="📅日常应用" tabindex="-1">📅日常应用 <a class="header-anchor" href="#📅日常应用" aria-label="Permalink to &quot;📅日常应用&quot;">​</a></h1><h2 id="网络浏览器" tabindex="-1">网络浏览器 <a class="header-anchor" href="#网络浏览器" aria-label="Permalink to &quot;网络浏览器&quot;">​</a></h2><h3 id="firefox" tabindex="-1">Firefox <a class="header-anchor" href="#firefox" aria-label="Permalink to &quot;Firefox&quot;">​</a></h3><p>火狐浏览器（Mozilla Firefox）是一个自由开源的网页浏览器，由 <a href="https://foundation.mozilla.org/" target="_blank" rel="noreferrer">Mozilla 基金会</a> 及其非营利子公司 <a href="https://www.mozilla.org/zh-CN/about/" target="_blank" rel="noreferrer">Mozilla 公司</a> 开发。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/firefox/" target="_blank" rel="noreferrer">Firefox 浏览器</a>：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firefox</span></span></code></pre></div><p>同时还有 <a href="https://www.mozilla.org/zh-CN/firefox/developer/" target="_blank" rel="noreferrer">Firefox 浏览器开发者版</a>，使用此版本可获得最新功能、高速性能，以及打造开放 Web 所需的开发工具：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firefox-developer-edition</span></span></code></pre></div><h3 id="chromium" tabindex="-1">Chromium <a class="header-anchor" href="#chromium" aria-label="Permalink to &quot;Chromium&quot;">​</a></h3><p><a href="https://www.chromium.org/" target="_blank" rel="noreferrer">Chromium</a> 是 Google 为发展浏览器 Google Chrome 而发布的免费开源软件项目，以 <a href="https://chromium.googlesource.com/chromium/src/+/refs/heads/main/LICENSE" target="_blank" rel="noreferrer">BSD 许可协议open in new window</a> 等数种许可发行并开源。Chromium 与 Google Chrome 共享大部分代码和功能。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/chromium/" target="_blank" rel="noreferrer">Chromium</a>：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chromium</span></span></code></pre></div><h3 id="chrome" tabindex="-1">Chrome <a class="header-anchor" href="#chrome" aria-label="Permalink to &quot;Chrome&quot;">​</a></h3><p>Google Chrome 是由 Google 开发的免费网页浏览器。Chrome 相应的开放源代码计划名为 Chromium，而 Google Chrome 本身是专有软件，未开放全部源代码.</p><p>安装 <a href="https://aur.archlinux.org/packages/google-chrome/" target="_blank" rel="noreferrer">Google Chrome</a>EULA / cn / aur：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">google-chrome</span></span></code></pre></div><h3 id="edge" tabindex="-1">Edge <a class="header-anchor" href="#edge" aria-label="Permalink to &quot;Edge&quot;">​</a></h3><p>Microsoft Edge（微软前沿浏览器）是一个由微软研发的浏览器，于 2015 年 1 月 21 日公布，2015 年 3 月 30 日公开发布第一个预览版。</p><p>安装 <a href="https://aur.archlinux.org/packages/microsoft-edge-stable-bin" target="_blank" rel="noreferrer">Microsoft Edge</a>EULA / aur：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">microsoft-edge-beta-bin</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># aur(beta)</span></span>
<span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">microsoft-edge-dev-bin</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># aur(dev)</span></span></code></pre></div><h2 id="pdf以及电子书阅读器" tabindex="-1">PDF以及电子书阅读器 <a class="header-anchor" href="#pdf以及电子书阅读器" aria-label="Permalink to &quot;PDF以及电子书阅读器&quot;">​</a></h2><h3 id="okular" tabindex="-1">Okular <a class="header-anchor" href="#okular" aria-label="Permalink to &quot;Okular&quot;">​</a></h3><p>Okular 是 KDE 开发的一款功能丰富、轻巧快速的跨平台文档阅读器。可以使用它来阅读 PDF 文档、漫画电子书、Epub 电子书，浏览图像，显示 Markdown 文档等。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/okular/" target="_blank" rel="noreferrer">Okular</a>extra / aur：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">okular</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#或  yay -S okular-git</span></span></code></pre></div><h3 id="calibre" tabindex="-1">calibre <a class="header-anchor" href="#calibre" aria-label="Permalink to &quot;calibre&quot;">​</a></h3><p>calibre 是一款功能强大且易于使用的电子书管理器。支持 epub、txt、azw3 等文件格式。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/calibre/" target="_blank" rel="noreferrer">calibre</a>community / aur：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">calibre</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#或 yay -S calibre-git</span></span></code></pre></div><h3 id="zathura" tabindex="-1">zathura <a class="header-anchor" href="#zathura" aria-label="Permalink to &quot;zathura&quot;">​</a></h3><p><a href="https://en.wikipedia.org/wiki/Zathura_(document_viewer)" target="_blank" rel="noreferrer">zathura</a>是一个高度可定制的文档查看器，带有 vi 风格的键绑定。它提供了一个简约且节省空间的界面。用户主要通过键盘与 zathura 进行交互。通过插件支持不同的文件格式。支持Epub、<a href="https://wiki.archlinux.org/title/PDF,_PS_and_DjVu" target="_blank" rel="noreferrer">PDF、PS、DjVu</a>和<a href="https://en.wikipedia.org/wiki/Comic_book_archive" target="_blank" rel="noreferrer">漫画书</a>文件。</p><p>安装<a href="https://wiki.archlinux.org/title/zathura" target="_blank" rel="noreferrer">zathura</a></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zathura</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#或 yay -S zathura</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zathura-pdf-poppler</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#插件</span></span></code></pre></div><h2 id="截图工具" tabindex="-1">截图工具 <a class="header-anchor" href="#截图工具" aria-label="Permalink to &quot;截图工具&quot;">​</a></h2><h3 id="火焰截图" tabindex="-1">火焰截图 <a class="header-anchor" href="#火焰截图" aria-label="Permalink to &quot;火焰截图&quot;">​</a></h3><p><a href="https://github.com/flameshot-org/flameshot" target="_blank" rel="noreferrer">火焰截图（Flameshot</a> 是一款强大但简单易用的屏幕截图软件。截图后可以进行快捷的编辑</p><ol><li>安装 <a href="https://archlinux.org/packages/community/x86_64/flameshot/" target="_blank" rel="noreferrer">火焰截图</a>community / cn / aur：</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flameshot</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#或 yay -S aur/flameshot-git</span></span></code></pre></div><ol start="2"><li>配置快捷键 <ol><li>打开 <code>系统设置</code> &gt; 点击侧栏 <code>快捷键</code> &gt; <code>自定义快捷键</code></li><li>点击 <code>编辑</code> &gt; <code>新建</code> &gt; <code>全局快捷键</code> &gt; <code>命令/URL：</code></li><li>点击选项卡 <code>触发器</code> &gt; 将 <code>快捷键</code> 设置为自定义快捷键</li><li>点击选项卡 <code>动作</code> &gt; 将 <code>命令/URL：</code> 设置为 <code>flameshot gui</code></li></ol></li></ol><h3 id="spectacle" tabindex="-1">Spectacle <a class="header-anchor" href="#spectacle" aria-label="Permalink to &quot;Spectacle&quot;">​</a></h3><p>Spectacle 是 KDE 开发的用于抓取桌面截图的简单应用程序。它可以抓取整个桌面、单个显示器、当前活动窗口、鼠标所在的窗口或是屏幕上的一块矩形区域的图像。截取的图像可被打印、发送到其它应用程序进行处理、或是直接保存下来。</p><p>相比火焰截图可以准确的抓取单个窗口，但编辑功能没有火焰截图强大。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/spectacle/" target="_blank" rel="noreferrer">Spectacle</a>extra / aur：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">spectacle</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#或 yay -S spectacle-git</span></span></code></pre></div><h2 id="图像查看器" tabindex="-1">图像查看器 <a class="header-anchor" href="#图像查看器" aria-label="Permalink to &quot;图像查看器&quot;">​</a></h2><h3 id="gwenview" tabindex="-1">Gwenview <a class="header-anchor" href="#gwenview" aria-label="Permalink to &quot;Gwenview&quot;">​</a></h3><p>Gwenview 是 KDE 出品的一款轻便易用的图像查看器，是浏览、显示多张图像时的理想工具。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gwenview</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 或 yay -S gwenview-git</span></span></code></pre></div><h3 id="nomacs" tabindex="-1">nomacs <a class="header-anchor" href="#nomacs" aria-label="Permalink to &quot;nomacs&quot;">​</a></h3><p>nomacs 是一个免费的开源图像查看器，支持多平台。可以使用它来查看所有常见的图像格式，包括 RAW 和 psd 图像。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nomacs</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#或</span></span>
<span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nomacs-git</span></span></code></pre></div><h2 id="🍷-wine" tabindex="-1">🍷 Wine <a class="header-anchor" href="#🍷-wine" aria-label="Permalink to &quot;🍷 Wine&quot;">​</a></h2><p>Wine 是类 UNIX 系统下运行 Windows 程序的“兼容层”，是正在持续开发中的自由软件。在 Wine 中运行的 Windows 程序，就如同运行原生 Linux 程序一样，不会有模拟器那样的严重性能问题。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/multilib/x86_64/wine/" target="_blank" rel="noreferrer">Wine</a> 以及其它相关依赖：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wine</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wine-mono</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wine_gecko</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wine-staging</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">giflib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-giflib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libpng</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-libpng</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libldap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-libldap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gnutls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-gnutls</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">mpg123 </span><span style="color:#C3E88D;">lib32-mpg123</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openal</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-openal</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v4l-utils</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-v4l-utils</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libpulse</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-libpulse</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libgpg-error</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">lib32-libgpg-error </span><span style="color:#C3E88D;">alsa-plugins</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-alsa-plugins</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alsa-lib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-alsa-lib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libjpeg-turbo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-libjpeg-turbo</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">sqlite </span><span style="color:#C3E88D;">lib32-sqlite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libxcomposite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-libxcomposite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libxinerama</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-libgcrypt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libgcrypt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-libxinerama</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">ncurses </span><span style="color:#C3E88D;">lib32-ncurses</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">opencl-icd-loader</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-opencl-icd-loader</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libxslt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-libxslt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libva</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-libva</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gtk3</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">lib32-gtk3 </span><span style="color:#C3E88D;">gst-plugins-base-libs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-gst-plugins-base-libs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vulkan-icd-loader</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib32-vulkan-icd-loader</span></span></code></pre></div></li><li><p>通过以下命令配置 <code>Wine</code>。随后会弹出一个窗口，可对 Wine 进行配置。Wine 默认路径为 ~/.wine：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">winecfg</span></span></code></pre></div></li><li><p>通过以下命令运行简单的 Windows 应用：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">wine</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/path/of/xxx.exe</span></span></code></pre></div></li></ol>`,54),p=[n];function t(r,c,i,C,y,h){return l(),s("div",null,p)}const D=a(o,[["render",t]]);export{A as __pageData,D as default};
