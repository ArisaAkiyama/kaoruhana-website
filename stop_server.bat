@echo off
echo ===================================================
echo PERINGATAN: Script ini akan mematikan SEMUA proses Node.js
echo Gunakan ini jika Anda ingin mematikan server secara paksa.
echo ===================================================
pause
taskkill /F /IM node.exe
echo Semua proses Node.js telah dihentikan.
pause
