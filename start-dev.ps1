# NutriVision - Fast Dev Server Starter (PowerShell)
# This script automatically starts the Vite development server

Write-Host ""
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "        🚀 NutriVision Dev Server Starter" -ForegroundColor Green
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host ""

# Check if npm is installed
try {
    npm --version | Out-Null
} catch {
    Write-Host "❌ ERROR: npm is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "⏳ Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ ERROR: Failed to install dependencies" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
}

# Start the dev server
Write-Host ""
Write-Host "✅ Starting development server..." -ForegroundColor Green
Write-Host ""
Write-Host "📝 The app will open at: http://localhost:5173" -ForegroundColor Cyan
Write-Host "🔥 Hot reload is enabled - changes appear instantly" -ForegroundColor Cyan
Write-Host "🛑 Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

npm run dev

Read-Host "Press Enter to exit"
