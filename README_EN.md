# Antigravity Tools (2API Edition) 🚀

<div align="center">
  <img src="public/icon.png" alt="Antigravity Logo" width="120" height="120" style="border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">

  <h3>Your Personal API Gateway for Infinite AI</h3>
  <p>Seamlessly proxy Gemini & Claude. OpenAI-Compatible. Privacy First.</p>
  
  <p>
    <a href="https://github.com/lbjlaq/Antigravity-Manager">
      <img src="https://img.shields.io/badge/version-v3.1.0-blue.svg" alt="Version">
    </a>
    <img src="https://img.shields.io/badge/Tauri-v2-orange?style=flat-square" alt="Tauri">
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square" alt="React">
    <img src="https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-lightgrey?style=flat-square" alt="License">
  </p>

  <p>
    <a href="#-Downloads">📥 Download</a> • 
    <a href="#-Features">✨ Account Manager</a> • 
    <a href="#-API-Proxy">🔌 API Proxy</a>
  </p>

  <p>
    <strong>🇺🇸 English</strong> | 
    <a href="./README_v2.md">🇨🇳 简体中文 (Legacy v2)</a>
  </p>
</div>

---

**Antigravity Tools 2.2** is a robust desktop application that transforms your desktop into a powerful **Local AI Gateway**.

It not only manages your Gemini / Claude accounts but also provides a **local OpenAI-compatible API server**. This allows you to use your browser-based Google/Claude sessions (`sid`, `__Secure-1PSID`, etc.) as standard API keys in any AI application (Cursor, Windsurf, LangChain, etc.).

> **Looking for the Account Manager Only version?**
> The v2.0 Account Manager documentation has been moved to [README_v2.md](./README_v2.md).

## 🔌 API Proxy: In-Depth

Antigravity's proxy is not just a forwarder, but a complete **Local AI Scheduler**.

<div align="center">
  <img src="docs/images/v3/proxy-settings.png" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</div>

### 1. 🔄 Smart Account Rotation
When you have multiple accounts:
- **Load Balancing**: Requests are distributed across healthy accounts.
- **Auto Failover**: If an account hits `429` (Rate Limit), the system **instantly** switches to the next account and retries.
- **Quota Awareness**: Exhausted accounts are automatically skipped.

### 2. 🧠 Perfect Context
Fully compatible with OpenAI's `messages` format. Multi-turn conversations work seamlessly in apps like Cursor, Windsurf, or NextChat.

<div align="center">
  <img src="docs/images/v3/proxy-chat-demo.png" width="80%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</div>

### 3. 🔗 Multi-Protocol Support (NEW!)

Supports both **OpenAI** and **Anthropic API** formats:
- **OpenAI Protocol**: `/v1/chat/completions` - Compatible with Cursor, Windsurf, NextChat, etc.
- **Anthropic Protocol**: `/v1/messages` - Native support for Claude Code CLI and other tools
- **Auto Conversion**: Automatically converts requests to Gemini format for perfect compatibility

<details>
<summary>📘 Claude Code CLI Setup Guide</summary>

#### Quick Setup

**Temporary Use** (run each time you open terminal):
```bash
export ANTHROPIC_API_KEY="sk-antigravity"  # Use the API Key from the app
export ANTHROPIC_BASE_URL="http://127.0.0.1:8045"
claude "write a quicksort algorithm"
```

**Permanent Setup** (one-time configuration):
```bash
# Edit config file (macOS/Linux)
nano ~/.zshrc

# Add these lines to the end
export ANTHROPIC_API_KEY="sk-antigravity"
export ANTHROPIC_BASE_URL="http://127.0.0.1:8045"

# Reload config
source ~/.zshrc
```

#### Usage Examples

```bash
# Basic conversation
claude "what is 1+1"

# Multi-turn conversation
claude "what did I just ask"

# Code generation
claude "write a quicksort in Python"
```

#### Notes

1. **Ensure Service Running**: Make sure Antigravity API Proxy is running before use
2. **API Key**: Copy the generated API Key from "API Proxy" page
3. **Port Configuration**: Default port is 8045, update `ANTHROPIC_BASE_URL` if changed

</details>

### 3. Connect

<div align="center">

| **Gemini 3 Pro Image (Imagen 3)** | **Claude 3.5 Sonnet (Thinking)** |
| :---: | :---: |
| <img src="docs/images/v3/gemini-image-edit.jpg" width="100%" style="border-radius: 8px;"> | <img src="docs/images/v3/claude-code-gen.png" width="100%" style="border-radius: 8px;"> |
| **NextChat - Image Gen/Edit** | **Windsurf/Cursor - Complex Coding** |

</div>

### 👥 Account Manager
- **Token Management**: Manage dozens of Gemini/Claude accounts.
- **Auto-Refresh**: Keeps your tokens alive automatically.
- **Quota Monitoring**: Real-time visualization of model quotas (Text & Image).
- **Account Switching**: One-click token injection into local Antigravity database for seamless switching.

### 🛡️ Privacy First
- **Local Storage**: All data inside `gui_config.json` and `antigravity.db` stays on your machine.
- **No Cloud**: We do not run any intermediary servers. Your data goes directly from your machine to Google/Anthropic.

## 🛠️ Technology Stack

| Component | Tech |
| :--- | :--- |
| **Core** | Rust (Tauri v2) |
| **API Server** | Axum (Rust) |
| **Frontend** | React + TailwindCSS |
| **Database** | SQLite + JSON |

## 📦 Usage

1. **Add Accounts**: Login via OAuth or paste tokens in the "Accounts" tab.
2. **Start Proxy**: Go to "API Proxy" tab and click **Start Service**.
3. **Connect**: 
   - Base URL: `http://localhost:8045/` (Some apps need `http://localhost:8045/v1`)
   - API Key: `sk-antigravity` (Any string)
   - Model: Select from the list below:

#### 📚 Supported Models

| Model ID | Description |
| :--- | :--- |
| **gemini-2.5-flash** | **Flash 2.5**. Extremely fast and cost-effective. |
| **gemini-2.5-flash-thinking** | **Flash Thinking**. Lightweight model with reasoning capabilities. |
| **gemini-3-pro-high** | **Gemini 3 Pro**. Google's strongest reasoning model. |
| **gemini-3-pro-low** | **Gemini 3 Pro (Low)**. Lower quota consumption version. |
| **gemini-3-pro-image** | **Imagen 3**. Dedicated image generation model. |
| **claude-sonnet-4-5** | **Claude 3.5 Sonnet**. Top choice for coding and logic. |
| **claude-sonnet-4-5-thinking** | **Sonnet Thinking**. Sonnet with chain-of-thought enabled. |
| **claude-opus-4-5-thinking** | **Opus Thinking**. Claude's most powerful thinking model. |

> 💡 **Tip**: The proxy supports pass-through for all official Google/Anthropic model IDs.

## 🔄 Changelog

### v3.0.2 (2025-12-17)

#### 🔧 API Proxy Optimizations
- **403 Error Smart Handling**: Instantly identifies and marks accounts with 403 Forbidden, no more retries
  - Auto-marks as "forbidden" status
  - Auto-skips 403 accounts during batch refresh
  - Saves 3+ seconds response time

- **Claude CLI Response Optimization**: Fixed empty response and JSON format issues
  - Increased `maxOutputTokens` from 8096 to 16384 for longer responses
  - Removed `toolConfig` to avoid MALFORMED_FUNCTION_CALL errors
  - Added detailed diagnostic logs recording raw Gemini responses

- **Logging System Enhancement**:
  - Records full candidates data for empty text responses
  - Increased log display length from 60 to 100 characters
  - Distinguished log levels for empty vs normal responses

#### 🐛 Bug Fixes
- **OAuth Environment Check Optimization**: Simplified Tauri environment check, only validates `invoke` function availability
  - Removed `window.__TAURI__` check
  - Avoids false positives in certain Tauri versions

### v3.0.1 (2025-12-17)

#### 🔧 Bug Fixes
- **macOS Process Termination Refactor (Critical)**: Completely resolved the "Unexpected Termination" dialog issue during account switching on macOS. We rewrote the process detection algorithm to intelligently identify the main process based on process arguments and characteristics (filtering out Helpers), enabling a 100% graceful exit via targeted SIGTERM, while maintaining a safety fallback for force cleanup.
- **Image Generation Optimization**: Added support for `gemini-3-pro-image` and various aspect ratio suffixes (e.g., `-1:1`, `-16:9`). New models: `gemini-3-pro-image-4x3`, `gemini-3-pro-image-3x4`, `gemini-3-pro-image-4k`, `gemini-3-pro-image-16x9-4k`
  - Parameter support: `size` now accepts `1024x768` (4:3) and `768x1024` (3:4)
  - 4K HD support: via `-4k` suffix or `"quality": "hd"` parameter

### v3.0.0 (2025-12-16)
- 🚀 Initial API Proxy release
- 🔌 Built-in high-performance Rust proxy server
- 🔄 Smart account rotation and auto-failover
- 🧠 Full OpenAI protocol compatibility
- 🖼️ Gemini Imagen 3 image generation support

---

## 📄 License
CC BY-NC-SA 4.0
