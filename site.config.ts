import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: '数学打卡 Wiki',
  description: '数学打卡项目的文档与知识库',
  url: 'https://liuyuchen012.github.io',
  author: {
    name: '刘宇晨',
  },
  search: {
    enable: true,
    provider: 'fuse',
  },
  lastUpdated: true,
  feed: {
    enable: false,
  },
  comment: {
    enable: false,
  },
})
