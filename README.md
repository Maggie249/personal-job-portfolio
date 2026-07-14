# Personal Job Portfolio

> 个人求职展示官网 — 极简商务风 · 纯静态 · 适配 GitHub Pages

一款面向互联网行业求职的个人展示型官网，采用 Vibe Coding 理念开发，**极简高级、开箱即用、天然适配 GitHub Pages**。适用于校招/社招简历展示、个人能力背书、HR 线上查阅场景。

---

## 功能特性

- **7 大核心模块**：导航栏、英雄区、个人简介、技能栈、项目经历、教育背景、联系方式 & 页脚
- **极简商务 UI**：低饱和深蓝主色调、分层卡片设计、留白充足、动效克制
- **全端响应式**：PC / 平板 / 手机 自适应，移动端自动折叠汉堡菜单
- **技能进度条动画**：滚动触发入场动画，可视化展示熟练度
- **项目卡片悬浮**：细腻的上浮与阴影效果，结构化展示项目信息
- **联系方式一键复制**：点击手机/邮箱自动复制到剪贴板
- **简历下载预留**：导航栏常驻下载简历按钮
- **滚动导航高亮**：自动追踪当前浏览板块

---

## 技术栈

- **HTML5** — 语义化标签结构
- **Tailwind CSS v3** — 原子化样式，零冗余 CSS
- **原生 JavaScript** — 轻量化交互逻辑
- **GitHub Pages** — 零成本静态部署

---

## 本地运行

```bash
# 克隆仓库
git clone https://github.com/<你的用户名>/personal-job-portfolio.git

# 进入目录
cd personal-job-portfolio

# 直接打开 index.html（无需任何构建步骤）
start index.html   # Windows
open index.html    # macOS
```

无需安装依赖、无需运行构建命令，浏览器直接打开即可运行。

---

## 自定义修改教程

### 1. 替换个人信息

打开 `index.html`，搜索以下占位符并替换：

| 占位符 | 说明 |
|--------|------|
| `张三` | 姓名 |
| `前端开发工程师` | 求职岗位 |
| `前端开发` | 技能方向 |
| `上海` | 工作城市 |
| `138-0000-0000` | 手机号 |
| `zhangsan@example.com` | 邮箱 |
| `github.com/zhangsan` | GitHub 地址 |
| `zhangsan_dev` | 微信 |
| `示例大学` | 院校名称 |
| `计算机科学与技术` | 专业名称 |

### 2. 替换头像

将头像图片放入 `assets/images/` 目录，并在 `index.html` 中修改头像区域的 HTML 代码。

### 3. 修改项目经历

在 `index.html` 的 `#projects` 区块中，每个 `.project-card` 对应一个项目。修改项目名称、时间、技术栈、职责描述和成果数据即可。

### 4. 修改技能与熟练度

在 `index.html` 的 `#skills` 区块中，每个技能条包含 `data-width` 属性（百分比值），修改它即可调整熟练度显示。

### 5. 替换简历 PDF

将简历 PDF 文件放入 `assets/download/` 目录，重命名为 `resume.pdf`。

### 6. 修改样式

- **主色调**：Tailwind CSS 类名中的 `blue-700`、`blue-600` 等为蓝色系，可全局替换为其他色系（如 `emerald-600`、`indigo-700`）
- **自定义样式**：编辑 `css/style.css` 文件

---

## 部署方式（GitHub Pages）

### 方案一：GitHub Pages 直连部署

1. 在 GitHub 新建公开仓库，仓库名 `personal-job-portfolio`
2. 将本项目所有文件上传至仓库根目录
3. 进入仓库 **Settings → Pages**
4. **Source** 选择 `Deploy from a branch`
5. **Branch** 选择 `main`，**目录** 选择 `/ (root)`
6. 点击 **Save**
7. 等待 1-2 分钟，访问 `https://<你的用户名>.github.io/personal-job-portfolio`

### 方案二：Vercel / Netlify 部署

直接拖拽项目文件夹到对应平台即可，零配置。

---

## 项目结构

```
personal-job-portfolio/
├── index.html           # 主页面（核心）
├── css/
│   └── style.css        # 自定义样式
├── js/
│   └── main.js          # 交互逻辑
├── assets/
│   ├── images/          # 头像、项目截图
│   └── download/
│       └── resume.pdf   # 简历文件（预留）
├── .gitignore
└── README.md
```

---

## 开源说明

本项目采用 MIT 协议开源，您可以自由使用、修改和分发。如果您觉得本项目有帮助，欢迎点个 Star ⭐
