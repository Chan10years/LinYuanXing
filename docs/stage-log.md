# Stage Log

## Stage 1A：首页骨架与核心展示区块

- 建立首页 Hero、主导航与首屏文案结构
- 完成 PV、角色、地图寻迹等核心展示区块的基本布局
- 明确项目边界为纯静态概念官网，不接入真实业务功能

## Stage 1B：新闻、预约、登录静态子页面

- 新增 `news.html`、`reserve.html`、`login.html`
- 补齐首页到子页面的跳转路径
- 用静态说明页承接未来方向，但明确不提供真实登录和真实预约

## Stage 2：内容纵深、Project 区、地图线索、玩法概念

- 扩展 Lore、剧情档案、玩法概念等内容模块
- 增强地图寻迹与场景线索表达
- 补充 Project 区，让页面同时具备作品集说明功能

## Stage 3B：404 页面、链接检查、移动端与一致性打磨

- 新增 `404.html`，补齐错误访问场景与回跳链路
- 检查多页面之间的导航链接与页脚入口
- 打磨移动端表现、视觉一致性与整体完成度

## Stage 3C：GitHub / README / 作品集包装

- 升级 `README.md` 为作品集级 GitHub 展示文档
- 新增项目复盘文档 `docs/project-case-study.md`
- 新增阶段推进记录 `docs/stage-log.md`
- 补充中英双语 Resume Summary
- 统一全项目文档中的边界口径，明确这是静态概念官网，不接入真实登录、真实预约、数据库、CMS、后台或 API，也不收集用户信息

## Stage 4A：工程化与交付质量提升

- 检查项目结构、确认现有 `README.md`、`docs/project-case-study.md` 与 `docs/stage-log.md` 已具备 Stage 3C 作品集包装基础
- 统一 `index.html`、`news.html`、`reserve.html`、`login.html`、`404.html` 的基础 SEO 与分享信息口径
- 新增最小占位 favicon，补齐静态站点标识入口
- 复核 `404.html` 在静态托管场景中的用途，并在文档中补充 GitHub / Netlify 部署说明
- 进行基础可访问性巡检，确认图片 `alt`、弹窗关闭按钮与移动端快捷入口保持可用
- 新增 `docs/asset-notes.md`，记录当前资源体积、命名与后续可优化方向，不修改现有媒体资源本体

## Stage 4B Day 1：C1 参赛信息架构规划与检查清单

- 当前进入 C1 参赛结构补齐阶段，Day 1 仅处理规划与文档准备
- 新增 `docs/c1-information-architecture.md`，规划首页、栏目页、详情页三层页面结构
- 新增 `docs/c1-submission-checklist.md`，建立参赛前自检清单，覆盖三层页面、链接导通、静态边界、资源路径、移动端、README、展板文案、海报文案与宣讲脚本
- 本日不新增 `characters.html`、`world.html`、`archives.html` 或详情页
- 本日不修改首页核心结构，不接入真实登录、真实预约、数据库、后台、CMS 或 API

## Stage 4B Day 2A：角色档案总页与首批角色详情页

- 新增 `characters.html`，作为 C1 三层页面结构中的角色档案栏目页
- 新增 `character-male.html` 与 `character-female.html`，用于验证角色栏目页到详情页的静态路径
- 首页 `index.html` 补充 `characters.html` 入口，保留原有 Hero、PV、角色、地图、Lore 与 Project 核心布局
- 师傅与无名道人仅在角色档案页显示“档案整理中 / 后续开放”，暂不新增详情页，也不设置死链
- 本日不新增 `world.html`、`archives.html`、师傅详情页、无名道人详情页，不修改 `script.js`，不接入真实业务功能

## Stage 4B Day 2B：角色详情页补齐与片影留痕

- 新增 `character-master.html` 与 `character-nameless.html`，补齐师傅、无名道人角色卷宗详情页
- `characters.html` 中四名主要角色均可进入对应“入其卷宗”详情页，不再保留师傅与无名道人的未开放按钮
- `character-male.html`、`character-female.html`、`character-master.html`、`character-nameless.html` 均加入“片影留痕”模块
- 男主、女主详情页引用现有 `assets/videos` 资源；师傅与无名道人详情页在无对应视频资源时显示“影录整理中”
- 首页角色区保留“阅其小传”人物弹窗与“入其卷宗”详情入口，移除分散的视频资料入口
- 清理 `script.js` 中不再使用的角色视频展开与 `data-character-expand` 旧逻辑，不影响 PV 播放、角色弹窗、地图灯箱与 Lore 折叠
- 本阶段仍保持纯静态边界，不接入真实登录、预约、后台、数据库、CMS 或 API

## Stage 4B Day 2C：角色链路总验收

- 复核首页角色区四名角色均保留“阅其小传 / 入其卷宗”两类入口，未恢复旧视频入口或旧按钮文案
- 复核 `characters.html` 四名角色均已导向对应详情页：男主、女主、师傅、无名道人卷宗链路完整
- 复核四个角色详情页均包含返回角色档案、返回首页、正文内容、身份标记侧栏、片影留痕模块与页脚角色回跳入口
- 修正女主标签顺序，使三字标签优先展示，并同步 `script.js` 中 `characterProfiles.tags` 顺序
- 将 `.character-modal-tags span` 纳入标签最小宽度与居中规则，保持弹窗标签与页面标签视觉对齐
- 复核纯静态边界：不接入真实登录、预约、数据库、后台、API、上传、评论、收藏或统计功能

## Stage 4B Day 3A：剧情档案总页与首批详情页

- 新增 `archive.html`，作为剧情档案总页，承接首页 Archive / 剧情档案区的时间线内容
- 新增 `archive-qinghe.html`，聚焦清河旧案、男女主牵连、器体质关系与玩家理解主线的入口
- 新增 `archive-xuanguan.html`，聚焦师傅立观、御敕册封、斩妖护民、异物归观、池边观鱼与玄观疑云
- 首页 `index.html` 的剧情档案区新增进入 `archive.html` 的静态入口
- `archive.html` 至少开放清河旧案与御敕玄观两个详情入口，详情页均提供返回档案总页、返回首页、相关人物入口、相关线索标签与页脚回跳入口
- 本阶段只补齐档案页结构，不进入世界观页、PV 新闻详情页、视觉大修、搜索筛选、分页、动态加载、登录、预约、后台、数据库、CMS 或 API

## Stage 4B Day 3B：剧情档案链路验收与细修

- 复核首页剧情档案区可进入 `archive.html`，剧情档案总页可进入 `archive-qinghe.html` 与 `archive-xuanguan.html`
- 复核两份档案详情页均保留返回 `archive.html`、返回 `index.html`、相关人物入口、相关线索标签与页脚回跳入口
- 复核 `archive.html` 保留首页八段时间线完整索引，未新增搜索、筛选、分页、评论、收藏、统计或动态加载能力
- 首页 Project 区状态更新为 `Stage 4B / C1 Static Structure Build`，当前完成范围补充角色档案页、剧情档案页与档案详情页
- 首页页脚补充 `archive.html` 剧情档案入口，档案相关页面统一“无名道人档案”按钮命名

## Stage 4B Day 3C：剧情档案内容密度与参赛表达微调

- `archive.html` 保留 FILE 01 至 FILE 08，不新增档案条目，微调八条文案使清河旧案、玄观立观、御敕册封、斩妖护民、异物归观、池边观鱼、器体质显露与真相逼近形成更明确的主线推进
- 强化首页 / 档案总页 / 档案详情页的三层静态卷宗路径，并说明未开放详情的 FILE 作为索引节点保留，不视为断链
- `archive-qinghe.html` 强化清河旧案作为主线钥匙的作用，补足玩家理解男主、女主、器体质与玄观疑云的档案化说明
- `archive-xuanguan.html` 强化御敕玄观的双重性：它确实庇护众人，也确实保存秘密，玩家不能以简单善恶判断山门
- 同步复核 logo / favicon / 导航品牌区一致性，未重新设计 logo，未改动 `script.js`，未新增真实登录、预约、搜索、筛选、分页、评论、收藏、统计、后台、数据库、CMS 或 API

## Stage 4B Day 3D：参赛提交视角的全站文案一致性扫尾

- 统一当前阶段口径为 `Stage 4B / C1 Static Structure Build` 或“静态概念官网作品集项目”，保留 README Development Stages 中的历史阶段记录
- 复核 13 个 HTML 页面均使用 `assets/logo-linyuanxing-navbar.png` 与 `favicon.svg`，不恢复旧 `<span>LYX</span>` 品牌结构
- 补齐关键页面中的角色档案与剧情档案入口，使首页、栏目页、详情页、新闻、预约、登录与 404 均具备清楚回跳路径
- 收紧页脚与边界文案：预约页不收集数据、不提交预约；登录页无真实认证、无账号系统；新闻页无 CMS、后台、动态发布；剧情档案页无搜索、筛选、动态加载
- README 补入 Day 3D、Stage 4B Focus 与简短 C1 提交检查清单，继续明确不接入真实登录、预约、数据库、后台、CMS 或 API

### C1 Submission Checklist

- 页面结构：确认首页、角色档案、剧情档案、详情页、新闻、预约、登录与 404 可访问。
- 静态边界：确认不接入真实登录、预约、数据库、后台、CMS、API 或数据收集。
- 链接稳定：确认关键页面可回到首页，角色档案与剧情档案入口清楚。
- 内容完整度：确认角色档案与剧情档案覆盖当前 Stage 4B 核心结构。
- 作品集表达：确认项目为静态概念官网作品集，不宣称真实游戏上线运营。
- 部署说明：确认继续按静态站点部署，无构建命令、无后端环境。

## Stage 4C：NCDA 1-C1 参赛 MVP 收口

- 当前目标从继续扩充页面转为参赛交付收口：在现有 15 个静态页面基础上，完成三层网页结构、3 分钟宣讲脚本、评委演示路径、匿名合规检查与人工整理参赛材料清单。
- `demo.html` 从旧答辩时长口径统一为 NCDA 1-C1 3 分钟宣讲路径，讲述顺序调整为作品定位、设计目的、三层架构、核心体验、技术路线、创新实用性、当前边界与后续改进。
- README、CODEX 与 C1 提交检查清单同步记录 `archives.html` 世界观档案库、`demo.html` 参赛演示模式、15 页静态结构与最终参赛材料要求。
- 后续执行重点为参赛材料清单：作品简介图说明、展板文案、海报文案、宣讲脚本、匿名检查表与人工打包说明；本地临时整理目录不进入 Git。
- 本阶段仍不新增后端、数据库、真实登录、真实预约、上传、评论、收藏、统计、CMS、API 或大规模视觉重做。
