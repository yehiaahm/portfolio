@echo off
title Yehia Ahmed Portfolio - Dev Server
cd /d "%~dp0"

echo ===================================================
echo   Yehia Ahmed - Portfolio
echo   Starting development server...
echo ===================================================
echo.

if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install failed.
        pause
        exit /b %errorlevel%
    )
)

echo [INFO] Opening browser at http://localhost:3000...
start http://localhost:3000

echo [INFO] Running: npm run dev
echo.
call npm run dev

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] An error occurred while running the project.
    pause
)
