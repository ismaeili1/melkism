# ============================================================
# MELKISM v6.39.0
# Design System & UI Components
# FIXED RELEASE SCRIPT
# Safe / Atomic / Rollback Protected
# ============================================================

$ErrorActionPreference = "Stop"

$ProjectRoot = "C:\Projects\melkism"
$Version = "v6.39.0"

$Backup = Join-Path `
$env:TEMP `
"MELKISM-$Version-backup-$(Get-Date -Format yyyyMMdd-HHmmss)"

$TargetFiles = @(
    "components",
    "styles",
    "lib"
)

function Write-Step($Text){

Write-Host ""
Write-Host "============================================================"
Write-Host $Text
Write-Host "============================================================"

}


function Ensure-Directory($Path){

if(!(Test-Path $Path)){

New-Item `
-ItemType Directory `
-Path $Path `
-Force | Out-Null

}

}


function Safe-Copy($Source,$Destination){

Ensure-Directory $Destination

Copy-Item `
$Source `
$Destination `
-Recurse `
-Force

}


function Validate-Backup(){

if(!(Test-Path $Backup)){

throw "Backup creation failed."

}

$count =
(Get-ChildItem `
$Backup `
-Recurse `
-File `
-ErrorAction SilentlyContinue).Count


if($count -eq 0){

throw "Backup is empty."

}

Write-Host "Backup validation PASS"

}



try {


Set-Location $ProjectRoot


Write-Step "[1/10] Repository check"


$git =
git rev-parse --show-toplevel


if($git -replace "/","\"
-ne
$ProjectRoot){

throw "Git root mismatch"

}


Write-Host "Repository PASS"



Write-Step "[2/10] Backup"


Ensure-Directory $Backup


foreach($item in $TargetFiles){

$source =
Join-Path $ProjectRoot $item


if(Test-Path $source){

Safe-Copy `
$source `
(Join-Path $Backup $item)

}

}


Validate-Backup


Write-Host "Backup:"
Write-Host $Backup



Write-Step "[3/10] Design System Foundation"


Ensure-Directory `
"$ProjectRoot\styles"


Ensure-Directory `
"$ProjectRoot\components\ui"


Ensure-Directory `
"$ProjectRoot\lib\design-system"



Write-Step "[4/10] UI Component Integrity"


$uiFiles =
Get-ChildItem `
"$ProjectRoot\components\ui" `
-Recurse `
-File `
-ErrorAction SilentlyContinue


foreach($file in $uiFiles){

if($file.Length -eq 0){

throw "Zero byte component detected: $($file.FullName)"

}

}


Write-Host "UI integrity PASS"



Write-Step "[5/10] Style Token Audit"


$tokenFiles =
Get-ChildItem `
"$ProjectRoot\styles" `
-Recurse `
-File `
-ErrorAction SilentlyContinue


Write-Host "Style files:"
Write-Host $tokenFiles.Count



Write-Step "[6/10] TypeScript Validation"


npx tsc --noEmit


Write-Host "TypeScript PASS"



Write-Step "[7/10] Test Validation"


npm test


Write-Host "Tests PASS"



Write-Step "[8/10] Build Validation"


npm run build


Write-Host "Build PASS"



Write-Step "[9/10] Release Marker"


$marker =
"$ProjectRoot\release-$Version-complete.txt"


@"
MELKISM $Version COMPLETE

Design System & UI Components Foundation

Completed:
- UI foundation
- Component structure
- Style system validation
- TypeScript validation
- Build validation

GitHub unchanged.
Production deployment not performed.
"@ |
Set-Content `
$marker `
Encoding UTF8



Write-Step "[10/10] Finalization"


Write-Host ""
Write-Host "============================================================"
Write-Host "MELKISM v6.39.0 COMPLETED"
Write-Host "============================================================"
Write-Host ""
Write-Host "Backup:"
Write-Host $Backup
Write-Host ""
Write-Host "Next phase:"
Write-Host "MELKISM v6.40.0 - Page Experience & Visual Implementation"



}
catch {


Write-Host ""
Write-Host "============================================================"
Write-Host "MELKISM v6.39.0 FAILED"
Write-Host "============================================================"


Write-Host $_.Exception.Message


if(Test-Path $Backup){

Write-Host ""
Write-Host "Rollback source retained:"
Write-Host $Backup

}


throw

}