import { defineValaxyConfig } from 'valaxy'

export default defineValaxyConfig({
  theme: 'press',
  vite: {
    build: {
      rollupOptions: {
        // 修复 rolldown 无法正确解析 vue-router 裸模块的问题
        external: ['vue-router'],
        output: {
          globals: {
            'vue-router': 'VueRouter',
          },
        },
      },
    },
  },
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/' },
      { text: '题目', link: '/problems/' },
      { text: '解法', link: '/solutions/' },
      { text: '资源', link: '/resources/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '项目结构', link: '/guide/structure' },
            { text: '提交方式', link: '/guide/submit' },
          ],
        },
      ],
      '/problems/': [
        {
          text: '题目列表',
          items: [
            { text: '全部题目', link: '/problems/' },
          ],
        },
      ],
      '/solutions/': [
        {
          text: '解法汇总',
          items: [
            { text: '全部解法', link: '/solutions/' },
          ],
        },
      ],
      '/resources/': [
        {
          text: '资源',
          items: [
            { text: '全部资源', link: '/resources/' },
            { text: '常用工具', link: '/resources/tools' },
            { text: '参考资料', link: '/resources/references' },
          ],
        },
      ],
    },
    footer: {
      message: '数学打卡项目 Wiki',
      copyright: 'Powered by Valaxy',
    },
    socialLinks: [
      { icon: 'i-ri-github-line', link: 'https://github.com/liuyuchen012/liuyuchen012.github.io' },
    ],
  },
  unocss: {
    safelist: [
      'i-ri-home-line',
      'i-ri-book-2-line',
      'i-ri-flashlight-line',
      'i-ri-palette-line',
      'i-ri-github-line',
      'i-ri-external-link-line',
    ],
  },
})
