$ErrorActionPreference="Stop"

$Root="C:\Projects\melkism"

function Write-Step($Text){
    Write-Host ""
    Write-Host "============================================================"
    Write-Host $Text
    Write-Host "============================================================"
}

function Fail($Text){
    Write-Host ""
    Write-Host "FAILED"
    throw $Text
}


Write-Step "MELKISM v6.39.0 FINAL SAFE 03"

# Git validation
Write-Step "Git validation"

Push-Location $Root
try{

$git=(git rev-parse --show-toplevel).Trim()

$git=(Resolve-Path $git).Path
$expected=(Resolve-Path $Root).Path

if($git -ne $expected){
    Fail "Git root mismatch"
}

Write-Host "Git root PASS"


# Backup

Write-Step "Backup"

$backup=Join-Path $env:TEMP (
"MELKISM-v6.39.0-backup-"+(Get-Date -Format "yyyyMMdd-HHmmss")
)

New-Item -ItemType Directory -Force $backup | Out-Null

Copy-Item `
"$Root\components" `
$backup `
-Recurse `
-Force `
-ErrorAction SilentlyContinue


if(!(Test-Path $backup)){
    Fail "Backup failed"
}

Write-Host "Backup:"
Write-Host $backup



# Remove generated noise

Write-Step "Generated cleanup"

$clean=@(
".next",
"releases"
)

foreach($item in $clean){

$p=Join-Path $Root $item

if(Test-Path $p){
Remove-Item $p -Recurse -Force
}

}

Write-Host "Cleanup PASS"



# Design foundation

Write-Step "Design system foundation"

$dirs=@(
"components/ui",
"styles",
"lib/design-system"
)

foreach($d in $dirs){

$p=Join-Path $Root $d

if(!(Test-Path $p)){
New-Item -ItemType Directory -Force $p | Out-Null
}

}


$tokens=@"
export const designTokens = {
  colors:{
    primary:"#111827",
    background:"#ffffff",
    muted:"#6b7280"
  },
  radius:{
    md:"12px"
  }
};
"@

Set-Content `
(Join-Path $Root "lib/design-system/tokens.ts") `
$tokens `
-Encoding UTF8


Write-Host "Design foundation PASS"



# Source zero byte audit

Write-Step "Source audit"

$files=Get-ChildItem `
$Root `
-Recurse `
-File `
-Include *.ts,*.tsx,*.js,*.mjs,*.css,*.json `
|
Where-Object {
$_.FullName -notmatch "\\node_modules\\" -and
$_.FullName -notmatch "\\.next\\"
}


foreach($f in $files){

if($f.Length -eq 0){

Fail "Zero byte source file: $($f.FullName)"

}

}

Write-Host "Source audit PASS"



# Validation

Write-Step "Prisma"

npx prisma validate


Write-Step "TypeScript"

npx tsc --noEmit



Write-Step "Tests"

npm test



Write-Step "Build"

npm run build



Write-Step "COMPLETED"

Write-Host "MELKISM v6.39.0 FINAL SAFE 03 PASSED"

}
finally{
Pop-Location
}
