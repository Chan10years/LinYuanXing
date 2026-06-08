from __future__ import annotations

import os
import shutil
import subprocess
import textwrap
import zipfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "submission" / "artifacts"
SLIDES = OUT / "video-slides"

FONT_REGULAR = Path(r"C:\Windows\Fonts\NotoSansSC-VF.ttf")
FONT_SERIF = Path(r"C:\Windows\Fonts\NotoSerifSC-VF.ttf")
FONT_BOLD = Path(r"C:\Windows\Fonts\simhei.ttf")

BG = ROOT / "assets" / "images" / "1.hero.png"
LOGO = ROOT / "assets" / "logo-linyuanxing-navbar.png"

INK = (235, 225, 210)
MUTED = (190, 174, 150)
GOLD = (202, 166, 88)
RED = (102, 28, 24)
BG_DARK = (16, 14, 12)
PANEL = (30, 26, 22)


def font(size: int, bold: bool = False, serif: bool = False) -> ImageFont.FreeTypeFont:
    path = FONT_BOLD if bold else FONT_SERIF if serif else FONT_REGULAR
    return ImageFont.truetype(str(path), size)


def cover_image(path: Path, size: tuple[int, int], opacity: float = 1.0) -> Image.Image:
    img = Image.open(path).convert("RGB")
    img = ImageOps.fit(img, size, method=Image.Resampling.LANCZOS)
    if opacity < 1:
        img = ImageEnhance.Brightness(img).enhance(opacity)
    return img


def add_overlay(img: Image.Image, alpha: int = 154) -> Image.Image:
    overlay = Image.new("RGBA", img.size, (*BG_DARK, alpha))
    return Image.alpha_composite(img.convert("RGBA"), overlay)


def draw_logo(draw: ImageDraw.ImageDraw, img: Image.Image, x: int, y: int, width: int) -> None:
    logo = Image.open(LOGO).convert("RGBA")
    ratio = width / logo.width
    logo = logo.resize((width, int(logo.height * ratio)), Image.Resampling.LANCZOS)
    img.alpha_composite(logo, (x, y))


def wrap_by_width(draw: ImageDraw.ImageDraw, text: str, ft: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    lines: list[str] = []
    for para in text.split("\n"):
        para = para.strip()
        if not para:
            lines.append("")
            continue
        line = ""
        for char in para:
            test = line + char
            if draw.textlength(test, font=ft) <= max_width:
                line = test
            else:
                if line:
                    lines.append(line)
                line = char
        if line:
            lines.append(line)
    return lines


def draw_wrapped(draw: ImageDraw.ImageDraw, xy: tuple[int, int], text: str, ft: ImageFont.FreeTypeFont,
                 fill: tuple[int, int, int], max_width: int, line_gap: int = 8) -> int:
    x, y = xy
    for line in wrap_by_width(draw, text, ft, max_width):
        draw.text((x, y), line, font=ft, fill=fill)
        y += ft.size + line_gap
    return y


def card(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], title: str, body: str,
         title_size: int, body_size: int) -> None:
    x1, y1, x2, y2 = box
    draw.rounded_rectangle(box, radius=18, fill=PANEL, outline=(88, 72, 48), width=2)
    draw.text((x1 + 28, y1 + 24), title, font=font(title_size, bold=True), fill=GOLD)
    draw_wrapped(draw, (x1 + 28, y1 + 24 + title_size + 18), body, font(body_size), INK, x2 - x1 - 56, 8)


def make_intro() -> None:
    size = (920, 640)
    img = add_overlay(cover_image(BG, size), 172)
    draw = ImageDraw.Draw(img)
    draw_logo(draw, img, 40, 34, 168)
    draw.text((40, 122), "临渊行", font=font(54, bold=True, serif=True), fill=INK)
    draw.text((42, 190), "NCDA 1-C1 交互网页设计参赛 MVP", font=font(24, bold=True), fill=GOLD)
    draw_wrapped(draw, (42, 236), "原创国风志怪 IP 静态交互网页展示。作品通过首页、世界观档案库、角色档案、剧情档案与参赛演示模式，展示内容包装、信息架构和纯前端落地能力。", font(22), INK, 500, 10)

    items = [
        ("设计目的", "让原创 IP 不止停留在海报和简介，而是形成可浏览、可讲述、可提交的网页体验。"),
        ("技术路线", "HTML / CSS / JavaScript，纯静态部署，无后端、数据库、CMS 或 API。"),
        ("当前功能", "15 个静态页面、PV 展示、角色弹层、地图灯箱、Lore 折叠、档案筛选。"),
        ("创新实用", "把宣传页、设定集和路演说明整合为一套交互式 IP 展示系统。"),
    ]
    x, y = 560, 102
    for title, body in items:
        card(draw, (x, y, 875, y + 116), title, body, 20, 15)
        y += 128
    draw.text((42, 574), "匿名评审版：不含学校、作者、指导老师或赛事官方标识", font=font(18), fill=MUTED)
    img.convert("RGB").save(OUT / "linyuanxing-work-intro-920x640.jpg", quality=94)


def make_board() -> None:
    size = (3543, 4724)
    img = add_overlay(cover_image(BG, size), 185)
    draw = ImageDraw.Draw(img)
    draw_logo(draw, img, 180, 150, 520)
    draw.text((180, 430), "临渊行", font=font(188, bold=True, serif=True), fill=INK)
    draw.text((188, 645), "原创国风志怪 IP 静态交互网页展示", font=font(58, bold=True), fill=GOLD)
    draw_wrapped(draw, (188, 745), "面向 NCDA 1-C1 交互网页设计方向，作品在 15 个静态页面中完成首页、栏目页与详情页三层结构，形成可打开、可浏览、可讲述、可打包提交的参赛 MVP。", font(45), INK, 1500, 18)

    sections = [
        ("01 作品定位", "静态概念游戏官网与原创 IP 宣发系统，不是已上线运营的真实游戏产品。"),
        ("02 三层结构", "首页总览 / 角色档案、剧情档案、世界观档案库 / 角色与剧情详情页。"),
        ("03 核心交互", "PV 播放、角色弹层、地图灯箱、Lore 折叠、世界观档案本地筛选。"),
        ("04 技术路线", "HTML、CSS、JavaScript，无构建命令、无后端、无数据库、无接口请求。"),
        ("05 创新价值", "将宣传页、设定集、地图线索和路演说明整合成一套网页化叙事体验。"),
        ("06 参赛边界", "登录与预约为静态占位，不收集信息，不提供真实账号、预约或运营服务。"),
    ]
    col_w = 1010
    start_x, start_y = 180, 1180
    for idx, (title, body) in enumerate(sections):
        col = idx % 3
        row = idx // 3
        x = start_x + col * (col_w + 80)
        y = start_y + row * 610
        card(draw, (x, y, x + col_w, y + 500), title, body, 54, 37)

    draw.text((180, 2630), "评委浏览路径", font=font(72, bold=True), fill=GOLD)
    route = "参赛演示模式 → 首页首屏 → PV → 地图寻迹 → 世界观档案库 → 角色档案 → 剧情档案 → Project 说明"
    draw_wrapped(draw, (180, 2740), route, font(48, bold=True), INK, 3100, 20)

    draw.text((180, 3120), "当前完成", font=font(72, bold=True), fill=GOLD)
    done = "15 个 HTML 页面 / 角色档案与四名角色详情 / 剧情档案与两份详情卷宗 / 世界观五类档案筛选 / 3 分钟参赛演示路径 / 可运行静态 ZIP"
    draw_wrapped(draw, (180, 3230), done, font(46), INK, 3100, 20)

    draw.text((180, 3710), "匿名合规", font=font(72, bold=True), fill=GOLD)
    compliance = "本展板为匿名评审材料，不含学校、作者、指导老师、学号或赛事官方标识。作品边界清楚：不接入真实登录、预约、后台、数据库、CMS 或 API。"
    draw_wrapped(draw, (180, 3820), compliance, font(44), INK, 3100, 20)

    draw.line((180, 4390, 3360, 4390), fill=(104, 84, 54), width=3)
    draw.text((180, 4450), "NCDA 1-C1 交互网页设计 · 参赛 MVP", font=font(42), fill=MUTED)
    img.convert("RGB").save(OUT / "linyuanxing-board-60x80cm.jpg", quality=94, dpi=(150, 150))


def make_poster() -> None:
    size = (1754, 2480)
    img = add_overlay(cover_image(BG, size), 165)
    draw = ImageDraw.Draw(img)
    draw_logo(draw, img, 105, 110, 330)
    draw.text((105, 360), "临渊行", font=font(154, bold=True, serif=True), fill=INK)
    draw_wrapped(draw, (112, 560), "原创国风志怪 IP 静态交互网页展示", font(52, bold=True), GOLD, 1200, 16)
    draw_wrapped(draw, (112, 720), "以网页作为设定集、宣传页与路演入口，将角色、地图、剧情档案和世界观线索组织成可浏览的三层静态结构。", font(42), INK, 1250, 20)

    card(draw, (110, 1110, 800, 1450), "三层网页结构", "首页总览、栏目索引、详情卷宗，评委可沿演示路径快速验证完成度。", 42, 30)
    card(draw, (950, 1110, 1645, 1450), "核心体验", "PV、地图灯箱、角色弹层、Lore 折叠和世界观档案筛选。", 42, 30)
    card(draw, (110, 1530, 800, 1870), "技术路线", "HTML / CSS / JavaScript，解压 ZIP 即可运行，无后端依赖。", 42, 30)
    card(draw, (950, 1530, 1645, 1870), "参赛边界", "静态展示版本，不接入真实登录、预约、数据库、CMS 或 API。", 42, 30)

    draw.text((112, 2090), "NCDA 1-C1 交互网页设计参赛 MVP", font=font(38, bold=True), fill=GOLD)
    draw.text((112, 2155), "匿名评审版 · 不含学校、作者、指导老师或赛事官方标识", font=font(31), fill=MUTED)
    img.convert("RGB").save(OUT / "linyuanxing-poster-a3.jpg", quality=94, dpi=(150, 150))


VIDEO_SECTIONS = [
    ("00:00-00:25", "作品定位", "原创国风志怪 IP 静态交互网页展示，用网页呈现世界观、人物关系、视觉调性与宣发路径。"),
    ("00:25-00:50", "设计目的", "把原本分散的海报、简介和设定内容组织为可浏览、可讲述、可提交的网页体验。"),
    ("00:50-01:20", "三层网页结构", "首页总览，栏目页承接角色、剧情与世界观，详情页补足单个卷宗的叙事深度。"),
    ("01:20-01:50", "核心体验", "PV 展示、角色弹层、地图灯箱、剧情卷宗、世界观档案筛选和参赛演示路径。"),
    ("01:50-02:15", "技术路线", "HTML、CSS、JavaScript 原生实现，无构建命令、无后端、无数据库、无接口请求。"),
    ("02:15-02:40", "创新与实用性", "把宣传页、设定集和路演说明整合为一套静态 Web 展示系统。"),
    ("02:40-02:55", "当前边界", "登录和预约只做静态占位，不收集用户信息，不模拟真实业务能力。"),
    ("02:55-03:00", "结束语", "让原创 IP 在网页中被看见、被理解、被验证，并为后续原型留下清晰基础。"),
]


def make_video_slides() -> list[Path]:
    SLIDES.mkdir(parents=True, exist_ok=True)
    paths: list[Path] = []
    for i, (time_range, title, body) in enumerate(VIDEO_SECTIONS, 1):
        img = add_overlay(cover_image(BG, (1920, 1080)), 178)
        draw = ImageDraw.Draw(img)
        draw_logo(draw, img, 96, 74, 300)
        draw.text((96, 210), f"{i:02d}", font=font(72, bold=True), fill=GOLD)
        draw.text((210, 222), time_range, font=font(40, bold=True), fill=MUTED)
        draw.text((96, 330), title, font=font(86, bold=True, serif=True), fill=INK)
        draw_wrapped(draw, (100, 480), body, font(50), INK, 1220, 24)
        draw.text((100, 930), "《临渊行》NCDA 1-C1 参赛 MVP · 匿名评审版", font=font(32), fill=MUTED)
        path = SLIDES / f"slide-{i:02d}.jpg"
        img.convert("RGB").save(path, quality=94)
        paths.append(path)
    return paths


def find_ffmpeg() -> Path | None:
    candidates = [
        shutil.which("ffmpeg"),
        r"C:\Program Files (x86)\Lenovo\LegionZone\2.0.24.5141\SEGamingAI\services\editor\ffmpeg.exe",
    ]
    for item in candidates:
        if item and Path(item).exists():
            return Path(item)
    return None


def make_video() -> bool:
    slides = make_video_slides()
    ffmpeg = find_ffmpeg()
    if not ffmpeg:
        return False
    concat = OUT / "video-slides.txt"
    # The concat demuxer keeps the final repeated image briefly, so the listed
    # durations intentionally sum to 175 seconds to produce a 3 minute MP4.
    durations = [25, 25, 30, 30, 25, 25, 10, 5]
    with concat.open("w", encoding="utf-8") as f:
        for path, duration in zip(slides, durations):
            f.write(f"file '{path.as_posix()}'\n")
            f.write(f"duration {duration}\n")
        f.write(f"file '{slides[-1].as_posix()}'\n")
    output = OUT / "linyuanxing-3min-pitch.mp4"
    attempts = [
        ["-c:v", "libx264", "-movflags", "+faststart"],
        ["-c:v", "mpeg4", "-q:v", "4"],
    ]
    last_error = ""
    for codec_args in attempts:
        cmd = [
            str(ffmpeg), "-y", "-f", "concat", "-safe", "0", "-i", str(concat),
            "-vf", "fps=30,format=yuv420p", *codec_args, str(output),
        ]
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if result.returncode == 0 and output.exists():
            return True
        last_error = result.stderr[-1200:]
    (OUT / "video-generation-error.txt").write_text(last_error, encoding="utf-8")
    return output.exists()


NARRATION_TEXT = """《临渊行》是一套面向 NCDA 1-C1 交互网页设计方向的原创国风志怪 IP 静态展示网站。它不是一款已经上线运营的游戏，而是用网页结构展示世界观包装、人物关系、视觉调性与宣发路径的参赛 MVP。
很多原创内容项目只有海报和简介，评委难以快速判断故事厚度、视觉统一性和后续扩展空间。本作品希望用网页把角色、地图、剧情档案和世界观设定组织成可浏览、可讲述、可提交的体验。
网站采用首页、栏目页、详情页的三层结构。首页负责建立第一印象；角色档案、剧情档案和世界观档案库负责分类浏览；角色和剧情详情页负责补足单个条目的叙事深度。
当前版本包含沉浸式首页、PV 展示、角色弹层、地图灯箱、剧情卷宗、世界观档案分类筛选和参赛演示模式。评委可以从演示页进入核心页面，也可以沿首页逐步浏览完整路径。
项目使用 HTML、CSS 和原生 JavaScript 实现，不依赖框架、构建工具、后端、数据库或 API。解压 ZIP 后可以直接打开 index 页面，也可以部署到 Netlify 或 GitHub Pages。
作品把传统宣传页、设定集和路演说明整合成一套静态 Web 展示系统，用志怪卷宗、档案分类和场景线索表达原创 IP 的扩展潜力，可用于学生路演、作品集展示和游戏概念提案。
参赛版本明确不接入真实登录、预约、数据收集、后台、CMS 或接口请求。登录页和预约页只是静态占位，用来说明未来方向，而不是模拟真实业务系统。
《临渊行》的 MVP 目标是让原创 IP 在网页中被看见、被理解、被验证，并为后续高保真原型留下清晰基础。"""


def add_narration_to_video() -> bool:
    ffmpeg = find_ffmpeg()
    video = OUT / "linyuanxing-3min-pitch.mp4"
    if not ffmpeg or not video.exists():
        return False
    wav = OUT / "linyuanxing-3min-narration.wav"
    text_path = OUT / "narration-text.txt"
    text_path.write_text(NARRATION_TEXT, encoding="utf-8")
    ps = (
        "Add-Type -AssemblyName System.Speech; "
        "$s=New-Object System.Speech.Synthesis.SpeechSynthesizer; "
        "$s.SelectVoice('Microsoft Huihui Desktop'); "
        "$s.Rate=1; "
        f"$text=Get-Content -Raw -Encoding UTF8 '{text_path}'; "
        f"$s.SetOutputToWaveFile('{wav}'); "
        "$s.Speak($text); "
        "$s.Dispose();"
    )
    result = subprocess.run(["powershell", "-NoProfile", "-Command", ps], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if result.returncode != 0 or not wav.exists():
        (OUT / "narration-generation-error.txt").write_text(result.stderr[-1200:], encoding="utf-8")
        return False
    tmp = OUT / "linyuanxing-3min-pitch-with-audio.mp4"
    cmd = [
        str(ffmpeg), "-y", "-i", str(video), "-i", str(wav),
        "-map", "0:v:0", "-map", "1:a:0", "-c:v", "copy", "-c:a", "aac",
        "-b:a", "128k", "-t", "180", str(tmp),
    ]
    result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if result.returncode == 0 and tmp.exists():
        tmp.replace(video)
        return True
    (OUT / "narration-mux-error.txt").write_text(result.stderr[-1200:], encoding="utf-8")
    return False


def make_zip() -> Path:
    output = OUT / "linyuanxing-ncda-c1-site.zip"
    if output.exists():
        output.unlink()
    include_ext = {".html", ".css", ".js", ".svg", ".md", ".png", ".jpg", ".jpeg", ".mp4"}
    skip_dirs = {".git", ".vscode", "submission"}
    with zipfile.ZipFile(output, "w", zipfile.ZIP_DEFLATED) as zf:
        for path in ROOT.rglob("*"):
            if path.is_dir():
                continue
            rel = path.relative_to(ROOT)
            if any(part in skip_dirs for part in rel.parts):
                continue
            if path.suffix.lower() not in include_ext:
                continue
            zf.write(path, rel.as_posix())
    return output


def write_report(video_ok: bool, narration_ok: bool, zip_path: Path) -> None:
    report = OUT / "mvp-verification-report.md"
    report.write_text(textwrap.dedent(f"""\
        # MVP Verification Report

        ## Generated Artifacts

        - `linyuanxing-work-intro-920x640.jpg`
        - `linyuanxing-board-60x80cm.jpg`
        - `linyuanxing-poster-a3.jpg`
        - `linyuanxing-3min-pitch.mp4`: {'generated with narration' if video_ok and narration_ok else 'generated' if video_ok else 'not generated; ffmpeg unavailable'}
        - `{zip_path.name}`

        ## Scope

        - Website keeps 15 static HTML pages.
        - Materials use anonymous review wording.
        - No backend, database, real login, real reservation, CMS, admin system or API is added.
        - ZIP excludes `.git`, `.vscode`, `submission/artifacts` and local temporary files.

        ## Manual Final Checks

        - Open `demo.html` and confirm the 3 minute route.
        - Open `index.html`, `archives.html`, `characters.html`, and `archive.html`.
        - Preview board, poster, and intro image before uploading.
        - Preview the generated narration for pronunciation before upload.
        """), encoding="utf-8")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    make_intro()
    make_board()
    make_poster()
    video_ok = make_video()
    narration_ok = add_narration_to_video() if video_ok else False
    zip_path = make_zip()
    write_report(video_ok, narration_ok, zip_path)
    print(f"Artifacts written to {OUT}")


if __name__ == "__main__":
    main()
