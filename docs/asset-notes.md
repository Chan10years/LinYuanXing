# Asset Notes

## Purpose

本文档用于记录《临渊行》静态概念官网当前资源使用情况与后续可优化方向。

当前阶段以不破坏现有静态运行、不改变视觉风格为前提，只做交付说明，不直接替换或压缩仓库内媒体文件。

## Current Observations

- 资源目录结构当前较清晰，图片与视频已分别放在 `assets/images/` 和 `assets/videos/`
- 文件命名存在两种风格并行：
  - 编号加语义名，如 `1.hero.png`、`6.imperial-taoist-temple.png`
  - 纯语义名或语义加序号，如 `gallery-2.jpg`、`citystreet-3.jpg`
- 这种混合命名不影响当前静态运行，但后续如果继续扩展素材，建议统一一套命名规则

## Image Naming Suggestions

- 建议后续新增资源优先采用统一格式，例如 `scene-ancient-city-01.jpg`、`character-male-lead-01.png`
- 若继续保留现有编号前缀，建议统一编号位数和语义顺序，避免后续排序混乱
- 不建议在 Stage 4A 直接批量改名，避免影响页面引用路径与部署稳定性

## Large Media Notes

当前仓库内较大的媒体资源包括：

- `assets/videos/pv.mp4`：约 110 MB
- `assets/videos/male-lead-offenceskill.mp4`：约 95 MB
- 多张 PNG 场景图约 2 MB 到 3 MB 左右

这些体积对于作品集演示尚可运行，但会增加首屏等待、仓库体积和 Netlify 部署后的初次加载成本。

## Poster Suggestions

- 主 PV 视频已经具备 `poster` 图，这是较好的静态站点做法
- 角色内嵌视频目前以 `preload="metadata"` 为主，后续若要进一步优化，可按需补充更轻量的 poster 缩略图
- poster 图建议优先使用已经存在的场景或角色静帧，不必在当前阶段额外生成复杂资源

## Compression Directions

- 后续可优先压缩大体积 MP4，控制码率与分辨率，保留观感但降低仓库负担
- 大尺寸 PNG 若没有透明通道需求，可考虑转为高质量 JPG 或更轻的 WebP
- 对仅用于灯箱补充展示的素材，可额外准备一版演示用中等分辨率文件
- 若未来继续扩展作品集展示，可在保留原文件的同时补一套 `-web` 版本资源

## Static Delivery Notes

- 当前不要直接移动或重排 `assets/` 目录，避免破坏 HTML 中的相对路径
- 当前不要批量重命名媒体文件，除非同步完成页面引用核对
- 当前不要为了压缩而替换素材风格，Stage 4A 的目标是交付质量说明，不是视觉重做
- 若后续进入 Stage 4B，可把资源体积控制和截图补全作为单独的轻量优化任务
