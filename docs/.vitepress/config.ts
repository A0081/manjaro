import { defineConfig } from 'vitepress'

export default defineConfig({
//------------------------------全局配置------------------------------------------
    title: 'Manjaro',
    description: 'A Manjaro Guide site',
    lastUpdated: true ,//最后更新时间
    titleTemplate: ' _0081', //该选项为title | _0081
    cleanUrls: true,
    head:[
      ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

//-------------------------------主题配置-----------------------------------------
    themeConfig: {
      siteTitle: 'Manjaro',
      logo: '/logo.png',
      
      socialLinks: [
        { icon: 'github', link: 'https://github.com/A0081/manjaro' },//  这里要改为项目的github连接
        // You can also add custom icons by passing SVG as string:
       
      ],
//-------------------------------在github上编辑此页-------------------------------------
      editLink: {
        pattern: 'https://github.com/A0081/manjaro/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      },

//-------------------------------侧边栏---------------------------------------------
sidebar: [
  {
    //text: 'Section Title A',
    items: [
      { text: '下载与安装', link: '/install' },
      { text: '基础配置', link: '/another' },
  
    ]
  },
  {
    text: '常用软件',
    items: [
      { text: '软件安装方法', link: '/advanced' },
      { text: '📅日常应用', link: '/usually' },
      { text: '💬聊天通讯', link: '/chat' },
      { text: '👩‍💻办公软件', link: '/office' },
      { text: '🎥影音娱乐', link: '/music' },
    ]
  }
],
//-------------------------------导航栏--------------------------------------------
nav: [
  { text: 'Magic', link: '/magic' },
  { text: 'Arco Guide', link: 'https://arco.i0081.wiki/' },
  { text: 'Vitepress如何使用', link: 'https://www.bilibili.com/video/BV1iv4y1g7sp/?spm_id_from=333.337.search-card.all.click&vd_source=cd3c29af1bdcb4f9625088e805921003' },
  { text: '相关参考', link: '/cankao' },
]





    },              
  })