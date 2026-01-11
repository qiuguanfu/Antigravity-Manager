@echo off
echo Antigravity icin Claude CLI baslatiliyor...
echo.

set ANTHROPIC_API_KEY=sk-antigravity
set ANTHROPIC_BASE_URL=http://127.0.0.1:8045

echo Balanti Adresi: %ANTHROPIC_BASE_URL%
echo API Anahtari: %ANTHROPIC_API_KEY%
echo.
echo Claude Code calistiriliyor...
echo.

claude
