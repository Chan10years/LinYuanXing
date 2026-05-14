# 临渊行

《临渊行》是一个以国风志怪叙事为基调的静态概念游戏官网作品集项目，重点展示世界观包装、信息架构设计、页面节奏控制与纯前端静态落地能力。

## Online Demo

- Netlify: [https://linyuanxingwebsite.netlify.app/](https://linyuanxingwebsite.netlify.app/)

## Project Positioning

`临渊行` 当前是一个用于作品集展示的静态概念官网项目，不是已上线运营的真实游戏产品。

- 目标是练习并展示叙事型游戏官网的内容包装能力
- 重点落在视觉氛围、世界观表达、信息架构与静态交互编排
- 项目适合作为前端作品集、概念官网案例和 GitHub 展示仓库

## Project Screenshot Placeholder

当前仓库暂未补入正式截图，本节保留为 GitHub 展示占位，后续可补充到 `docs/screenshots/`。

| Screenshot | Suggested File | Status |
| --- | --- | --- |
| Homepage Hero | `docs/screenshots/home-hero.jpg` | Placeholder |
| Character Section | `docs/screenshots/characters.jpg` | Placeholder |
| Map Trace Section | `docs/screenshots/map-trace.jpg` | Placeholder |
| Project Section | `docs/screenshots/project-panel.jpg` | Placeholder |
| Static Subpages | `docs/screenshots/subpages.jpg` | Placeholder |

## Core Features

- 首页 Hero、主导航与首屏导流
- PV 展示与基础播放交互
- 角色卡片、人物弹层与片段展开
- 地图寻迹与场景灯箱预览
- 剧情档案、Lore 与玩法概念展示
- `news.html` 静态新闻列表页
- `reserve.html` 静态预约入口占位页
- `login.html` 静态登录入口占位页
- `404.html` 静态未找到页面
- 响应式布局与多页面静态跳转结构

## Information Architecture

- `index.html`
  首页主展示页，包含 Hero、PV、角色、地图寻迹、剧情档案、Lore、玩法概念与 Project 说明区。
- `news.html`
  用于承载阶段公告、更新说明与后续内容计划的静态新闻页。
- `reserve.html`
  仅展示未来预约入口可能的视觉结构，不提供真实预约提交。
- `login.html`
  仅展示未来账号入口方向，不提供真实登录、认证或用户系统。
- `404.html`
  用于补全站点回跳链路与错误访问场景的静态页面。

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub
- Netlify

## My Role

- 项目概念定位与边界定义
- 世界观方向梳理与内容文案包装
- 页面信息架构设计
- 静态前端实现与交互组织
- 多页面结构整理与部署展示

## Development Stages

- `Stage 1A`
  首页骨架、核心展示区块与主视觉方向建立。
- `Stage 1B`
  补充新闻、预约、登录三个静态子页面，完善跳转入口。
- `Stage 2`
  增强内容纵深，加入 Lore、玩法概念、地图线索与 Project 表达。
- `Stage 3B`
  补齐 404 页面、检查链接、打磨移动端表现与全站一致性。
- `Stage 3C`
  聚焦 GitHub 展示、README 升级、项目复盘文档与作品集包装。
- `Stage 4A`
  进行工程化与交付质量提升，聚焦元信息统一、静态部署说明、资源说明、基础可访问性检查与作品集可信度。

## Stage 4A Focus

当前阶段目标不是继续堆真实功能，而是把静态概念官网项目整理得更干净、更稳定、更适合 GitHub / Netlify / 作品集展示。

- 保持纯 HTML、CSS、JavaScript，不迁移到任何新框架
- 不接入真实登录、真实预约、数据库、CMS、后台或生产 API
- 重点补齐基础 SEO、favicon、静态 404 说明、资源备注和部署文档
- 优先提升稳定性、可维护性、部署清晰度和项目边界表达

## Current Boundary

本项目当前明确是一个静态概念官网与作品集项目，边界如下：

- 不接入真实登录
- 不接入真实预约
- 不接入数据库
- 不接入 CMS
- 不接入后台管理
- 不接入 API
- 不提供真实下载、短信、邮件、上传或账号系统
- 不收集用户信息
- 不宣称已经完成真实游戏开发或上线运营

## Future Plan

- 补充项目截图与更完整的 GitHub 展示素材
- 持续扩展新闻文案、世界观文本与地图线索内容
- 继续优化作品集表达与内容密度，但不引入真实业务功能
- 视后续目标决定是否进入更高保真原型阶段

## Deployment

### Local Preview

- 直接双击 `index.html` 可进行最基础的静态预览
- 更推荐使用 VS Code Live Server、`python -m http.server` 或任意静态文件服务器打开仓库根目录，便于检查资源路径和多页面跳转

### GitHub

- 将项目推送到 GitHub 仓库根目录，保持 `index.html`、`style.css`、`script.js` 与 `assets/` 的相对路径结构不变
- 提交前重点检查文件名大小写、图片引用路径和子页面链接是否一致

### Netlify

- 本项目适合直接以静态站点方式托管到 Netlify，无需构建命令、无需后端环境
- 发布目录使用仓库根目录即可
- 根目录下已保留 `404.html`，可作为 Netlify 静态错误页使用

### Common Issues

- 资源路径错误：静态托管时应继续使用当前相对路径，不要随意改动 `assets/` 层级
- 404 页面访问异常：确保 `404.html` 位于仓库根目录，而不是 `docs/` 或其他子目录
- 文件名大小写不一致：本地 Windows 环境可能不敏感，但 GitHub / Netlify 部署后仍建议严格统一大小写
- 大体积媒体首屏加载较慢：当前以展示完整度优先，后续可参考 `docs/asset-notes.md` 再做压缩优化

## AI-assisted Workflow

This project is developed with an AI-assisted workflow based on human direction plus ChatGPT/Codex-style collaboration.

- Information architecture planning
- Page copy refinement
- Static frontend implementation
- UI consistency review
- Responsive polish
- Documentation packaging and iteration

AI is used as a collaborative development aid, not as a substitute for product reality. Final scope, direction, and boundary decisions are explicitly kept within the constraints of a static concept website project.

## Resume Summary

### 中文版

独立完成《临渊行》静态概念游戏官网作品集项目，基于 HTML、CSS、JavaScript 搭建多页面展示结构，围绕国风志怪叙事主题完成首页主视觉、角色展示、地图线索、Lore、玩法概念与静态子页面设计。项目重点体现信息架构、内容包装、响应式页面实现与作品集表达能力，不包含真实登录、预约、后台、数据库或 API 接入。

### English Version

Built `Linyuanxing`, a static concept game website project for portfolio presentation using HTML, CSS, and JavaScript. The project focuses on information architecture, narrative world-building, responsive frontend implementation, and multi-page content presentation, including hero sections, character showcases, lore, map-based clues, and static supporting pages. This is a concept website case study rather than a production game service, with no real login, reservation flow, backend, database, CMS, or API integration.

## Resume-ready Summary

If you want a shorter one-line version for GitHub or portfolio cards:

- 中文：国风志怪题材静态概念游戏官网作品集项目，展示信息架构、叙事包装与纯前端静态实现能力。
- English: A static concept game website project showcasing narrative packaging, information architecture, and frontend implementation skills.

## Related Docs

- [Project Case Study](docs/project-case-study.md)
- [Stage Log](docs/stage-log.md)
- [Asset Notes](docs/asset-notes.md)
- [Stage 1A Notes](docs/stage-one-notes.md)

## Project Statement

`临渊行` is a static concept website demo created for portfolio and presentation purposes. It does not include real authentication, reservation handling, user data collection, backend services, database integration, CMS workflows, or production APIs.
