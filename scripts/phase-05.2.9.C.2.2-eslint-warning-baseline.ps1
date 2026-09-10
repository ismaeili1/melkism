# ============================================================
# MELKISM v38.20.16
# PHASE 05.2.9.C.2.2
#
# ESLINT WARNING BASELINE LOCK
#
# SAFE QUALITY GOVERNANCE
# ============================================================


$ErrorActionPreference="Stop"


$Root="C:\Projects\melkism"


Set-Location $Root



Write-Host ""
Write-Host "=============================================="
Write-Host " ESLINT WARNING BASELINE LOCK"
Write-Host "=============================================="



$ReportDir="docs/eslint-baseline"


New-Item `
-ItemType Directory `
-Path $ReportDir `
-Force | Out-Null



$JsonReport="$ReportDir\eslint-warning-baseline.json"

$TextReport="$ReportDir\eslint-warning-baseline.txt"



# ------------------------------------------------------------
# 1. ESLint Snapshot
# ------------------------------------------------------------


Write-Host "[1/5] Generate ESLint Snapshot"



npx eslint . `
--format json `
--output-file $JsonReport



if($LASTEXITCODE -ne 0){

throw "ESLint execution failed"

}



Write-Host "PASS"



# ------------------------------------------------------------
# 2. Analyze warnings
# ------------------------------------------------------------


Write-Host "[2/5] Analyze warnings"



$data =
Get-Content `
$JsonReport `
-Raw |
ConvertFrom-Json



$warnings=0

$errors=0



foreach($file in $data){

foreach($msg in $file.messages){


if($msg.severity -eq 1){

$warnings++

}


if($msg.severity -eq 2){

$errors++

}


}

}



$content=@"

MELKISM ESLINT BASELINE

Date:
$(Get-Date)

Warnings:
$warnings

Errors:
$errors


Policy:

- Existing warnings are baseline.
- New errors are blocked.
- ESLint rules remain active.
- Type safety remains enforced.

"@



Set-Content `
-Path $TextReport `
-Value $content `
-Encoding UTF8



Write-Host "Warnings:"
Write-Host $warnings

Write-Host "Errors:"
Write-Host $errors



if($errors -ne 0){

throw "ESLint errors detected"

}



Write-Host "PASS"



# ------------------------------------------------------------
# 3. TypeScript
# ------------------------------------------------------------


Write-Host "[3/5] TypeScript validation"



npx tsc --noEmit



if($LASTEXITCODE -ne 0){

throw "TypeScript failed"

}



Write-Host "PASS"



# ------------------------------------------------------------
# 4. Git status
# ------------------------------------------------------------


Write-Host "[4/5] Git status"


git status --short



Write-Host "PASS"



# ------------------------------------------------------------
# 5. Complete
# ------------------------------------------------------------


Write-Host "[5/5] COMPLETE"


Write-Host ""
Write-Host "=============================================="
Write-Host " ESLINT BASELINE LOCK COMPLETE"
Write-Host "=============================================="

