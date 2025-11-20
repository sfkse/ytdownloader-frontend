@echo off
cd /d "%~dp0"

if not exist "node_modules" (
    echo HATA: Bagimliliklar kurulmamis. Lutfen install.bat dosyasini calistirin
    pause
    exit /b 1
)

REM Check for package manager
where yarn >nul 2>&1
if errorlevel 1 (
    where npm >nul 2>&1
    if errorlevel 1 (
        echo HATA: Ne yarn ne de npm bulunamadi
        pause
        exit /b 1
    )
    set PACKAGE_MANAGER=npm
) else (
    set PACKAGE_MANAGER=yarn
)

echo YouTube Downloader On Yuz baslatiliyor...
echo On yuz http://localhost:3001 adresinde acilacak
echo Arka plan servisinin calistigindan emin olun: http://localhost:8080
echo Durdurmak icin Ctrl+C tuslarina basin
echo.

if "%PACKAGE_MANAGER%"=="yarn" (
    yarn dev
) else (
    npm run dev
)

