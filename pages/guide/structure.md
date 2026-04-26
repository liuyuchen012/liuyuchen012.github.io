---
title: 项目结构
---

# 项目结构

本站由 [Valaxy](https://valaxy.site) 构建，使用 `press` 主题。

```
liuyuchen012.github.io/
├── pages/
│   ├── index.md            # 首页
│   ├── guide/              # 使用指南
│   │   └── index.md
│   ├── problems/           # 题目
│   │   └── index.md
│   ├── solutions/          # 解法
│   │   └── index.md
│   └── resources/          # 资源
│       └── index.md
├── public/                 # 静态资源
│   └── favicon.svg
├── valaxy.config.ts        # Valaxy 主题配置
├── site.config.ts          # 站点配置
└── package.json            # 依赖管理
```

## 页面路由

`pages/` 目录下的 Markdown 文件会自动映射为路由：

- `pages/index.md` → `/`
- `pages/guide/index.md` → `/guide/`
- `pages/problems/index.md` → `/problems/`

## 添加新页面

在 `pages/` 下创建 Markdown 文件即可。支持 [VitePress 风格的 Frontmatter](https://valaxy.site/guide/frontmatter)。
