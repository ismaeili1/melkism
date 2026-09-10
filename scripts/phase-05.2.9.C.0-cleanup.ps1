# ============================================================
# MELKISM v38.20.15
# PHASE 05.2.9.C.0
#
# REPOSITORY CLEANUP & SOURCE ISOLATION
#
# SAFE CLEANUP
# NO SOURCE DELETION
#
# ============================================================


$ErrorActionPreference="Stop"



$Root="C:\Projects\melkism"

$Archive="C:\MELKISM-BACKUPS\CLEANUP-v38.20.15"



Set-Location $Root



Write-Host ""
Write-Host "================================================"
Write-Host " MELKISM PHASE 05.2.9.C.0 CLEANUP"
Write-Host "================================================"
Write-Host ""



# ------------------------------------------------------------
# 1. Verify Project
# ------------------------------------------------------------


Write-Host "[1/10] Verify MELKISM"



if(!(Test-Path ".git")){

throw "Git repository not detected"

}


if(!(Test-Path "package.json")){

throw "package.json missing"

}



Write-Host "PASS"



# ------------------------------------------------------------
# 2. Prepare archive
# ------------------------------------------------------------


Write-Host "[2/10] Prepare external archive"



New-Item `
-ItemType Directory `
-Path $Archive `
-Force | Out-Null



Write-Host "PASS"



# ------------------------------------------------------------
# 3. Move backup files
# ------------------------------------------------------------


Write-Host "[3/10] Move backup artifacts"



$BackupPatterns=@(
"*.backup",
"*.bak",
"*.before-*",
"*.patch*.backup"
)



foreach($pattern in $BackupPatterns){


Get-ChildItem `
-Path $Root `
-Recurse `
-File `
-Filter $pattern `
-ErrorAction SilentlyContinue |
ForEach-Object {


$target =
Join-Path `
$Archive `
$_.Name



Move-Item `
$_.FullName `
$target `
-Force


}


}



Write-Host "PASS"



# ------------------------------------------------------------
# 4. Move temp files
# ------------------------------------------------------------


Write-Host "[4/10] Move temporary files"



Get-ChildItem `
-Path $Root `
-Recurse `
-File `
-ErrorAction SilentlyContinue |
Where-Object {

$_.Name -match "^temp-" -or
$_.Name -match "-temp-" -or
$_.Name -match "\.tmp$"

} |
ForEach-Object {


Move-Item `
$_.FullName `
$Archive `
-Force


}



Write-Host "PASS"



# ------------------------------------------------------------
# 5. Move reports
# ------------------------------------------------------------


Write-Host "[5/10] Archive reports"



$ReportPatterns=@(
"lint-*.json",
"*.log"
)



foreach($pattern in $ReportPatterns){


Get-ChildItem `
-Path $Root `
-Recurse `
-File `
-Filter $pattern `
-ErrorAction SilentlyContinue |
ForEach-Object {


Move-Item `
$_.FullName `
$Archive `
-Force


}



}



Write-Host "PASS"



# ------------------------------------------------------------
# 6. Protect gitignore
# ------------------------------------------------------------


Write-Host "[6/10] Update .gitignore"



$GitIgnore=".gitignore"



if(!(Test-Path $GitIgnore)){


New-Item `
-Path $GitIgnore `
-ItemType File `
-Force | Out-Null


}



$Ignore=@"

# MELKISM BUILD
.next/
node_modules/

# BACKUPS
backups/
*.backup
*.bak

# TEMP
temp-*
*.tmp

# REPORTS
*.log
lint-*.json

# ENV
.env
.env.*

"@



Add-Content `
-Path $GitIgnore `
-Value $Ignore



Write-Host "PASS"



# ------------------------------------------------------------
# 7. Clean Next
# ------------------------------------------------------------


Write-Host "[7/10] Clean Next cache"



if(Test-Path ".next"){


Remove-Item `
".next" `
-Recurse `
-Force


}



Write-Host "PASS"



# ------------------------------------------------------------
# 8. TypeScript
# ------------------------------------------------------------


Write-Host "[8/10] TypeScript validation"



npx tsc --noEmit


if($LASTEXITCODE -ne 0){

throw "TypeScript failed"

}



Write-Host "PASS"



# ------------------------------------------------------------
# 9. Lint
# ------------------------------------------------------------


Write-Host "[9/10] ESLint validation"



npm run lint


if($LASTEXITCODE -ne 0){

throw "Lint failed"

}



Write-Host "PASS"



# ------------------------------------------------------------
# 10. Status
# ------------------------------------------------------------


Write-Host "[10/10] Final status"



git status --short



Write-Host ""

Write-Host "================================================"
Write-Host " CLEANUP COMPLETE"
Write-Host " Archive:"
Write-Host $Archive
Write-Host "================================================"
