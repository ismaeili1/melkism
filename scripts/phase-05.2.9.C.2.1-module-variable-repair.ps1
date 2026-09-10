# ============================================================
# MELKISM v38.20.16
# PHASE 05.2.9.C.2.1
# INTELLIGENCE MODULE VARIABLE REPAIR
# ============================================================


$ErrorActionPreference="Stop"


$Root="C:\Projects\melkism"

Set-Location $Root



$file="lib/intelligence/orchestration/intelligence.module.resolver.ts"


$path=Join-Path $Root $file



if(!(Test-Path $path)){

throw "Target file not found"

}



Write-Host ""
Write-Host "=============================================="
Write-Host "MODULE VARIABLE REPAIR"
Write-Host "=============================================="



$backup="C:\MELKISM-BACKUPS\phase-05.2.9.C.2.1"


New-Item `
-ItemType Directory `
-Path $backup `
-Force | Out-Null



Copy-Item `
$path `
$backup `
-Force



Write-Host "[1/4] Backup PASS"



$content=
Get-Content `
$path `
-Raw



# Rename local variable named module
# Preserve imports and contracts


$content=$content -replace '\bmodule\b','intelligenceModule'



[System.IO.File]::WriteAllText(
$path,
$content,
[System.Text.UTF8Encoding]::new($false)
)



Write-Host "[2/4] Rename PASS"



Write-Host "[3/4] TypeScript"

npx tsc --noEmit


if($LASTEXITCODE -ne 0){

throw "TypeScript failed"

}



Write-Host "[4/4] ESLint"


npm run lint



if($LASTEXITCODE -ne 0){

throw "Lint failed"

}



Write-Host ""
Write-Host "=============================================="
Write-Host "PHASE 05.2.9.C.2.1 COMPLETE"
Write-Host "=============================================="
