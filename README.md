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
- 角色档案总页、四个角色详情页、角色卡片与人物弹层
- 地图寻迹与场景灯箱预览
- 剧情档案总页、清河旧案与御敕玄观两个档案详情页、Lore 与玩法概念展示
- 世界观档案库 `archives.html`，包含人物、地点、势力、妖异、物件五类静态筛选
- 参赛演示模式 `demo.html`，按 NCDA 1-C1 3 分钟宣讲路径组织评委浏览路线
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
- `characters.html`
  C1 三层页面结构中的角色档案栏目页，连接首页与四名主要角色详情页。
- `archive.html`
  C1 三层页面结构中的剧情档案栏目页，整理首页时间线，并连接首批两份档案详情页。
- `archives.html`
  世界观档案库页面，整理人物、地点、势力、妖异与物件五类设定，并提供本地静态筛选。
- `demo.html`
  参赛演示模式页面，按 3 分钟宣讲路径串联作品定位、设计目的、三层架构、核心体验、技术路线、创新实用性与后续改进。
- `archive-qinghe.html`
  清河旧案详情页，展示旧案未明、男女主牵连、器体质关系与玩家主线理解。
- `archive-xuanguan.html`
  御敕玄观详情页，展示师傅立观、御敕册封、斩妖护民、异物归观与山门疑云。
- `character-male.html`
  男主角色详情页，展示身份、关键词、清河旧案关系、玩家视角中的角色作用与片影留痕。
- `character-female.html`
  女主角色详情页，展示身份、关键词、同行关系、玩家视角中的角色作用与片影留痕。
- `character-master.html`
  师傅角色详情页，展示御敕玄观观主身份、师徒关系、师门疑云与片影留痕占位。
- `character-nameless.html`
  无名道人角色详情页，展示旧案见证者身份、线索引导作用与片影留痕占位。
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
- `Stage 4B`
  当前进入 C1 参赛结构补齐阶段，先进行信息架构规划与参赛检查清单准备。
- `Stage 4B Day 2A`
  新增角色档案栏目页与男主、女主详情页，用最小页面数量验证首页 / 栏目页 / 详情页三层静态结构。
- `Stage 4B Day 2B`
  补齐师傅与无名道人详情页，并在四个角色详情页统一预留“片影留痕”资料区，首页不再分散承载角色媒体入口。
- `Stage 4B Day 2C`
  完成角色链路总验收，确认首页、角色档案总页与四个角色详情页之间的静态回跳路径稳定。
- `Stage 4B Day 3A`
  新增剧情档案总页与清河旧案、御敕玄观两个详情页，扩展首页剧情档案时间线为三层静态浏览路径。
- `Stage 4B Day 3B`
  完成剧情档案三层静态链路验收，确认首页、档案总页与两份档案详情页之间的回跳路径稳定，并更新 Project 区阶段状态。
- `Stage 4B Day 3C`
  微调剧情档案文案密度与参赛表达，强化八个 FILE 的主线推进感、两份详情卷宗的档案口径与纯静态边界，不新增功能或页面。
- `Stage 4B Day 3D`
  完成参赛提交视角的全站文案一致性扫尾，统一 Stage 4B / C1 Static Structure Build 口径，复核导航、页脚、logo、静态边界、README 与阶段记录。
- `Stage 4C`
  进入 NCDA 1-C1 参赛 MVP 收口阶段，不继续扩充内容，聚焦 15 个静态页面、3 分钟宣讲脚本、评委演示路径、匿名合规检查与人工整理参赛材料清单。

## Stage 4C Focus

当前阶段目标不是继续堆真实功能，而是把现有 15 个静态页面整理成可用于参赛展示的 NCDA 1-C1 静态网页 MVP。

- 保持纯 HTML、CSS、JavaScript，不迁移到任何新框架
- 不接入真实登录、真实预约、数据库、CMS、后台或生产 API
- 重点复核首页、参赛演示、世界观档案库、角色档案、剧情档案、详情页、新闻、预约、登录与 404 的入口链路
- 同步准备可运行静态站点说明、60×80cm 展板文案、A3 宣传海报文案、3 分钟宣讲脚本与匿名合规检查
- 优先提升参赛表达一致性、材料完整度、静态边界可信度与提交安全性

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

## C1 Submission Checklist

- 页面结构：`index.html`、角色档案、剧情档案、详情页、新闻、预约、登录与 `404.html` 均保持可访问。
- 参赛入口：`demo.html` 保持 3 分钟宣讲路径口径，`archives.html` 保持世界观档案库静态筛选。
- 静态边界：不接入真实登录、预约、数据库、后台、CMS、API、上传、评论、收藏、统计或真实数据收集。
- 链接稳定：主要页面可回到首页，角色档案与剧情档案具备清楚入口，内部链接使用相对路径。
- 内容完整度：角色档案覆盖四名主要角色，剧情档案覆盖总页与两份详情卷宗，首页 Project 区说明当前完成范围。
- 作品集表达：项目被表述为静态概念官网作品集，不宣称真实游戏已完成或上线运营。
- 部署说明：继续按静态站点方式部署，无构建命令、无后端环境，保留 `favicon.svg` 与 `404.html`。
- 参赛材料：展板、A3 海报、作品简介图、3 分钟宣讲脚本、匿名检查表与可运行静态站点按人工清单整理，不作为自动化产物。
- 匿名合规：提交给评委的作品、海报、宣讲脚本与展示图不得出现学校、作者姓名、指导教师姓名或其他赛事标识。

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
- 大体积媒体首屏加载较慢：当前以展示完整度优先，后续仅参考 `docs/asset-notes.md` 做资源说明，不在本阶段处理视频文件

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
