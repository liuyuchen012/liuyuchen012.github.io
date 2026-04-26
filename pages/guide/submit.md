---
title: 提交方式
---

# 提交方式

目前支持以下方式提交数学打卡内容：

## 直接提交（有仓库权限）

如果你有仓库的推送权限，直接向 `main` 分支提交即可。

```bash
git add .
git commit -m "添加题目 xxx"
git push
```

推送后会自动触发 GitHub Actions 构建并部署到 GitHub Pages。

## 通过 Issue 提交

没有推送权限？在 [Issues](https://github.com/liuyuchen012/liuyuchen012.github.io/issues) 中提交内容，我们会帮你整理上传。

## Markdown 格式参考

```markdown
---
title: 题目名称
date: 2026-04-26
---

## 题目描述

在这里写题目的内容...

## 思路

解题思路...

## 解答

\`\`\`python
# 代码实现
\`\`\`
```
