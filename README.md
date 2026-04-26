# 数学打卡 Wiki 📐

数学打卡项目的文档与知识库，基于 [Valaxy](https://valaxy.site) + [Press 主题](https://valaxy.site/themes/press) 构建。

## 本地开发

```bash
npm install
npm run dev      # 本地预览 → http://localhost:4850
npm run build    # 构建静态文件 → dist/
npm run preview  # 预览构建结果
```

## 项目结构

```
├── pages/            # 页面内容（Markdown）
│   ├── index.md      # 首页
│   ├── guide/        # 使用指南
│   ├── problems/     # 题目
│   ├── solutions/    # 解法
│   └── resources/    # 资源
├── public/           # 静态资源
├── valaxy.config.ts  # Valaxy 配置
├── site.config.ts    # 站点配置
└── package.json      # 依赖管理
```

## 部署

推送 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。
