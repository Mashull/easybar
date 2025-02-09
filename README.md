# 🚀 EasyBar

<div align="center">

![EasyBar Logo](icons/icon128.png)

一个简单而强大的浏览器快速启动工具 | A Quick Launcher for Your Browser

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-green.svg)](https://chrome.google.com/webstore/category/extensions)
[![Version](https://img.shields.io/badge/version-1.0-blue.svg)](https://github.com/edgecat/easybar)
[![License](https://img.shields.io/badge/license-MIT-orange.svg)](LICENSE)

</div>

## ✨ 特性

- 🎯 使用 `Alt+Q` 快捷键快速呼出搜索栏
- 🔍 支持多个主流搜索引擎
- ⌨️ 完全键盘操作体验
- 🎨 简洁优雅的界面设计
- ⚡ 轻量级，不影响浏览器性能

## 🚀 快速开始

### 安装

下载源码手动安装：
   - 下载并解压此仓库
   - 打开 Chrome，访问 `chrome://extensions/`
   - 开启"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择解压后的目录

### 使用方法

1. 按下 `Alt+Q` 呼出搜索栏
2. 输入搜索引擎命令（如：`baidu`）
3. 按 `Tab` 键确认搜索引擎
4. 输入要搜索的内容
5. 按 `Enter` 键执行搜索

## 🔍 支持的搜索引擎

| 命令 | 搜索引擎 | 说明 |
|------|---------|------|
| `baidu` | 百度 | 中文搜索引擎 |
| `google` | Google | 全球搜索引擎 |
| `bing` | Bing | 微软必应搜索(cn.bing.com) |

## ⌨️ 快捷键

| 操作 | 快捷键 | 说明 |
|------|--------|------|
| 呼出搜索栏 | `Alt+Q` | 在任意页面呼出搜索栏 |
| 确认搜索引擎 | `Tab` | 选择要使用的搜索引擎 |
| 执行搜索 | `Enter` | 使用选定的搜索引擎执行搜索 |
| 取消/关闭 | `Esc` | 取消当前操作或关闭搜索栏 |

## 🛠️ 开发

### 目录结构
```
├── manifest.json      # 扩展配置文件
├── popup.html        # 弹出窗口 HTML
├── css/
│   └── popup.css    # 样式文件
├── js/
│   └── popup.js     # 功能实现
└── icons/           # 图标资源
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### 本地开发

1. 克隆仓库
```bash
git clone https://github.com/edgecat/easybar.git
cd easybar
```

2. 在 Chrome 中加载扩展
- 打开 `chrome://extensions/`
- 开启"开发者模式"
- 点击"加载已解压的扩展程序"
- 选择项目目录

## 📝 更新日志

### v1.0
- 🎉 首次发布
- ✨ 支持主流搜索引擎
- 🎨 简洁的用户界面
- ⌨️ 便捷的快捷键操作

## 👨‍💻 作者

**edgecat**

## 📄 许可证

此项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情 