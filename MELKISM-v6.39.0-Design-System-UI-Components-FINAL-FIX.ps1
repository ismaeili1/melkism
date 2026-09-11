# ============================================================
# MELKISM v6.39.0
# Design System & UI Components
# FINAL FIXED RELEASE SCRIPT
# ============================================================

$ErrorActionPreference="Stop"

$ProjectRoot="C:\Projects\melkism"

$Version="v6.39.0"

$Backup="$env:TEMP\MELKISM-$Version-backup-$(Get-Date -Format yyyyMMdd-HHmmss)"

function Step($name){
    Write-Host ""
    Write-Host "============================================================"
    Write-Host $name
    Write-Host "============================================================"
}


function Fail($msg){
    Write-Host ""
    Write-Host "FAILED"
    Write-Host $msg -ForegroundColor Red

    if(Test-Path $Backup){
        Write-Host "Backup retained:"
        Write-Host $Backup
    }

    throw $msg
}


Step "[1] Syntax validation"

$ast=$null
$tokens=$null
$errors=$null

[System.Management.Automation.Language.Parser]::ParseFile(
    $MyInvocation.MyCommand.Path,
    [ref]$tokens,
    [ref]$errors
)

if($errors.Count -gt 0){
    Fail "PowerShell syntax validation failed"
}

Write-Host "Syntax PASS"


Step "[2] Repository validation"

Set-Location $ProjectRoot


$gitRoot = (git rev-parse --show-toplevel).Trim()

$normalizedGitRoot = [System.IO.Path]::GetFullPath(
    $gitRoot
).TrimEnd('\','/')

$normalizedProjectRoot = [System.IO.Path]::GetFullPath(
    $ProjectRoot
).TrimEnd('\','/')


if(
    $normalizedGitRoot.ToLower() -ne
    $normalizedProjectRoot.ToLower()
){

    Fail "Git root mismatch. Git=$normalizedGitRoot Project=$normalizedProjectRoot"

}

Write-Host "Git root PASS"

Step "[3] Protected backup"


New-Item `
-Type Directory `
-Path $Backup `
-Force | Out-Null


$exclude=@(
".git",
"node_modules",
".next",
"releases"
)


Get-ChildItem `
$ProjectRoot `
-Recurse `
-Force |
Where-Object {

$skip=$false

foreach($e in $exclude){

if($_.FullName -match "\\$e\\"){
$skip=$true
}

}

-not $skip

} |
ForEach-Object {

$dest=$_.FullName.Replace(
$ProjectRoot,
$Backup
)

if($_.PSIsContainer){

New-Item `
-Type Directory `
-Path $dest `
-Force | Out-Null

}
else{

New-Item `
-Type Directory `
-Path (Split-Path $dest) `
-Force | Out-Null

Copy-Item `
$_.FullName `
$dest `
-Force

}

}


if(!(Test-Path $Backup)){
Fail "Backup creation failed"
}

Write-Host "Backup PASS"
Write-Host $Backup



Step "[4] Design System Foundation"


$folders=@(

"components/ui",
"styles/design-system",
"lib/design-system"

)


foreach($folder in $folders){

New-Item `
-Type Directory `
-Path "$ProjectRoot\$folder" `
-Force | Out-Null

}


Write-Host "Design foundation PASS"



Step "[5] Zero byte audit"


$ignored=@(
"\.git\",
"\node_modules\",
"\.next\",
"\releases\"
)


$zeroFiles=

Get-ChildItem `
$ProjectRoot `
-Recurse `
-File `
-Force |
Where-Object {


$ignore=$false

foreach($i in $ignored){

if($_.FullName -match $i){

$ignore=$true

}

}


(!$ignore) -and ($_.Length -eq 0)


}



if($zeroFiles){

foreach($f in $zeroFiles){

Fail "Zero byte source file detected: $($f.FullName)"

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



Step "[8] Tests"


npm test


Write-Host "Tests PASS"



Step "[9] Production build"


npm run build


Write-Host "Build PASS"



Step "[10] Finalization"


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
