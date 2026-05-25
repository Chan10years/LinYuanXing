# C1 Information Architecture Plan

本文件用于规划《临渊行》C1 参赛补齐阶段的信息架构。当前项目仍保持纯静态 HTML + CSS + JavaScript 作品集定位，不接入真实登录、真实预约、数据库、后台、CMS 或 API。

## Planning Boundary

- Day 1 仅完成信息架构规划与文档准备。
- 暂不新增 `characters.html`、`world.html`、`archives.html` 等栏目页。
- 暂不新增角色详情页、世界观详情页或档案详情页。
- 暂不修改首页 Hero、PV、角色、地图、Lore 的核心布局。
- 后续新增页面仅作为静态展示与参赛信息补齐，不承载真实业务功能。

## Three-layer Page Structure

C1 参赛结构建议采用“首页 / 栏目页 / 详情页”的三层静态页面模型，保证评审能够从总览快速进入栏目，再进入具体内容。

| Layer | Page Type | Purpose | Planned Examples | Day 1 Status |
| --- | --- | --- | --- | --- |
| Level 1 | 首页 | 承载项目第一印象、核心视觉、主要世界观入口与参赛导流 | `index.html` | 已存在，仅规划后续入口关系 |
| Level 2 | 栏目页 | 分类承载角色、世界观、剧情档案等内容，降低首页信息压力 | `characters.html`、`world.html`、`archives.html` | 暂不新增，Day 2 起按需建立 |
| Level 3 | 详情页 | 展示单个角色、地点、档案或设定条目的完整内容 | `character-yun-sheng.html`、`archive-001.html` | 暂不新增，待栏目页结构稳定后补齐 |

## Level 1: Homepage

首页继续作为项目总览页，不在 Day 1 改动核心结构。

### Existing Role

- 通过 Hero 建立国风志怪叙事氛围。
- 通过 PV、角色、地图、Lore、玩法概念等模块展示项目完成度。
- 通过新闻、预约、登录等静态页面入口说明项目边界。
- 通过 Project 区表达作品集属性与开发边界。

### Future C1 Link Role

- 为栏目页提供清晰入口，例如角色图鉴、世界观、剧情档案。
- 保持现有首页信息节奏，不把全部详情内容继续堆在首页。
- 栏目入口应使用相对路径，避免外链依赖。
- 所有入口都应明确是静态展示，不暗示真实账号、预约或运营服务。

## Level 2: Section Pages

栏目页用于承接从首页进入后的分类浏览需求。Day 1 仅规划，不新增文件。

### Planned Section Pages

| Planned Page | Content Scope | Suggested Entry Source | Notes |
| --- | --- | --- | --- |
| `characters.html` | 角色列表、阵营标签、角色短文案、详情入口 | 首页角色区、导航或页脚 | Day 2 优先新增 |
| `world.html` | 世界观总览、地域设定、志怪规则、地图线索汇总 | 首页地图区、Lore 区 | 后续补齐，不在 Day 1 创建 |
| `archives.html` | 剧情档案、事件索引、传闻条目、章节线索 | 首页 Lore / 剧情档案区 | 后续补齐，不在 Day 1 创建 |
| `news.html` | 静态公告与阶段更新 | 已有导航入口 | 已存在，继续保持静态说明属性 |

### Section Page Requirements

- 每个栏目页应有返回首页的明确入口。
- 每个栏目页应有与当前栏目相关的详情页入口。
- 栏目页之间可以交叉推荐，但不应形成复杂或不可回溯的路径。
- 页面文案应保持“概念官网 / 作品集展示”口径。
- 不出现真实提交、真实登录、真实预约、支付、下载、短信、邮件或用户系统承诺。

## Level 3: Detail Pages

详情页用于补齐单个内容条目的深度，不在 Day 1 创建。

### Planned Detail Types

| Detail Type | Possible Page Pattern | Content Focus | Parent Section |
| --- | --- | --- | --- |
| Character detail | `character-*.html` | 角色身份、关键词、人物片段、关联线索 | `characters.html` |
| World detail | `world-*.html` | 地域、门派、异象、规则或地点设定 | `world.html` |
| Archive detail | `archive-*.html` | 单条剧情档案、传闻、章节摘要 | `archives.html` |

### Detail Page Requirements

- 详情页应能回到所属栏目页和首页。
- 每个详情页只承载一个明确主题，避免内容过散。
- 图片与媒体继续使用项目内相对路径。
- 如缺少素材，优先使用文本、装饰块或现有资源，不临时引入外链图片。
- 不新增真实评论、收藏、登录后查看、预约解锁等业务逻辑。

## Navigation Model

建议后续形成如下静态路径：

```text
index.html
├── characters.html
│   ├── character-*.html
│   └── character-*.html
├── world.html
│   ├── world-*.html
│   └── world-*.html
├── archives.html
│   ├── archive-*.html
│   └── archive-*.html
├── news.html
├── reserve.html
├── login.html
└── 404.html
```

## Day 2 Priority

Day 2 建议优先新增 `characters.html` 与首批角色详情页，用最小页面数量验证三层结构是否成立。完成角色栏目后，再决定是否继续扩展 `world.html` 与 `archives.html`。
