Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "  Yehia Ahmed - Portfolio" -ForegroundColor Cyan
Write-Host "  Starting development server..." -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $PSScriptRoot

if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] node_modules not found. Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] npm install failed." -ForegroundColor Red
        pause
        exit $LASTEXITCODE
    }
}

Write-Host "[INFO] Opening browser at http://localhost:3000..." -ForegroundColor Green
Start-Process "http://localhost:3000"

Write-Host "[INFO] Running: npm run dev" -ForegroundColor Green
Write-Host ""
npm run dev
