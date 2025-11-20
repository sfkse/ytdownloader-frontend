@echo off
echo YouTube Downloader - On Yuz Kurulumu
echo =====================================
echo.

REM Check Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo HATA: Node.js bulunamadi.
    echo Lutfen Node.js 18+ kurun: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js bulundu.

REM Check yarn or npm
where yarn >nul 2>&1
if errorlevel 1 (
    where npm >nul 2>&1
    if errorlevel 1 (
        echo HATA: Ne yarn ne de npm bulunamadi
        pause
        exit /b 1
    )
    set PACKAGE_MANAGER=npm
    echo npm bulundu
) else (
    set PACKAGE_MANAGER=yarn
    echo Yarn bulundu
)

REM Install dependencies
echo Bagimliliklari kuruluyor...
if "%PACKAGE_MANAGER%"=="yarn" (
    yarn install
) else (
    npm install
)

REM Create .env.local if it doesn't exist
if not exist ".env.local" (
    echo .env.local dosyasi olusturuluyor...
    echo NEXT_PUBLIC_API_URL=http://127.0.0.1:8080 > .env.local
    echo .env.local olusturuldu
)

echo.
echo Kurulum tamamlandi!
echo.
echo Baslatmak icin start.bat dosyasina cift tiklayin
echo.
pause

