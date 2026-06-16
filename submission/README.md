# NCDA 1-C1 Submission Pack

本目录用于集中管理《临渊行》参赛 MVP 材料。网站本体保持纯静态 HTML / CSS / JavaScript；本目录只放参赛说明、脚本、检查表和生成后的交付文件。

## Target

- 赛道方向：NCDA 1-C1 交互网页设计
- 作品定位：原创国风志怪 IP 静态交互网页展示
- MVP 范围：现有 15 个静态 HTML 页面，不继续扩充内容页
- 交付边界：不接入后端、数据库、真实登录、真实预约、CMS、后台或 API

## Deliverables

生成后的文件位于 `submission/artifacts/`：

- `linyuanxing-work-intro-920x640.jpg`：作品简介图，920×640 px
- `linyuanxing-board-60x80cm.jpg`：60×80cm 展板图，按 150 DPI 生成
- `linyuanxing-poster-a3.jpg`：A3 宣传海报图，按 150 DPI 生成
- `linyuanxing-3min-pitch.mp4`：3 分钟字幕版宣讲视频
- `linyuanxing-ncda-c1-site.zip`：可运行静态网站 ZIP
- `mvp-verification-report.md`：最终验收记录

## Generate

在仓库根目录运行：

```powershell
python submission\generate_materials.py
```

## Anonymous Rule

评委材料不得出现学校、学院、专业班级、作者姓名、指导老师姓名、学号、赛事官方标识或其他可识别身份信息。署名版材料如后续需要，应单独存放，不混入匿名评审包。
