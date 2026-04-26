---
title: 使用指南
---

# 使用指南

## 快速开始

1. 克隆本仓库
2. 安装依赖：`npm install`（需要 Node.js 18+）
3. 本地预览：`npm run dev`
4. 构建生产版本：`npm run build`

## 项目结构

```
├── pages/            # 页面内容（Markdown）
│   ├── index.md      # 首页
│   ├── guide/        # 使用指南
│   ├── problems/     # 题目
│   ├── solutions/    # 解法
│   └── resources/    # 资源
├── public/           # 静态资源（图片等）
├── valaxy.config.ts  # Valaxy 配置
└── site.config.ts    # 站点配置
```

## 提交方式

### 方式一：直接推送（有仓库权限）

```bash
git add .
git commit -m "添加/更新内容"
git push
```

推送后 GitHub Actions 会自动构建并部署到 GitHub Pages。

### 方式二：提交 Issue / PR

在 [GitHub 仓库](https://github.com/liuyuchen012/liuyuchen012.github.io) 提交 Issue 或 Pull Request。
