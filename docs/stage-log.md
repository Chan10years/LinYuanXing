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
