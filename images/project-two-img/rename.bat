@echo off
setlocal enabledelayedexpansion
set i=1
for %%a in (*.jpg) do (
    set "num=00!i!"
    ren "%%a" "pj2-!num:~-2!.jpg"
    set /a i+=1
)
echo Done!
pause
