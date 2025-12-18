# Antigravity Tools (2API 版本) 🚀

<div align="center">
  <img src="public/icon.png" alt="Antigravity Logo" width="120" height="120" style="border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">

  <h3>不仅仅是账号管理，更是您的个人 AI 网关</h3>
  <p>完美代理 Gemini & Claude，兼容 OpenAI 协议，打破调用限制。</p>
  
  <p>
    <a href="https://github.com/lbjlaq/Antigravity-Manager">
      <img src="https://img.shields.io/badge/Version-3.1.0-blue?style=flat-square" alt="Version">
    </a>
    <img src="https://img.shields.io/badge/Tauri-v2-orange?style=flat-square" alt="Tauri">
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square" alt="React">
    <img src="https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-lightgrey?style=flat-square" alt="License">
  </p>

  <p>
    <a href="#-Downloads">📥 下载最新版</a> • 
    <a href="#-API-Proxy">🔌 API 反代 (新!)</a> • 
    <a href="#-Features">✨ 账号管理</a>
  </p>

  <p>
    <strong>🇨🇳 简体中文</strong> | 
    <a href="./README_EN.md">🇺🇸 English</a>
  </p>
</div>

---

**Antigravity Tools 2API** 次世代版本发布！这不仅仅是一个账号管理器，它将您的桌面变成了一个强大的 **本地 AI 网关 (Local AI Gateway)**。

通过内置的高性能 Rust 反代服务，您可以将浏览器中的 Web Session (`sid`, `__Secure-1PSID` 等) 转化为标准的 **OpenAI API** 接口。这意味着您可以在 **Cherry Studio**, **NextChat**, **LangChain** 等任何支持 OpenAI 协议的应用中，无缝调用 Gemini 和 Claude 的高级模型能力。（注：Cursor, Windsurf 暂不兼容）

> **寻找旧版文档?**
> v2.0 纯账号管理版本的文档已移动至 [README_v2.md](./README_v2.md)。

## 🔌 深度解析：API 反代服务 (API Proxy)

Antigravity 的反代服务并非简单的请求转发，而是一个完整的 **本地 AI 调度中心**。

<div align="center">
  <img src="docs/images/v3/proxy-settings.png" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <p><i>(极简配置，一键启动)</i></p>
</div>

### 1. 🔄 智能账号轮询 (Smart Rotation)
当您添加了多个账号时，反代服务会自动接管调度：
- **负载均衡**: 自动在可用账号间轮询，避免单账号高频请求。
- **自动故障转移 (Failover)**: 当某个账号触发 `429 Too Many Requests` 或 `400 Bad Request` 时，系统会 **毫秒级** 自动切换到下一个健康账号重试，用户端几乎无感。
- **配额感知**: 自动跳过配额耗尽的账号。

### 2. 🧠 完美上下文 (Context)
完全兼容 OpenAI `messages` 格式，支持多轮对话。无论您使用 NextChat, Chatbox 还是 Cursor，对话历史都能完美保留。

<div align="center">
  <img src="docs/images/v3/proxy-chat-demo.png" width="80%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <p><i>(多轮对话测试 @ NextChat)</i></p>
</div>

### 3. 🛡️ 隐私与安全
- **零日志**: 我们不记录您的任何对话内容。
- **直连** (可选): 默认通过本地代理直连 Google/Anthropic 服务器,数据不经过任何第三方中转（前提是您的网络环境允许）。

### 4. 🔗 多协议支持 (NEW!)
除了 OpenAI 协议,现在完美支持 **Anthropic API** 格式:
- **OpenAI 协议**: `/v1/chat/completions` - 兼容 Cherry Studio, NextChat 等 (Cursor, Windsurf 暂不兼容)
- **Anthropic 协议**: `/v1/messages` - 原生支持 Claude Code CLI 等工具
- **自动转换**: 无论使用哪种协议,底层都会自动转换为 Gemini 格式,实现完美兼容

<details>
<summary>📘 Claude Code CLI 配置指南</summary>

#### 快速配置

**临时使用** (每次打开终端时运行):
```bash
export ANTHROPIC_API_KEY="sk-antigravity"  # 使用应用生成的 API Key
export ANTHROPIC_BASE_URL="http://127.0.0.1:8045"
claude "写一个快速排序算法"
```

**永久配置** (一次设置,永久生效):
```bash
# 编辑配置文件 (macOS/Linux)
nano ~/.zshrc

# 添加以下内容到文件末尾
export ANTHROPIC_API_KEY="sk-antigravity"
export ANTHROPIC_BASE_URL="http://127.0.0.1:8045"

# 保存后重新加载
source ~/.zshrc
```

#### 使用示例

```bash
# 基本对话
claude "1+1 等于几"

# 多轮对话
claude "我问了什么问题"

# 代码生成
claude "用 Python 写一个快速排序算法"
```

#### 注意事项

1. **确保服务运行**: 使用前确保 Antigravity API 代理服务正在运行
2. **API Key**: 在 "API 反代" 页面复制生成的 API Key
3. **端口配置**: 默认端口 8045,如有修改需同步更新 `ANTHROPIC_BASE_URL`

</details>

### 🖼️ 能力展示 (Showcase)

<div align="center">

| **Gemini 3 Pro Image (Imagen 3)** | **Claude 3.5 Sonnet (Thinking)** |
| :---: | :---: |
| <img src="docs/images/v3/gemini-image-edit.jpg" width="100%" style="border-radius: 8px;"> | <img src="docs/images/v3/claude-code-gen.png" width="100%" style="border-radius: 8px;"> |
| **NextChat - 图像编辑/生成** | **Windsurf/Cursor - 复杂代码生成** |

</div>

## ✨ 经典功能：账号管理

- **Token 自动保活**: 自动刷新过期 Token，确保随时可用。
- **可视化配额**:
    - **文本额度**: 精确显示 Gemini Pro / Claude 3.5 Sonnet 剩余百分比。
    - **图片额度 (新)**: 新增 Gemini Image (Vision) 额度监控，绘图/识图不再盲目。
- **账号切换**: 一键将账号 Token 注入到本地 Antigravity 数据库，实现无缝切换。
- **托盘常驻**: 极简托盘菜单，随时查看核心指标。

## � 快速开始

### 1. 添加账号
在 **"账号列表"** 页面，通过 OAuth 登录或手动粘贴 Token 添加您的 Google/Anthropic 账号。

### 2. 启动服务
进入 **"API 反代"** 页面：
1. 配置端口 (默认 8045)。
2. 点击 **"启动服务"**。
3. 复制生成的 **API Key** (默认为 `sk-antigravity`)。

### 3. 连接使用
在任何 AI 应用中配置：
- **Base URL**: `http://localhost:8045/` (部分应用可能需要填写 `http://localhost:8045/v1`)
- **Key**: `sk-antigravity` (任意不为空的字符串)
- **Model**: 请使用以下支持的模型 ID

#### 📚 支持的模型列表 (Supported Models)

| 模型 ID | 说明 |
| :--- | :--- |
| **gemini-3-flash** | **Gemini 3 Flash**。最新一代闪电模型 (Native)。 |
| **gemini-3-pro-high** | **Gemini 3 Pro**。Google 最强 reasoning 模型。 |
| **gemini-3-pro-low** | **Gemini 3 Pro (Low)**。低配额消耗版。 |
| **gemini-2.5-pro** | **Gemini 2.5 Pro**。平衡型主力模型。 |
| **gemini-2.5-flash** | **Flash 2.5**。极速响应，超高性价比。 |
| **gemini-2.5-flash-lite** | **Flash 2.5 Lite**。轻量级极致速度。 |
| **gemini-2.5-flash-thinking** | **Flash Thinking**。具备思考能力的模型 (注意：易触发限流)。 |
| **claude-sonnet-4-5** | **Claude 3.5 Sonnet**。(映射) 代码与逻辑推理首选 (Native)。 |
| **claude-sonnet-4-5-thinking** | **Sonnet Thinking**。开启了思维链的 Sonnet (Native)。 |
| **claude-opus-4-5-thinking** | **Opus Thinking**。Claude 最强思维模型 (Native)。 |
| **gemini-3-pro-image** | **Imagen 3**。绘图专用模型 (默认 1:1 正方形)。 |
| **gemini-3-pro-image-16x9** | **Imagen 3 横屏**。生成 16:9 横向图片。 |
| **gemini-3-pro-image-9x16** | **Imagen 3 竖屏**。生成 9:16 手机壁纸。 |
| **gemini-3-pro-image-4k** | **Imagen 3 高清**。生成 4K 超清图 (1:1)。 |

#### 🎨 图片生成高级控制

针对 `gemini-3-pro-image` 模型,您可以通过以下方式控制生成图片的分辨率和比例:

**方式 1: 使用模型后缀 (推荐,适用于 Cherry Studio 等客户端)**
- 直接选择带后缀的模型名即可自动应用配置
- 例如: 选择 `gemini-3-pro-image-16x9` 即可生成横屏图片

**方式 2: 使用 API 参数**
如果您使用的客户端支持自定义参数,可以在请求中添加:
```json
{
  "model": "gemini-3-pro-image",
  "size": "1792x1024",     // 控制比例 (可选: 1024x1024, 1792x1024, 1024x1792, 1024x768, 768x1024)
  "quality": "hd"          // 控制分辨率 (可选: standard, hd)
}
```

> 💡 **提示**: 反代服务支持透传所有 Google/Anthropic 官方模型 ID，您可以直接使用官方文档中的任何模型名称。


## 🔄 版本更新

### v3.1.0 (2025-12-18)

#### 🚀 Claude Code 深度支持
- **全系模型适配**：完美支持 Claude 3.5 Sonnet / Haiku / Opus 及其 4.5 预览版
- **Thinking 模型原生支持**：
  - 自动识别并处理 `thinking` 思维链内容
  - 适配 **Gemini 2.0 Flash Thinking** 和 **Claude Sonnet Thinking**
  - 智能预算控制：默认 `8k` 思考预算，最大化推理能力
- **System Prompt 完美支持**：
  - 正确解析并传递 `system` 角色提示词，确保复杂任务的角色设定生效
  - 完美兼容 Claude Code 的各类系统指令

#### ⚡ 核心反代重构
- **SSE 状态机重写**：采用全新的状态机处理流式响应，彻底解决 `Thinking` 块与 `Text` 块的转换问题
- **智能空响应处理**：
  - 自动过滤无效的空 Chunk，解决 CLI 挂起问题
  - 增强的预检机制，提前拦截 404/403 错误
- **模型热重载**：修改模型映射配置后实时生效，无需重启服务

#### 🐛 关键修复
- **404 Not Found 修复**：为 `gemini-3-flash` 等预览模型添加内部别名映射
- **UTF-8 编码修复**：解决流式日志截断导致的 Panic 问题
- **Claude CLI 兼容性**：修复 `signature` 字段导致的各种 CLI 报错


### v3.0.3 (2025-12-17)
- **✨ Refresh Token 批量导入**: 支持 JSON 数组和 Regex 智能提取，一次性导入多个账号
- **🐛 修复 Claude CLI 空响应**: 彻底解决 `MALFORMED_FUNCTION_CALL` 和 `thoughtSignature` 导致的空文本问题
- **⚡ API 代理优化**: 提升 maxOutputTokens 至 16384，优化 403 错误处理

### v3.0.2 (2025-12-17)

#### 🔧 API 代理优化
- **403 错误智能处理**：账号遇到 403 Forbidden 时立即识别并标记,不再重试浪费时间
  - 自动标记为 "forbidden" 状态
  - 批量刷新时自动跳过 403 账号
  - 节省 3+ 秒响应时间

- **Claude CLI 响应优化**：修复空响应和 JSON 格式问题
  - 增加 `maxOutputTokens` 从 8096 到 16384,支持更长回复
  - 移除 `toolConfig` 避免 MALFORMED_FUNCTION_CALL 错误
  - 添加详细诊断日志,记录 Gemini 原始响应

- **日志系统增强**：
  - 空文本响应时记录完整 candidates 数据
  - 日志显示长度从 60 增加到 100 字符
  - 区分空响应和正常响应的日志级别

#### 🐛 Bug 修复
- **OAuth 环境检查优化**：简化 Tauri 环境检查逻辑,只验证 `invoke` 函数可用性
  - 移除对 `window.__TAURI__` 的检查
  - 避免在某些 Tauri 版本中的误报

### v3.0.1 (2025-12-17)

#### 🎉 新功能
- **Anthropic API 支持**：新增 `/v1/messages` 端点,完美支持 Claude Code CLI 等原生 Anthropic 工具
  - 自动转换 Anthropic 请求格式为 Gemini
  - 支持完整的 SSE 流式响应（`message_start`, `content_block_delta` 等事件）
  - 兼容 `system` 提示词

#### 🔧 Bug 修复
- **macOS 15.x 账号切换优化**：重构进程关闭逻辑，采用 PID 精确控制 + SIGTERM → SIGKILL 渐进式策略，解决部分用户"无法关闭 Antigravity 进程"的问题
  - 超时时间从 10 秒增加到 20 秒
  - 添加详细日志输出便于诊断

#### ✨ 功能增强
- **图像生成能力提升**：新增更多图片尺寸比例选项
  - 新增模型：`gemini-3-pro-image-4x3`, `gemini-3-pro-image-3x4`, `gemini-3-pro-image-4k`, `gemini-3-pro-image-16x9-4k`
  - 支持参数控制：`size` 参数新增 `1024x768` (4:3) 和 `768x1024` (3:4)
  - 支持 4K 高清：通过后缀 `-4k` 或参数 `"quality": "hd"` 启用

### v3.0.0 (2025-12-16)
- 🚀 首次发布 API 反代版本
- 🔌 内置高性能 Rust 反代服务器
- 🔄 智能账号轮询与故障转移
- 🧠 完美支持 OpenAI 协议
- 🖼️ 支持 Gemini Imagen 3 图像生成

---

## 📄 版权说明

Copyright © 2025 Antigravity. 
本项目采用 **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)** 协议许可。
仅供个人学习研究使用，禁止用于商业用途。
