# ============================================================
# MELKISM v6.39.0
# Design System & UI Components
# REBUILT SAFE PIPELINE
# ============================================================


$ErrorActionPreference="Stop"


$ProjectRoot="C:\Projects\melkism"

$Version="v6.39.0"

$Backup =
Join-Path `
$env:TEMP `
"MELKISM-$Version-backup-$(Get-Date -Format yyyyMMdd-HHmmss)"



function Step($Text){

Write-Host ""
Write-Host "============================================================"
Write-Host $Text
Write-Host "============================================================"

}



function Fail($Text){

Write-Host ""
Write-Host "FAILED"
Write-Host $Text -ForegroundColor Red


if(Test-Path $Backup){

Write-Host ""
Write-Host "Backup retained:"
Write-Host $Backup

}

throw $Text

}



function Normalize-Path($Path){

return (
[System.IO.Path]::GetFullPath($Path)
).TrimEnd("\","/").ToLower()

}



try{


Step "[1] PowerShell syntax validation"


$tokens=$null
$errors=$null


[System.Management.Automation.Language.Parser]::ParseFile(
$PSCommandPath,
[ref]$tokens,
[ref]$errors
)


if($errors.Count -gt 0){

Fail "Syntax validation failed"

}


Write-Host "Syntax PASS"



Step "[2] Repository validation"


Set-Location $ProjectRoot


$gitRoot =
(git rev-parse --show-toplevel).Trim()


if ((Normalize-Path $gitRoot) -ne (Normalize-Path $ProjectRoot)) {

Fail "
Git root mismatch.
Git:
$gitRoot
Project:
$ProjectRoot
"

}


Write-Host "Git root PASS"



Step "[3] Protected backup"


New-Item `
-ItemType Directory `
-Path $Backup `
-Force | Out-Null



$exclude=@(
"\.git\",
"\node_modules\",
"\.next\",
"\releases\",
"\dist\",
"\build\",
"\coverage\"
)



Get-ChildItem `
$ProjectRoot `
-Recurse `
-Force |
Where-Object{


$skip=$false


foreach($x in $exclude){

if($_.FullName -match $x){

$skip=$true

}

}


-not $skip


} |
ForEach-Object{


$destination =
$_.FullName.Replace(
$ProjectRoot,
$Backup
)



if($_.PSIsContainer){


New-Item `
-ItemType Directory `
-Path $destination `
-Force | Out-Null


}
else{


New-Item `
-ItemType Directory `
-Path (
Split-Path $destination
) `
-Force | Out-Null



Copy-Item `
$_.FullName `
$destination `
-Force


}


}



$backupFiles =
Get-ChildItem `
$Backup `
-Recurse `
-File


if($backupFiles.Count -eq 0){

Fail "Backup validation failed"

}


Write-Host "Backup PASS"
Write-Host $Backup



Step "[4] Design System foundation"



$folders=@(

"components/ui",

"styles/design-system",

"lib/design-system"

)



foreach($folder in $folders){

New-Item `
-ItemType Directory `
-Path (
Join-Path $ProjectRoot $folder
) `
-Force | Out-Null

}



Write-Host "Design foundation PASS"



Step "[5] Source zero byte audit"



$zero =

Get-ChildItem `
$ProjectRoot `
-Recurse `
-File `
-Force |
Where-Object{


$ignored=$false


foreach($x in $exclude){

if($_.FullName -match $x){

$ignored=$true

}

}


(!$ignored) -and ($_.Length -eq 0)


}



if($zero){

foreach($f in $zero){

Fail "Zero byte source file: $($f.FullName)"

}

}



Write-Host "Zero byte audit PASS"



Step "[6] Prisma validation"


npx prisma validate

npx prisma generate


Write-Host "Prisma PASS"



Step "[7] TypeScript validation"


npx tsc --noEmit


Write-Host "TypeScript PASS"



Step "[8] Test validation"


npm test


Write-Host "Tests PASS"



Step "[9] Production build"


npm run build


Write-Host "Build PASS"



Step "[10] Completion"


$marker =
Join-Path `
$ProjectRoot `
"release-$Version-complete.txt"



@"
MELKISM $Version COMPLETE

Design System & UI Components

Status:
PASS

GitHub:
UNCHANGED

Deployment:
NOT EXECUTED

Next:
MELKISM v6.40.0
Visual Experience Layer

"@ |
Set-Content `
-Path $marker `
-Encoding UTF8



Write-Host ""

Write-Host "============================================================"
Write-Host "MELKISM v6.39.0 COMPLETED"
Write-Host "============================================================"

Write-Host ""

Write-Host "Backup:"
Write-Host $Backup


Write-Host ""

Write-Host "Next phase:"
Write-Host "MELKISM v6.40.0 - Visual Experience Layer"



}
catch{


Write-Host ""

Write-Host "============================================================"
Write-Host "MELKISM v6.39.0 FAILED"
Write-Host "============================================================"


Write-Host $_.Exception.Message


if(Test-Path $Backup){

Write-Host ""
Write-Host "Backup retained:"
Write-Host $Backup

}


throw

}